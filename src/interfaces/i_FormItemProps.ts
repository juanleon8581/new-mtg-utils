import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormInput } from ".";

export interface FormItemProps {
  labelText: string;
  fieldValidations: RegisterOptions;
  name:
    | "hours"
    | "minutes"
    | "seconds"
    | "name"
    | "email"
    | "subject"
    | "message";
  type?: string;
  errors?: FieldErrors<FormInput>;
  register?: UseFormRegister<FormInput>;
}
