const { dataToBadJson } = require("./utils/dataHelper");
const { fixJson } = require("./utils/jsonFixer");
const { isJson } = require("./utils/isJson");

exports.jsonify = function (data) {
  const badJSON = dataToBadJson(data);

  try {
    const fixedJson = fixJson(badJSON);
    return isJson(fixedJson) ? fixedJson : null;
  } catch {
    return null;
  }
};
