import axios from 'axios';

const axiosService = async (method, url, body) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const response = await axios({
            method: method,
            url: url,
            data: body,
            headers: headers,
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default axiosService;