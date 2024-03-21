import type {
  TimerInput,
  TimerInputsOptions,
  TimerFormItemProps,
} from "../../../interfaces";

export const defaultInitialTimerFormValues: TimerInput = {
  hours: 1,
  minutes: 15,
  seconds: 0,
};

export const fieldValidations: TimerInputsOptions = {
  hours: { required: true, min: 0, maxLength: 2, valueAsNumber: true },
  minutes: { required: true, min: 0, maxLength: 3 },
  seconds: { required: true, min: 0, maxLength: 4 },
};

export const timerFormItemsData: TimerFormItemProps[] = [
  {
    labelText: "Hours",
    name: "hours",
    fieldValidations: fieldValidations.hours,
  },
  {
    labelText: "Minutes",
    name: "minutes",
    fieldValidations: fieldValidations.minutes,
  },
  {
    labelText: "Seconds",
    name: "seconds",
    fieldValidations: fieldValidations.seconds,
  },
];

export const toMilliseconds = (hrs: string, min: string, sec: string) => {
  const nhrs: number = parseInt(hrs);
  const nmin: number = parseInt(min);
  const nsec: number = parseInt(sec);
  return (nhrs * 60 * 60 + nmin * 60 + nsec) * 1000;
};

export const formatDateFromMilliseconds = (milliseconds = 0): string => {
  const format = (value: number) => {
    return value > 9 ? `${value}` : `0${value}`;
  };
  const dateByMilliseconds = new Date(milliseconds);
  const getSeconds: string = format(dateByMilliseconds.getSeconds());
  const getMinutes: string = format(dateByMilliseconds.getMinutes());
  const getHour: string = format(milliseconds / 3600000);

  return `${getHour}:${getMinutes}:${getSeconds}`;
};
