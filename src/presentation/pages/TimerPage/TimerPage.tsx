import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";

import { Timer, TimerFormItem } from "../../component";
import {
  defaultInitialTimerFormValues,
  formatDateFromMilliseconds,
  timerFormItemsData,
  toMilliseconds,
} from "./TimerPage.controller";

import type { TimerData, TimerInput } from "../../../interfaces";
import "./TimerPage.css";

export const TimerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TimerInput>({ defaultValues: defaultInitialTimerFormValues });
  const [timerData, setTimerData] = useState<TimerData>({
    isSet: false,
    value: 0,
  });

  const onSubmit: SubmitHandler<TimerInput> = ({ hours, minutes, seconds }) => {
    setTimerData({
      isSet: true,
      value: toMilliseconds(hours, minutes, seconds),
    });
  };

  return (
    <div className="pageContainer">
      <h1>Count Down</h1>
      <Container>
        {timerData.isSet ? (
          <Row className="timerContainer">
            <Col md="8" lg="6">
              <Timer
                timerData={timerData}
                setTimerData={setTimerData}
                formatDateFromMilliseconds={formatDateFromMilliseconds}
              />
            </Col>
          </Row>
        ) : (
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
        )}
      </Container>
    </div>
  );
};
