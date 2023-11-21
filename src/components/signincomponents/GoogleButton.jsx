import React from 'react';

const GoogleButton = () => {
  return (
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
  );
};

export default GoogleButton;
