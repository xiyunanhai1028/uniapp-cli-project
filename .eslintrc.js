/*
 * @Author: dfh
 * @Date: 2022-12-29 14:43:19
 * @LastEditors: dfh
 * @Modified By: dfh
 * @describe:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/eslint-config-prettier"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: false,
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
        endOfLine: "auto"
      }
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"] //需要忽略的组件名
      }
    ]
  }
}
