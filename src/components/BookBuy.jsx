import React from "react";

import Image1 from "../assets/section2_1.png";
import Image2 from "../assets/section2_2.png";
import Image3 from "../assets/section2_3.png";
import Image4 from "../assets/section2_4.png";
import Image5 from "../assets/section2_5.png";
import Image6 from "../assets/section2_6.png";
import Image7 from "../assets/section2_7.webp";
import BookBuyCard from "./BookBuyCard";

function BookBuy() {
  const cardsData = [
    {
      heading: "Movie",
      subHeading: "Tickets",
      imgUrl: Image1,
    },
    {
      heading: "Flight",
      subHeading: "Tickets",
      imgUrl: Image2,
    },
    {
      heading: "Bus",
      subHeading: "Tickets",
      imgUrl: Image3,
    },
    {
      heading: "Train",
      subHeading: "Tickets",
      imgUrl: Image4,
    },
    {
      heading: "Car &",
      subHeading: "Bikes",
      imgUrl: Image5,
    },
    {
      heading: "International",
      subHeading: "Flights",
      imgUrl: Image6,
    },
    {
      heading: "Invest",
      subHeading: "in Stocks",
      imgUrl: Image7,
    },
  ];

  return (
    <section style={{ background: "#0f4a8a" }}>
      <div class="max-w-7xl m-auto">
        <div class="py-16">
          <h1 class="text-white font-bold text-4xl flex items-center">
            Book & Buy on Paytm.
          </h1>
          <div class="flex flex-wrap xl:flex-nowrap mt-6">
            {cardsData.map((data) => (
              <BookBuyCard key={data.imgUrl} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookBuy;
