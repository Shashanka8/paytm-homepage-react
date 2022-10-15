import React from "react";

import Image1 from "../assets/section14_1.webp";
import Image2 from "../assets/section14_2.webp";
import Image3 from "../assets/section14_3.webp";
import Image4 from "../assets/section14_4.webp";
import Image5 from "../assets/section14_5.webp";
import Image6 from "../assets/section14_6.webp";

import PaytmMoneyCard from "./PaytmMoneyCard";

function PaytmMoney() {
  const cardsData = [
    {
      imgUrl: Image2,
      heading: "Invest in Stocks",
    },
    {
      imgUrl: Image3,
      heading: "Apply for IPO",
    },
    {
      imgUrl: Image4,
      heading: "Invest in ETFs",
    },
    {
      imgUrl: Image5,
      heading: "Buy Gold",
    },
    {
      imgUrl: Image6,
      heading: "Invest in Mutual Funds",
    },
  ];

  return (
    <section style={{ background: "#f0fbff" }}>
      <div className="w-full xl:w-[1200px] mx-auto pt-10 xl:pt-[120px]">
        <div className="flex flex-wrap xl:flex-nowrap bg-white pl-3 xl:pl-[30px] p-10 xl:p-[60px] pr-0 rounded-[10px] mb-[33px]">
          <div className="w-full xl:w-[200px] xl:mr-10 flex flex-col justify-between">
            <div className="flex items-center">
              <img
                src={Image1}
                alt="paytm money"
                className="pr-2.5 w-[150px]"
              />
            </div>
            <p>
              Get started on wealth creation journey with Zero brokerage fee &
              no hidden charges.
              <a
                href="/"
                className="block pt-2.5 text-base xl:text-[17px] leading-6 text-paytm font-medium hover:text-[#00A5E0]"
              >
                Learn More
              </a>
            </p>
          </div>
          <div className="relative w-full xl:w-[920px] mt-6 xl:mt-0">
            <ul className="flex flex-wrap xl:flex-nowrap whitespace-nowrap">
              {cardsData.map((data) => (
                <PaytmMoneyCard key={data.imgUrl} {...data} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaytmMoney;
