import React, { useState } from "react";
// import InputPassword from './Password';
import Successdialog from "../Successdialog";
import Datepicker from "react-tailwindcss-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form2 = ({ createUser, handleBack, toggleSignup }) => {
  const [dialogSuccess, setDialogSuccess] = useState(false);

  const toggleDialogSuccess = () => {
    setDialogSuccess(!dialogSuccess);
    toggleSignup();
  };

  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
    urlimg: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
    urlimg: "",
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGoBack = () => {
    handleBack();
  };

  const ErrorCreate = (message) => {
    return toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = "Please enter your username";
      isValid = false;
    }
    if (!formData.dob) {
      errors.dob = "Please select date of birth";
      isValid = false;
    }
    if (!["Male", "Female"].includes(formData.gender.trim())) {
      errors.gender = "Please select gender";
      isValid = false;
    }
    if (isNaN(formData.weight.trim())) {
      errors.weight = "Please enter valid weight";
      isValid = false;
    }
    if (!formData.weight.trim()) {
      errors.weight = "Please enter your weight";
      isValid = false;
    }
    if (isNaN(formData.height.trim())) {
      errors.height = "Please enter valid height";
      isValid = false;
    }
    if (!formData.height.trim()) {
      errors.height = "Please enter your height";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        let isSuccess = await createUser(formData);
        if (isSuccess) {
          setDialogSuccess(true);
          setIsLoading(false);
        }
      } catch (error) {
        ErrorCreate(error)
        setIsLoading(false);
      }


    } else {
      return
    }
  };

  const [image, setImage] = useState("");
  const [imgUploaded, setImgUploaded] = useState(false);

  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = async () => {
        setImage(reader.result);
        setImgUploaded(true);
        formData.urlimg = await uploadToCloudinary(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };



  const uploadToCloudinary = async (dataURL) => {
    try {
      setIsLoading(true);
      const response = await fetch(dataURL);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append('file', blob);
      formData.append('upload_preset', 'mia50bwk'); // Replace 'your_upload_preset' with your actual upload preset

      const url = `https://api.cloudinary.com/v1_1/depnyvk3i/image/upload`;

      const result = await fetch(url, {
        method: 'POST',
        body: formData,
      });


      if (result) {
        setIsLoading(false);
      }
      const data = await result.json();
      return data.secure_url;
      // Handle the response from Cloudinary here
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {!imgUploaded ? (
          <div className="avatar my-6 flex justify-center">
            <label
              htmlFor="image-upload"
              className="w-[123.33px] h-[123.33px] relative cursor-pointer rounded-md"
            >
              <span class="clickbutton material-symbols-outlined border-[3px] border-pink rounded-full bg-pink-op10 text-white text-[32px] p-[43px]">
                photo_camera
              </span>
              <input
                id="image-upload"
                name="image-upload"
                type="file"
                // value={image}
                onChange={handleImageChange}
                className="sr-only"
              />
            </label>
          </div>
        ) : (
          <div className="avatar my-6 flex justify-center">
            <div className="w-[123.33px] h-[123.33px] border-[3px] border-pink rounded-full">
              <img src={image} alt="profile picture"></img>
              {/* <img
                src="/src/assets/image/Activity/Run.png"
                alt="profile picture"
              /> */}
            </div>
          </div>
        )}

        <div className="w-full flex flex-col text-white">
          <label
            htmlFor="username"
            className="block font-roboto-mono text-sm pb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            className={`${formErrors.username === "Please enter your username"
              ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.username}
          </span>
        </div>

        <div className="w-full flex flex-col text-white">
          <label
            htmlFor="dateOfBirth"
            className="block font-roboto-mono text-sm pb-2"
          >
            Date of birth
          </label>
          <Datepicker
            primaryColor={"fuchsia"}
            placeholder={"Select date of birth"}
            popoverDirection="down"
            // containerClassName="relative h-12 w-343"
            inputClassName={`${formErrors.dob === "Please select date of birth"
              ? "text-gray-400 ring-1 ring-red w-full h-[48px] px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              : "text-gray-400 w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              }`}
            toggleClassName="text-gray-400 absolute rounded-r-lg text-white right-[10px] h-full px-3 
                        focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
            value={formData.dob}
            onChange={handleDateChange}
            // showShortcuts={true}
            useRange={false}
            asSingle={true}
            maxDate={new Date()}
            displayFormat={"DD MMM,YYYY"}
          />
          {/* <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dob}
            onChange={handleInputChange}
            placeholder="Select date of birth"
            className={`${
              formErrors.dob === "Please select date of birth"
                ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
            }`}
          /> */}
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.dob}
          </span>
        </div>

        <div className="w-full flex flex-col text-white">
          <label
            htmlFor="gender"
            className="text-white block font-roboto-mono text-sm pb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            placeholder="Select gender"
            style={{ color: '#7D7D7D' }}
            className={`${formErrors.gender === "Please select gender"
              ? "ring-1 ring-red w-full h-[48px] px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              }`}
          >
            <option className="text-gray-400 defaultSelected disabled">Select gender</option>
            <option className="text-white">Male</option>
            <option className="text-white">Female</option>
          </select>
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.gender}
          </span>
        </div>

        <div className="w-full flex flex-col text-white">
          <label
            htmlFor="weight"
            className="block font-roboto-mono text-sm pb-2"
          >
            Weight (kg)
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="Enter your weight"
            className={`${formErrors.weight === "Please enter your weight" ||
              formErrors.weight === "Please enter valid weight"
              ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.weight}
          </span>
        </div>

        <div className="w-full flex flex-col text-white">
          <label
            htmlFor="height"
            className="block font-roboto-mono text-sm pb-2"
          >
            Height (cm)
          </label>
          <input
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            placeholder="Enter your height"
            className={`${formErrors.height === "Please enter your height" ||
              formErrors.height === "Please enter valid height"
              ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
              }`}
          />
          <span className="my-2 mb-4 text-red text-xs font-roboto-mono font-bold">
            {formErrors.height}
          </span>
        </div>

        <div className="mb-4 font-roboto-mono text-xs text-gray-400">
          <p>
            By creating an account, you agree to Fit2E{" "}
            <a
              href="#"
              className="hover:underline hover:underline-offset-2 decoration-gray-400"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="hover:underline hover:underline-offset-2 decoration-gray-400"
            >
              Terms and Conditions
            </a>
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleGoBack}
            className="h-12 w-12 flex justify-center items-center pl-[8px] secondary-contained-button text-black-dark"
          >
            <span class="clickbutton material-symbols-outlined">
              arrow_back_ios
            </span>
          </button>
          <button
            type="submit"
            className="clickbutton h-12 w-[279px] primary-contained-button font-roboto-mono text-black-dark font-bold rounded"
          >
            Sign up
          </button>
          {dialogSuccess && (
            <div className="fixed inset-0 h-full w-full z-10">
              <div
                onClick={toggleDialogSuccess}
                className="bg-black-dark-op80 fixed inset-0 h-full w-full z-10"
              ></div>
              <Successdialog toggleDialogSuccess={toggleDialogSuccess} />
            </div>
          )}
        </div>
      </form>
      {isLoading ? (
        <div className="fixed inset-0 h-full w-full z-10">
          <div
            onClick={toggleDialogSuccess}
            className="bg-black-dark-op80 fixed inset-0 h-full w-full z-10"
          ></div>
          <div className="z-50 flex justify-center items-center h-screen animate-in zoom-in-50 bg-gray-op90">
            <span className="bg-red loading loading-dots loading-lg"></span>
          </div>
        </div>
      ) : (
        ""
      )}
      <ToastContainer />
    </>
  );
};

export default Form2;
