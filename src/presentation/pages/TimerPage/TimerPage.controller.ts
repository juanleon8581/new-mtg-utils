import type { TimerInput } from "../../../interfaces";
import { TimerInputsOptions } from "../../../interfaces/i_TimerInput";

export const defaultInitialTimerFormValues: TimerInput = {
  hours: 1,
  minutes: 15,
  seconds: 0,
};

export const fieldValidations: TimerInputsOptions = {
  hours: { required: true, min: 0, maxLength: 2, valueAsNumber: true },
  minutes: { required: true, min: 0, maxLength: 3 },
  secods: { required: true, min: 0, maxLength: 4 },
};
