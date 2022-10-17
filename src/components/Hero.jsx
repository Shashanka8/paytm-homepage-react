import React from "react";

import HeroLeftImg from "../assets/hero-left-img.png";
import HeroImage from "../assets/hero-image.webp";
import DownloadAppBtn from "./DownloadAppBtn";

function Hero() {
  return (
    <main>
      <div className="max-w-7xl mx-auto pt-4 xl:pt-32 pb-28">
        <div className="w-full md:w-[50%] xl:max-w-2xl pl-2 xl:pl-0">
          <div className="mb-8 xl:mb-12">
            <img src={HeroLeftImg} alt="hero-img" className="w-20" />
          </div>
          <h1 className="font-bold text-4xl xl:text-[54px] leading-tight">
            India's Most-loved Payments App
          </h1>
          <div className="pt-2.5 w-full xl:w-[475px] mb-10 text-base xl:text-xl font-medium">
            Recharge & pay bills, book flights & movie tickets, open a savings
            account, invest in stocks & mutual funds, and do a lot more.
          </div>
        </div>
        <img
          src={HeroImage}
          alt="mobile"
          className="absolute w-full md:w-[400px] xl:w-[528px] right-0 top-3/4 sm:top-[62%] md:top-48 xl:top-60"
        />

        <DownloadAppBtn text={"Download Paytm App"} />
      </div>
    </main>
  );
}

export default Hero;
