import React from "react";

function PaytmTravelCard({ imgUrl, heading, subHeading }) {
  return (
    <li className="pr-2 xl:pr-8 list-item mb-3 xl:mb-0">
      <div className="bg-card flex flex-col items-start pt-[30px] p-[11px] w-[155px] h-[220px] min-w-[155px] min-h-[210px] cursor-pointer whitespace-normal rounded-[10px] text-[15px] text-white font-medium leading-[22px] hover:bg-[#40C2ED] hover:ease-in hover:transition-all hover:duration-300">
        <img
          src={imgUrl}
          alt={heading}
          className="w-[72px] h-[72px] rounded-full mb-6"
        />
        <div className="font-bold text-[17px] leading-[22px]">
          {heading}
          <span className="block text-xs pt-[3px]">{subHeading}</span>
        </div>
      </div>
    </li>
  );
}

export default PaytmTravelCard;
