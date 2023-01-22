const path = require("path");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/user-interface.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "audio/",
            },
          },
        ],
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: "./src/images/favicon.ico",
      inject: true,
    }),
  ],
};
