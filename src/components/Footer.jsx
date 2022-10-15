import React from "react";

import AppStore from "../assets/app-store.svg";
import PlayStore from "../assets/play-store.svg";
import TwitterLogo from "../assets/twitter-logo.svg";
import IGLogo from "../assets/instagram-logo.svg";
import FBLogo from "../assets/facebook-logo.svg";

function Footer() {
  return (
    <footer style={{ background: "#f5f7fa" }}>
      <div className="w-full xl:w-[1260px] py-10 xl:py-20 m-auto">
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-between">
          <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between">
            <span className="w-[230px] font-semibold text-black text-xl mb-2 md:mb-0">
              Download Paytm App to Pay from anywhere
            </span>
            <a href="/">
              <img
                src={AppStore}
                alt="app-store"
                className="mr-2.5 mb-2 md:mb-0"
              />
            </a>
            <a href="/">
              <img
                src={PlayStore}
                alt="app-store"
                className="mr-2.5 mb-2 md:mb-0"
              />
            </a>
          </div>
          <div className="flex mt-8 md:mt-0 mx-auto md:mx-0">
            <a href="/">
              <img src={TwitterLogo} alt="twitter-logo" className="w-6 mr-7" />
            </a>
            <a href="/">
              <img src={IGLogo} alt="instagram-logo" className="w-6 mr-7" />
            </a>
            <a href="/">
              <img src={FBLogo} alt="facebook-logo" className="w-3 mr-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
