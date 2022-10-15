import React from "react";

function RechargeCard({ imgSrc, heading, text1, text2 }) {
  return (
    <div className="flex flex-col w-36 mr-4 xl:mr-8 cursor-pointer p-4 pr-2.5 font-medium rounded-xl leading-6 text-[17px] text-white justify-between hover:bg-[#00AFE3] hover:transition-all hover:duration-300">
      <img src={imgSrc} alt="img" className="w-16 mb-4 bg-white rounded-full" />
      {heading}
      <div className="section1-card relative text-[15px] min-h-[45px] font-bold leading-5 mr-2.5">
        {text1}
        <div>
          {text2}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default RechargeCard;
