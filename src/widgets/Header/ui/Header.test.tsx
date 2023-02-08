import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import App from "app/App";


describe("Header", () => {
  test("Header Test Render", () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByTestId("header"));
  });


});
