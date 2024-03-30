import { Form } from "react-bootstrap";
import type { FormItemProps } from "../../../interfaces";

import "./FormItem.css";

export const FormItem = ({
  labelText,
  type = "text",
  name,
  fieldValidations,
  register,
  errors,
}: FormItemProps) => {
  if (!register || !errors) return;

  return (
    <Form.Group className="mb-3 formGroup">
      <Form.Label>{labelText}</Form.Label>
      {type === "textarea" ? (
        <Form.Control
          as={type}
          rows={3}
          role={`${name}Input`}
          className="customForm-control"
          {...register(name, fieldValidations)}
        />
      ) : (
        <Form.Control
          type={type}
          role={`${name}Input`}
          {...register(name, fieldValidations)}
        />
      )}

      {errors[name] && (
        <Form.Text role="errorField" style={{ color: "#fff" }}>
          {errors[name]?.type}
        </Form.Text>
      )}
    </Form.Group>
  );
};
