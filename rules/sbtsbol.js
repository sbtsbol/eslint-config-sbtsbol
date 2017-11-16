const ruleMatch = '\\b[\\w/]+\\b(-\\b[\\w/]+\\b)*(?!-)'
const disableMatch = 'eslint-disable(-line)?'
const startsWith = '^ ?'

const oneRuleComment = startsWith + disableMatch + ' ' + ruleMatch + '(?!, comment: .{10,}) ?'
const noMultiDisable = startsWith + disableMatch + ' ' + ruleMatch + '(, ' + ruleMatch + ')+[^:] ?'

module.exports = {
    plugins: [
        'sbtsbol',
    ],

    rules: {
        'sbtsbol/no-warning-comments-regexp': ['warn', {
            terms: [oneRuleComment, noMultiDisable],
            message: 'Предупреждения при использовании: TODOs; множественные disable; disable без приставки ", comment: сообщение менее 10 символов"'
        }],
    }
}
