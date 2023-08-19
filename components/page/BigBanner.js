import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigBanner = () => {
  return (
    <div id="contact" className="px-14 pb-14 select-none">
      <div className="w-full bg-[#af5ffe] flex flex-col sm:flex-row items-center justify-between rounded-xl py-6 pb-10 md:px-8 lg:px-24  ">
        <div className="text-5xl QanelasBold">
          <div className="flex flex-row items-center gap-3">
            <div>Lets</div>
            <div className="relative select-none w-fit">
              <div className="text-[#fff] purple_text_shadow">Create</div>
              {/* Lines Div */}
              <div className="absolute w-full bottom-[-10px] h-full">
                <div
                  className={`h-[5px] rounded-full w-full bg-[#fff] rotate-[2deg] absolute -bottom-[3%]`}
                ></div>
                <div
                  className={`h-[5px] rounded-full w-[80%] bg-[#fff] rotate-[-3deg] absolute -bottom-[20%] right-0`}
                ></div>
                <div
                  className={`h-[5px] rounded-full w-[60%] bg-[#fff] rotate-[2deg] absolute -bottom-[33%] right-[20%]`}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center sm:text-start">Perfection</div>
        </div>
        <div className="hidden lg:block w-[200px] h-[200px] -rotate-45 ml-14">
          <Image
            alt="paintjob"
            src={"/paintjob.png"}
            width={283}
            height={278}
            draggable={false}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 mt-8 sm:mt-0">
          <Link href="https://discord.gg/lotusgfx">
            <div className="select-none text-[#af5ffe] px-8 flex flex-row gap-2 items-center bg-[#fff] duration-200 hover:bg-[#ffffffcc] rounded-md py-4 justify-center text-sm font-semibold tracking-wide cursor-pointer">
              <div className="h-5 w-5">
                <Image
                  width={100}
                  height={100}
                  unoptimized="true"
                  alt="discord logo"
                  src={"/svgs/purple_telegram.svg"}
                  draggable="false"
                />
              </div>
              <div>Message on Discord</div>
            </div>
          </Link>
          <Link href="https://discord.gg/lotusgfx">
            <div className="select-none opacity-75 px-8 flex flex-row gap-2 items-center bg-[#af5ffe] duration-200 hover:bg-[#a153ee] rounded-md py-4 justify-center text-sm font-semibold tracking-wide cursor-pointer">
              <div className="h-5 w-5">
                <Image
                  width={100}
                  height={100}
                  unoptimized="true"
                  alt="discord logo"
                  src={"/svgs/discord.svg"}
                  draggable="false"
                />
              </div>
              <div>lotus.design</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
