import { useState, useEffect } from "react";

const useCounter = ({ totalTimer }: { totalTimer: number }) => {
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

  return [counter, setCounter];
};

export default useCounter;
