const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias["@"] = path.resolve(__dirname, "..", "src");

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ];

    // Return the altered config
    return config;
  },
};
