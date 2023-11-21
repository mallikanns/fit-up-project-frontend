import axiosService from "../service/axiosService";

export const GetChartActivity = async (id) => {
    try {
        const method = 'GET';
        const url = `https://fit-up-project-backend.onrender.com/activities/weekly-activity/${id}`;
        const body = {}

        const response = await axiosService(method, url, body);

        return response;
    } catch (error) {
        return error
    }
}