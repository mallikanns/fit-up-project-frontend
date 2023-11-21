import React, { useState } from "react";

const InputPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [repassword, setRePassword] = useState("");
  const [showRePassword, setShowRePassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2 text-white">
        <label htmlFor="password" className="block font-roboto-mono text-sm pb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className="w-full px-4 py-3 mb-4 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
          />
          <span
            onClick={togglePasswordVisibility}
            className="h-[48px] absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
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
      </div>

      <div className="w-full flex flex-col gap-2 text-white">
        <label htmlFor="repassword" className="block font-roboto-mono text-sm pb-2">
          Re-enter Password
        </label>
        <div className="relative">
          <input
            type={showRePassword ? "text" : "password"}
            id="repassword"
            name="repassword"
            value={repassword}
            onChange={handleRePasswordChange}
            placeholder="Re-enter your password"
            className="w-full px-4 py-3 mb-2 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
          />
          <span
            onClick={toggleRePasswordVisibility}
            className="h-[48px] absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
          >
            {showRePassword ? (
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
      </div>
    </>
  );
};

export default InputPassword;
