import { useState, useEffect } from 'react';

const CountDownTimer = ({ totalTimer }: { totalTimer: number }) => {

    const [counter, setCounter] = useState(totalTimer);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (counter > 1) {
            timer = setInterval(() => {
                setCounter(counter - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <>
            <div className="counter-box">{counter}</div>
        </>
    )
}

export default CountDownTimer;