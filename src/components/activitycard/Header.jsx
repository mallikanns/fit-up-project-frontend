import React from "react";

const Header = () => {
  const currentDate = new Date();
  const currentWeekday = currentDate.toLocaleString("default", {weekday: "long",});
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toLocaleString("default", {month: "short",});
  return (
    <div>
      <h1 className="text-32 font-bold font-orbitron mt-10 sm:mt-14  md:mt-12 lg:mt-0">Dashboard</h1>
      <p className="font-roboto-mono">
        {currentWeekday}, {currentDay} {currentMonth}
      </p>
    </div>
  );
};

export default Header;
