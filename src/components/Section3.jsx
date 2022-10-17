import React from "react";

import Image1 from "../assets/section3_1.png";
import Image2 from "../assets/section3_2.webp";
import DownloadAppBtn from "./DownloadAppBtn";

function Section3() {
  return (
    <section
      className="pt-14 xl:pt-28 relative pb-8 xl:pb-12"
      style={{ background: "#f5f7fa" }}
    >
      <h1 className="mx-auto mb-6 xl:mb-9 font-bold text-4xl xl:text-5xl w-full xl:w-[1170px]">
        Paytm Payment Instruments
      </h1>
      <div className="w-full xl:w-[1170px] m-auto relative bg-white rounded-[10px]">
        <div className="flex flex-col md:flex-row items-center justify-between p-2 xl:py-20 xl:pr-12 xl:pl-28">
          <div className="text-base font-bold w-full md:w-[50%] xl:w-[45%]">
            <div className="w-[175px] flex items-center">
              <img src={Image1} alt="wallet" className="h-[77px] w-auto pr-3" />
              Paytm Wallet
            </div>
            <div className="mt-4 xl:mt-12 font-semibold text-3xl xl:text-4xl">
              <div className="w-full xl:w-[390px]">
                The Fastest Way to Pay In-store & Online.
              </div>
              <span className="text-sm xl:text-[17px] font-medium pt-6 pb-8 leading-6 block">
                Load up your Paytm Wallet for free and make payments in a jiffy
                at over 21 million stores, websites and apps.
              </span>
              <DownloadAppBtn text={"Download the App"} />
            </div>
          </div>
          <img
            src={Image2}
            alt="paytm payment"
            className="w-full md:w-[400px] xl:w-[540px] pt-4 xl:pt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;
