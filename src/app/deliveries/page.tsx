"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const hallDisplayNames = (h: string) => h.replace(/([A-Z])/g, " $1").trim();

export default function DeliveriesPage() {
  const [halls, setHalls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/deliveries/halls")
      .then((res) => res.json())
      .then((data) => setHalls(data.halls ?? []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-12">
      <h1 className="text-3xl font-bold mb-6 text-black text-center">
        Today's Pending Deliveries
      </h1>
      {loading ? (
        <p className="text-center text-gray-600 py-12">Loading...</p>
      ) : halls.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          No pending deliveries for today.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {halls.map((hall) => (
            <button
              key={hall}
              className="shadow rounded-xl hover:shadow-lg transition bg-white border border-gray-300 p-7 flex items-center justify-center text-xl text-black font-bold cursor-pointer hover:bg-gray-100"
              onClick={() =>
                router.push(`/deliveries/${encodeURIComponent(hall)}`)
              }
            >
              {hallDisplayNames(hall)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
