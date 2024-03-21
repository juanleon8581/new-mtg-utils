import { render } from "@testing-library/react";
import { TimerPage } from "../TimerPage";
import { timerPageTestBattery } from "./timerPage.batteryTest";
import { hoursFormGroupTestBattery } from "./hoursFromGroup.batteryTest";
import { minutesFormGroupTestBattery } from "./minutesFormGroup.batteryTest";
import { secondsFormGroupTestBattery } from "./secondsFormGroup.batteryTest";

const {
  timerPageIsDefined,
  timerFormIsDefined,
  checkFormChildrens,
  submitButtonIsDefined,
} = timerPageTestBattery;

const {
  hoursInputHaveInitialValue,
  hoursLabelIsdefined,
  hoursValidateErrorField,
} = hoursFormGroupTestBattery;

const {
  minutesInputHaveInitialValue,
  minutesLabelIsdefined,
  minutesValidateErrorField,
} = minutesFormGroupTestBattery;

const {
  secondsInputHaveInitialValue,
  secondsLabelIsdefined,
  secondsValidateErrorField,
} = secondsFormGroupTestBattery;

describe("TimerPage", () => {
  beforeEach(() => {
    render(<TimerPage />);
  });

  test("is defined", timerPageIsDefined);
  test("Form is show", timerFormIsDefined);
  test("have button start", submitButtonIsDefined);
  test("Check form childrens", checkFormChildrens);

  describe("Hours Form Group", () => {
    test("Have Label", hoursLabelIsdefined);
    test("Have initial value", hoursInputHaveInitialValue);
    test("Check min value validation", hoursValidateErrorField);
  });

  describe("Minutes Form Group", () => {
    test("Have Label", minutesLabelIsdefined);
    test("Have initial value", minutesInputHaveInitialValue);
    test("Check require validation", minutesValidateErrorField);
  });

  describe("seconds Form Group", () => {
    test("Have Label", secondsLabelIsdefined);
    test("Have initial value", secondsInputHaveInitialValue);
    test("Check maxLength validation", secondsValidateErrorField);
  });
});
