const capitilize = require("../capitilize");

describe("capitilizes string", () => {
  test("beer equal to Beer", () => {
    expect(capitilize("beer")).toBe("Beer");
  });
});
