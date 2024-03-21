import testHandlers from "../../../../test/testHandlers";
import { defaultInitialTimerFormValues } from "../TimerPage.controller";

const {
  isDefinedByText,
  isDefinedByRole,
  writeOnInputbyRoleAndCallback,
  isDefinedByValue,
} = testHandlers;

const minutesLabelIsdefined = () => {
  isDefinedByText(/minutes/i);
};

const minutesInputHaveInitialValue = () => {
  const { minutes } = defaultInitialTimerFormValues;
  isDefinedByValue(minutes);
};

const minutesValidateErrorField = async () => {
  const callback = () => {
    isDefinedByRole("errorField");
  };
  await writeOnInputbyRoleAndCallback(
    "minutesInput",
    "{Backspace>}{Backspace>}{Enter>}",
    callback
  );
};

export const minutesFormGroupTestBattery = {
  minutesLabelIsdefined,
  minutesInputHaveInitialValue,
  minutesValidateErrorField,
};
