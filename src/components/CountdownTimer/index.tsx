import useCounter from '@/hooks/useCounter';
import styles from './styles.module.scss';

const CountdownTimer = ({ totalTimer }: { totalTimer: number }) => {
  const [counter] = useCounter({ totalTimer });
  return <div className={styles['counter-box']}>{counter}</div>;
};

export default CountdownTimer;
