const CopyPlugin = require("copy-webpack-plugin");

/* Paths */
var paths = {
  root: {
    node: "node_modules/",
    bootstrap: "bootstrap/dist/",
    jquery: "jquery/dist/",
    poppercore: "@popperjs/core/dist/",
    popperjs: "popper.js/dist/",
    dist: "assets/",
    awesome: "@fortawesome/fontawesome-free/",
    themify: "@icon/themify-icons/",
  },
  public: {
    root: "../public/",
    assets: "../public/assets/",
    css: "../public/assets/css/",
    js: "../public/assets/js/",
    fonts: "../public/assets/fonts/",
    awesome: "../public/assets/fonts/awesome/",
    vendors: "../public/assets/vendors/",
    icons: "../public/assets/icons/",
    img: "../public/assets/img/",
  },
};

module.exports = {
  mode: "development",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: paths.root.node + paths.root.bootstrap + "css",
          to: paths.public.css + "bootstrap",
        },
        {
          from: paths.root.node + paths.root.bootstrap + "js",
          to: paths.public.js + "bootstrap",
        },
        {
          from: paths.root.node + paths.root.jquery,
          to: paths.public.js + "jquery",
        },
        {
          from: paths.root.node + paths.root.popperjs,
          to: paths.public.js + "popper/js",
        },
        {
          from: paths.root.node + paths.root.poppercore,
          to: paths.public.js + "popper/core",
        },
        {
          from: paths.root.node + paths.root.awesome + "css",
          to: paths.public.awesome + "css",
        },
        {
          from: paths.root.node + paths.root.awesome + "js",
          to: paths.public.awesome + "js",
        },
        {
          from: paths.root.node + paths.root.awesome + "webfonts",
          to: paths.public.awesome + "font",
        },
        {
          from: paths.root.node + paths.root.awesome + "sprites",
          to: paths.public.awesome + "sprites",
        },
        {
          from: paths.root.node + paths.root.awesome + "svgs",
          to: paths.public.awesome + "svgs",
        },
        {
          from: paths.root.node + paths.root.themify + "icons",
          to: paths.public.icons + "themify",
        },
      ],
    }),
  ],
};
