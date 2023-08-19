import React from "react";
import TextWithLinesBelow from "../comps/TextWithLinesBelow";
import BgClipart from "../comps/BgClipart";
import Link from "next/link";
import Image from "next/image";
import Button from "../comps/Button";

const boxContent = [
  {
    image: "/Snapchat_Promotions.png",
    title: "Snapchat Promotions",
    desc: [
      "For my client Insider",
      "Delivery Time: Four Hours",
      "Top Rated Design",
    ],
  },
  {
    image: "/Upgrade_thread_cropped.png",
    title: "Upgrade Thread",
    desc: [
      "For my client MMaritsa",
      "6 to 7 Revisions given",
      "Source File given on sale",
    ],
  },
  {
    image: "/Kodi_cropped.png",
    title: "Premium Upgrades",
    desc: [
      "Elegant Infographics",
      "Unique Design Look",
      "Fast and Speedy turn around time",
    ],
  },
  {
    image: "/LightThreadDesign.png",
    title: "Graphics Service",
    desc: [
      "Legendary design layout",
      "Encapsulating 3D Infographics",
      "Nade for myself LOL",
    ],
  },
];

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="w-full bg-[#16161c] relative z-10 rounded-md py-20 px-14 "
    >
      {/* text with icon links */}
      <div className="w-full flex flex-col justify-center lg:flex-row ">
        <div className="lg:w-1/2 py-10 justify-center flex flex-col items-center lg:items-start">
          <div className="text-[#af5ffe] w-fit select-none QanelasBold text-sm px-3 py-1 bg-[#ae5ffe28] rounded-full border-[1px] border-[#af5ffe]">
            #Extensive Portfolio
          </div>
          <div className="mt-4 w-full gap-2 text-5xl QanelasBold flex flex-col items-center lg:items-start">
            <div className="text-center">Take a look at my</div>
            <div className="w-fit flex flex-row items-center gap-4">
              <TextWithLinesBelow showLines={true} text="Portfolio" />
              <div className="mt-6 hidden md:flex">
                <BgClipart link={"/forrest.png"} />
              </div>
            </div>
          </div>
          <div className="mt-10 py-3 sm:py-0 sm:w-[70%] text-[#696a6e] QanelasBold text-center lg:text-start">
            Platinum-standard thread designs for a range of products and
            services!
          </div>
          <div className="mt-5">
            <Link href="https://www.behance.net/audio">
              <Button
                imageLink={"/svgs/telegram.svg"}
                text={"Previous Designs"}
              />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-5 md:mt-0 sm:px-4 md:px-0 relative flex items-center justify-center">
          {/* dark purple shadow on background of boxes */}
          <div className="absolute w-[90%] h-[90%] bg-[#af5ffe] rounded-md z-[-1] blur-[50px] opacity-50"></div>
          <div className="grid grid-flow-row sm:grid-cols-2 gap-6 gap-x-16 h-full">
            {boxContent.map((item, index) => (
              <div
                key={index}
                className="h-full w-full overflow-hidden rounded-lg"
              >
                <div className="h-1/2 bg-[#af5ffe] flex items-end justify-center overflow-hidden">
                  <div className="w-[80%] h-[120px] mt-14 relative overflow-hidden select-none">
                    <Image
                      className="w-full opacity-60 object-cover relative top-0"
                      alt="card image portfolio"
                      draggable="false"
                      src={item?.image}
                      width={200}
                      height={100}
                    ></Image>
                  </div>
                </div>
                <div className="h-1/2 w-full py-1 gap-1 flex flex-col bg-[#16171d] justify-center">
                  <div className="text-lg mx-auto w-fit QanelasBold">
                    {item?.title}
                  </div>
                  <div>
                    {item?.desc.map((item, index) => (
                      <div
                        key={index + index}
                        className="mx-auto w-fit Peachi text-[#ffffff6e] text-sm"
                      >
                        {`${item}`}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
