const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

/* Paths */
var paths = {
  root: {
    node: "node_modules/",
    bootstrap: "bootstrap/dist/",
    jquery: "jquery/dist/",
    poppercore: "@popperjs/core/dist/",
    popperjs: "popper.js/dist/",
    awesome: "@fortawesome/fontawesome-free/",
    themify: "@icon/themify-icons/",
  },
  public: {
    root: "public/",
    assets: "public/assets/",
    build: "public/build/",
    css: "public/assets/css/",
    js: "public/assets/js/",
    fonts: "public/assets/fonts/",
    awesome: "public/assets/fonts/awesome/",
    vendors: "public/assets/vendors/",
    icons: "public/assets/icons/",
    themify: "public/assets/icons/themify/",
    img: "public/assets/img/",
  },
  dist: {
    root: "dist/",
    assets: "assets/",
    build: "build/",
    css: "build/css/",
    js: "build/js/",
    img: "build/img/",
    icons: "build/icons/",
    vendors: "build/vendors/",
  },
  src: {
    root: "src/Components/",
    css: "src/Components/css/",
    js: "src/Components/js/",
    vendors: "src/Components/vendors/",
    img: "src/Components/img/",
    icons: "src/Components/icons/",
    scss: "src/Components/scss/",
  },
};

/* Module */
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "build/js/[name].js",
  },
  devServer: {
    port: 5000,
  },
  resolve: {
    extensions: ["*", ".mjs", ".js", ".jsx", ".svelte"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /styles\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /styles\.css$/,
        use: {
          loader: "style-loader",
          loader: "css-loader",
          loader: "sass-loader",
        },
      },
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      //   options: {
      //     attributes: false,
      //     minimize: false,
      //   },
      // },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
        },
      },
    ],
  },

  /* Plugins */
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "/build/css/[name].css",
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: paths.public.assets, to: paths.dist.assets },
        { from: paths.public.build + "css", to: paths.dist.css },
        { from: paths.public.build + "js", to: paths.dist.js },
        { from: paths.public.build + "icons", to: paths.dist.icons },
        // { from: paths.public.build + "img", to: paths.dist.img },
        // { from: paths.public.build + "vendors", to: paths.dist.vendors },

        // { from: paths.public.build + "img", to: paths.dist.img },
        // { from: paths.src.build, to: paths.dist.build },
        // { from: paths.public.css, to: paths.dist.css },
        // { from: paths.public.js, to: paths.dist.js },
        // { from: paths.public.img, to: paths.dist.img },
        // { from: paths.public.vendors, to: paths.dist.vendors },
      ],
    }),
  ],
};
