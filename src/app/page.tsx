import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fffc00] h-screen">
      <NavBar />
      <Header />
    </main>
  );
}
