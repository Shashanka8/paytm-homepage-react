import React from "react";

import MenuIcon from "../assets/menu-icon.svg";
import PaytmLogo from "../assets/paytm_logo.png";
import UserIcon1 from "../assets/user-icon1.svg";
import UserIcon2 from "../assets/user-icon2.svg";

function Header() {
  return (
    <header className="shadow-lg">
      <div className="flex items-center justify-between mx-auto w-full xl:w-[90%] py-4 px-2 xl:px-0">
        <div>
          <img
            src={MenuIcon}
            alt="menu-icon"
            className="inline xl:hidden h-6 cursor-pointer"
          />
          <img
            src={PaytmLogo}
            alt="logo"
            className="inline w-[120px] sm:w-[150px] xl:w-[180px] cursor-pointer"
          />
        </div>
        <nav className="hidden xl:block">
          <ul className="flex">
            <li className="mr-1 p-1 font-semibold cursor-pointer hover:bg-[#F5F7FA]">
              <a
                href="/"
                className="m-4 text-[17px] hover:transition-all hover:duration-300 hover:ease-in"
              >
                Paytm for Consumer
              </a>
            </li>
            <li className="mr-1 p-1 font-semibold cursor-pointer hover:bg-[#F5F7FA]">
              <a
                href="/"
                className="m-4 text-[17px] hover:transition-all hover:duration-300 hover:ease-in"
              >
                Paytm For Business
              </a>
            </li>
            <li className="mr-1 p-1 font-semibold cursor-pointer hover:bg-[#F5F7FA]">
              <a
                href="/"
                className="m-4 text-[17px] hover:transition-all hover:duration-300 hover:ease-in"
              >
                Company
              </a>
            </li>
            <li className="mr-1 p-1 font-semibold cursor-pointer hover:bg-[#F5F7FA]">
              <a
                href="/"
                className="m-4 text-[17px] hover:transition-all hover:duration-300 hover:ease-in"
              >
                Investor Relations
              </a>
            </li>
            <li className="mr-1 p-1 font-semibold cursor-pointer hover:bg-[#F5F7FA]">
              <a
                href="/"
                className="m-4 text-[17px] hover:transition-all hover:duration-300 hover:ease-in"
              >
                Career
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <div
            id="signin"
            className="group flex items-center bg-paytm font-bold p-0.5 pl-5 rounded-[20px] cursor-pointer hover:bg-paytmhover"
          >
            <span className="text-white">Sign In</span>
            <img
              src={UserIcon1}
              alt="user"
              id="user-img"
              className="inline group-hover:hidden rounded-full h-8 w-8 ml-2"
            />
            <img
              src={UserIcon2}
              alt="user"
              id="user-img"
              className="hidden group-hover:inline rounded-full h-8 w-8 ml-2"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
