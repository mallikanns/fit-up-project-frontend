import React from 'react';

const LoginButton = ({ login }) => {
  return (
    <button
      type="button"
      className="h-12 w-full bg-pink hover:bg-pink-medium active:bg-pink-light font-roboto-mono text-black-dark font-bold rounded"
      onChange={login}
    >
      Log in
    </button>
  );
};

export default LoginButton;
