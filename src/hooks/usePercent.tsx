import { AxiosResponse } from "axios";
import { useState, useEffect, useRef, useCallback } from "react";

type Callback = Promise<AxiosResponse<any, any>>;

const usePercent = (callback?: Callback, interval = 60000) => {
  const [percent, setPercent] = useState(0);
  const [isRequesting, setIsRequesting] = useState(false);
  const totalDuration = useRef(interval);
  const timePassed = useRef(0);
  const timerId = useRef<number | null>(null);
  const failCount = useRef(0);

  const tick = useCallback(() => {
    timePassed.current += 1000;
    setPercent(
      Math.min((timePassed.current / totalDuration.current) * 100, 100)
    );
    if (callback && timePassed.current % 10000 === 0 && !isRequesting) {
      setIsRequesting(true);
      callback
        .then(() => {
          setPercent(100);
          setIsRequesting(false);
          if (timerId.current) {
            clearTimeout(timerId.current);
          }
        })
        .catch(() => {
          failCount.current += 1;
          totalDuration.current = interval + failCount.current * 10000;
          setIsRequesting(false);
        });
    }
  }, [callback, interval, isRequesting]);

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
