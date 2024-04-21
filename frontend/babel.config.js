module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ];

  const plugins = [{ skipEnvCheck: true }];

  return {
    presets,
    plugins,
  };
};
