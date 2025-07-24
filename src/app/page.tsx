"use client";
import { useRouter } from "next/navigation";
import { ShoppingBag, Truck, PackagePlus, Coins } from "lucide-react";

const SECTIONS = [
  {
    key: "sales",
    label: "Sales",
    description: "Order entry & sales management",
    icon: <ShoppingBag className="h-9 w-9 mb-2 text-black" />,
    href: "/sales",
  },
  {
    key: "admin",
    label: "Admin",
    description: "Inventory & products admin",
    icon: <PackagePlus className="h-9 w-9 mb-2 text-black" />,
    href: "/admin/products",
  },
  {
    key: "deliveries",
    label: "Deliveries",
    description: "Hall and delivery tracking",
    icon: <Truck className="h-9 w-9 mb-2 text-black" />,
    href: "/deliveries",
  },
  {
    key: "treasurer",
    label: "Treasurer",
    description: "Finance & records",
    icon: <Coins className="h-9 w-9 mb-2 text-black" />,
    href: "/treasurer",
  },
];

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-start bg-neutral-100 px-4 pt-6">
      <h1 className="text-4xl font-extrabold mb-4 text-black text-center tracking-tight">
        Dashboard
      </h1>
      <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-7">
        {SECTIONS.map((sec) => (
          <button
            key={sec.key}
            onClick={() => router.push(sec.href)}
            className="bg-white rounded-2xl border border-neutral-300 shadow hover:shadow-lg hover:border-black hover:bg-neutral-200 transition flex flex-col items-center p-8 cursor-pointer group min-h-[200px] text-black"
          >
            <div>{sec.icon}</div>
            <div className="text-2xl font-bold mb-1">{sec.label}</div>
            <div className="text-base text-neutral-500 group-hover:text-black transition text-center">
              {sec.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
