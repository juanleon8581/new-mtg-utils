import testHandlers from "../../../../test/testHandlers";
import { defaultInitialTimerFormValues } from "../TimerPage.controller";

const {
  isDefinedByText,
  isDefinedByRole,
  writeOnInputbyRoleAndCallback,
  isDefinedByValue,
} = testHandlers;

const secondsLabelIsdefined = () => {
  isDefinedByText(/seconds/i);
};

const secondsInputHaveInitialValue = () => {
  const { seconds } = defaultInitialTimerFormValues;
  isDefinedByValue(seconds);
};

const secondsValidateErrorField = async () => {
  const callback = () => {
    isDefinedByRole("errorField");
  };
  await writeOnInputbyRoleAndCallback(
    "secondsInput",
    "354336{Enter>}",
    callback
  );
};

export const secondsFormGroupTestBattery = {
  secondsLabelIsdefined,
  secondsInputHaveInitialValue,
  secondsValidateErrorField,
};
