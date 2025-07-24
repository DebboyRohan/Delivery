"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DeliveryLoadingPage from "../loading";

// Convert camel-cased hall keys → “Nice Spaced Names”
const hallDisplayName = (h: string) => h.replace(/([A-Z])/g, " $1").trim();

export default function DeliveriesPage() {
  const [halls, setHalls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  /* ────────────────────────────────────────────────────────── */
  /* Fetch halls once on mount                                  */
  /* ────────────────────────────────────────────────────────── */
  useEffect(() => {
    fetch("/api/deliveries/halls")
      .then((res) => res.json())
      .then((data) => setHalls(data.halls ?? []))
      .finally(() => setLoading(false));
  }, []);

  /* ────────────────────────────────────────────────────────── */
  /* Loading state – just reuse the spinner page                */
  /* ────────────────────────────────────────────────────────── */
  if (loading) return <DeliveryLoadingPage />;

  /* ────────────────────────────────────────────────────────── */
  /* Empty state                                                */
  /* ────────────────────────────────────────────────────────── */
  if (halls.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Today's Pending Deliveries
        </h1>

        <p className="text-gray-500 mb-8">
          All orders have been completed for today.
        </p>

        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium"
        >
          ← Back
        </button>
      </div>
    );
  }

  /* ────────────────────────────────────────────────────────── */
  /* Normal state                                               */
  /* ────────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ===== Header / App-bar ===== */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <h1 className="text-lg font-semibold text-gray-900">
            Today's Pending Deliveries
          </h1>
        </div>
      </header>

      {/* ===== Grid of halls ===== */}
      <div className="px-4 pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {halls.map((hall) => (
            <button
              key={hall}
              onClick={() =>
                router.push(`/deliveries/${encodeURIComponent(hall)}`)
              }
              className="aspect-square rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center p-4
                         hover:shadow-md active:scale-[0.97] transition group"
            >
              <span className="text-xl font-semibold text-gray-800 group-hover:text-black">
                {hallDisplayName(hall)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
