import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("Check header AppName", () => {
    const appName = screen.getByText("MTG Utils");
    expect(appName).toBeDefined();
  });

  test("Check header Home Nav", () => {
    const home = screen.getByText("Home");
    expect(home).toBeDefined();
  });

  test("Check header HandCounter Nav", () => {
    const handCounter = screen.getByText("Hand Counter");
    expect(handCounter).toBeDefined();
  });

  test("Check header Timer Nav", () => {
    const timer = screen.getByText("Timer");
    expect(timer).toBeDefined();
  });
});
