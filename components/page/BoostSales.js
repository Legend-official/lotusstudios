import React from "react";
import TextWithLinesBelow from "../comps/TextWithLinesBelow";
import Image from "next/image";

const BoostSalesCard = [
  {
    image: "/kodithumb.png",
    title: "Thread Designs",
    hot: true,
    price: "$24.99+",
    desc: [
      "Customisable Elegant Designs",
      "Competitive Pricing",
      "Best Seller",
    ],
  },
  {
    image: "/kodithumb.png",
    title: "Advertisement Signatures",
    hot: false,
    price: "$29.99+",
    desc: [
      "The Best Way To Advertise",
      "Gain Traffic to Your Services",
      "Multiple Customisable Slides",
    ],
  },
  {
    image: "/kodithumb.png",
    title: "Graphics Of All Sorts",
    hot: false,
    price: "$11.99+",
    desc: [
      "A Range Of Avaiable Products",
      "Adverts,Banners,Logos",
      "Starting Cheap",
    ],
  },
];

const BoostSales = () => {
  return (
    <div className="py-10 w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="text-[#af5ffe] w-fit select-none QanelasBold text-sm px-3 py-1 bg-[#ae5ffe28] rounded-full border-[1px] border-[#af5ffe]">
          #Premium Thread Designs
        </div>
        {/* boost your sales */}
        <div className="mt-10 gap-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl QanelasBold flex flex-row items-center">
          <div>Boost Sales</div>
          <TextWithLinesBelow
            text="Exponentially"
            firstBottom="-bottom-[10%]"
            secondBottom="-bottom-[35%]"
            thirdBottom="-bottom-[55%]"
          />
        </div>
      </div>
      {/* three boxes */}
      <div className="grid grid-flow-row  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10 mt-10 w-full px-14 gap-20">
        {
          // map through the array
          BoostSalesCard?.map((card, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center h-[380px] md:h-[340px] bg-[#16161c] rounded-xl overflow-hidden select-none cursor-pointer"
            >
              {/* Image */}
              <div className="h-1/2 bg-[#af5ffe] overflow-hidden relative flex justify-center">
                {/* hot image */}
                {card?.hot && (
                  <div className="absolute top-2 right-2 z-10 bg-[#15161c] p-1 rounded-full h-10 w-10 flex items-center justify-center text-2xl">
                    🔥
                  </div>
                )}
                {/* Product Price */}
                <div className="absolute z-10 bg-[#15161c] top-[70px] px-5 py-2.5 rounded-md QanelasBold">
                  {`${card?.price}`}
                </div>
                <Image
                  className="opacity-25"
                  alt="card image"
                  src={card?.image}
                  draggable={false}
                  width={1300}
                  height={689}
                />
              </div>
              {/* Desc */}
              <div className="h-1/2 w-[80%] p-2 flex flex-col">
                <div className="QanelasBold text-xl mx-auto text-center">
                  {card?.title}
                </div>
                <div className="flex flex-col justify-between py-4 h-full">
                  {card?.desc?.map((desc, index) => (
                    <div
                      key={index + index}
                      className="flex flex-row items-center gap-3 Peachi"
                    >
                      <div className="text-transparent bg-[#af5ffe] bg-clip-text rotate-6">
                        ✔️
                      </div>
                      <div className="text-[#ffffff6e] text-sm">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BoostSales;
