import { WebpackOptionsNormalized, Configuration } from "webpack";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";

const config = merge<WebpackOptionsNormalized | Configuration>(commonConfig, {
  mode: "development",
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 3000
  }
});

export default config;
