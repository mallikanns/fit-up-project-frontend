import React from 'react';

const Divider = () => {
  return (
    <div className="flex items-center w-full pb-6">
      <div className="w-full border-b-half border rounded border-white-op20"></div>
      <div className="px-4 font-roboto-mono text-sm text-white-op40">OR</div>
      <div className="w-full border-b-half border rounded border-white-op20"></div>
    </div>
  );
};

export default Divider;
