import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { EventDetail } from "./EventDetail";

describe("EventDetail", () => {
  beforeEach(() => {
    const router = createMemoryRouter(
      [{ path: "/eventdetail/:eventId", element: <EventDetail /> }],
      {
        initialEntries: [`/eventdetail/cedh_draco_event_data`],
      }
    );
    render(<RouterProvider router={router} />);
  });

  test("renders event title and owner", () => {
    const titleElement = screen.getByText(/Torneo cEDH - Draco Hobby Center/i);
    expect(titleElement).toBeDefined();
  });

  test("renders event date", () => {
    const dateElement = screen.getByText(/04-06-2024/i);
    expect(dateElement).toBeDefined();
  });

  test("renders large description", () => {
    const descElement = screen.getByRole("largeDesc") as HTMLDivElement;
    expect(descElement.childElementCount).toBe(4);
  });

  test("renders social media button", () => {
    const socialMediaElement = screen.getAllByRole("button");
    expect(socialMediaElement).toBeDefined();
    expect(socialMediaElement[0]).toHaveProperty(
      "href",
      "https://facebook.com/DracoHobbyCenter"
    );
    expect(socialMediaElement[3]).toHaveProperty(
      "href",
      "https://www.youtube.com/@DracoHobbyCenter"
    );
  });

  test("renders map iframe", () => {
    const mapIframeElement = screen.getByRole("mapIframe");
    expect(mapIframeElement).toBeDefined();
    expect(mapIframeElement).toHaveProperty(
      "src",
      expect.stringMatching(/google/i)
    );
  });
});
