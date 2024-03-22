import type { Dispatch, SetStateAction } from "react";
import type { TimerData } from "../../../interfaces";

interface resetEventHandlerProps {
  setTimerData: Dispatch<SetStateAction<TimerData>>;
  reset: () => void;
}

export const resetEventHandler = ({
  setTimerData,
  reset,
}: resetEventHandlerProps) => {
  reset();
  setTimerData((values) => {
    return { ...values, isSet: false };
  });
};

export const onCompleteTimerHandler = () => {
  let guard = 0;
  const sound = new Audio(
    "https://freesound.org/data/previews/316/316847_4939433-lq.mp3"
  );

  const sounInterval = setInterval(() => {
    if (guard === 2) {
      clearInterval(sounInterval);
      return;
    }
    guard += 1;
    //TODO
    // sound.play();
    console.log(sound);
  }, 5000);
};
