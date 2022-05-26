import * as path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: "./src/docs/index.tsx",
  resolve: {
    modules: [path.resolve(__dirname, "../src", "docs"), "node_modules"],
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "react-usevalidateform": path.resolve(
        __dirname,
        "../src",
        "useValidateForm"
      )
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.(ico)$/,
        loader: "file-loader"
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "../public/index.html"),
      favicon: path.resolve(__dirname, "../public/favicon.ico")
    })
  ]
};

export default config;
