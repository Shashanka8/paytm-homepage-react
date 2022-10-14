import React from "react";

function HeaderInfo() {
  return (
    <section>
      <div className="text-center h-12 text-sm xl:text-[15px] bg-gray-100 font-semibold px-1">
        <span className="font-semibold pr-1">No Wallet KYC Required</span>
        <span className="text-lg xl:text-2xl pr-1">😊</span> to pay using UPI on
        Paytm.
        <a href="/" className="font-semibold pl-1">
          {" "}
          Learn more.
        </a>
      </div>
    </section>
  );
}

export default HeaderInfo;
