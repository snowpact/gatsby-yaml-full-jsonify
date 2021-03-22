const { dataToBadJson } = require("../utils/dataHelper");

describe("dataToBadJson", () => {
  it("should successfully transform data to bad json", () => {
    const data = `
      number: 2
      float: 2.2
  `;

    const badJson = dataToBadJson(data);
    expect(badJson).toBe(`{ number: 2, float: 2.2 }`);
  });

  it("should successfully transform data to bad json (single line)", () => {
    const data = `string: "st"`;

    const badJson = dataToBadJson(data);
    expect(badJson).toBe(`{ string: "st" }`);
  });

  it("should successfully transform data to bad json (with comma)", () => {
    const data = `
      number: 2,
      float: 2.2,
  `;

    const badJson = dataToBadJson(data);
    expect(badJson).toBe(`{ number: 2, float: 2.2 }`);
  });

  it("should successfully transform really ugly data to bad json (with comma)", () => {
    const data = `
      number: 2,
      float:
        2.2,
      multiline: "this is a cut \\"
        line"
      multiline2: "this is a cut
        line
        line"
  `;

    const badJson = dataToBadJson(data);
    expect(badJson).toBe(
      `{ number: 2, float: 2.2, multiline: "this is a cut \\\" line", multiline2: "this is a cut line line" }`
    );
  });
});
