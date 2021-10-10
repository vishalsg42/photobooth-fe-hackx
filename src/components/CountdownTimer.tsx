import useCounter from "../hooks/useCounter";

const CountdownTimer = ({ totalTimer }: { totalTimer: number }) => {
  const [counter] = useCounter({ totalTimer });
  return <div className='counter-box'>{counter}</div>;
};

export default CountdownTimer;
