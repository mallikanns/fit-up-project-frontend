import axiosService from '../service/axiosService';

export const GetActivityById = async (id) => {
    try {
        const method = 'GET';
        const url = `https://fit-up-project-backend.onrender.com/activities/${id}`;
        const body = {}

        const response = await axiosService(method, url, body);

        return response;
    } catch (error) {
        return error
    }
}