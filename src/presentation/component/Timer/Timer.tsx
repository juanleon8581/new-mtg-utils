import { useEffect, useCallback } from "react";
import { resetEventHandler, onCompleteTimerHandler } from "./Timer.utils";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import type { TimerComponentProps } from "../../../interfaces";
import { useCountDown } from "../../../hooks/useCountDown";
import "./Timer.css";

export const Timer = ({
  timerData,
  setTimerData,
  formatDateFromMilliseconds,
}: TimerComponentProps) => {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown({
    onFinish: onCompleteTimerHandler,
  });

  const restart = useCallback(() => {
    start(timerData.value);
  }, [start, timerData]);

  useEffect(() => {
    restart();
  }, [restart]);

  return (
    <>
      <Container className="timerDisplayContainer">
        <Row>
          <Col as={"span"} className="displayCountDown" role="displayCountDown">
            {formatDateFromMilliseconds(timeLeft)}
          </Col>
        </Row>
        <Row className="btnsCoutDown">
          <Col as={ButtonGroup} aria-label="Basic button group">
            <Button variant="outline-light" onClick={pause}>
              Pause
            </Button>
            <Button variant="outline-light" onClick={resume}>
              Resume
            </Button>
            <Button variant="outline-light" onClick={restart}>
              Restart
            </Button>
            <Button
              variant="outline-light"
              onClick={() => {
                resetEventHandler({ setTimerData, reset });
              }}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
