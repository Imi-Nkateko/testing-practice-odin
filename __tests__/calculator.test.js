const calculator = require("../calculator");

describe("A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply", () => {
  test("adds 2 + 3 to equal 5", () => {
    expect(calculator.add(2, 3)).toEqual(5);
  });
});
