module.exports = {
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module'
	},
	rules: {
		'global-require': 2,
		'default-case': 2,
		eqeqeq: [2, 'smart'],
		'no-eq-null': 2,
		strict: [2, 'global'],
		'callback-return': 2,
		'no-process-env': 2,
		'no-process-exit': 2,
		'no-var': 2,
		indent: ['error', 'tab'],
		'prefer-const': 2,
		'no-unused-expressions': 0,
		semi: 2,
		'func-names': 1,
		'prefer-destructuring': 2,
		'object-shorthand': 2,
		quotes: ['error', 'single'],
		'no-buffer-constructor': 2,
		'linebreak-style': 2,
		'chai-friendly/no-unused-expressions': 2
	},
	globals: {
		require: false,
		console: false,
		module: false,
		__dirname: false
	},
	env: {
		node: true,
		mocha: true,
		es6: true
	},
	plugins: ['chai-friendly']
};
