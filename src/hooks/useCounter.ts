import { useState } from "react";

const useCounter = ({ count = 0 }) => {
    const [counter, setCounter] = useState(count);

    const increment = (value: number) => setCounter(counter + value);
    const reset = () => setCounter(0);
    const decrement = (value: number) => {
        if (counter - value < 0) return;

        setCounter(counter - value);
    };
    return { counter, increment, reset, decrement }
}

export default useCounter