import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import Banners from "../components/comps/Banners";
import Hero from "../components/page/Hero";
import WhyChooseUs from "../components/page/WhyChooseUs";
import BoostSales from "../components/page/BoostSales";

export default function Home() {
  return (
    <div className="bg-[#0d0d11] flex w-full flex-col items-center text-white">
      <div className="width_moniter">
        <Header />
      </div>
      <div className="width_moniter">
        <Banners />
      </div>
      <div className="width_moniter">
        <Hero />
      </div>
      <div className="width_moniter">
        <WhyChooseUs />
      </div>
      <div className="width_moniter">
        <BoostSales />
      </div>
    </div>
  );
}
