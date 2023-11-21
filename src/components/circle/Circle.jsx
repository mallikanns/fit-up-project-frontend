import React, { useEffect, useRef, useState } from 'react';
import './circls-style.css'
import HorizonBar from './HorizonBar.jsx'
import { GetUser } from '../../crud/GetUser'
import { useAuth } from "../auth/AuthContext";

const Circle = ({ activities, user, createSuccess }) => {
    const circleRef = useRef(null);
    const auth = useAuth()
    const [coinState, setCoinState] = useState(0)
    const [coinPercentState, setCoinPercentState] = useState(0)
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        const GetdataUser = (user) => {
            if (user) {
                GetUser(user._id).then((res) => {
                    setCoinState(res.user_coin)
                    setBalance(res.balance)

                    const coinPercent2 = (100 * res.user_coin) / 30000
                    setCoinPercentState(coinPercent2)

                    // (100 * x) / 30000 
                    const circle = circleRef.current;

                    const coinPercent = coinPercent2 / 100;
                    const valueStroke = 551 - 551 * coinPercent;

                    if (circle) {
                        const animation = circle.animate(
                            [
                                { strokeDashoffset: 551 },
                                { strokeDashoffset: valueStroke },
                            ],
                            {
                                duration: 2000, // 2 seconds
                                easing: 'linear',
                                fill: 'forwards',
                            }
                        );
                    }

                })

            }

        }

        GetdataUser(user)

        if (createSuccess) {
            GetdataUser(user)
        }


    }, [createSuccess, coinState, coinPercentState, balance, activities]);

    // (100 * x) / 30000  
    return (
        <div className="w-343 lg:w-full h-537 lg:h-324 lg:flex " >
            <div className="title-circle font-roboto-mono font-bold text-white mb-3 lg:hidden">
                <p>Today Earn</p>
            </div>
            <div className="circle w-full lg:w-254 h-136 lg:h-full relative ml-54 lg:ml-6">
                <div className="title-circle font-roboto-mono font-bold text-white mb-3 hidden lg:inline-block">
                    <p>Today Earn</p>
                </div>
                <div className="outer w-204 h-204 p-26 rounded-full bg-white-op40">
                    <div className="inner w-full h-full bg-[#020005] bg-opacity-70  rounded-full flex items-center justify-center">
                        <div className="info-circle flex flex-col justify-start gap-1">
                            <h3 className="text-blue font-orbitron font-bold text-2xl">
                                +{coinState}
                            </h3>
                            <p className='text-black-light font-roboto-mono text-sm text-center'>FitCoin</p>
                        </div>
                    </div>
                    <svg className='absolute top-0 lg:top-9 left-0 w-204 h-204 -rotate-90' xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <circle className="fill-none stroke-blue w-full h-full stroke-25" cx="102" cy="102" r="89" stroke-linecap="round" ref={circleRef} id="circle" />
                    </svg>
                </div>
                <div className="footer-circle w-full h-auto m-3 lg:m-0 lg:mt-2 text-white font-roboto-mono text-sm ml-0
            "><p className='flex items-center gap-1'><span className='material-symbols-outlined text-2xl'> monetization_on </span>Total Balance: {coinState}</p>
                </div>
            </div>
            <div className='relative w-311 lg:w-419 md:w-311 top-0 hidden lg:inline-block'>
                < HorizonBar coinPercentState={coinPercentState} coinUser={coinState} balance={balance} />
            </div>

            <div className='relative top-[140px] inline-block lg:hidden'>
                < HorizonBar coinPercentState={coinPercentState} coinUser={coinState} balance={balance} />
            </div>
        </div >
    )
}

export default Circle