// Using Airbnb guide as baseline
// See: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js

module.exports = {
    env: {
        es6: true
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false
        }
    },

    rules: {
        // enforces no braces where they can be omitted
        // http://eslint.org/docs/rules/arrow-body-style
        // 'arrow-body-style': ['error', 'as-needed', {
        //     requireReturnForObjectLiteral: false,
        // }],
        'arrow-body-style': ['warn', 'as-needed', {
            requireReturnForObjectLiteral: false,
        }],

        // require parens in arrow function arguments
        // http://eslint.org/docs/rules/arrow-parens
        // 'arrow-parens': ['error', 'as-needed', {
        //     requireForBlockBody: true,
        // }],
        'arrow-parens': ['warn', 'always'],

        // require space before/after arrow function's arrow
        // http://eslint.org/docs/rules/arrow-spacing
        // 'arrow-spacing': ['error', { before: true, after: true }],
        'arrow-spacing': ['warn', { before: true, after: true }],

        // verify super() callings in constructors
        'constructor-super': 'error',

        // enforce the spacing around the * in generator functions
        // http://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', { before: false, after: true }],

        // disallow modifying variables of class declarations
        // http://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // disallow arrow functions where they could be confused with comparisons
        // http://eslint.org/docs/rules/no-confusing-arrow
        // 'no-confusing-arrow': ['error', {
        //     allowParens: true,
        // }],
        'no-confusing-arrow': ['warn', {
            allowParens: true,
        }],

        // disallow modifying variables that are declared using const
        'no-const-assign': 'error',

        // disallow duplicate class members
        // http://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // disallow importing from the same path more than once
        // http://eslint.org/docs/rules/no-duplicate-imports
        // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'no-duplicate-imports': 'off',

        // disallow symbol constructor
        // http://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'error',

        // disallow specific imports
        // http://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': 'off',

        // disallow to use this/super before super() calling in constructors.
        // http://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',

        // disallow useless computed property keys
        // http://eslint.org/docs/rules/no-useless-computed-key
        // 'no-useless-computed-key': 'error',
        'no-useless-computed-key': 'warn',

        // disallow unnecessary constructor
        // http://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // disallow renaming import, export, and destructured assignments to the same name
        // http://eslint.org/docs/rules/no-useless-rename
        // 'no-useless-rename': ['error', {
        'no-useless-rename': ['warn', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],

        // require let or const instead of var
        // 'no-var': 'error',
        'no-var': 'warn',

        // require method and property shorthand syntax for object literals
        // http://eslint.org/docs/rules/object-shorthand
        // 'object-shorthand': ['error', 'always', {
        //     ignoreConstructors: false,
        //     avoidQuotes: true,
        // }],
        'object-shorthand': ['warn', 'always', {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],

        // suggest using arrow functions as callbacks
        // 'prefer-arrow-callback': ['error', {
        //     allowNamedFunctions: false,
        //     allowUnboundThis: true,
        // }],
        'prefer-arrow-callback': ['warn', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],

        // suggest using of const declaration for variables that are never modified after declared
        // 'prefer-const': ['error', {
        //     destructuring: 'any',
        //     ignoreReadBeforeAssign: true,
        // }],
        'prefer-const': ['warn', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],

        // Prefer destructuring from arrays and objects
        // http://eslint.org/docs/rules/prefer-destructuring
        // 'prefer-destructuring': ['off', {
        //     array: true,
        //     object: true,
        // }, {
        //     enforceForRenamedProperties: false,
        // }],
        'prefer-destructuring': ['warn', {
            array: false,
            object: true,
        }, {
            enforceForRenamedProperties: false,
        }],

        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        // http://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 'error',

        // use rest parameters instead of arguments
        // http://eslint.org/docs/rules/prefer-rest-params
        // 'prefer-rest-params': 'error',
        'prefer-rest-params': 'warn',

        // suggest using the spread operator instead of .apply()
        // http://eslint.org/docs/rules/prefer-spread
        // 'prefer-spread': 'error',
        'prefer-spread': 'warn',

        // suggest using template literals instead of string concatenation
        // http://eslint.org/docs/rules/prefer-template
        // 'prefer-template': 'error',
        'prefer-template': 'warn',

        // disallow generator functions that do not have yield
        // http://eslint.org/docs/rules/require-yield
        // 'require-yield': 'error',
        'require-yield': 'warn',

        // enforce spacing between object rest-spread
        // http://eslint.org/docs/rules/rest-spread-spacing
        // 'rest-spread-spacing': ['error', 'never'],
        'rest-spread-spacing': ['warn', 'never'],

        // import sorting
        // http://eslint.org/docs/rules/sort-imports
        // deprecated in favor of https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],

        // require a Symbol description
        // http://eslint.org/docs/rules/symbol-description
        // 'symbol-description': 'error',
        'symbol-description': 'warn',

        // enforce usage of spacing in template strings
        // http://eslint.org/docs/rules/template-curly-spacing
        // 'template-curly-spacing': 'error',
        'template-curly-spacing': ['warn', 'never'],

        // enforce spacing around the * in yield* expressions
        // http://eslint.org/docs/rules/yield-star-spacing
        // 'yield-star-spacing': ['error', 'after']
        'yield-star-spacing': ['warn', 'after']
    }
}
