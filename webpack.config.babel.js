import path from "path";
import webpack from 'webpack';

const dev = process.env.NODE_ENV !== "production";
const config = {
  context: path.join(__dirname, "src"),
  devtool: dev ? "none" : "source-map",
  devServer: {
    contentBase: './dist',
    hot: true
  },
  entry: {
    app: "../index.js",
  },
  mode: dev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};

export default config;