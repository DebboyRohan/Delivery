import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import type { Role } from "@/app/generated/prisma"; // Role = "admin" | "sales" | "delivery" | "treasurer"

const VALID_ROLES: Role[] = ["admin", "sales", "delivery", "treasurer"];
const DEFAULT_ROLE: Role = "delivery";

function isValidRole(val: any): val is Role {
  return VALID_ROLES.includes(val);
}

export async function getOrCreateUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;
  const clerkId = clerkUser.id;
  const email = clerkUser.emailAddresses?.[0]?.emailAddress;
  const name =
    clerkUser.fullName ||
    [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
    email;

  // Case-insensitive map, defaulting to "delivery"
  let roleRaw = (
    clerkUser.publicMetadata?.role as string | undefined
  )?.toLowerCase();
  let role: Role = isValidRole(roleRaw) ? (roleRaw as Role) : DEFAULT_ROLE;

  let dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (dbUser) {
    const needsUpdate =
      dbUser.name !== name || dbUser.email !== email || dbUser.role !== role;
    if (needsUpdate) {
      dbUser = await prisma.user.update({
        where: { clerkId },
        data: { name, email, role },
      });
    }
    return dbUser;
  }
  // Not found: create
  return await prisma.user.create({
    data: { clerkId, name, email, role },
  });
}
