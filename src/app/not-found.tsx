import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/images/logo.svg" alt="Not found" height={48} width={48} />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <Link
          href="/"
          className="text-lg text-red-500 text-decoration-line: underline"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
