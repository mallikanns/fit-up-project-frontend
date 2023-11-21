import axiosService from '../service/axiosService';

export const CreateActivity = async (formData, setIsLoading, Success, toggleDialogAct, ErrorCreate, UpdateCoin, edit, id) => {
    if (!edit) {
        try {
            const method = 'POST';
            const url = `https://fit-up-project-backend.onrender.com/activities`;
            const body = formData;

            setIsLoading(true);
            const response = await axiosService(method, url, body);
            let update = null


            update = UpdateCoin(formData.activity_userID, 1000)


            if (response && update) {
                setIsLoading(false);
                Success('Successfully created.');
                toggleDialogAct();
                return true;
            }

            ErrorCreate('Error no Response');
        } catch (error) {
            ErrorCreate('Server Error');
            setIsLoading(false);
            return false;
        }
    } else {
        try {
            const method = 'PUT';
            const url = `https://fit-up-project-backend.onrender.com/activities/${id}`;
            const body = formData;

            setIsLoading(true);
            const response = await axiosService(method, url, body);


            if (response) {
                setIsLoading(false);
                Success('Successfully edited.');
                toggleDialogAct();
                return true;
            }

            ErrorCreate('Error no Response');
        } catch (error) {
            ErrorCreate('Server Error');
            setIsLoading(false);
            return false;
        }
    }

};