import React from "react";

import Image1 from "../assets/section13_1.webp";
import Image2 from "../assets/section13_2.webp";
import Image3 from "../assets/section13_3.webp";
import Image4 from "../assets/section13_4.webp";

import BusinessToolsCard from "./BusinessToolsCard";

function BusinessTools() {
  const cardsData = [
    {
      heading1: "POS Billing",
      heading2: "Software",
      body: "Say Hello to Smart Retail Business Management",
      imgUrl: Image1,
    },
    {
      heading1: "Paytm for",
      heading2: "Business App",
      body: "Everything you need to manage your business on your phone",
      imgUrl: Image2,
    },
    {
      heading1: "Advertise on",
      heading2: "Paytm",
      body: "Grow your business by advertising on India's largest mobile business",
      imgUrl: Image3,
    },
    {
      heading1: "Business",
      heading2: "Khata",
      body: "Managing Khata made easy",
      imgUrl: Image4,
    },
  ];

  return (
    <section className="bg-white">
      <div className="w-full xl:w-[1170px] m-auto py-10 xl:py-[120px]">
        <h1 className="pb-10 xl:pb-[89px] w-full xl:w-[480px] font-bold text-4xl xl:text-[40px] xl:leading-[48px]">
          Business Tools to help your business grow
        </h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap">
          {cardsData.map((data) => (
            <BusinessToolsCard key={data.imgUrl} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessTools;
