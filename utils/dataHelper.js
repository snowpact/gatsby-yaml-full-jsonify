exports.dataToBadJson = function (data) {
  const oneLineJsonWithoutBrackets = data
    .split("\n")
    .map((line) => line.trim().replace(/(^,)|(,$)/g, ""))
    .filter((e) => !!e)
    .reduce((acc, line) => {
      const isStartOfArrayOrObject = acc.endsWith("[") || acc.endsWith("{");
      const isEndOfArrayOrObject = line.startsWith("]") || line.startsWith("}");
      return isStartOfArrayOrObject || isEndOfArrayOrObject
        ? acc + " " + line
        : acc + ", " + line;
    });

  return `{ ${oneLineJsonWithoutBrackets} }`;
};
