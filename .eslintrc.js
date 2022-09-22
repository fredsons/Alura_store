module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        'no-console': 'off',
    }

    'parserOptions': {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        }
    }
};