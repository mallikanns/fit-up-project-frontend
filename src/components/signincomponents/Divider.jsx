import React from 'react';

const Divider = () => {
  return (
    <div className="flex items-center w-full">
      <div className="w-full border-b-half border rounded border-black-light"></div>
      <div className="px-4 font-roboto-mono text-sm text-black-light">OR</div>
      <div className="w-full border-b-half border rounded border-black-light "></div>
    </div>
  );
};

export default Divider;
