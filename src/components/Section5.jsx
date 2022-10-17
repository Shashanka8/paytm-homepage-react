import React from "react";

import Image1 from "../assets/section5_1.webp";
import Image2 from "../assets/section5_2.webp";
import LearnMoreBtn from "./LearnMoreBtn";

function Section5() {
  return (
    <section
      className="relative pb-8 xl:pb-12"
      style={{ background: "#f5f7fa" }}
    >
      <div className="w-full xl:w-[1170px] m-auto relative bg-white rounded-[10px]">
        <div className="flex flex-col md:flex-row items-center justify-between p-2 xl:py-20 xl:pr-12 xl:pl-28">
          <div className="text-base font-bold w-full md:w-[50%] xl:w-[45%]">
            <div className="w-[175px] flex items-center">
              <img
                src={Image1}
                alt="postpaid"
                className="h-[77px] w-auto pr-3"
              />
            </div>
            <div className="mt-4 xl:mt-12 font-semibold text-3xl xl:text-4xl">
              <div className="w-full xl:w-[390px]">
                Want it?
                <span className="block">No more waiting for it.</span>
              </div>
              <span className="text-sm xl:text-[17px] font-medium pt-6 pb-8 leading-6 block">
                With Paytm Postpaid, your wishlist doesn't have to be on the
                waitlist. Shop for the things you want today and pay for them
                next month.
              </span>
              <LearnMoreBtn />
            </div>
          </div>
          <img
            src={Image2}
            alt="postpaid"
            className="w-full md:w-[350px] xl:w-[433px] pt-4 xl:pt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Section5;
