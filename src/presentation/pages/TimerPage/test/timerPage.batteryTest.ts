import testHandlers from "../../../../test/testHandlers";

const { isDefinedByText, isDefinedByRole, checkNumberOfChildrensByRole } =
  testHandlers;

const timerPageIsDefined = () => {
  isDefinedByText(/Count Down/i);
};

const timerFormIsDefined = () => {
  isDefinedByRole("form");
};

const submitButtonIsDefined = () => {
  isDefinedByText(/start/i);
  isDefinedByRole("button");
};

const checkFormChildrens = () => {
  checkNumberOfChildrensByRole("form", 4);
};

export const timerPageTestBattery = {
  timerPageIsDefined,
  timerFormIsDefined,
  checkFormChildrens,
  submitButtonIsDefined,
};
