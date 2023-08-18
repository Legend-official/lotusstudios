import React from "react";

const TextWithLinesBelow = ({
  text = "Beauty",
  firstBottom = "-bottom-[3%]",
  secondBottom = "-bottom-[20%]",
  thirdBottom = "-bottom-[33%]",
  showLines = true,
}) => {
  return (
    <div className="relative select-none">
      <div className="PeachiBold text-[#af5ffe] purple_text_shadow">{text}</div>
      {/* Lines Div */}
      <div
        className={JoinClasses(
          showLines ? "" : "hidden",
          "absolute w-full bottom-[-10px] h-full"
        )}
      >
        <div
          className={`h-[5px] rounded-full w-full bg-[#af5ffe] rotate-[2deg] absolute ${firstBottom}`}
        ></div>
        <div
          className={`h-[5px] rounded-full w-[80%] bg-[#af5ffe] rotate-[-3deg] absolute ${secondBottom} right-0`}
        ></div>
        <div
          className={`h-[5px] rounded-full w-[60%] bg-[#af5ffe] rotate-[2deg] absolute ${thirdBottom} right-[20%]`}
        ></div>
      </div>
    </div>
  );
};

export default TextWithLinesBelow;

// importing functions from utils
function JoinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}
