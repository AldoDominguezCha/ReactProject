import { useState, useEffect } from "react";

const useCounter = (positiveIncrement, initialValue) => {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((prevCounter) => +prevCounter + (positiveIncrement ? 1 : -1));
        }, 1000);

        return () => clearInterval(interval);
    }, [positiveIncrement]);

    return counter;
};

export default useCounter;