"use client";

export default function DeliveryLoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Simple Spinner */}
        <div className="w-12 h-12 border-3 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>

        {/* Loading Text */}
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );
}
