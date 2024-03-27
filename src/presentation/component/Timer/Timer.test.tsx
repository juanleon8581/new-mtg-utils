import { act, render, screen } from "@testing-library/react";
import { Timer } from "..";
import { formatDateFromMilliseconds } from "../../pages/TimerPage/TimerPage.controller";
import { useState } from "react";
import { TimerData } from "../../../interfaces";

interface MockComponentProps {
  initialTime?: number;
}

const MockComponent = ({ initialTime = 4500000 }: MockComponentProps) => {
  const [timerData, setTimerData] = useState<TimerData>({
    isSet: false,
    value: initialTime,
  });

  return (
    <div>
      <Timer
        timerData={timerData}
        setTimerData={setTimerData}
        formatDateFromMilliseconds={formatDateFromMilliseconds}
      />
    </div>
  );
};

describe("TimerCountDown", () => {
  test("CountDown default init", () => {
    render(<MockComponent />);
    const timerDisplay = screen.getByRole("displayCountDown");
    expect(timerDisplay.textContent).toBe("01:15:00");
  });

  test("CountDown after 2 seconds", async () => {
    render(<MockComponent />);
    const timerDisplay = screen.getByRole("displayCountDown");
    await act(async () => {
      await new Promise((r) => setTimeout(r, 3000));
    });
    expect(timerDisplay.textContent !== "01:15:00").toBeTruthy();
  });
});
