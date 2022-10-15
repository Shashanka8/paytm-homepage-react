import React from "react";

function PaytmMoneyCard({ imgUrl, heading }) {
  return (
    <li className="pr-2 xl:pr-8 list-item mb-3 xl:mb-0">
      <div className="bg-card flex flex-col items-center text-center py-[5px] w-[155px] h-[245px] min-w-[155px] min-h-[230px] cursor-pointer whitespace-normal rounded-[10px]">
        <div className="rounded-md z-[1] w-[145px] h-[158px] overflow-hidden">
          <img
            src={imgUrl}
            alt={heading}
            className="w-[145px] h-[158px] hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out"
          />
        </div>
        <span className="py-4 block w-[114px] text-[17px] text-white font-bold">
          {heading}
        </span>
      </div>
    </li>
  );
}

export default PaytmMoneyCard;
