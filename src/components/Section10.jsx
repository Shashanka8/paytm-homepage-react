import React from "react";

import Image1 from "../assets/section10_1.webp";
import Image2 from "../assets/section10_2.png";
import LearnMoreBtn from "./LearnMoreBtn";

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
              <LearnMoreBtn />
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
