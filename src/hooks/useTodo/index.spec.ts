import { act, renderHook } from "@testing-library/react";
import useTodo from ".";

describe("useTodo", () => {
  it("should load empty arrays at first launch", () => {
    const {
      result: {
        current: { todo, done },
      },
    } = renderHook(useTodo);

    expect(todo).toEqual([]);
    expect(done).toEqual([]);
  });

  it("should add item when addItem called", () => {
    const { result } = renderHook(useTodo);

    act(() => result.current.addItem("test"));

    expect(result.current.todo).toEqual([{ id: 1, value: "test" }]);
  });

  it("should mark item as complete when 'complete' called", () => {
    const { result } = renderHook(useTodo);

    act(() => result.current.complete(1));

    expect(result.current.done).toEqual([{ id: 1, value: "test" }]);
    expect(result.current.todo).toEqual([]);
  });

  it("should mark item as todo when 'markAsTodo' called", () => {
    const { result } = renderHook(useTodo);

    act(() => result.current.markAsTodo(1));

    expect(result.current.todo).toEqual([{ id: 1, value: "test" }]);
    expect(result.current.done).toEqual([]);
  });

  it("should edit items", () => {
    const { result } = renderHook(useTodo);

    act(() => result.current.changeTodoItem(1, "Tested"));

    expect(result.current.todo).toEqual([{ id: 1, value: "Tested" }]);
    expect(result.current.done).toEqual([]);
  });
});
