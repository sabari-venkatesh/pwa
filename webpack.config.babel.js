import path from "path";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";

const clientConfig = {
  context: path.join(__dirname, "src"),
  entry: './client.js',
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: ["babel-loader", "eslint-loader"],
        test: /\.(js|jsx)$/,
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      "__isBrowser__": "true"
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
}

const serverConfig = {
  context: path.join(__dirname, "src"),
  entry: './server.js',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: ["babel-loader", "eslint-loader"],
        test: /\.(js|jsx)$/,
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      "__isBrowser__": "false"
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  target: 'node',
}

export default [clientConfig, serverConfig]