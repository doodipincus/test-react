import { render, screen } from "@testing-library/react";
import InputQr from "../components/input";

describe("Input QR", () => {
  test("find button", () => {
    render(<InputQr />);
    const buttonElement = screen.getByRole("button");
    const inputElement = screen.getByRole("textbox");
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
});