import { Form } from "react-bootstrap";
import type { TimerFormItemProps } from "../../../interfaces";

export const TimerFormItem = ({
  labelText,
  name,
  fieldValidations,
  register,
  errors,
}: TimerFormItemProps) => {
  if (!register || !errors) return;

  return (
    <Form.Group className="mb-3">
      <Form.Label>{labelText}</Form.Label>
      <Form.Control
        type="text"
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
