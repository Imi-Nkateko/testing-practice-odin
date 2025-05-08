const reverseString = require("../reverseString");

describe("reverses string", () => {
  test("beer equal to reeb", () => {
    expect(reverseString("beer")).toBe("reeb");
  });
});
