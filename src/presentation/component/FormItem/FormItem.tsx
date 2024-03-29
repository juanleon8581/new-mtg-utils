import { Form } from "react-bootstrap";
import type { FormItemProps } from "../../../interfaces";

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
    <Form.Group className="mb-3">
      <Form.Label>{labelText}</Form.Label>
      <Form.Control
        type={type}
        role={`${name}Input`}
        {...register(name, fieldValidations)}
      />
      {errors[name] && (
        <Form.Text role="errorField" style={{ color: "#fff" }}>
          {errors[name]?.type}
        </Form.Text>
      )}
    </Form.Group>
  );
};
