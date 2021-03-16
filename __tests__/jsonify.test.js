const { jsonify } = require("../jsonify");

test("should successfully transform bad json single quotes to parseable json", () => {
  const data = `
    number: 2
    float: 2.2
  `;

  const jsonString = jsonify(data);
  const json = JSON.parse(jsonString);
  expect(json).toMatchObject({
    number: 2,
    float: 2.2,
  });
});

test("should successfully transform bad json single quotes to parseable json", () => {
  const data = `
    complexArray: [
      {
        "id":1,
        "title":"Tempor dolor",
        "price": 8.99,
        "object": {
          "a": [1, 2]
        }
      },
      {
        "id":2,
        "title":"Tempor dolor 2",
        "price": null
      },
      {
        "id":3,
        "title":"Tempor dolor 3",
        "price":"string"
      },
    ],
  `;

  const jsonString = jsonify(data);

  const json = JSON.parse(jsonString);
  expect(json).toMatchObject({
    complexArray: [
      {
        id: 1,
        title: "Tempor dolor",
        price: 8.99,
        object: {
          a: [1, 2],
        },
      },
      {
        id: 2,
        title: "Tempor dolor 2",
        price: null,
      },
      {
        id: 3,
        title: "Tempor dolor 3",
        price: "string",
      },
    ],
  });
});
