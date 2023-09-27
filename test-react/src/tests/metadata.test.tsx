import { render, screen } from "@testing-library/react";
import Metadata from "../components/metadata";

const props = {
  url: "jbjb",
  date: new Date(),
  size: { height: 4, width: 5 },
};

describe("Metadata", () => {
  test("find p", () => {
    render(<Metadata props={props} />);
    const url = screen.getByText(/URL:/);
    const time = screen.getByText(/Date/);
    const date = screen.getByText(/Time/);
    const size = screen.getByText(/Size/);

    expect(url).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(size).toBeInTheDocument();
  });
});
