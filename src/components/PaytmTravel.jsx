import React from "react";

import Image1 from "../assets/section15_1.webp";
import Image2 from "../assets/section15_2.webp";
import Image3 from "../assets/section15_3.webp";
import Image4 from "../assets/section15_4.webp";
import Image5 from "../assets/section15_5.webp";
import Image6 from "../assets/section15_6.webp";
import PaytmTravelCard from "./PaytmTravelCard";

function PaytmTravel() {
  const cardsData = [
    {
      heading: "Flat 14% Cashback",
      subHeading: "With Paytm's Cancellation Protect",
      imgUrl: Image2,
    },
    {
      heading: "100% Refund",
      subHeading: "With Paytm's Cancellation Protect",
      imgUrl: Image3,
    },
    {
      heading: "Flat 10% Cashback",
      subHeading: "With Code HAPPYBUS",
      imgUrl: Image4,
    },
    {
      heading: "Sanitised Bus Options With TravelSafe+",
      subHeading: "",
      imgUrl: Image5,
    },
    {
      heading: "Hassle Free Train Ticket Bookings",
      subHeading: "",
      imgUrl: Image6,
    },
  ];

  return (
    <section style={{ background: "#f0fbff" }}>
      <div className="w-full xl:w-[1200px] mx-auto pb-10 xl:pb-[120px]">
        <div className="flex flex-wrap xl:flex-nowrap bg-white pl-3 xl:pl-[30px] p-10 xl:p-[60px] pr-0 rounded-[10px] mb-[33px]">
          <div className="w-full xl:w-[200px] xl:mr-10 flex flex-col justify-between">
            <div className="flex items-center">
              <img
                src={Image1}
                alt="paytm travel"
                className="pr-2.5 w-[150px]"
              />
            </div>
            <p>
              Best travel solutions with quick ticket bookings, great offers and
              easy refunds
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
                <PaytmTravelCard key={data.imgUrl} {...data} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaytmTravel;
