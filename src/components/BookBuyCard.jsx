import React from "react";

function BookBuyCard({ imgUrl, heading, subHeading }) {
  return (
    <div class="flex flex-col w-36 mr-4 xl:mr-8 cursor-pointer p-4 pr-2.5 font-medium rounded-xl leading-6 text-[17px] text-white justify-between hover:bg-[#0D3E80] hover:transition-all hover:duration-300">
      <img src={imgUrl} alt="img" class="w-16 mb-4 bg-white rounded-full" />
      <div class="section2-card relative text-[18px] min-h-[45px] font-bold leading-5 mr-2.5">
        {heading}
        <div>
          {subHeading}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default BookBuyCard;
