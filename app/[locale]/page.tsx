import Image from "next/image";

export default function Page() {
  return (
    <main>
      <h1>SwissKaz Travel</h1>
      <Image
        src="/logo.png"
        alt="SwissKaz Travel Logo"
        width={200}
        height={200}
      />
    </main>
  );
}
