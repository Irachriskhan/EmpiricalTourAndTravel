// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add your custom webpack configuration here
      webpackConfig.module.rules.push({
        test: /\.txt$/,
        use: "raw-loader",
      });
      return webpackConfig;
    },
  },
};
