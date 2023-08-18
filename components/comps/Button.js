import Image from "next/image";
import React from "react";

const Button = ({ imageLink, text }) => {
  return (
    <div className="select-none flex flex-row gap-2 items-center bg-[#af5ffe] duration-200 hover:bg-[#ae5ffec0] rounded-md py-4 w-[170px] justify-center text-sm font-semibold tracking-wide cursor-pointer">
      <div className="h-5 w-5">
        <Image
          width={100}
          height={100}
          unoptimized="true"
          alt="discord logo"
          src={imageLink}
          draggable="false"
        />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Button;
