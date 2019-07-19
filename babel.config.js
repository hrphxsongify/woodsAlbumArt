module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["transform-export-extensions"];

  return {
    presets,
    plugins
  };
}