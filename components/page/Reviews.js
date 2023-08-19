import React from "react";
import TextWithLinesBelow from "../comps/TextWithLinesBelow";
import Image from "next/image";

const ReviewsCards = [
  {
    name: "Ryzen",
    emoji: "👍",
    review: "Dynamic and quick with his work an unparalleled experience.",
  },
  {
    name: "Namar",
    emoji: "👍",
    review:
      "Innovative and out of the box with designs, brought simple ideas to life.",
  },
  {
    name: "Evan",
    emoji: "🌟",
    review:
      "The most premium and intricate designs on the market , perfect for everything.",
  },
  {
    name: "Maybach",
    emoji: "🌟",
    review:
      "Multiple designs ordered with a fast turn around time, elegant graphics.",
  },
  {
    name: "6ixer",
    emoji: "😃",
    review:
      "The plug for any designs you need, super reliant with turn around times.",
  },
  {
    name: "Perfiso",
    emoji: "🏆",
    review:
      "Really elevated my bussiness front, has definitely boosted my sales, I reckon!",
  },
];

const Reviews = () => {
  return (
    <div className="py-10 w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="text-[#af5ffe] w-fit select-none QanelasBold text-sm px-3 py-1 bg-[#ae5ffe28] rounded-full border-[1px] border-[#af5ffe]">
          #Customer Vouches
        </div>
        {/* boost your sales */}
        <div className="mt-10 gap-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl QanelasBold flex flex-row items-center">
          <div>Testimonials From</div>
          <TextWithLinesBelow
            text="Customers"
            firstBottom="-bottom-[10%]"
            secondBottom="-bottom-[35%]"
            thirdBottom="-bottom-[55%]"
          />
        </div>
        {/* a description */}
        <div className="mt-14 text-[#ffffff6e] text-sm md:text-base lg:text-lg mx-auto text-center">
          See What my customers honestly say about me and my work, time taken
          and communication
        </div>
      </div>
      {/* three boxes */}
      <div className="grid grid-flow-row  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 mt-8 w-full px-14 gap-20">
        {
          // map through the array of objects
          ReviewsCards.map((card, index) => (
            <div
              key={index}
              className="relative cursor-default hover:scale-110 duration-200"
            >
              {/* a backshadow */}
              <div className="h-full w-full bg-[#af5ffe] absolute top-0 left-0 z-[0] blur-[20px] opacity-30"></div>
              <div className="flex flex-col p-4 py-6 gap-2 rounded-lg bg-[#16161c] relative z-10">
                <div className="flex flex-row items-center gap-2 justify-between">
                  <div>{card?.name}</div>
                  <div>{`${card.emoji}${card.emoji}${card.emoji}${card.emoji}${card.emoji}`}</div>
                </div>
                <div className="text-[#ffffff6e] text-sm">
                  See What my customers honestly say about me and my work, time
                  taken and communication
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Reviews;
