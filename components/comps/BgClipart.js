import Image from "next/image";
import React from "react";

const BgClipart = ({ link }) => {
  return (
    <div className="select-none">
      <Image
        className="w-[170px] h-[60px] object-cover rounded-[24px]"
        alt="a clipart image"
        draggable="false"
        src={link || "/3d_bust_omg_lol.png"}
        width={866}
        height={418}
      />
    </div>
  );
};

export default BgClipart;
