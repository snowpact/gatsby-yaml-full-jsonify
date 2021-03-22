const { jsonify } = require("../jsonify");

describe("fixJson", () => {
  it("should successfully transform bad json single quotes to parseable json", () => {
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

  it("should successfully transform bad json single quotes to parseable json", () => {
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

  it("should successfully transform complex json to parseable json", () => {
    const data = `
    items: [{ title: "Aujourd'hui", description: "Heures ouvertures", icon:
      "clock", footer: "Horaire d'ouverture", apply: "extractToday::Mo
      11:00-13:00,18:00-22:00; Tu 18:00-22:00; We 11:00-13:00,18:00-22:00; Sa
      11:00-13:00,18:00-22:13" }, { title: "Adresse", description: "X
      Y", footer: "Localisation" }, { title:
      "Téléphone", description: "XX", click: "tel:x",
      footer: "Contact", icon: "phone" }]
  `;

    const jsonString = jsonify(data);

    const json = JSON.parse(jsonString);
    expect(json).toMatchObject({
      items: [
        {
          title: "Aujourd'hui",
          description: "Heures ouvertures",
          icon: "clock",
          footer: "Horaire d'ouverture",
          apply:
            "extractToday::Mo 11:00-13:00,18:00-22:00; Tu 18:00-22:00; We 11:00-13:00,18:00-22:00; Sa 11:00-13:00,18:00-22:13",
        },
        {
          title: "Adresse",
          description: "X Y",
          footer: "Localisation",
        },
        {
          title: "Téléphone",
          description: "XX",
          click: "tel:x",
          footer: "Contact",
          icon: "phone",
        },
      ],
    });
  });
});
