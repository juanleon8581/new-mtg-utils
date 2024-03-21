import testHandlers from "../../../../test/testHandlers";
import { defaultInitialTimerFormValues } from "../TimerPage.controller";

const {
  isDefinedByText,
  isDefinedByRole,
  writeOnInputbyRoleAndCallback,
  isDefinedByValue,
} = testHandlers;

const hoursLabelIsdefined = () => {
  isDefinedByText(/hours/i);
};

const hoursInputHaveInitialValue = () => {
  const { hours } = defaultInitialTimerFormValues;
  isDefinedByValue(hours);
};

const hoursValidateErrorField = async () => {
  const callback = () => {
    isDefinedByRole("errorField");
  };
  await writeOnInputbyRoleAndCallback(
    "hoursInput",
    "{Backspace>}-3{Enter>}",
    callback
  );
};

export const hoursFormGroupTestBattery = {
  hoursLabelIsdefined,
  hoursInputHaveInitialValue,
  hoursValidateErrorField,
};
