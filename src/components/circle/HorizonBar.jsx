import React, { useState, useRef, useEffect } from 'react'
import './circls-style.css'

const HorizonBar = ({ coinPercentState, coinUser, balance }) => {
    const [fitcoinBar, setFitCoinBar] = useState(null);
    const barRef = useRef(null)

    useEffect(() => {
        const barEnergy = barRef.current;

        if (barEnergy) {
            setFitCoinBar(coinPercentState)
            const animation = barEnergy.animate(
                [
                    { width: `${fitcoinBar}%` }
                ],
                {
                    duration: 2000,
                    easing: 'linear',
                    fill: 'forwards',
                }
            );
        }

    }, [coinPercentState, coinUser, balance, fitcoinBar])

    return (
        <div className="box-barw-full">
            <div className="font-roboto-mono text-white mb-6 lg:mb-14 md:mb-6 font-bold">Monthly Challenge</div>
            <p className="title-bar font-orbitron font-bold text-xl text-white mb-2">Octobar Move</p>
            <div className="bar-container
            relative bg-white-op40 w-311 lg:w-full md:w-311 h-15 rounded-full">
                <div id='fitcoin-bar' className="fitcoin-bar w-0 h-full 
                bg-blue absolute rounded-full" ref={barRef}>
                </div>
            </div>
            <div className="notation flex mt-5 gap-1 flex-wrap">
                <div className="coin flex mr-5">
                    <p className="notation-coin w-[30px] h-1 mr-4 bg-blue rounded-full relative top-2"></p>
                    <div className='flex flex-col'>
                        <p className='font-roboto-mono text-sm font-bold text-black-light'>Fitcoin</p>
                        <p className='font-roboto-mono text-sm font-bold text-white'>{balance}</p>
                    </div>
                </div>
                <div className="remaining flex mr-5">
                    <p className="notation-remaining w-[30px] h-1 mr-4 bg-white-op40 rounded-full relative top-2"></p>
                    <div className='flex flex-col'>
                        <p className='font-roboto-mono text-sm font-bold text-black-light'>Remaining</p>
                        <p className='font-roboto-mono text-sm font-bold text-white'>{coinUser}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HorizonBar