import React, { useState } from 'react';

const InputPassword = ({ setDataLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setDataLogin((e) => ({ ...e, 'user_password': e.target.value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col gap-2 text-white">
      <label htmlFor="password" className="block font-roboto-mono text-sm">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          className="w-full px-4 py-3 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
        >
          {showPassword ? (
            <i className="material-symbols-outlined text-gray-400">visibility_off</i>
          ) : (
            <i className="material-symbols-outlined text-gray-400">visibility</i>
          )}
        </span>

      </div>
    </div>
  );
};

export default InputPassword;
