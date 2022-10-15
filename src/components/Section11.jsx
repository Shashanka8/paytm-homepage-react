import React from "react";

import Image1 from "../assets/section11_1.webp";

function Section11() {
  return (
    <section class="pt-20 xl:pt-[120px] bg-white relative pb-8 xl:pb-12">
      <h1 class="w-full xl:w-[1170px] mx-auto mb-6 xl:mb-9 font-bold text-4xl xl:text-5xl">
        Business Services by Paytm
      </h1>
      <div
        class="w-full xl:w-[1170px] m-auto relative bg-white z-[1] rounded-[10px]"
        style={{ background: "#f5f7fa" }}
      >
        <div class="flex flex-col md:flex-row items-center justify-between py-10 xl:py-20 pl-4 xl:pl-[115px]">
          <div class="text-base font-bold w-full md:w-[50%] xl:w-[45%]">
            <div class="mt-6 xl:mt-12 font-semibold text-3xl xl:text-4xl xl:leading-[46px]">
              <div class="w-full xl:w-[390px] font-bold">
                Accept payments online with ease
              </div>
              <span class="text-base xl:text-[17px] font-medium py-4 xl:pt-6 xl:pb-8 leading-6 block">
                Grow your business with the payment gateway that powers India's
                largest brands and even the Paytm App
              </span>
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
          </div>
          <img
            src={Image1}
            alt="pay"
            class="w-full md:w-[360px] xl:w-[433px] pt-6 xl:pt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Section11;
