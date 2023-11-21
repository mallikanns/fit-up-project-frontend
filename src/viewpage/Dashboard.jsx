import React, { useState, useEffect } from "react";
import Circle from "../components/circle/Circle";
import Chart from "../components/bar-chart/Chart";
import Rightsection from "../components/activitycard/Rightsection";
import Hamber from "../components/sidebar-ham/Hamber";
import Header from "../components/activitycard/Header";
import { useAuth } from "../components/auth/AuthContext";
import CircleMyLoader from "../components/circle/CircleMyLoader";
import CircleMobileMyLoader from "../components/circle/CircleMobileMyLoader";
import { Scrollbar } from 'react-scrollbars-custom';
import { GetActivityTodayDataById } from "../crud/GetActivityTodayDataById";
import { GetChartActivity } from "../crud/GetChartActivity";
import { GetActivityById } from "../crud/GetActivityById";
import ActivityDialog from "../components/activityDialog/ActivityDialog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard() {
  const auth = useAuth();
  const [user, setUser] = useState(null)
  const [coinPercentState, setCoinPercentState] = useState(0)
  const [coinUser, setCoinUser] = useState(0)
  const [balance, setBalance] = useState(0)
  const [dataChartActivity, setDataChartActivity] = useState(0)

  const scrollbarStyle = {
    width: 380,
    height: 800,
  };

  const [haveCard, setHaveCard] = useState(false);
  const [activities, setActivities] = useState([]);
  const [dialogAct, setDialogAct] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);

  const toggleDialogAct = () => {
    setDialogAct(!dialogAct);

    if (activityEdit) {
      setActivityEdit(null)
    }
  };

  const Success = (message) => {
    return toast.success(message || 'Successfully.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const ErrorCreate = (message) => {
    return toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const [activityEdit, setActivityEdit] = useState(null)

  const handleEdit = (id) => {
    toggleDialogAct()
    GetActivityById(id).then(async (res) => {
      const data = await res
      setActivityEdit(...data)
    })
  }

  useEffect(() => {
    const user = auth.user;
    if (user) {
      GetActivityTodayDataById(user._id, setActivities, setHaveCard)
      setUser(user)
      GetChartActivity(user._id).then(async (res) => {
        const result = await res;
        setDataChartActivity(result)
      })

    }


  }, [auth.user, createSuccess])

  return (
    // <Layout>
    <>
      <div className=" bg-transparent min-h-screen  mx-auto">
        <div className="fixed">
        </div>
        {/* Main Content */}
        <div
          className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 gap-6 px-10  mx-auto w-full`}
        >
          <div className="w-full col-start-1 col-end-13 ">
            <div className="flex justify-between pt-10">
              <div className="text-white ">
                <Header />
              </div>
              <div className="hidden lg:inline  ">
                <Hamber />
              </div>
            </div>
          </div>
          {/* //Mobile */}
          <div className="w-[380px] h-[600px] col-start-auto col-end-2 sm:col-end-4 rounded-lg inline lg:hidden">
            <div className="">
              <Scrollbar style={{ width: 380, height: 600 }}>
                <Rightsection Success={Success} setActivities={setActivities} setHaveCard={setHaveCard} handleEdit={handleEdit} haveCard={haveCard} activities={activities} toggleDialogAct={toggleDialogAct} createSuccess={createSuccess} />
              </Scrollbar>;
            </div>
          </div>
          <div className="w-full h-auto col-start-auto col-end-2 sm:col-end-4 inline lg:hidden">
            <div className="flex flex-col gap-6">
              {user ? (<div className="w-343 lg:w-full h-537 lg:h-324 rounded-lg bg-black-medium bg-opacity-60 bg-blur-xl py-6 px-4 lg:px-0 lg:flex">
                <Circle activities={activities} user={user} createSuccess={createSuccess} />
              </div>) : <CircleMobileMyLoader />}
              <div className="w-721 h-508 mb-8">
                <Chart activities={activities} createSuccess={createSuccess} dataChartActivity={dataChartActivity} />
              </div>
            </div>
            {dialogAct && <ActivityDialog activityEdit={activityEdit} toggleDialogAct={toggleDialogAct} ErrorCreate={ErrorCreate} Success={Success} setCreateSuccess={setCreateSuccess} />}
          </div>

          {/* //desktop */}
          <div className="w-full h-856 col-start-1 col-end-7 lg:col-end-9 hidden lg:inline">
            <div className="flex flex-col gap-6">
              {user ? <div className="w-343 lg:w-[735px] h-537 lg:h-324 rounded-lg bg-black-medium bg-opacity-60 bg-blur-xl py-6 px-4 lg:px-0 lg:flex"><Circle activities={activities} user={user} createSuccess={createSuccess} /></div> : <CircleMyLoader />}
              <div className=" w-721 h-508">
                <Chart activities={activities} createSuccess={createSuccess} dataChartActivity={dataChartActivity} />
              </div>
            </div>
          </div>

          <div className="min-w-auto w-[380px] min-h-auto h-[800px] col-start-9 col-end-13 rounded-lg hidden lg:inline">
            <div className="">
              <Scrollbar style={scrollbarStyle} >
                <Rightsection Success={Success} setActivities={setActivities} setHaveCard={setHaveCard} handleEdit={handleEdit} haveCard={haveCard} activities={activities} toggleDialogAct={toggleDialogAct} createSuccess={createSuccess} />
              </Scrollbar>
            </div>
          </div>
        </div>
        {dialogAct && <ActivityDialog activityEdit={activityEdit} toggleDialogAct={toggleDialogAct} ErrorCreate={ErrorCreate} Success={Success} setCreateSuccess={setCreateSuccess} />}
      </div >
      <ToastContainer />
    </>
  );
}

export default Dashboard;
