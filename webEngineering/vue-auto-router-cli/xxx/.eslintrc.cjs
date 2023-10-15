module.exports = {
  env: {
    node: true,
    jest: false,
    browser: true,
    es2020:true
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
