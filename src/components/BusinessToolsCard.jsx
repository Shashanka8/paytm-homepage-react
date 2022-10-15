import React from "react";

import RightArrow from "../assets/section13-right-arrow.png";

function BusinessToolsCard({ imgUrl, heading1, heading2, body }) {
  return (
    <div className="w-full sm:w-[48%] xl:w-[21.5%] xl:mr-[70px] px-4 xl:px-0 mb-3 xl:mb-0">
      <img src={imgUrl} alt={`${heading1} ${heading2}`} className="w-full" />
      <div>
        <div className="pt-5 xl:pt-10 pb-5 font-bold text-2xl xl:text-[26px] leading-8">
          {heading1}
          <span className="inline xl:block">{heading2}</span>
        </div>
        <p className="font-medium text-xl xl:text-xl">{body}</p>
        <div className="group relative cursor-pointer pt-1">
          <span className="font-bold text-[15px] leading-[30px] w-[260px]">
            Learn More
          </span>
          <img
            src={RightArrow}
            alt="arrow"
            className="hidden h-4 absolute left-[60px] top-[10px] group-hover:inline group-hover:transition-all group-hover:duration-300 group-hover:left-[90px]"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessToolsCard;
