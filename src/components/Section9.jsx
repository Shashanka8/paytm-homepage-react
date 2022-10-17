import React from "react";

import Image1 from "../assets/section9_1.webp";
import Image2 from "../assets/section9_2.webp";
import LearnMoreBtn from "./LearnMoreBtn";

function Section9() {
  return (
    <section className="relative pb-8 xl:pb-12 bg-white">
      <div className="w-full xl:w-[1170px] m-auto relative bg-white z-[1] rounded-[10px]">
        <div className="flex flex-col md:flex-row items-center justify-between py-10 xl:py-20">
          <div className="text-base font-bold w-full md:w-[50%] xl:w-[45%] ml-2 xl:ml-0">
            <div className="w-[175px] flex items-center">
              <img
                src={Image1}
                alt="insurance broking"
                className="h-[54px] w-auto pr-3"
              />
            </div>
            <div className="mt-6 xl:mt-12 font-semibold text-4xl leading-[46px] ml-2 xl:ml-0">
              <div className="w-full xl:w-[470px] mt-6 xl:mt-12 font-bold text-3xl xl:text-[40px] xl:leading-[48px]">
                Insurance made easy.
              </div>
              <span className="text-base xl:text-xl font-medium py-4 xl:pt-6 xl:pb-8 leading-4 xl:leading-6 block">
                Buying insurance does not have to be tedious, time-consuming &
                confusing. Paytm Insurance removes the worry of getting insured
                by making it simple, convenient & easy-to-understand.
              </span>
              <LearnMoreBtn />
            </div>
          </div>
          <img
            src={Image2}
            alt="insurance"
            className="w-full md:w-[360px] xl:w-[433px] mt-6 xl:mt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Section9;
