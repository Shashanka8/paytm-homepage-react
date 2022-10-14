import React from "react";

import HeroLeftImg from "../assets/hero-left-img.png";
import HeroImage from "../assets/hero-image.webp";

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

        <div className="group flex justify-center items-center px-4 h-11 bg-black text-white font-medium border border-black rounded-3xl w-fit hover:text-black hover:bg-white cursor-pointer ml-2 xl:ml-0">
          Download Paytm App
          <a href="/" className="pl-4">
            <svg
              className="group-hover:fill-black"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z"></path>
            </svg>
          </a>
          <a href="/" className="pl-4">
            <svg
              className="group-hover:fill-black"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Hero;
