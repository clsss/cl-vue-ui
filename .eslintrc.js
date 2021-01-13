module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    Vue: true,
    isDev: true
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "object-shorthand": 'off',
    "no-param-reassign": 'off',
    // allow async-await
    "generator-star-spacing": "off",
    // js语句结尾必须使用分号
    semi: 0,
    // 三等号
    eqeqeq: 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": 0,
    // 关键字后面使用一致的空格
    "keyword-spacing": 0,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": 0,
    // 引号类型
    quotes: 0,
    // 禁止出现未使用过的变量
    "no-unused-vars": 0,
    // 要求或禁止末尾逗号
    "comma-dangle": 0,
    // 严格的检查缩进问题
    indent: 0,
    //引入模块没有放入顶部
    "import/first": 0,
    //前面缺少空格，Missing space before
    "arrow-spacing": 0,
    //后面没有空位，There should be no space after this paren
    "space-in-parens": 0,
    //已定义但是没有使用，'scope' is defined but never used
    "vue/no-unused-vars": 0,
    "linebreak-style": [0, "error", "windows"],
    // arrow-parens
    "arrow-parens": "off",
    "prefer-template": "off",
    // 强制使用命名的 function 表达式
    "func-names": 0,
    "import/newline-after-import": 0,
    // .js/.vue后缀
    "import/extensions": 0,
    // _开头的私有变量命名
    "no-underscore-dangle": 0,
    "no-plusplus": 0,
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ]
};
