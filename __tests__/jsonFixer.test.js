const { fixJson } = require("../utils/jsonFixer");

describe("fixJson", () => {
  it("should successfully transform bad json single quotes to parseable json", () => {
    const badJson = `{ 'single': '2' }`;
    const goodJson = fixJson(badJson);

    expect(JSON.parse(goodJson)).toMatchObject({ single: "2" });
  });

  it("should successfully transform bad json no quotes in key to parseable json", () => {
    const badJson = `{ single: '2' }`;
    const goodJson = fixJson(badJson);

    expect(JSON.parse(goodJson)).toMatchObject({ single: "2" });
  });

  it("should successfully transform bad json string and numbers to parseable json", () => {
    const badJson = `{ "number": 2, "float": 2.2, "string": "abc" }`;
    const goodJson = fixJson(badJson);

    expect(JSON.parse(goodJson)).toMatchObject({
      number: 2,
      float: 2.2,
      string: "abc",
    });
  });

  it("should successfully transform bad json object to parseable json", () => {
    const badJson = `{ "object": {"string": "abc"} }`;
    const goodJson = fixJson(badJson);

    expect(JSON.parse(goodJson)).toMatchObject({ object: { string: "abc" } });
  });

  it("should successfully transform bad json array to parseable json", () => {
    const badJson = `{ "array": [1, "c"], "arrayWithObject": [{"a":  "b"}] }`;
    const goodJson = fixJson(badJson);

    expect(JSON.parse(goodJson)).toMatchObject({
      array: [1, "c"],
      arrayWithObject: [{ a: "b" }],
    });
  });

  it("should fail when real bad format", () => {
    const badJson = `{ a, "array": [1, "c"], "arrayWithObject": [{"a":  "b"}] }`;
    const goodJson = fixJson(badJson);

    let parsedJson;
    expect.assertions(1);
    try {
      parsedJson = JSON.parse(goodJson);
    } catch {
      expect(parsedJson).toBe(undefined);
    }
  });
});
