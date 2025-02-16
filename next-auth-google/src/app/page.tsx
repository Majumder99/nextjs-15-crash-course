"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
      <button
        onClick={() => router.push("/?modal=login")}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Login
      </button>
    </div>
  );
}
