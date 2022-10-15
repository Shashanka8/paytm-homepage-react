import React from "react";

import Image1 from "../assets/section6_1.png";
import Image2 from "../assets/section6_2.webp";
import Image3 from "../assets/section6_3.png";
import Image4 from "../assets/section6_4.webp";

function Section6() {
  return (
    <section style={{ background: "#f5f7fa" }}>
      <div class="w-full xl:w-[1170px] m-auto pb-20 xl:pb-[130px] flex flex-col md:flex-row justify-between">
        <div class="relative w-full xl:w-[560px] h-[630px] bg-white xl:mr-12 cursor-pointer rounded-2xl px-4 xl:px-16 pt-10 xl:pt-[70px]">
          <div class="flex items-end h-[75px]">
            <img src={Image1} alt="cashback" class="h-[77px] w-auto" />
          </div>
          <div>
            <h1 class="pt-7 font-bold text-3xl xl:text-[40px] xl:leading-[48px]">
              Unlimited Cashback
              <span class="block">Every time</span>
            </h1>
            <p class="font-medium text-base xl:text-xl">
              Paytm HDFC Bank Select Credit Card. A card with assured Cashback
              and incredible offers.
            </p>
          </div>
          <img
            src={Image2}
            alt="cards"
            class="absolute h-[296px] bottom-[6px] left-[50%] translate-x-[-50%] translate-y-[2%] pt-12"
          />
        </div>

        <div class="relative w-full xl:w-[560px] h-[630px] bg-white xl:mr-12 cursor-pointer rounded-2xl px-4 xl:px-16 pt-10 xl:pt-[70px]">
          <div class="flex items-end h-[75px]">
            <img src={Image3} alt="credit card" class="h-[20px] w-auto" />
          </div>
          <div>
            <h1 class="pt-7 font-bold text-3xl xl:text-[40px] xl:leading-[48px]">
              India's Most
              <span class="block">Sincere Credit Card</span>
            </h1>
            <p class="font-medium text-base xl:text-xl">
              Paytm SBI Card SELECT - With Intelligent Features & Great Rewards
              that Never Expire
            </p>
          </div>
          <img
            src={Image4}
            alt="cards"
            class="absolute h-[296px] bottom-[6px] left-[50%] translate-x-[-50%] translate-y-[2%] pt-12"
          />
        </div>
      </div>
    </section>
  );
}

export default Section6;
