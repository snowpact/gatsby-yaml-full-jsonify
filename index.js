const { dataToBadJson } = require("./utils/dataHelper");
const { fixJson } = require("./utils/jsonFixer");

module.exports = function ({ node }, pluginOptions) {
  return {
    tag: "!jsonify",
    options: {
      kind: "scalar",
      construct: (data) => {
        const badJSON = dataToBadJson(data);

        try {
          return fixJson(badJSON);
        } catch {
          return null;
        }
      },
    },
  };
};
