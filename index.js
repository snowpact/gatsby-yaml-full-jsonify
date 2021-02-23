module.exports = function ({ node }, pluginOptions) {
  return {
    tag: "!example",
    options: {
      kind: "scalar",
      construct: () => `Parent directory is ${node.dir}`,
    },
  };
};
