import 'react-toastify/dist/ReactToastify.css';
import bgBlueC from "../../assets/image/Activity/bgBluecoin.png";
import DollarC from "../../assets/image/Activity/Dollar.png";

const Default = ({ toggleDialogAct }) => {

  return (
    <div className="relative borderdefault w-343 h-444 flex flex-col items-center px-10 pt-55 lg:h-856 lg:justify-center z-10">
      <img src={bgBlueC} className="absolute h-full w-full bottom-6 lg:top-36 lg:h-auto" alt="Dollar" />
      <img src={DollarC} className="z-50" alt="Dollar" />
      <div className="z-50">
        <h3 className="font-orbitron text-xl font-bold w-228 h-30 text-center mt-11 mb-2">
          Create an Activity
        </h3>
        <p className="font-roboto-mono text-black-light w-228 h-11 mb-8 text-center">
          Let's Turn Activity into Earnings
        </p>
      </div>
      <div className="z-50 clickbutton">
        <button onClick={() => toggleDialogAct()} className="flex justify-center items-center bg-pink w-263 h-12 text-black-dark font-roboto-mono font-bold rounded">
          <span class="material-symbols-outlined pr-2.5 ">add_circle</span>
          Create new activity
        </button>
      </div>
    </div>
  )
};

export default Default;