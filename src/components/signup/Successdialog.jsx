import React from "react";
import bgSuc from "../../assets/image/Activity/bgsuccess.png";
import suc from "../../assets/image/Activity/success.png";

const Successdialog = ({ toggleDialogSuccess }) => {
  return (
    <div className="z-50 flex justify-center items-center h-screen animate-in zoom-in-50 bg-gray-op90">
      <div className="relative w-343 h-488 bg-black-medium rounded-lg my-6 flex flex-col items-center px-10 pt-55 lg:justify-center">
        <img
          src={bgSuc}
          className="absolute h-full w-full bottom-2 lg:bottom-20 lg:h-auto"
          alt="bgSuccess"
        />
        <img
          src={suc}
          className="z-50"
          alt="Success"
        />
        <div className="z-50">
          <h3 className="font-orbitron text-white text-xl font-bold w-262 h-auto text-center mt-11 mb-2">
            Success
          </h3>
          <p className="font-roboto-mono text-black-light w-262 h-auto mb-8 text-center">
            Congratulations! Your account has been successfully created.
          </p>
        </div>
        <div className="z-50">
          <button
            onClick={toggleDialogSuccess}
            className="primary-contained-button clickbutton flex justify-center items-center w-[263px] h-[48px] p-3 rounded text-black-dark font-roboto-mono font-bold"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Successdialog;
