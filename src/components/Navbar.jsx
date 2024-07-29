import React from "react";
import Logo from "../assets/one-life-logo-white.png";
import { IoSearch, IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const handleClick = () => {
    document.querySelector('.input').focus();
  };
  return (
    <div
      className=" cursor-pointer px-12 py-10 justify-between flex items-center sticky top-0 bg-[#0c2126]"
      onClick={handleClick}
    >
      <img src={Logo} alt="logo" />
      <div className="text-white bg-[#1E424A] w-[500px] h-[58px] rounded-full items-center justify-start flex px-10 gap-8 border border-white/60 ">
        <IoSearch className="w-auto h-6" />
        <span className="text-[#FFFFFF]/50">Search</span>
        <input
          type="text"
          className="input bg-transparent text-white overflow-x-auto absolute flex flex-grow outline-none"
        />
      </div>
      <button className="px-8 py-3 bg-white text-[#1E424A] rounded-xl flex items-center hover:cursor-pointer hover:bg-[#1E424A] hover:text-white text-xl font-semibold">
        Signup
      </button>
    </div>
  );
};

export default Navbar;
