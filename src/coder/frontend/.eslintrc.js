module.exports = {
  // 让ESLint识别TS
  parser: "@typescript-eslint/parser",
  // 采用TS风格指南库
  plugins: ["@typescript-eslint"],
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  // ESLint默认风格指南和TS风格指南混用
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "taro"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    useJSXTextNode: true,
    project: "./tsconfig.json"
  },
  rules: {
    "import/first": "off",
    // react
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"]
      }
    ],
    //TS相关
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ["_this"] // Allow `const self = this`; `[]` by default
      }
    ],
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    //重点指导
    "no-unused-vars": "off",
    "no-var": "error",
    "arrow-body-style": ["error", "always"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": "off",
    "template-curly-spacing": "error",
    "no-multi-spaces": "error",
    "no-console": [
      "warn",
      {
        allow: [
          "warn",
          "error",
          "info",
          "group",
          "groupCollapsed",
          "groupEnd",
          "table"
        ]
      }
    ],
    //ES6相关
    "prefer-const": "error",
    "object-shorthand": "error",
    //node相关
    "no-buffer-constructor": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "error",
    "no-process-exit": "error",
    //变量声明
    "no-use-before-define": "error",
    "no-undefined": "error",
    "no-label-var": "error",
    //严格模式
    strict: "error",
    //最佳实践
    yoda: "error",
    "no-prototype-builtins": "off",
    "wrap-iife": ["error", "outside"],
    "vars-on-top": "error",
    "require-await": "error",
    radix: "error",
    "prefer-promise-reject-errors": "error",
    "no-void": "error",
    "no-useless-return": "error",
    "no-useless-concat": "error",
    "no-unused-expressions": "error",
    "no-sequences": "error",
    "no-self-compare": "error",
    "no-script-url": "error",
    "no-return-await": "error",
    "no-return-assign": "error",
    "no-proto": "error",
    "no-param-reassign": "error",
    "no-octal-escape": "error",
    "no-new-wrappers": "error",
    "no-new-func": "error",
    "no-new": "error",
    "no-multi-str": "error",
    "no-loop-func": "error",
    "no-lone-blocks": "error",
    "no-labels": "error",
    "no-iterator": "error",
    "no-implicit-globals": "error",
    "no-implicit-coercion": "error",
    "no-floating-decimal": "error",
    "no-extra-label": "error",
    "no-extend-native": "error",
    "no-eval": "error",
    "no-eq-null": "error",
    "no-div-regex": "error",
    "no-caller": "error",
    "no-alert": "warn",
    "guard-for-in": "error",
    eqeqeq: ["error", "always"],
    "dot-location": ["error", "property"],
    "default-case": "error",
    curly: "error",
    "accessor-pairs": "error",
    "consistent-return": "error",
    complexity: ["error", 10],
    "block-scoped-var": "error",
    //风格指导
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": "error",
    "array-element-newline": ["error", "consistent"],
    "block-spacing": "error",
    "brace-style": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-this": ["error", "_this"],
    "eol-last": "error",
    "func-call-spacing": "error",
    "id-length": ["error", { min: 1 }],
    "implicit-arrow-linebreak": ["error", "beside"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": ["error", "always"],
    "no-multiple-empty-lines": "error",
    "max-depth": ["error", 3],
    "max-lines-per-function": ["error", 200],
    "max-nested-callbacks": ["error", 3],
    "max-params": ["error", 3],
    "multiline-ternary": ["error", "always-multiline"],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-whitespace-before-property": "error",
    "no-unneeded-ternary": "error",
    "object-property-newline": "error",
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "prefer-object-spread": "error",
    "quote-props": ["error", "as-needed"],
    quotes: "error",
    semi: ["error", "always"],
    "semi-spacing": "error",
    "semi-style": "error",
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "wrap-regex": "error"
  }
};

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

// https://cn.eslint.org/docs/rules/
