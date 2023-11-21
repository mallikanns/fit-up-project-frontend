import axiosService from '../service/axiosService';


export const GetActivityTodayDataById = async (id, setActivities, setHaveCard) => {
    try {
        const method = 'GET';
        const url = `https://fit-up-project-backend.onrender.com/activities/getToday/${id}`;
        const body = {}

        const response = await axiosService(method, url, body);


        let sortData = [...response].reverse();

        setActivities(sortData);

        if (response.length > 0) {
            setHaveCard(true);
        } else if (response.length <= 0) {
            setHaveCard(false);
        }


    } catch (error) {
        return error
    }
};