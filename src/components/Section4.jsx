import React from "react";

import Image1 from "../assets/section4_1.png";
import Image2 from "../assets/section4_2.webp";
import DownloadAppBtn from "./DownloadAppBtn";

function Section4() {
  return (
    <section
      className="relative pb-8 xl:pb-12"
      style={{ background: "#f5f7fa" }}
    >
      <div className="w-full xl:w-[1170px] m-auto relative bg-white rounded-[10px]">
        <div className="flex flex-col md:flex-row items-center justify-between p-2 xl:py-20 xl:pr-12 xl:pl-28">
          <div className="text-base font-bold w-full md:w-[50%] xl:w-[45%]">
            <div className="w-[175px] flex items-center">
              <img src={Image1} alt="money" className="h-[77px] w-auto pr-3" />
              UPI Money Transfer
            </div>
            <div className="mt-4 xl:mt-12 font-semibold text-3xl xl:text-4xl">
              <div className="w-full xl:w-[390px]">
                Pay anyone directly from your bank account.
              </div>
              <span className="text-sm xl:text-[17px] font-medium pt-6 pb-8 leading-6 block">
                Pay anyone, everywhere. Make contactless & secure payments
                in-stores or online using Paytm Wallet or Directly from your
                Bank Account. Plus, send & receive money from anyone.
              </span>
              <DownloadAppBtn text={"Download the App"} />
            </div>
          </div>
          <img
            src={Image2}
            alt="paid"
            className="w-full md:w-[400px] xl:w-[540px] pt-4 xl:pt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Section4;
