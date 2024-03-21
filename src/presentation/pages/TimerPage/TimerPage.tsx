import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  defaultInitialTimerFormValues,
  timerFormItemsData,
} from "./TimerPage.controller";

import type { TimerInput } from "../../../interfaces";
import { TimerFormItem } from "../../component";

import "./TimerPage.css";

export const TimerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TimerInput>({ defaultValues: defaultInitialTimerFormValues });

  const onSubmit: SubmitHandler<TimerInput> = (data) => console.log(data);

  return (
    <div className="pageContainer">
      <h1>Count Down</h1>
      <Container>
        <Row className="formContainer">
          <Col md="6">
            <Form
              role="form"
              onSubmit={handleSubmit(onSubmit)}
              className="timerForm"
            >
              {timerFormItemsData.map((item) => {
                return (
                  <TimerFormItem
                    key={item.name}
                    labelText={item.labelText}
                    name={item.name}
                    fieldValidations={item.fieldValidations}
                    register={register}
                    errors={errors}
                  />
                );
              })}

              <Button
                variant="outline-light"
                size="lg"
                type="submit"
                className="btnSubmit"
              >
                Start
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>Timer</Col>
        </Row>
      </Container>
    </div>
  );
};
