// module.exports = {
//     "env": {
//         "es2021": true,
//         "node": true
//     },
//     "extends": "eslint:recommended", "plugin:react/recommended"],
//     "parserOptions": {
//         "ecmaVersion": 12,
//         "sourceType": "module"
//     },
//     "rules": {
//         'no-console': 'off',
//     },

//     'parserOptions': {
//         "ecmaVersion": 2020,
//         "ecmaFeatures": {
//             "experimentalObjectRestSpread": true,
//         }
//     }

// };

module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 8,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],

    rules: {
        quotes: ["error", "double"],
    },
};