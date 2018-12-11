import path from "path";

const dev = process.env.NODE_ENV !== "production";

const config = {
  mode: dev ? "development" : "production",
  context: path.join(__dirname, "src"),
  devtool: dev ? "none" : "source-map",
  devServer: {
    contentBase: './dist'
  },
  entry: {
    app: "../index.js",
  },
  resolve: {
    modules: [
      path.resolve("./src"),
      "node_modules",
    ],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "[name].bundle.js",
  }
};

export default config;