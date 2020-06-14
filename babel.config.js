module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: "> 0.25%, not dead",
      useBuiltIns: "usage",
      corejs: require("./package.json").dependencies["core-js"]
    }]
  ]
};
