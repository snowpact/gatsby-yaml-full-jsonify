exports.dataToBadJson = function (data) {
  const oneLineJsonWithoutBrackets = data
    .split("\n")
    .map((line) => line.trim().replace(/(^,)|(,$)/g, ""))
    .filter((e) => !!e)
    .join(", ");

  return `{ ${oneLineJsonWithoutBrackets} }`;
};
