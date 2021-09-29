module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
   
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
   
    rules: {
      "no-console": 0,
      "no-param-reassign": ["error", { props: false }],
      "no-underscore-dangle": [
        "error",
        { allow: ["_id", "__v", "_countBy", "_merge"] },
      ],
    },
  };