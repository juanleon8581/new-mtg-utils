import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const isDefinedByText = (text: string | RegExp): void => {
  const searchText = screen.getByText(text);
  expect(searchText).toBeDefined();
};

const isDefinedByValue = (value: string | RegExp | number): void => {
  const searchValue = screen.getByDisplayValue(value);
  expect(searchValue).toBeDefined();
};

const isDefinedByRole = (role: string): void => {
  const searchRole = screen.getByRole(role);
  expect(searchRole).toBeDefined();
};

const checkNumberOfChildrensByRole = (role: string, number: number) => {
  const searchRole = screen.getByRole(role);
  expect(searchRole.childElementCount).toBe(number);
};

const writeOnInputbyRoleAndCallback = async (
  role: string,
  text: string,
  callback: () => void
) => {
  const user = userEvent.setup();
  const input = screen.getByRole(role) as HTMLInputElement;
  await user.click(input);
  await user.keyboard(text);
  callback();
};

const testHandlers = {
  isDefinedByText,
  isDefinedByRole,
  checkNumberOfChildrensByRole,
  isDefinedByValue,
  writeOnInputbyRoleAndCallback,
};

export default testHandlers;
