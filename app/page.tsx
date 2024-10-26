import HeroSectionHome from "@/components/home-hero";
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
      </main>
    </>
  );
}
