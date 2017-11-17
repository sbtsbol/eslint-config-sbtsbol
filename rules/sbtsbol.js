const ruleMatch = '\\b[\\w]+\\b([-\\/]\\b[\\w]+\\b)*(?![-\\/])'
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
            message: 'Нежелательные комментарии:' +
            ' eslint-disable на несколько правил;' +
            ' eslint-disable для одного правила без комментария к причине отключения,' +
            ' пример правильного использования: "eslint-disable-line some-rule, comment: Развернутый текст с обоснованием"'
        }],
    }
}
