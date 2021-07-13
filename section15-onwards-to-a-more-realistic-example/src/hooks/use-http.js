import {useCallback, useState} from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);

        const request = requestConfig.body === undefined
            ? {}
            : {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: JSON.stringify(requestConfig.body)
            }

        try {
            const response = await fetch( requestConfig.url, request);

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    // isLoading: isLoading,
    // error: error,
    // sendRequest: sendRequest
    // above is same as bellow in modern JS
    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;