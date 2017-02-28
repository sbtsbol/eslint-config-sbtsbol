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
    extends: [
        'stcherenkov',
        require.resolve('./rules/react'),
        require.resolve('./rules/import')
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
    parserOptions: {
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
    },
    rules: {
        'max-lines': ['warn', {
            max: 400,
            skipBlankLines: true,
            skipComments: true
        }],
    }
}
