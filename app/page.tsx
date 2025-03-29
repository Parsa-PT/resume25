import { Hero } from "@/components/Hero";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Stack } from "@/components/Stack";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <Stack/>
        <LogoAnimation/>
        <Portfolio/>
      </div>
  );
}
