import React from "react";

import Image1 from "../assets/section10_1.webp";
import Image2 from "../assets/section10_2.png";

function Section10() {
  return (
    <section
      className="relative pb-8 xl:pb-12"
      style={{ background: "#f5f7fa" }}
    >
      <div
        className="w-full xl:w-[1170px] m-auto relative bg-white z-[1] rounded-[10px]"
        style={{ background: "#f5f7fa" }}
      >
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between py-10 xl:py-20">
          <div className="text-base font-bold w-full md:w-[50%] xl:w-[45%] mt-12 xl:mt-0 ml-2 xl:ml-0">
            <div className="w-[175px] flex items-center">
              <img
                src={Image2}
                alt="personal loan"
                className="h-[54px] w-auto pr-3"
              />
            </div>
            <div className="mt-6 xl:mt-12 font-semibold text-3xl xl:text-4xl xl:leading-[46px]">
              <div className="w-full xl:w-[390px] font-bold">
                Get a Personal Loan in 2 Minutes.
              </div>
              <span className="text-base xl:text-xl font-medium py-4 xl:pt-6 xl:pb-8 leading-4 xl:leading-6 block">
                Paytm offers India's quickest multi-purpose, hassle-free loan.
                It is 100% digital, transparent and paperless.
              </span>
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
            </div>
          </div>
          <img
            src={Image1}
            alt="loan"
            className="w-full md:w-[360px] xl:w-[433px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Section10;
