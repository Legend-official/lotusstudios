import Head from "next/head";
import Header from "../components/header/Header";
import Banners from "../components/comps/Banners";
import Hero from "../components/page/Hero";
import WhyChooseUs from "../components/page/WhyChooseUs";
import BoostSales from "../components/page/BoostSales";
import Portfolio from "../components/page/Portfolio";
import Reviews from "../components/page/Reviews";
import BigBanner from "../components/page/BigBanner";

export default function Home() {
  return (
    <div className="bg-[#0d0d11] flex w-full flex-col items-center text-white">
      <Head>
        <title>Lotus Studios</title>
        <meta property="og:type" content="article"></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:image" content={"/logo.png"}></meta>
        <meta name="twitter:image" content={"/logo.png"}></meta>
        <meta
          property="og:description"
          content="Platinum-standard thread designs for a range of products and services!"
        ></meta>
        <meta
          property="twitter:description"
          content="Platinum-standard thread designs for a range of products and services!"
        ></meta>
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <div className="width_moniter">
        <Header />
        <Banners />
        <Hero />
        <WhyChooseUs />
        <BoostSales />
        <Portfolio />
        <Reviews />
        <BigBanner />
      </div>
    </div>
  );
}
