const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output bundle file
    publicPath: "/", // Public URL of the output directory when referenced in a browser
  },
  devServer: {
    contentBase: "./dist",
    hot: true, // Enable hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
