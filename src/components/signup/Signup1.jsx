import React, { useState } from "react";
import Form1 from "./component/Form1";
import Page2 from "./Signup2";
import axios from "axios";

const Signup1 = ({ toggleSignup }) => {
  const [data, setData] = useState({});
  const [isNext, setIsNext] = useState(false);

  const handleBack = () => {
    setIsNext(false);
  };

  const createUser = (formData2) => {
    const formData = {
      user_firstName: data.firstname,
      user_lastName: data.lastname,
      user_email: data.email,
      user_username: formData2.username,
      user_password: data.password,
      user_birthDate: formData2.dob.startDate,
      user_Gender: formData2.gender,
      user_weight: formData2.weight,
      user_height: formData2.height,
      user_image: formData2.urlimg || 'https://res.cloudinary.com/depnyvk3i/image/upload/v1697558091/img/gipe5emvoyfgnhvcjg7b.png'
    };

    return new Promise((resolve, reject) => {
      axios
        .post('https://fit-up-project-backend.onrender.com/users/', formData)
        .then(async (response) => {
          let result = await response
          resolve(true);
        })
        .catch((error) => {
          reject(error.response.data.message);
        })
        .finally(() => {
        });
    });
  };


  return (
    <div className="dialog-container  z-50 flex justify-center items-center h-full w-screen animate-in zoom-in-50 bg-gray-op90">
      <div className="bg-black-medium w-[375px] h-full lg:w-[423px] lg:p-10 lg:pt-1">
        {
          isNext ? (<Page2 toggleSignup={toggleSignup} createUser={createUser} handleBack={handleBack} />) :
            <div>
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
              <div className="px-4 py-6 lg:px-0 lg:pt-2">
                <div className='text-black-light font-roboto-mono'>
                  <p><span className='font-bold'>Step 1 </span>of 2</p>
                </div>
                <div className="py-6">
                  <button
                    type="button"
                    className="flex items-center justify-center h-12 w-full bg-pink-op10 border border-2 border-pink font-roboto-mono text-white font-bold rounded relative hover:bg-pink-op20 active:bg-pink-op30"
                  >
                    <span>
                      <img
                        src="/svg/GoogleLogo.svg"
                        alt="Google Logo"
                        className=" mr-2"
                      />
                    </span>
                    <div>
                      Continue with Google
                    </div>
                  </button>
                </div>
                <div className="flex items-center w-full pb-6">
                  <div className="w-full border-b-half border rounded border-white-op20"></div>
                  <div className="px-4 font-roboto-mono text-sm text-white-op40">OR</div>
                  <div className="w-full border-b-half border rounded border-white-op20"></div>
                </div>
                <Form1 setData={setData} setIsNext={setIsNext} />
              </div>
            </div>
        }
      </div>
    </div>
  );
};

export default Signup1;
