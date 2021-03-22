module.exports = {
  test: /\.js$/i,
  exclude: /(node_modules)/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                node: "current",
              },
            },
          ],
          "babel-jest",
        ]
      },
    },
  ],
};
