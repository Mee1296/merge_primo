import { merge } from "../src/merge";

describe("merge function", () => {
  test("basic merge", () => {
    expect(
      merge([1, 4], [2, 5], [6, 3])
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("handles empty arrays", () => {
    expect(
      merge([], [1, 2, 6], [5, 3])
    ).toEqual([1, 2, 3, 5, 6]);
  });

  test("duplicates", () => {
    expect(
      merge([1, 2], [2, 3], [4, 2])
    ).toEqual([1, 2, 2, 2, 3, 4]);
  });

  test("all empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });
});
