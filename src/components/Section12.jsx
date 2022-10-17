import React from "react";

import Image1 from "../assets/section12_1.webp";
import LearnMoreBtn from "./LearnMoreBtn";

function Section12() {
  return (
    <section className="bg-white relative pb-8 xl:pb-12">
      <div
        className="w-full xl:w-[1170px] m-auto relative bg-white z-[1] rounded-[10px]"
        style={{ background: "#f5f7fa" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between py-10 xl:py-20 pl-4 xl:pl-[115px]">
          <div className="text-base font-bold w-full md:w-[50%] xl:w-[45%]">
            <div className="mt-6 xl:mt-12 font-semibold text-3xl xl:text-4xl xl:leading-[46px]">
              <div className="w-full xl:w-[390px] font-bold">
                In-shop payments powered by Paytm.
              </div>
              <span className="text-base xl:text-[17px] font-medium py-4 xl:pt-6 xl:pb-8 leading-6 block">
                Millions of small & big businesses use Paytm to accept payments
                anywhere any time with a wide range of solutions for all kind of
                merchants
              </span>
              <LearnMoreBtn />
            </div>
          </div>
          <img
            src={Image1}
            alt="shop"
            className="w-full md:w-[360px] xl:w-[433px] pt-6 xl:pt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Section12;
