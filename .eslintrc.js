module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["airbnb-base", "plugin:vue/strongly-recommended"],
  rules: {
    "no-console": "warn",
    quotes: ["error", "double"],
    "max-len": ["error", { code: 240, ignoreStrings: true, ignoreUrls: true }],
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
    // It looked bad
    "vue/html-closing-bracket-newline": ["error", {
      singleline: "never",
      multiline: "never",
    }],
    // Let me live my life
    "vue/max-attributes-per-line": ["error", {
      singleline: 3,
      multiline: {
        max: 2,
        allowFirstLine: false,
      },
    }],
  },

};
