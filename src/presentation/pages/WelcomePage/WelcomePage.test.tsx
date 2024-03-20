import { render, screen } from "@testing-library/react";
import { WelcomePage } from "..";
import { expect } from "vitest";

describe("WelcomePage", () => {
  test("Validate - simply welcompage", () => {
    render(<WelcomePage />);
    const text = screen.getByText("Welcome to MTG-Utils");
    expect(text).toBeDefined();
  });
});
