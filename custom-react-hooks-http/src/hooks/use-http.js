import { useState, useCallback } from 'react';

const useHttp = (requestConfig, processResponseFn) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        
        try {
        const response = await fetch(
            requestConfig.url,
            {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            }
        );

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();
        processResponseFn(data);
        } catch(e) {
            console.log(e);
            setError(e.message || 'Something went wrong');
        } 
        setIsLoading(false);
    }, [requestConfig, processResponseFn]);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;