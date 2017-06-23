module.exports = {
    globals: {
        DEBUG: true
    },
    env: {
        browser: true,
        es6: true,
        jasmine: true
    },
    extends: [
        './rules/possible-errors',
        './rules/best-practices',
        './rules/strict-mode',
        './rules/variables',
        './rules/node-js-and-common-js',
        './rules/stylistic',
        './rules/es6',
        './rules/react',
        './rules/a11y',
        './rules/import',
    ].map(require.resolve),
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
        ecmaVersion: 2017,
        sourceType: 'module',
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
    }
}
