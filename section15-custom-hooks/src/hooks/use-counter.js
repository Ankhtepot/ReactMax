import {useEffect, useState} from "react";

function useCounter(countsForward = true) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (countsForward) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter(preCounter => preCounter - 1)
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countsForward]);

    return counter;
}

export default useCounter;