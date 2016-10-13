module.exports = {
    parser: 'babel-eslint',
    globals: {
        DEBUG: true
    },
    env: {
        browser: true,
        es6: true,
        jasmine: true
    },
    extends: 'airbnb',
    plugins: [
        'react',
        'import'
    ],
    ecmaFeatures: {
        arrowFunctions: true,
        blockBindings: true,
        classes: true,
        defaultParams: true,
        destructuring: true,
        jsx: true,
        modules: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        spread: true,
        templateStrings: true,
        experimentalObjectRestSpread: true
    },
    rules: {
        'arrow-parens': [1, 'always'],
        'object-shorthand': [1, 'always'],
        'object-curly-spacing': [1, 'always'],
        'consistent-this': [1, 'that'],
        'no-mixed-spaces-and-tabs': 1,
        'indent': [1, 4, { SwitchCase: 1 }],
        'no-shadow': 1,
        'semi': [1, 'never'],
        'jsx-quotes': [1, 'prefer-double'],
        'quotes': [1, 'single'],
        'vars-on-top': 1,
        'one-var': [1, 'never'],
        'no-undef-init': 1,
        'no-undefined': 2,
        'eol-last': 1,
        'dot-location': [1, 'property'],
        'dot-notation': 1,
        'yoda': [2, 'never'],
        'curly': [1, 'all'],
        'camelcase': [2, { properties: 'always' }],
        'block-spacing': [2, 'always'],
        'no-trailing-spaces': [1, { skipBlankLines: true }],
        'no-multiple-empty-lines': 1,
        'no-unused-vars': 1,
        'prefer-const': 1,
        'space-before-function-paren': [1, 'always'],
        'comma-dangle': 0,
        'no-var': 1,
        'padded-blocks': 0,
        'spaced-comment': 1,
        'no-param-reassign': 0,
        'func-names': 0,
        'strict': 0,
        'complexity': [1, 11],
        'linebreak-style': 0,
        'quote-props': [0, 'consistent-as-needed'],
        'max-len': 0,
        'prefer-spread': 0,
        'no-void': 0,
        // React
        'react/forbid-prop-types': [1, {
            forbid: [
                'any'
            ]
        }],
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-bind': 2,
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-curly-spacing': [1, 'never'],
        'react/prefer-es6-class': 1,
        'react/sort-comp': [1, {
            order: [
                'lifecycle',
                '/^on.+$/',
                'everything-else',
                'render',
                '/^render.+$/'
            ]
        }],
        'react/prop-types': 1,
        'react/no-multi-comp': 0,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        // import
        'import/prefer-default-export': 0,
        'import/imports-first': 1,
        'import/order': [1, {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index"]
        }],
        'import/no-extraneous-dependencies': 0
    }
}
