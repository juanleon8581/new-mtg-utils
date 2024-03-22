import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface Timer {
  started: number;
  lastInterval: number;
  timeLeft: number;
  timeToCount: number;
  requestId?: number;
}

interface CountDownProps {
  onFinish: () => void;
  timeToCount?: number;
  interval?: number;
}

interface Actions {
  start: (ttc?: number) => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

const initialValues: Timer = {
  started: 0,
  lastInterval: 0,
  timeLeft: 0,
  timeToCount: 0,
};

export const useCountDown = ({
  timeToCount = 60000,
  interval = 1000,
  onFinish,
}: CountDownProps): [number, Actions] => {
  const [timeLeft, setTimeLeft] = useState(0);
  const timer = useRef<Timer>(initialValues);

  const run = useCallback(
    (ts: number) => {
      const localInterval = Math.min(
        interval,
        timer.current.timeLeft || Infinity
      );

      if (!timer.current.started) {
        timer.current.started = ts;
        timer.current.lastInterval = ts;
      }

      if (ts - timer.current.lastInterval >= localInterval) {
        timer.current.lastInterval += localInterval;
        setTimeLeft((timeLeft) => {
          timer.current.timeLeft = timeLeft - localInterval;
          return timer.current.timeLeft;
        });
      }

      if (ts - timer.current.started < timer.current.timeToCount) {
        timer.current.requestId = window.requestAnimationFrame(run);
      } else {
        onFinish();
        timer.current = initialValues;
        setTimeLeft(0);
      }
    },
    [interval, onFinish]
  );

  const start = useCallback(
    (ttc?: number) => {
      window.cancelAnimationFrame(timer.current.requestId || 0);

      const newTimeToCount = ttc ? ttc : timeToCount;
      timer.current.started = 0;
      timer.current.lastInterval = 0;
      timer.current.timeToCount = newTimeToCount;
      timer.current.requestId = window.requestAnimationFrame(run);

      setTimeLeft(newTimeToCount);
    },
    [timeToCount, run]
  );

  const pause = useCallback(() => {
    window.cancelAnimationFrame(timer.current.requestId || 0);
    timer.current.started = 0;
    timer.current.lastInterval = 0;
    timer.current.timeToCount = timer.current.timeLeft;
  }, []);

  const resume = useCallback(() => {
    if (!timer.current.started && timer.current.timeLeft > 0) {
      window.cancelAnimationFrame(timer.current.requestId || 0);
      timer.current.requestId = window.requestAnimationFrame(run);
    }
  }, [run]);

  const reset = useCallback(() => {
    if (timer.current.timeLeft) {
      window.cancelAnimationFrame(timer.current.requestId || 0);
      timer.current = initialValues;
      setTimeLeft(0);
    }
  }, []);

  const actions: Actions = useMemo(
    () => ({ start, pause, resume, reset }),
    [pause, reset, resume, start]
  );

  useEffect(() => {
    return () => window.cancelAnimationFrame(timer.current.requestId || 0);
  }, []);

  return [timeLeft, actions];
};
