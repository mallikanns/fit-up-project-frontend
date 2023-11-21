import React from 'react';

const RememberMeCheckbox = ({ rememberMe, onToggle }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox" 
        id="rememberMe"
        name="rememberMe"
        checked={rememberMe}
        onChange={onToggle}
        className="mr-2 w-5 h-5 cursor-pointer accent-pink"
      />
      <label
        htmlFor="rememberMe"
        className="label-text font-roboto-mono text-sm text-black-light cursor-pointer"
      >
        Remember Me
      </label>
    </div>
  );
};

export default RememberMeCheckbox;
