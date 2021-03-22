const path = require("path");
const babelConf = require("./babel.conf");

module.exports = (evn, arg) => {

  return {
    entry: "./src/index.js",

    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },

    devtool: "source-map",

    devServer: {
      contentBase: "./dist",
      port: 4200,
    },

    module: {
      rules: [
        // rules for js
        { ...babelConf },
      ],
    },

  };
};
