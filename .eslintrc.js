// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        browser: false,
        node: true,
        es6: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html',
    ],
    /*
    * 官网: http://eslint.org | http://eslint.cn
    * 配置: http://eslint.org/docs/user-guide/configuring | http://eslint.cn/docs/user-guide/configuring
    * 0或者"off":关闭规则
    * 1或者"warn":打开规则,并且作为一个警告(不影响exit code)
    * 2或者"error":打开规则,并且作为一个错误(exit code将会是1)
    * */
    rules: {
        'prefer-const': 2, // 建议使用const
        'no-new': 0, // 禁止new一个实例后不赋值
        'no-unused-vars': 0, // 禁止未使用过的变量
        'indent': [2, 4, {SwitchCase: 1}], // 强制使用一致的缩进
        'semi': [2, 'always'], // 要求或禁止使用分号代替 ASI(自动分号插入)
        'comma-dangle': [2, 'always-multiline'], // 要求或禁止使用拖尾逗号
        'space-before-function-paren': 0, // 要求或禁止函数圆括号之前有一个空格
        'generator-star-spacing': 0, // 强制 generator 函数中 * 号周围使用一致的空格
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 生产环境不允许使用debugger
    },
    globals: {
        App: true,
        Page: true,
        wx: true,
        getApp: true,
        getPage: true,
        requirePlugin: true,
    },
};
