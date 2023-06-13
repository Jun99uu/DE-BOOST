import { useState, useEffect, useRef, useCallback } from "react";

type Callback = () => Promise<void>;

const usePercent = (callback?: Callback, interval = 60000) => {
  const [percent, setPercent] = useState(0);
  const totalDuration = useRef(interval);
  const timePassed = useRef(0);
  const timerId = useRef<number | null>(null);
  const failCount = useRef(0);

  const tick = useCallback(() => {
    timePassed.current += 1000;
    setPercent(
      Math.min((timePassed.current / totalDuration.current) * 100, 100)
    );
    if (callback && timePassed.current % 10000 === 0) {
      callback()
        .then(() => {
          setPercent(100);
          if (timerId.current) {
            clearTimeout(timerId.current);
          }
        })
        .catch(() => {
          failCount.current += 1;
          totalDuration.current = interval + failCount.current * 10000;
        });
    }
  }, [callback, interval]);

  useEffect(() => {
    timerId.current = window.setInterval(tick, 1000);
    return () => {
      if (timerId.current) {
        window.clearInterval(timerId.current);
      }
    };
  }, [tick]);

  return percent;
};

export default usePercent;
