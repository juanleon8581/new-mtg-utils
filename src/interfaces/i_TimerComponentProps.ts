import { Dispatch, SetStateAction } from "react";
import type { TimerData } from ".";

export interface TimerComponentProps {
  timerData: TimerData;
  setTimerData: Dispatch<SetStateAction<TimerData>>;
  formatDateFromMilliseconds: (milliseconds?: number) => string;
}
