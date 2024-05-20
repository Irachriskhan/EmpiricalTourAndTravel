module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-react",
      {
        deployment: process.env.BABEL_ENV === "deployment",
      },
    ],
  ];

  const plugins = [
    // { skipEnvCheck: true }
  ];

  return {
    presets,
    plugins,
  };
};
