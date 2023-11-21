import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-14 bg-black-dark flex items-center justify-center text-white lg:pt-0 lg:flex lg:flex-col lg:items-start lg:justify-center lg:bg-transparent">
        <div className="font-roboto-mono font-bold text-sm lg:font-orbitron lg:text-xl lg:pb-2">
          Create your account
        </div>
        <div className="lg:w-full lg:border-b-half lg:border lg:rounded lg:border-black-light"></div>
        <button className="absolute left-6 top-4 lg:relative lg:left-0 lg:top-0">
          <span className="clickbutton material-symbols-outlined lg:absolute lg:left-[320px] lg:-top-10 hover:cursor-pointer">
            close
          </span>
        </button>
      </div>
    </>
  );
};

export default Header;
