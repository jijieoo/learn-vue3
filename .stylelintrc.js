module.exports = {
    defaultSeverity: 'error',
    extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
    plugins: ['stylelint-selector-bem-pattern'],
    rules: {
        indentation: [4, {}],
        'string-quotes': 'single',
        'plugin/selector-bem-pattern': {
            componentName: '[a-z]+',
            componentSelectors: {
                initial: '^\\.{componentName}((__|--)([a-z-]+))?$'
            }
        }
    }
};
