import Checkbox from ".";
import { render, screen, fireEvent } from "@testing-library/react";

const onClick = jest.fn();

describe("Checkbox", () => {
  it("should render", () => {
    render(<Checkbox onClick={onClick} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should render tick when checked", () => {
    render(<Checkbox onClick={onClick} checked />);

    expect(screen.getByTestId("tick")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    render(<Checkbox onClick={onClick} checked />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
