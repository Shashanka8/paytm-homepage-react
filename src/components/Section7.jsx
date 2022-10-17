import React from "react";

import Image1 from "../assets/section7_1.png";
import Image2 from "../assets/section7_2.webp";
import LearnMoreBtn from "./LearnMoreBtn";

function Section7() {
  return (
    <section className="pb-8 xl:pb-12 bg-white">
      <h1 className="w-full xl:w-[1170px] mx-auto mb-6 xl:mb-9 font-bold text-4xl xl:text-5xl pt-20 xl:pt-[120px]">
        Financial Services by Paytm
      </h1>
      <div className="w-full xl:w-[1170px] m-auto relative bg-white rounded-[10px] pb-[72px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-base font-bold w-full md:w-[45%] xl:w-[40%]">
            <div>
              <img
                src={Image1}
                alt="payemnt bank"
                className="w-[212px] pb-3 ml-2 xl:ml-0"
              />
            </div>
            <div className="font-bold mt-6 xl:mt-12 text-3xl xl:text-[40px] xl:leading-[48px] ml-2 xl:ml-0">
              India's most sincere bank.
            </div>
            <div className="mt-6">
              <span className="pt-3 block w-full xl:w-[515px] mb-6 xl:mb-11 font-medium text-base xl:text-xl pl-2 xl:pl-0">
                Paytm Payments Bank offers secure, transparent and risk-free
                banking at your fingertips. With instant account opening,
                virtual debit card and zero balance requirements, experience the
                future of banking today.
              </span>
            </div>
            <LearnMoreBtn />
          </div>
          <img
            src={Image2}
            alt="bank"
            className="w-full md:w-[380px] xl:w-[452px] pt-6 xl:pt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Section7;
