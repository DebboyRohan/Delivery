import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher(["/deliveries(.*)", "/sign-in(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isTreasurerRoute = createRouteMatcher(["/treasurer(.*)"]);
const isSalesRoute = createRouteMatcher(["/sales(.*)"]);
export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();
  if (!isPublicRoute(req) && !userId) {
    auth.protect();
  }
  const role = sessionClaims?.metadata?.role as string;
  if (isAdminRoute(req) && role !== "admin") {
    return NextResponse.redirect("/");
  }
  if (isTreasurerRoute(req) && !["admin", "treasurer"].includes(role)) {
    return NextResponse.redirect("/");
  }
  if (isSalesRoute(req) && !["sales", "admin"].includes(role)) {
    return NextResponse.redirect("/");
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
