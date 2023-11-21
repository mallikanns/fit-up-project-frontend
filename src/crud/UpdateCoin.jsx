import axiosService from '../service/axiosService';

export const UpdateCoin = async (id, coin) => {
    try {
        const method = 'POST';
        const url = `https://fit-up-project-backend.onrender.com/users/update-coin/${id}`;
        const body = {
            "coinReceived": coin
        }

        const response = await axiosService(method, url, body);

        return response.data

    } catch (error) {
        return error
    }
}