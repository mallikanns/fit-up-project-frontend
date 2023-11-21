import React, { useState } from 'react'
import { useAuth } from "../auth/AuthContext";
import HamMyLoader from './HamMyLoader';

const Hamber = () => {
  const [ham, setHam] = useState(false);
  const auth = useAuth()



  const logout = () => auth.logout()

  return (
    <div className=''>
      {/* Moblie */}
      <div className='inline sm:hidden text-white '>
        <div className="top-0  mt-4 pr-4 w-full h-[56px]">
          <div onClick={() => setHam(!ham)} className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] bg-pink rounded-full text-black-dark">
            <span class="material-symbols-outlined">account_circle</span>
          </div>
        </div>

        {ham ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0"></div>
        ) : (
          ""
        )}

        {/* Side drwer menu */}
        <div
          className={
            ham
              ? "fixed top-0 right-0 w-[300px] h-screen bg-black-medium bg-opacity-70 bg-blur-xl z-10 duration-300 text-white"
              : "fixed top-0 right-[-100%] w-[300px] h-screen bg-black-medium bg-opacity-70 bg-blur-xl z-10 duration-300 text-white"
          }
        >

          <div
            onClick={() => setHam(!ham)}
            className="absolute right-3 mt-10 pt-3 cursor-pointer h-0 "
          // className="fixed inset-0 h-full w-full z-10"
          >
            <span class="material-symbols-outlined">close</span>
          </div>

          <nav>
            <ul className="flex flex-col items-center pl-0 pr-4 mt-10 pt-3 ">
              <li className="">
                <button className="text-gray-400 font-roboto-mono pl-4 w-52 h-14 bg-opacity-70 bg-blur-xl flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">account_circle</span> Proflie
                </button>
              </li>
              <li>
                <button className="text-gray-400 font-roboto-mono pl-4 w-52 h-14 bg-opacity-70 bg-blur-xl flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">info</span> Help & Support
                </button>
              </li>
              <li>
                <button className="text-gray-400 font-roboto-mono pl-4 w-52 h-14 bg-opacity-70 bg-blur-xl flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">settings</span> Setting
                </button>
              </li>
              <li>
                <button onClick={logout} className="font-roboto-mono hover:font-bold pl-4 w-52 h-14 bg-opacity-70 bg-blur-xl hover:bg-red hover:text-black flex items-center gap-6 rounded-lg">
                  <span class="material-symbols-outlined">logout</span> Sign Out
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>


      {/* Desktop */}
      {auth.user ? (<div className='hidden sm:inline '>
        <div className="flex  border-solid ">
          <div className="mr-6 m-1 mt-4">
            <button className="h-10 w-10 mr-6 rounded-full p-0 hover:bg-black-dark text-gray-400 clickbutton">
              <span class="material-symbols-outlined">sms</span>
            </button>
            <button className="h-10 w-10 rounded-full p-0 hover:bg-black-dark text-gray-400 clickbutton">
              <span class="material-symbols-outlined">notifications</span>
            </button>
          </div>
          <div className='rounded-lg'>
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn m-1 bg-pink font-bold text-base">
                {auth.user.username}
              </label>
              <ul
                tabIndex={0}
                className=" dropdown-content z-[20] menu p-2 shadow text-base w-52 bg-black-medium text-gray-400 rounded border border-white "
              >
                <li>
                  <a className='hover:text-gray-400'> <span class="material-symbols-outlined">account_circle</span> Proflie</a>
                </li>
                <li>
                  <a className='hover:text-gray-400'> <span class="material-symbols-outlined">info</span> Help & Support</a>
                </li>
                <li>
                  <a className='hover:text-gray-400'> <span class="material-symbols-outlined">settings</span> Setting</a>
                </li>
                <div className="border-b-2 border-black-light"></div>
                <li>
                  <a className='text-red hover:text-red hover:bg-white-op70' onClick={logout}> <span class="material-symbols-outlined ">logout</span> Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>) : <HamMyLoader />}

    </div>
  )
}

export default Hamber