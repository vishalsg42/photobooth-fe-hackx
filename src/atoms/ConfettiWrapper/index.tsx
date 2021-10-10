import Confetti from 'react-confetti';
import { useCallback, useEffect, useState } from 'react';

const ConfettiAnimation = () => {
  const [{ width, height }, setWindow]: any = useState({});

  const handleWindow = useCallback(() => {
    setWindow({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleWindow();
      window.addEventListener('resize', handleWindow);
    }

    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('resize', handleWindow);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Confetti
      width={width}
      height={height}
      run
      style={{ display: 'block', zIndex: 1 }}
      recycle
    />
  );
};

export default ConfettiAnimation;
