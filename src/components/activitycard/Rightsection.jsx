import React, { useEffect } from "react";
import Card from "./Card";
import Createmobile from "./Createmobile";
import Default from "./Default";

const Rightsection = ({ Success, setActivities, setHaveCard, handleEdit, haveCard, activities, toggleDialogAct, createSuccess }) => {

  useEffect(() => {

  }, [createSuccess]);

  return (
    <>
      <div className="  text-white">
        {/* <Card/> */}
        {haveCard ? (
          <>
            <Createmobile toggleDialogAct={toggleDialogAct} />
            <Card Success={Success} setActivities={setActivities} setHaveCard={setHaveCard} handleEdit={handleEdit} activities={activities} />
          </>
        ) :
          <Default toggleDialogAct={toggleDialogAct} />
        }
      </div >
    </>
  );
};

export default Rightsection;
