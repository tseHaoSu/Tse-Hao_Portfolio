"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-gray-400">Redirecting to home...</p>
    </div>
  );
}
