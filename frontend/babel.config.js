module.exports = function (api) {
  api.cache(true);

  const presets = [
    // [
    //   "@babel/preset-react",
    //   {
    //     production: process.env.BABEL_ENV === "production",
    //   },
    // ],
    {
      presets: ["@babel/preset-react", "@babel/preset-env"],
    },
  ];

  const plugins = [
    // { skipEnvCheck: true }
  ];

  return {
    presets,
    plugins,
  };
};
