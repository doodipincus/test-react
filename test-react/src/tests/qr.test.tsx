import {  render, screen } from "@testing-library/react";
import Qr from "../components/qr";

const props = "doodi pincus";

describe("Metadata", () => {
  test("find img", () => {
    render(<Qr props={props} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
