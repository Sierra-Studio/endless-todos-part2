import { fireEvent, render, screen } from "@testing-library/react";
import Item from ".";

const onChange = jest.fn();
const onChangeStatus = jest.fn();
const value = "test";

describe("Item", () => {
  it("should render", () => {
    render(
      <Item
        onChange={onChange}
        onChangeStatus={onChangeStatus}
        initialValue={value}
      />
    );

    expect(screen.getByTestId("todo-item")).toBeInTheDocument();
  });

  it("should call function when checkbox clicked", () => {
    render(
      <Item
        onChange={onChange}
        onChangeStatus={onChangeStatus}
        initialValue={value}
      />
    );

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(onChangeStatus).toBeCalledTimes(1);
  });

  it("should call function when enter pressed", () => {
    render(
      <Item
        onChange={onChange}
        onChangeStatus={onChangeStatus}
        initialValue={value}
      />
    );

    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.change(input, { target: { value: "test2" } });

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith("test2");
  });
});
