import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import "./Activity.css";
import Dropdown from "./Dropdown";
import { useAuth } from "../auth/AuthContext";
import { CreateActivity } from "../../crud/CreateActivity";
import { UpdateCoin } from "../../crud/UpdateCoin";

const ActivityDialog = ({
    activityEdit,
    ErrorCreate,
    Success,
    toggleDialogAct,
    setCreateSuccess,
}) => {
    const auth = useAuth();
    const [desc, setDesc] = useState("");
    const [name, setName] = useState("");
    const [nameType, setNameType] = useState("");
    const [duration, setDuration] = useState("");
    const maxCharacters = 72;
    const [isLoading, setIsLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const [formErrors, setFormErrors] = useState({
        nameType: "",
        name: "",
        desc: "",
        dateValue: "",
        duration: "",
    });

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!nameType.trim()) {
            errors.nameType = "Please select activity type";
            isValid = false;
        }
        if (!name.trim()) {
            errors.name = "Please enter your activity name";
            isValid = false;
        }
        if (desc.trim().length > 72) {
            errors.desc = "Description exceeding 72 characters";
            isValid = false;
        }
        if (!dateValue) {
            errors.dateValue = "Please select date";
            isValid = false;
        }
        if (!duration) {
            errors.duration = "Please select duration";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const createActivity = async () => {
        if (!validateForm() || !auth.user._id) {
            ErrorCreate("Form inValid!");
            return;
        }

        const Date = dateValue;

        if (!Date) {
            ErrorCreate('Form inValid!')
        }

        const formData = {
            activity_userID: auth.user._id,
            activity_type: nameType,
            activity_name: name,
            activity_desc: desc,
            activity_date: Date.startDate,
            activity_duration: duration,
        };


        if (!edit) {
            setCreateSuccess(
                CreateActivity(
                    formData,
                    setIsLoading,
                    Success,
                    toggleDialogAct,
                    ErrorCreate,
                    UpdateCoin,
                    edit
                )
            );
        }

        setCreateSuccess(
            CreateActivity(
                formData,
                setIsLoading,
                Success,
                toggleDialogAct,
                ErrorCreate,
                UpdateCoin,
                edit,
                activityEdit._id
            )
        );
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setNameType(option);
        setName(option);
    };

    const optionClassName = (option) => {
        if (formErrors.nameType === "Please select activity type") {
            if (option === "Gym workout" || option === "Road Cycling") {
                return `
          h-[70px] w-[167.5px] rounded-md border-solid border-2 
          flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pink
          ${selectedOption === option ? "" : "border-red"}
          ${selectedOption === option
                        ? "bg-pink-op10 text-pink border-pink"
                        : ""
                    }
        `;
            }
            return `
        h-[70px] w-[109px] rounded-md border-solid border-2 
        flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pink
        ${selectedOption === option ? "" : "border-red"}
        ${selectedOption === option ? "bg-pink-op10 text-pink border-pink" : ""}
      `;
        }
        if (option === "Gym workout" || option === "Road Cycling") {
            return `
          h-[70px] w-[167.5px] rounded-md border-solid border-2 
          flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pink
          ${selectedOption === option ? "" : "border-white"}
          ${selectedOption === option
                    ? "bg-pink-op10 text-pink border-pink"
                    : ""
                }
        `;
        }
        return `
        h-[70px] w-[109px] rounded-md border-solid border-2 
        flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pink
        ${selectedOption === option ? "" : "border-white"}
        ${selectedOption === option ? "bg-pink-op10 text-pink border-pink" : ""}
      `;
    };

    useEffect(() => {
        handleOptionClick("");

        if (activityEdit) {
            setName(activityEdit.activity_name);
            setDesc(activityEdit.activity_desc);
            setDateValue({
                startDate: activityEdit.activity_date,
                endDate: activityEdit.activity_date,
            });
            handleOptionClick(activityEdit.activity_type);
            setDuration(activityEdit.activity_duration);
            setEdit(true);
        }
    }, [activityEdit]);

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    };

    const handleDescChange = (e) => {
        const newDesc = e.target.value;

        setDesc(newDesc);
    };

    const [dateValue, setDateValue] = useState(null);

    const handleDateValueChange = (newDateValue) => {
        setDateValue(newDateValue);
    };


    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-op90 flex items-center justify-center z-50">
            <div className="h-768 w-375 bg-black-medium">
                <div className="h-14 w-375 bg-black-dark flex items-center justify-start text-white">
                    <button onClick={() => toggleDialogAct()} className="pr-24 ml-4">
                        <span className="material-symbols-outlined hover:cursor-pointer">
                            close
                        </span>
                    </button>
                    <div className="font-roboto-mono font-bold text-sm">My Activity</div>
                </div>

                {/* Activity Type */}
                <div className="h-174 w-343 mx-4 mt-6">
                    <div className="text-white font-roboto-mono text-xs mb-1">
                        Activity Type
                    </div>
                    <div className="text-white font-roboto-mono text-xs flex justify-between">

                        <div
                            className={optionClassName("Run")}
                            onClick={() => handleOptionClick("Run")}
                        >
                            <span className="material-symbols-outlined mb-1">
                                directions_run
                            </span>
                            Run
                        </div>
                        <div
                            className={optionClassName("Walk")}
                            onClick={() => handleOptionClick("Walk")}
                        >
                            <span className="material-symbols-outlined mb-1">hiking</span>
                            Walk
                        </div>
                        <div
                            className={optionClassName("Swim")}
                            onClick={() => handleOptionClick("Swim")}
                        >
                            <span className="material-symbols-outlined mb-1">pool</span>
                            Swim
                        </div>
                    </div>
                    <div
                        className="text-white font-roboto-mono text-xs
                    flex justify-between mt-1 mb-1"
                    >
                        <div
                            className={optionClassName("Gym workout")}
                            onClick={() => handleOptionClick("Gym workout")}
                        >
                            <span className="material-symbols-outlined mb-1">
                                fitness_center
                            </span>
                            Gym workout
                        </div>
                        <div
                            className={optionClassName("Road Cycling")}
                            onClick={() => handleOptionClick("Road Cycling")}
                        >
                            <span className="material-symbols-outlined mb-1">
                                directions_bike
                            </span>
                            Road Cycling
                        </div>
                    </div>
                    {formErrors.nameType && (
                        <span className="my-2 pb-4 text-red text-xs font-roboto-mono font-bold">
                            {formErrors.nameType}
                        </span>
                    )}
                </div>

                {/* Name */}
                <div className="h-[75px] w-343 mx-4 mt-5">
                    <p className="text-white font-roboto-mono text-xs mb-2">Name</p>
                    <div className="">
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className={`${formErrors.name === "Please enter your activity name"
                                ? "ring-1 ring-red h-12 w-343 bg-black-dark rounded pl-3 text-white font-roboto-mono text-xs mb-2"
                                : "h-12 w-343 bg-black-dark rounded pl-3 text-white font-roboto-mono text-xs mb-2"
                                }`}
                        />

                        {formErrors.name && (
                            <span className="my-2 pb-4 text-red text-xs font-roboto-mono font-bold">
                                {formErrors.name}
                            </span>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="h-[75px] w-343 mx-4 mt-7">
                    <div className="flex justify-between">
                        <p className="text-white font-roboto-mono text-xs mb-2">
                            Description (optional)
                        </p>
                        <p className="text-black-light font-roboto-mono text-xs mb-2">
                            {desc.length}/{maxCharacters}
                        </p>
                    </div>
                    <div className="">
                        <textarea
                            id="message"
                            rows="4"
                            className={`${formErrors.desc === "Description exceeding 72 characters"
                                ? "ring-1 ring-red block p-3 h-[70px] w-343 bg-black-dark rounded font-roboto-mono text-sm text-white"
                                : "block p-3 h-[70px] w-343 bg-black-dark rounded font-roboto-mono text-sm text-white"
                                }`}
                            placeholder={
                                selectedOption
                                    ? `How was your ${selectedOption} ?`
                                    : `How was your ... ?`
                            }
                            value={desc}
                            onChange={handleDescChange}
                        ></textarea>
                    </div>
                    {formErrors.desc && (
                        <span className="my-2 pb-4 text-red text-xs font-roboto-mono font-bold">
                            {formErrors.desc}
                        </span>
                    )}
                </div>

                <div className="mx-4 mt-11 flex gap-6 items-center">
                    <div>
                        <p className="text-white font-roboto-mono text-xs mb-2">Date</p>
                        <Datepicker
                            primaryColor={"fuchsia"}
                            placeholder={"Date"}
                            popoverDirection="up"
                            containerClassName="relative h-12 w-[160px]"
                            inputClassName={`${formErrors.dateValue === "Please select date"
                                ? "ring-1 ring-red h-12 w-[160px] rounded focus:ring-0 text-white font-roboto-mono text-xs bg-black-dark p-3 dark:bg-green-900 dark:placeholder:text-green-100"
                                : "h-12 w-[160px] rounded focus:ring-0 text-white font-roboto-mono text-xs bg-black-dark p-3 dark:bg-green-900 dark:placeholder:text-green-100"
                                }`}
                            toggleClassName="absolute rounded-r-lg text-white left-[115px] h-full px-3 
                            focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                            value={dateValue}
                            onChange={handleDateValueChange}
                            useRange={false}
                            asSingle={true}
                            minDate={new Date()}
                            displayFormat={"DD MMM,YYYY"}
                        />
                        {formErrors.dateValue && (
                            <span className="my-2 pb-4 text-red text-xs font-roboto-mono font-bold">
                                {formErrors.dateValue}
                            </span>
                        )}
                    </div>

                    <div className="">
                        <p className="text-white font-roboto-mono text-xs mb-2">Duration (minute)</p>
                        <Dropdown
                            setDuration={setDuration}
                            duration={duration}
                            formErrors={formErrors}
                        />
                        {formErrors.duration && (
                            <span className="my-2 pb-4 text-red text-xs font-roboto-mono font-bold">
                                {formErrors.duration}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="mt-[150px] lg:mt-[75px] h-12 w-343 bg-pink hover:bg-pink-medium active:bg-pink-light font-roboto-mono text-black-dark font-bold rounded"
                        onClick={createActivity}
                    >
                        Save Activity
                    </button>
                </div>
            </div>
            {isLoading ? (
                <div className="fixed inset-0 h-full w-full z-10">
                    <div className="z-50 flex justify-center items-center h-screen animate-in zoom-in-50 bg-gray-op90">
                        <span className="bg-red loading loading-dots loading-lg"></span>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default ActivityDialog;
