import HeroSectionHome from "@/components/home-hero";
import Feature from "@/components/section-feuture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nezt",
  description: "webdev"
};

export default function Home() {
  return (
    <>
      <main>
        <HeroSectionHome />
        <Feature />
      </main>
    </>
  );
}
