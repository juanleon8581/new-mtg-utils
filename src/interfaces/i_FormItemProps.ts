import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormInput } from ".";

export interface FormItemProps {
  labelText: string;
  type?: string;
  name:
    | "hours"
    | "minutes"
    | "seconds"
    | "name"
    | "email"
    | "subject"
    | "message";
  errors?: FieldErrors<FormInput>;
  fieldValidations: RegisterOptions;
  register?: UseFormRegister<FormInput>;
}
