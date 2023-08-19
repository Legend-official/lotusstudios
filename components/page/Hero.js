import React from "react";
import BgClipart from "../comps/BgClipart";
import TextWithLinesBelow from "../comps/TextWithLinesBelow";
import Button from "../comps/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-4 w-full flex flex-row items-end pb-16">
      <div className="lg:w-1/2 mt-14 px-10 ">
        <div className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl QanelasBold">
          Where Your Ideas
        </div>
        <div className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl QanelasBold flex flex-col md:justify-center md:flex-row items-center gap-4 mt-5">
          <div>Meet</div>
          <div>
            <TextWithLinesBelow text="Beauty" />
          </div>
          <div className="hidden sm:flex">
            <BgClipart link={"/ablackfaceguy.jpg"} />
          </div>
        </div>
        <div className="mt-14 font-semibold text-sm text-center sm:text-md md:text-lg md:w-[80%] sm:text-justify">
          Convey elegance, a professional front to your service or product with
          the most planned and intricate designs. With a variety and abundance
          of products
        </div>
        <div className="mt-14 flex flex-col sm:flex-row  gap-4 items-center">
          <Link href="https://discord.gg/lotusgfx">
            <Button text="Get Started" imageLink={"/svgs/paintbrush.svg"} />
          </Link>
          <Link href="#boostsales">
            <div className="select-none flex flex-row gap-2 items-center bg-[#0d0d11] duration-200 hover:bg-[#22222c8e] rounded-md py-4 w-[170px] justify-center text-sm font-semibold tracking-wide cursor-pointer">
              <div className="text-[#696a6e]">Learn more below</div>
              <div className="h-5 w-5">
                <Image
                  width={100}
                  height={100}
                  unoptimized="true"
                  alt="discord logo"
                  src={"/svgs/arrowbottom.svg"}
                  draggable="false"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block">
        <div className="flex justify-center relative">
          <Image
            className="relative bottom-[-70px] scale-[1.5]"
            alt="purple guy"
            height={418}
            width={418}
            draggable="false"
            src="/apurpleguy.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
