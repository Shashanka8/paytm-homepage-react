import React from "react";

import Image1 from "../assets/section7_1.png";
import Image2 from "../assets/section7_2.webp";

function Section7() {
  return (
    <section class="pb-8 xl:pb-12 bg-white">
      <h1 class="w-full xl:w-[1170px] mx-auto mb-6 xl:mb-9 font-bold text-4xl xl:text-5xl pt-20 xl:pt-[120px]">
        Financial Services by Paytm
      </h1>
      <div class="w-full xl:w-[1170px] m-auto relative bg-white rounded-[10px] pb-[72px]">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="text-base font-bold w-full md:w-[45%] xl:w-[40%]">
            <div>
              <img
                src={Image1}
                alt="payemnt bank"
                class="w-[212px] pb-3 ml-2 xl:ml-0"
              />
            </div>
            <div class="font-bold mt-6 xl:mt-12 text-3xl xl:text-[40px] xl:leading-[48px] ml-2 xl:ml-0">
              India's most sincere bank.
            </div>
            <div class="mt-6">
              <span class="pt-3 block w-full xl:w-[515px] mb-6 xl:mb-11 font-medium text-base xl:text-xl pl-2 xl:pl-0">
                Paytm Payments Bank offers secure, transparent and risk-free
                banking at your fingertips. With instant account opening,
                virtual debit card and zero balance requirements, experience the
                future of banking today.
              </span>
            </div>
            <a
              href="/"
              class="group flex cursor-pointer py-4 px-6 relative text-[17px] font-medium text-white bg-paytmhover rounded-3xl w-[160px] leading-5 hover:bg-paytm hover:transition-all hover:duration-300 hover:ease-out"
            >
              <div class="mr-2.5">Learn More</div>
              <div class="arrow">
                <span class="hidden group-hover:inline">-</span>
                <div class="absolute top-[23px] right-7 group-hover:right-6"></div>
              </div>
            </a>
          </div>
          <img
            src={Image2}
            alt="bank"
            class="w-full md:w-[380px] xl:w-[452px] pt-6 xl:pt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Section7;
