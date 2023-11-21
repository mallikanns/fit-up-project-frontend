import React from "react";
import axiosService from "../../service/axiosService";
import bgDel from "../../assets/image/Activity/bgdelete.png";
import Del from "../../assets/image/Activity/delete.png"
import { GetActivityTodayDataById } from "../../crud/GetActivityTodayDataById";

const Deletedialog = ({ Success, setActivities, setHaveCard, activityUserId, toggleDialogdel, activityId, reload, setReload, setCreateSuccess, deleteSuccess }) => {

  const handleCancel = () => {
    toggleDialogdel(activityId);
  };


  const deleteActivity = async () => {
    try {
      const method = 'DELETE';
      const url = `https://fit-up-project-backend.onrender.com/activities/${activityId}`;
      const body = {}

      const response = await axiosService(method, url, body);

      const method2 = 'POST';
      const url2 = `https://fit-up-project-backend.onrender.com/users/delete-coin/${activityUserId}`;
      const body2 = { "coinDelete": 1000 }

      const response2 = await axiosService(method2, url2, body2);
      GetActivityTodayDataById(activityUserId, setActivities, setHaveCard)
      Success("Successfully Deleted.")

      toggleDialogdel()
      deleteSuccess('testtt!');
      setCreateSuccess(true);
      setReload(!reload);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="z-50 flex justify-center items-center h-screen animate-in zoom-in-50 bg-gray-op90">
      <div className="relative w-343 h-488 bg-black-medium rounded-lg my-6 flex flex-col items-center px-10 pt-55 lg:w-396 lg:justify-center">
        <img
          src={bgDel}
          className="absolute h-full w-full bottom-6 lg:top-0 lg:h-auto"
          alt="bgWarning"
        />
        <img
          src={Del}
          className="z-50"
          alt="Warning"
        />
        <div className="z-50">
          <h3 className="font-orbitron text-xl font-bold w-262 h-auto text-center mt-11 mb-2">
            Delete Activity
          </h3>
          <p className="font-roboto-mono text-black-light w-262 h-auto mb-8 text-center">
            Deleting an activity will permanently remove it from your record.
          </p>
        </div>
        <div className="z-50 flex gap-4">
          <button
            onClick={() => handleCancel()}
            className="secondary-contained-button clickbutton flex justify-center items-center bg-white w-150 p-3 rounded text-gray-op90 font-roboto-mono font-bold"
          >
            Cancel
          </button>
          <button
            onClick={() => { deleteActivity() }}
            className="primary-contained-button clickbutton flex justify-center items-center w-150 p-3 rounded font-roboto-mono font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deletedialog;
