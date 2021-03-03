module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["airbnb-base", "plugin:vue/strongly-recommended"],
  // The rules are personal preference.
  // These rules are just an example of the rules I currently have configured.
  rules: {
    "no-console": "warn",
    "vue/max-attributes-per-line": [
      2,
      {
        multiline: {
          allowFirstLine: true,
        },
      },
    ],
    quotes: ["error", "double"],
    "max-len": ["error", { code: 140, ignoreStrings: true, ignoreUrls: true }],
    "import/no-unresolved": 0,
    "linebreak-style": 0,
    "no-underscore-dangle": 0,
    "vue/html-self-closing": ["error", {
      html: {
        void: "never",
        normal: "never",
        component: "always",
      },
      svg: "always",
      math: "always",
    }],
  },
};
