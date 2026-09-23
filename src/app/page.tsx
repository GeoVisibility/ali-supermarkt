import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import CategoryGrid from "@/components/CategoryGrid";
import HalalMeat from "@/components/HalalMeat";
import FreshProduce from "@/components/FreshProduce";
import Offers from "@/components/Offers";
import InstagramSection from "@/components/InstagramSection";
import OurStory from "@/components/OurStory";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <WhyUs />
      <CategoryGrid />
      <HalalMeat />
      <FreshProduce />
      <Offers />
      <InstagramSection />
      <OurStory />
      <Location />
      <Faq />
      <Footer />
    </main>
  );
}
