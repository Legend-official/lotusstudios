import React from "react";
import TextWithLinesBelow from "../comps/TextWithLinesBelow";
import BgClipart from "../comps/BgClipart";
import Link from "next/link";
import Image from "next/image";

const boxContent = [
  {
    emoji: "🏆",
    title: "200+ Vouches",
    text: "Over 200 deals from unique customers, showcasing a trustworthy and desired service.",
  },
  {
    emoji: "✨",
    title: "High Quality",
    text: "Informative and neatly displayed designs and infographics with evocative sales language.",
  },
  {
    emoji: "📆",
    title: "Past Experience",
    text: "2 years working in graphic design and an established record of deals and designs.",
  },
  {
    emoji: "⚡",
    title: "Sales Booster",
    text: "Attract customers and outshine your competitors with world class designs from us.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-[#16161c] relative z-10 rounded-md py-20 px-14 ">
      {/* text with icon links */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <div className="flex flex-row gap-2 text-5xl QanelasBold">
            <div>Why</div>
            <TextWithLinesBelow showLines={false} text="Choose" />
            <div>Us?</div>
          </div>
          <div className="mt-6 hidden md:flex">
            <BgClipart link={"/totorooooo.png"} />
          </div>
        </div>
        <div className="md:w-1/3 mt-5 md:mt-0 px-4 md:px-0">
          <div className="flex items-center md:items-start justify-center flex-col">
            <div className="text-[#696a6e] QanelasBold">Find Us On</div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2 md:gap-4">
              {/* Cracked Logo */}
              <div className="w-[200px]">
                <Link href="https://cracked.io/lotusdesign">
                  <Image
                    className="hover:opacity-70 duration-200 cursor-pointer select-none"
                    alt="cracked image"
                    src="/download_37.png"
                    width={666}
                    height={375}
                  />
                </Link>
              </div>
              {/* Ogu Logo */}
              <div className="w-[70px]">
                <Link href="https://flipd.gg/lotus">
                  <Image
                    className="hover:opacity-70 duration-200 cursor-pointer select-none"
                    alt="cracked image"
                    src="/download_38.png"
                    width={666}
                    height={375}
                  />
                </Link>
              </div>
              {/* Flipd Logo */}
              <div className="w-[70px]">
                <Link href="https://flipd.gg/lotus">
                  <Image
                    className="hover:opacity-70 duration-200 cursor-pointer select-none"
                    alt="cracked image"
                    src="/download_39.png"
                    width={666}
                    height={375}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 boxes */}
      <div className="mt-10">
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {boxContent?.map((item, index) => (
            <div
              key={index}
              className="group px-5 py-4 bg-[#24252d] duration-300 hover:bg-[#af5ffe] rounded-xl cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2 text-white text-2xl QanelasBold">
                <div className="bg-[#af5ffe] duration-300 group-hover:bg-white bg-clip-text text-transparent">
                  {item?.emoji}
                </div>
                <div className="text-[#af5ffe] group-hover:text-[white] duration-300">
                  {item?.title}
                </div>
              </div>
              <div className="group-hover:text-[#ffffff83] duration-300 text-white text-[13px] py-2">
                {`${item?.text}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
