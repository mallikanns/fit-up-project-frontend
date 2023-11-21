import React, { useState, useEffect, useRef } from "react";
import list from './list.json'

const Dropdown = ({ setDuration, duration, formErrors }) => {
    const [IsOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const error = 'ring-1 ring-red'

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    return (
        <div ref={dropdownRef} className="">
            <button onClick={() => setIsOpen((prev) => !prev)} className={`${formErrors.duration ? error : ""} bg-black-dark w-[145px] h-12 px-4 flex items-center justify-between font-roboto-mono text-[16px] rounded 
            tracking-wider border-2 border-transparent active:border-pink duration-200 text-white active:text-[#FD00FE]`}> {duration || "Duration"}
                {!IsOpen ? <span className="material-symbols-outlined">stat_1</span> : <span className="material-symbols-outlined">stat_minus_1</span>}
            </button>

            {IsOpen &&
                <div className="scrollbar-hide overflow-auto bg-gray-900 h-[160px] w-[145px] absolute
            mt-2 flex flex-col items-start rounded-lg">
                    {list.map((item, i) => (
                        <div key={item.value} className=" text-white flex w-full p-3 justify-between hover:bg-[#FD00FE]  cursor-pointer rounded-lg
                            border-l-transparent font-roboto-mono text-[14px] active:bg-pink-light" onClick={() => setDuration(item.value)}>
                            <h3>{item.value}</h3>
                            <h3>minute</h3>
                            <h3>{item.emoticon}</h3>
                        </div>
                    ))}
                </div>
            }
        </div >
    );
};

export default Dropdown;