import * as path from "path";
import { WebpackOptionsNormalized, Configuration } from "webpack";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";

const config = merge<WebpackOptionsNormalized | Configuration>(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../build"),
    libraryTarget: "commonjs",
    filename: "index.js",
    clean: true,
    publicPath: "/"
  }
});

export default config;
