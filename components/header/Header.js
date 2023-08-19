import Image from "next/image";
import React from "react";
import BgClipart from "../comps/BgClipart";
import Button from "../comps/Button";
import Link from "next/link";

const headerOption = [
  { title: "Pricing", href: "#boostsales" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <div className="flex flex-row items-center px-4 justify-between py-5 select-none">
      <div className="hidden sm:block">
        <BgClipart link={"/3d_bust_omg_lol.png"} />
      </div>
      <div className="flex flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm">
        {headerOption?.map((item, index) => (
          <div key={index}>
            <Link href={item?.href}>
              <div className="hover:text-gray-400 duration-200 cursor-pointer tracking-wider font-semibold">
                {item?.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link href="https://discord.gg/lotusgfx">
          <div className="select-none flex flex-row gap-2 items-center bg-[#af5ffe] duration-200 hover:bg-[#ae5ffec0] rounded-md py-3 sm:py-4 w-[140px] sm:w-[170px] justify-center text-sm font-semibold tracking-wide cursor-pointer">
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
            <div className="sm:text-[15px] text-xs">lotus.design</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
