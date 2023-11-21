import 'react-toastify/dist/ReactToastify.css';

const Createmobile = ({ toggleDialogAct }) => {

  return (
    <>
      <button
        onClick={() => toggleDialogAct()}
        className="mb-4 clickbutton bordercreate w-343 h-108 flex justify-center items-center gap-2.5"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
              fill="#FD00FE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30C6 43.2548 16.7452 54 30 54Z"
              fill="#FD00FE"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 4V20M20 12L4 12"
                stroke="#1C1B1F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="font-semibold font-roboto-mono">Add new activity</div>
      </button>
    </>
  );
};

export default Createmobile;
