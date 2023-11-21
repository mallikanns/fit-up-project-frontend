import React, { useState } from "react";
// import "../App.css";
import Form2 from "./component/Form2";

const Signup2 = ({ createUser, handleBack, toggleSignup }) => {
  const [dialogSuccess, setDialogSuccess] = useState(false);

  const toggleDialogSuccess = () => {
    setDialogSuccess(!dialogSuccess);
  };

  return (
    <div className="z-50 flex justify-center items-center h-full  bg-gray-op90">
      <div className="bg-black-medium w-[375px] h-full lg:w-[423px] lg:px-10 lg:pb-10">
        <div className="h-14 bg-black-dark flex items-center justify-center text-white lg:pt-0 lg:flex lg:flex-col lg:items-start lg:justify-center lg:bg-transparent">
          <div className="font-roboto-mono font-bold text-sm lg:font-orbitron lg:text-xl lg:pb-2">
            Create your account
          </div>
          <div className="lg:w-full lg:border-b-half lg:border lg:rounded lg:border-black-light"></div>
          <button onClick={toggleSignup} className="absolute left-6 top-4 lg:relative lg:left-0 lg:top-0">
            <span className="clickbutton material-symbols-outlined lg:absolute lg:left-[320px] lg:-top-10 hover:cursor-pointer">
              close
            </span>
          </button>
        </div>
        <div className="px-4 py-6 lg:px-0 lg:pt-0">
          <div className="text-black-light font-roboto-mono">
            <p>
              <span className="font-bold">Step 2 </span>of 2
            </p>
          </div>
          <div>
            <Form2 createUser={createUser} toggleSignup={toggleSignup} handleBack={handleBack} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
