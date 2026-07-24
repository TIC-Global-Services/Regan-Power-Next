"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-2 max-w-md text-center">
        We couldn&apos;t load this page&apos;s content.
      </p>
      {error.message ? (
        <p className="text-sm text-gray-400 mb-6 max-w-md text-center font-mono break-all">
          {error.message}
        </p>
      ) : (
        <div className="mb-6" />
      )}
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-5 py-2.5 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 border border-black rounded-md hover:bg-gray-100 transition"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
