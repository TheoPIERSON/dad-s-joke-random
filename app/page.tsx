import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className=" h-screen w-full flex items-center justify-center">
        {" "}
        <Hero />
      </div>
    </main>
  );
}
