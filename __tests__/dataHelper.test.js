const { dataToBadJson } = require("../utils/dataHelper");

test("should successfully transform data to bad json", () => {
  const data = `
      number: 2
      float: 2.2
  `;

  const badJson = dataToBadJson(data);
  expect(badJson).toBe(`{ number: 2, float: 2.2 }`);
});

test("should successfully transform data to bad json (single line)", () => {
  const data = `string: "st"`;

  const badJson = dataToBadJson(data);
  expect(badJson).toBe(`{ string: "st" }`);
});

test("should successfully transform data to bad json (with comma)", () => {
  const data = `
      number: 2,
      float: 2.2,
  `;

  const badJson = dataToBadJson(data);
  expect(badJson).toBe(`{ number: 2, float: 2.2 }`);
});
