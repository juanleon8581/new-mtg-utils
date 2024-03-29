import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { TimerInput } from ".";

export interface FormItemProps {
  labelText: string;
  type?: string;
  name: "hours" | "minutes" | "seconds";
  fieldValidations: RegisterOptions;
  register?: UseFormRegister<TimerInput>;
  errors?: FieldErrors<TimerInput>;
}
