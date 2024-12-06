const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // Set mode to production
  entry: "./js/dashboard_main.js", // Entry point
  output: {
    path: path.resolve(__dirname, "public"), // Output folder
    filename: "bundle.js", // Output JS file name
    assetModuleFilename: "assets/[name][ext][query]", // Asset output folder
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Process image files
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader", // Optimize images
            options: {
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML
      filename: "index.html", // Output HTML
    }),
  ],
};
