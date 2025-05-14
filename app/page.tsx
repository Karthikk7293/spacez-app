import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-5 h-screen">
      <Link href="/partner" className="block text-gray-800 border rounded px-3 py-2 ">
        Partner Profile
      </Link>
      <Link href="/profile" className="block text-gray-800 border rounded px-3 py-2">
        User Profile
      </Link>
    </div>
  );
}
