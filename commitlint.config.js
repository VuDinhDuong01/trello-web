module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
			],
		],
		'subject-case': [2, 'always', ['sentence-case']],
		'type-case': [2, 'always', ['sentence-case']],
		'header-max-length': [2, 'always', 72],
		'header-min-length': [2, 'always', 0],
	},
};
