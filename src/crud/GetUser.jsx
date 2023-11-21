import axiosService from "../service/axiosService";

export const GetUser = async (id) => {
    try {
        const method = 'GET';
        const url = `https://fit-up-project-backend.onrender.com/users/${id}`;
        const body = {}


        const response = await axiosService(method, url, body);
        return response

    } catch (error) {
        return error
    }
}