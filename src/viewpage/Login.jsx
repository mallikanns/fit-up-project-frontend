import React, { useState, useContext } from "react";
import "../App.css";
import LogoSVG from "../components/signincomponents/LogoSVG";
import WelcomeWord from "../components/signincomponents/WelcomeWord";
import RememberMeCheckbox from "../components/signincomponents/RememberMeCheckbox";
import ForgotPassword from "../components/signincomponents/ForgotPassword";
import Divider from "../components/signincomponents/Divider";
import GoogleButton from "../components/signincomponents/GoogleButton";
import WelcomeImage from "../components/signincomponents/WelcomeImage";
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Signup1 from "../components/signup/Signup1";
import validator from "validator";


const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const userlogin = async () => {
    setIsLoading(true)
    const result = await auth.login(formData.email, formData.password);
  };



  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!validator.isEmail(formData.email)) {
      errors.email = "Please enter a valid email";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
      isValid = false;
    }

    //check valid password
    if (formData.password !== formData.password) {
      errors.repassword = "Incorrect email or password. Try again";
      isValid = false;
    }
    if (!formData.password.trim()) {
      errors.password = "Please enter your password";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const resultLogin = await userlogin();
      if (!resultLogin) {
        let errors = {};
        errors.email = "Incorrect email or password. Try again";
        errors.password = "Incorrect email or password. Try again";
        setFormErrors(errors);
        setIsLoading(false)
      }

      setIsLoading(false)
      if (localStorage.getItem('token')) {
        navigate("/dashboard");
      }
    } else {
      return
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="bg-black-medium flex items-center lg:w-full">
      <div className="hidden lg:block h-screen w-full">
        <WelcomeImage />
      </div>
      {showSignup ? <Signup1 toggleSignup={toggleSignup} /> : ""}
      <div className="flex flex-col justify-center items-center mx-auto gap-8 px-4 w-full sm:max-w-[400px] lg:max-w-[400px] lg:mx-20">
        <div className="pt-8 lg:pt-0 ">
          <LogoSVG />
        </div>
        <WelcomeWord />
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col justify-center items-center w-full gap-1">
            <div className="w-full flex flex-col gap-2 text-white">
              <label htmlFor="email" className="block font-roboto-mono text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`${formErrors.email === "Please enter your email" ||
                  formErrors.email === "Please enter a valid email" ||
                  formErrors.password === "Incorrect email or password. Try again"
                  ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                  : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                  }`}
              />
              <span className="my-2 text-red text-xs font-roboto-mono font-bold">
                {formErrors.email}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-4">
              <div className="w-full flex flex-col gap-2 text-white">
                <label
                  htmlFor="password"
                  className="block font-roboto-mono text-sm"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className={`${formErrors.password === "Please enter your password" ||
                      formErrors.password ===
                      "Incorrect email or password. Try again"
                      ? "ring-1 ring-red w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                      : "w-full px-4 py-3 mb-0 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
                      }`}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                  >
                    {showPassword ? (
                      <i className="material-symbols-outlined text-gray-400">
                        visibility_off
                      </i>
                    ) : (
                      <i className="material-symbols-outlined text-gray-400">
                        visibility
                      </i>
                    )}
                  </span>
                </div>
                <span className="my-2 text-red text-xs font-roboto-mono font-bold">
                  {formErrors.password}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <RememberMeCheckbox />
              <ForgotPassword />
            </div>
          </div>
          <button
            type="submit"
            className="h-12 w-full bg-pink hover:bg-pink-medium active:bg-pink-light font-roboto-mono text-black-dark font-bold rounded"
          >
            Log in
          </button>
        </form>
        <Divider />
        <GoogleButton />
        <div className="flex justify-between items-center gap-2">
          <div className="label-text font-roboto-mono text-sm text-white">
            Don’t have an account?{" "}
          </div>
          <button onClick={toggleSignup}>
            <a
              href="#"
              className="label-text font-roboto-mono text-sm font-bold text-pink hover:underline"
            >
              Sign up
            </a>
          </button>
          {isLoading ? (
            <div className="fixed inset-0 h-full w-full z-10">
              <div className="z-50 flex justify-center items-center h-screen animate-in zoom-in-50 bg-gray-op90">
                <span className="bg-red loading loading-dots loading-lg"></span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
