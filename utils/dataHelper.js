exports.dataToBadJson = function (data) {
  const oneLineJsonWithoutBrackets = data
    .split("\n")
    .map((line) => line.trim().replace(/(^,)|(,$)/g, ""))
    .filter((e) => !!e)
    .reduce((acc, line) => {
      const isStartOfArrayOrObject = acc.endsWith("[") || acc.endsWith("{");
      const isEndOfArrayOrObject = line.startsWith("]") || line.startsWith("}");
      const isEndSemiColon = acc.endsWith(":");
      const isInsideQuotes = (acc.match(/(?<!\\)\"/g) || []).length % 2 > 0;

      return isStartOfArrayOrObject ||
        isEndOfArrayOrObject ||
        isEndSemiColon ||
        isInsideQuotes
        ? acc + " " + line
        : acc + ", " + line;
    });

  return `{ ${oneLineJsonWithoutBrackets} }`;
};
