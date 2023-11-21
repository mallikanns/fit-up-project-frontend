import React, { useState } from 'react';

const InputEmail = ({ setDataLogin }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setDataLogin((e) => ({ ...e, 'user_username': e.target.value }));
  };

  return (
    <div className="w-full flex flex-col gap-2 text-white">
      <label htmlFor="email" className="block font-roboto-mono text-sm">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="w-full px-4 py-3 bg-black-dark rounded font-roboto-mono hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-pink focus:ring-1 input-placeholder-color"
      />
    </div>
  );
};

export default InputEmail;
