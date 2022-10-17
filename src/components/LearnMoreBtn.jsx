import React from "react";

function LearnMoreBtn() {
  return (
    <a
      href="/"
      className="group flex cursor-pointer py-4 px-6 relative text-[17px] font-medium text-white bg-paytmhover rounded-3xl w-[160px] leading-5 hover:bg-paytm hover:transition-all hover:duration-300 hover:ease-out"
    >
      <div className="mr-2.5">Learn More</div>
      <div className="arrow">
        <span className="hidden group-hover:inline">-</span>
        <div className="absolute top-[23px] right-7 group-hover:right-6"></div>
      </div>
    </a>
  );
}

export default LearnMoreBtn;
