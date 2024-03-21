import type { RegisterOptions } from "react-hook-form";

export interface TimerInput {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TimerInputsOptions {
  hours: RegisterOptions;
  minutes: RegisterOptions;
  secods: RegisterOptions;
}
