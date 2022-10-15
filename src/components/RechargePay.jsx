import React from "react";

import Image1 from "../assets/section1_1.png";
import Image2 from "../assets/section1_2.png";
import Image3 from "../assets/section1_3.png";
import Image4 from "../assets/section1_4.png";
import Image5 from "../assets/section1_5.png";
import Image6 from "../assets/section1_6.png";
import Image7 from "../assets/section1_7.png";

import RechargeCard from "./RechargeCard";

function RechargePay() {
  const cardsData = [
    { imgSrc: Image1, heading: "Recharge", text1: "Prepaid", text2: "Mobile" },
    { imgSrc: Image2, heading: "Pay", text1: "Rent", text2: "Payment" },
    { imgSrc: Image3, heading: "Pay", text1: "Electricity", text2: "Bill" },
    { imgSrc: Image4, heading: "Recharge", text1: "DTH", text2: "Connection" },
    { imgSrc: Image5, heading: "Book", text1: "Gas", text2: "Cylinder" },
    { imgSrc: Image6, heading: "Pay", text1: "Credit", text2: "Card Bill" },
    { imgSrc: Image7, heading: "All", text1: "Payment", text2: "Services" },
  ];

  return (
    <section
      style={{ background: "#00baf2" }}
      className="mt-72 sm:mt-[34rem] md:mt-0"
    >
      <div className="max-w-7xl m-auto">
        <div className="py-16">
          <h1 className="text-white font-bold text-4xl flex items-center">
            Recharge & Pay Bills on Paytm.
          </h1>
          <div className="flex flex-wrap xl:flex-nowrap mt-6">
            {cardsData.map((data) => (
              <RechargeCard key={data.imgSrc} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RechargePay;
