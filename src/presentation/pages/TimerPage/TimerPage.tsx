import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  defaultInitialTimerFormValues,
  fieldValidations,
} from "./TimerPage.controller";

import type { TimerInput } from "../../../interfaces";

export const TimerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TimerInput>({ defaultValues: defaultInitialTimerFormValues });

  const onSubmit: SubmitHandler<TimerInput> = (data) => console.log(data);

  return (
    <Container>
      <h1>Count Down</h1>
      <Row>
        <Col>
          <Form role="form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Hours</Form.Label>
              <Form.Control
                type="text"
                role="hoursInput"
                {...register("hours", fieldValidations.hours)}
              />
              {errors.hours && (
                <Form.Text role="errorField" style={{ color: "#fff" }}>
                  {errors.hours.type}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Minutes</Form.Label>
              <Form.Control
                type="text"
                role="minutesInput"
                {...register("minutes", fieldValidations.minutes)}
              />
              {errors.minutes && (
                <Form.Text role="errorField" style={{ color: "#fff" }}>
                  {errors.minutes.type}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Seconds</Form.Label>
              <Form.Control
                type="text"
                role="secondsInput"
                {...register("seconds", fieldValidations.secods)}
              />
              {errors.seconds && (
                <Form.Text role="errorField" style={{ color: "#fff" }}>
                  {errors.seconds.type}
                </Form.Text>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Start
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>Timer</Col>
      </Row>
    </Container>
  );
};
