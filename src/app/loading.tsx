import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Image
        src="/images/loader.gif"
        alt="Loading screen"
        height={150}
        width={150}
      />
    </div>
  );
}
