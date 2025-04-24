import axios from 'axios';
import { useEffect, useState } from 'react';

import { BACKEND_URL } from '../config';

export const useUserData = () => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        const sendRequest = async () => {
            const response = await axios.get(
                `${BACKEND_URL}/api/v1/user/username`,
                {
                    headers: {
                        Authorization: localStorage.getItem('mediumToken'),
                    },
                }
            );

            setUsername(response.data.name);
            setLoading(false);
        };

        sendRequest();
    }, []);

    return {
        loading: loading,
        username: username,
    };
};
