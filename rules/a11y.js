module.exports = {
    plugins: [
        'jsx-a11y'
    ],
    rules: {
        'jsx-a11y/alt-text': ['warn', {
            elements: ['img', 'object', 'area', 'input[type="image"]'],
            img: ['Icon', 'Loader']
        }],
        'jsx-a11y/anchor-has-content': ['error', {
            components: ['Button.Link', 'Link']
        }],
        'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-role': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/heading-has-content': ['warn', {
            components: [
                'Headline', 'Subheader', 'Title',
                'Typography.Headline', 'Typography.Subheader', 'Typography.Title'
            ]
        }],
        'jsx-a11y/html-has-lang': 'warn',
        'jsx-a11y/iframe-has-title': 'warn',
        'jsx-a11y/img-redundant-alt': ['warn', {
            components: ['Icon', 'Loader'],
            words: ['Иконка', 'Картинка', 'Лоадер', 'Загрузка']
        }],
        'jsx-a11y/interactive-supports-focus': 'error',
        'jsx-a11y/label-has-for': [
            'warn',
            {
                required: {
                    some: ["nesting", "id"]
                },
                allowChildren: true
            }
        ],
        'jsx-a11y/media-has-caption': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        'jsx-a11y/no-access-key': 'warn',
        'jsx-a11y/no-autofocus': ['warn', {
            "ignoreNonDOM": true
        }],
        'jsx-a11y/no-distracting-elements': 'warn',

        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
            'warn',
            {
                tr: ['none', 'presentation'],
            },
        ],

        'jsx-a11y/no-noninteractive-element-interactions': [
            'warn',
            {
                handlers: [
                    'onClick',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp',
                ],
            },
        ],

        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
            'warn',
            {
                ul: [
                    'listbox',
                    'menu',
                    'menubar',
                    'radiogroup',
                    'tablist',
                    'tree',
                    'treegrid',
                ],
                ol: [
                    'listbox',
                    'menu',
                    'menubar',
                    'radiogroup',
                    'tablist',
                    'tree',
                    'treegrid',
                ],
                li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
                table: ['grid'],
                td: ['gridcell'],
            },
        ],

        'jsx-a11y/no-noninteractive-tabindex': [
            'warn',
            {
                tags: [],
                roles: ['tabpanel'],
            },
        ],

        'jsx-a11y/no-onchange': 'warn',
        'jsx-a11y/no-redundant-roles': 'warn',
        'jsx-a11y/no-static-element-interactions': [
            'warn',
            {
                handlers: [
                    'onClick',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp',
                ],
            },
        ],
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/scope': 'warn',
        'jsx-a11y/tabindex-no-positive': 'warn',
    }
}
