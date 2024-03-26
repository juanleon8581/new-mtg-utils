import { render, screen } from "@testing-library/react";
import { WelcomePage } from "..";
import { expect } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe("WelcomePage", () => {
  test("Validate - simply welcompage", () => {
    const router = createMemoryRouter(
      [{ path: "/", element: <WelcomePage /> }],
      {
        initialEntries: ["/"],
      }
    );
    render(<RouterProvider router={router} />);
    const text = screen.getByText("4º Liga Spelltable");
    expect(text).toBeDefined();
  });
});
