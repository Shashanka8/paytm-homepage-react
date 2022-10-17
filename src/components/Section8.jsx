import React from "react";

import Image1 from "../assets/section8_1.webp";
import Image2 from "../assets/section8_2.webp";
import BGImage from "../assets/section8_bg.webp";
import LearnMoreBtn from "./LearnMoreBtn";

function Section8() {
  return (
    <section
      className="relative pb-8 xl:pb-12"
      style={{ background: "#f5f7fa" }}
    >
      <div className="w-full xl:w-[1170px] m-auto relative bg-transparent rounded-[10px] z-[1]">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between py-20">
          <div className="text-base font-bold w-full md:w-[50%] xl:w-[46%] mt-12 xl:mt-0 ml-2 xl:ml-0">
            <div className="w-[175px] flex items-center">
              <img
                src={Image2}
                alt="paytm money"
                className="h-[54px] w-auto pr-3"
              />
            </div>
            <div className="mt-6 xl:mt-12 font-semibold text-4xl leading-[46px]">
              <div className="w-full xl:w-[390px] mt-6 xl:mt-12 font-bold text-3xl xl:text-[40px] xl:leading-[48px]">
                Build Long-term Wealth & Achieve your Goals.
              </div>
              <span className="text-base xl:text-xl font-medium py-4 xl:pt-6 xl:pb-8 leading-4 xl:leading-6 block">
                Investing on Paytm Money is transparent, low-cost and
                commission-free. Buy stocks & mutual funds that can help you
                create wealth & realise your dreams.
              </span>
              <LearnMoreBtn />
            </div>
          </div>
          <img
            src={Image1}
            alt="money"
            className="w-full md:w-[400px] xl:w-[472px] z-[1]"
          />
        </div>
      </div>
      <img
        src={BGImage}
        alt="background"
        className="absolute left-0 bottom-0 h-full xl:h-[587px] w-full z-0"
      />
    </section>
  );
}

export default Section8;
