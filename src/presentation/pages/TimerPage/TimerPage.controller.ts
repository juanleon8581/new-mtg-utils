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
