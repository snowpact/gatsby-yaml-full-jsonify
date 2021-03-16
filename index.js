const { jsonify } = require("./jsonify");

module.exports = function ({ node }, pluginOptions) {
  return {
    tag: "!jsonify",
    options: {
      kind: "scalar",
      construct: (data) => {
        return jsonify(data);
      },
    },
  };
};
