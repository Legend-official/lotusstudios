import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banners = () => {
  return (
    <div className="px-4 grid grid-flow-row md:grid-cols-2 gap-10 mt-6">
      {/* Discord Banner */}
      <Link href="https://discord.gg/lotusgfx">
        <div className="px-4 py-4 sm:px-6 ms:py-4 md:px-10 md:py-8 bg-[#ae5ffe15] rounded-[12px] cursor-pointer">
          <div className="text-[#af5ffe] flex flex-row items-center gap-2">
            <div className="h-5 w-5 sm:h-6 sm:w-6 select-none">
              <Image
                alt="purple discord icon"
                src={"/svgs/purple_discord.svg"}
                draggable="false"
                unoptimized="true"
                width={100}
                height={100}
              />
            </div>
            <div className="QanelasBold sm:text-xl md:text-2xl">
              Join our Discord Server!
            </div>
          </div>
          <div className="text-sm sm:text-md text-[#6d6e72] font-semibold">
            The quickest way to get in touch with us.
          </div>
        </div>
      </Link>
      {/* Telegram Banner */}
      <Link href="https://t.me/LotusChannels">
        <div className="px-4 py-4 sm:px-6 ms:py-4 md:px-10 md:py-8 bg-[#ae5ffe15] rounded-[12px] cursor-pointer">
          <div className="text-[#af5ffe] flex flex-row items-center gap-2">
            <div className="h-5 w-5 sm:h-6 sm:w-6 select-none">
              <Image
                alt="purple discord icon"
                src={"/svgs/purple_telegram.svg"}
                draggable="false"
                unoptimized="true"
                width={100}
                height={100}
              />
            </div>
            <div className="QanelasBold sm:text-xl md:text-2xl">
              Visit The Telegram Channel!
            </div>
          </div>
          <div className="text-sm sm:text-md text-[#6d6e72] font-semibold">
            Explore more of our work via the famous messenger.
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Banners;
