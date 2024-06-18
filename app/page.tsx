import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className=" h-screen w-full flex items-center justify-center">
      <Hero />
    </main>
  );
}
