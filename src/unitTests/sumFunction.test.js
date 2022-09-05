import sum from "./sumFunction";

describe("adding two numbers together", () => {
  const tests = [
    { input: sum(2, 2), expected: 4 },
    { input: sum(3, 2), expected: 5 },
    { input: sum(4, 2), expected: 6 },
    { input: sum(5, 5), expected: 10 },
    { input: sum(345, 120), expected: 465 },
  ];

  // eslint-disable-next-line array-callback-return
  tests.map((eachTest) => {
    it("adding the sum of two numbers", () => {
      const actual = eachTest.input;

      expect(actual).toBe(eachTest.expected);
    });
  });
});
