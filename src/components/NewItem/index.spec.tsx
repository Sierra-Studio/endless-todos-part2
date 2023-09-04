import { fireEvent, render, screen } from "@testing-library/react";
import NewItem from ".";

const changeEvent = { target: { value: "test" } };

const onSubmit = jest.fn();

describe("NewItem", () => {
  it("should render", () => {
    render(<NewItem onSubmit={onSubmit} />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("should update value", () => {
    render(<NewItem onSubmit={onSubmit} />);

    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.change(input, changeEvent);

    expect(input.value).toBe(changeEvent.target.value);
  });

  it("should execute onSubmit when event fired", () => {
    render(<NewItem onSubmit={onSubmit} />);

    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.change(input, changeEvent);

    const form = screen.getByRole<HTMLFormElement>("form");

    fireEvent.submit(form);

    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith(changeEvent.target.value);
  });
});
