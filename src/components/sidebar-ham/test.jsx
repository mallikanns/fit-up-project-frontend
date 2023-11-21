import React from "react";
import { useState } from "react";
import Hamber from "./Hamber";
// import logo from '.../assets/image/Logo/Logo.png'
export function Sidebar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="">
      {/* Mobile */}
      <div className=" px-4 w-full  items-center z-40 fixed left-0  lg:hidden bg-black-dark sm:pt-5 ">
        
        <div className="w-full md:bg-transparent">
          
          <div className="flex justify-between items-center">

          <div onClick={() => setNav(!nav)} className=" cursor-pointer flex  text-white clickbutton">
            <span class="material-symbols-outlined">menu</span>
            <div className=" w-[58px] h-[25.053px] ml-2 justify-center text-center  inline sm:hidden ">
            <img
              src="/src/assets/image/Logo/Logo.png"
              alt="is missing"
              className=""
            />
          </div>
          </div>
          <div className="lg:hidden">
          <Hamber/>
          </div>

          </div>
          
          
        
        </div>

        {/* Modile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        {/* <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> */}

        {/* Side drwer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
          }
        >

          <div
            onClick={() => setNav(!nav)}
            className="absolute right-3 mt-10 pt-3 cursor-pointer h-0 "
          // className="fixed inset-0 h-full w-full z-10"
          >
            <span class="material-symbols-outlined">close</span>
          </div>

          <nav>
            <ul className="flex flex-col items-center pl-0 pr-4 mt-10 pt-3 ">
              <li className="">
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                  <span class="material-symbols-outlined">dashboard</span>
                  Dashboard
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                  <span class="material-symbols-outlined">date_range</span>
                  Workouts
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                  <span class="material-symbols-outlined">paid</span>
                  Wallet
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                  <span class="material-symbols-outlined">redeem</span>
                  Reward
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                  <span class="material-symbols-outlined">rss_feed</span>
                  Feed
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                  <span class="material-symbols-outlined">
                    local_fire_department
                  </span>
                  Challenges
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                  <span class="material-symbols-outlined">emoji_events</span>
                  Leaderboard
                </button>
              </li>
              <li>
                <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                  <span class="material-symbols-outlined">ad_units</span>
                  Device
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      

      {/* Desktop */}
      {/* w-240 */}
      <div className="lg:border lg:border-pink lg:h-full">
      <div className="w-240 m-0 p-0  top-0 left-0 hidden lg:inline bg-white">
        
        <div className=" bg-black-medium top-0 left-0 h-full text-white pt-10">
          <div className="flex justify-center text-center pb-10">
            <img
              src="/src/assets/image/Logo/Logo.png"
              alt="is missing"
              className=""
            />
          </div>
          <ul className="flex flex-col items-center pl-4 pr-4">
            <li className="">
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                <span class="material-symbols-outlined">dashboard</span>
                Dashboard
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                <span class="material-symbols-outlined">date_range</span>
                Workouts
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                <span class="material-symbols-outlined">paid</span>
                Wallet
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                <span class="material-symbols-outlined">redeem</span>
                Reward
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                <span class="material-symbols-outlined">rss_feed</span>
                Feed
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                <span class="material-symbols-outlined">
                  local_fire_department
                </span>
                Challenges
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                <span class="material-symbols-outlined">emoji_events</span>
                Leaderboard
              </button>
            </li>
            <li>
              <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg clickbutton">
                <span class="material-symbols-outlined">ad_units</span>
                Device
              </button>
            </li>
          </ul>
        </div>
      </div>
      </div>
      
    </div>
  );
};

<<<<<<< Updated upstream
  {nav ? (
    <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0"></div>
  ) : (
    ""
  )}

  {/* Side drwer menu */}
  <div
    className={
      nav
        ? "fixed top-0 right-0 w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
        : "fixed top-0 right-[-100%] w-[300px] h-screen bg-black-medium z-10 duration-300 text-white"
    }
  >
    <div
      onClick={() => setHam(!ham)}
      className="absolute right-3 mt-10 pt-3 cursor-pointer h-0 "
    >
      <span class="material-symbols-outlined">close</span>
    </div>

    <nav>
      <ul className="flex flex-col items-center pl-0 pr-4 mt-10 pt-3 ">
        <li className="">
          <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
            <span class="material-symbols-outlined">dashboard</span>
            Dashboard
          </button>
        </li>
        <li>
          <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
            <span class="material-symbols-outlined">date_range</span>
            Workouts
          </button>
        </li>
        <li>
          <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
            <span class="material-symbols-outlined">paid</span>
            Wallet
          </button>
        </li>
        <li>
          <button className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-black-medium hover:bg-pink hover:text-black-slid flex items-center gap-6 rounded-lg">
            <span class="material-symbols-outlined">redeem</span>
            Reward
          </button>
        </li>
      </ul>
    </nav>
  </div>
</div>;


{/* <div className='hidden sm:inline absolute right-0'>
        <div className="flex mr-14 border-solid border border-pink">
          <div className="mr-6 m-1 mt-4">
            <button className="h-10 w-10 mr-6 rounded-full p-0 hover:bg-black-dark hover:text-white border-solid border border-pink">
              <span class="material-symbols-outlined">sms</span>
            </button> */}
=======
// export default Sidebar;
>>>>>>> Stashed changes
