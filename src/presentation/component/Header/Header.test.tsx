import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    const router = createMemoryRouter([{ path: "/", element: <Header /> }], {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
  });

  test("Check header AppName", () => {
    const appName = screen.getByText("MTG - Utils");
    expect(appName).toBeDefined();
  });

  test("Check header Home Nav", () => {
    const home = screen.getByText("Home");
    expect(home).toBeDefined();
  });

  test("Check header Contact Form Nav", () => {
    const handCounter = screen.getByText("Contact");
    expect(handCounter).toBeDefined();
  });

  test("Check header Timer Nav", () => {
    const timer = screen.getByText("Timer");
    expect(timer).toBeDefined();
  });
});
