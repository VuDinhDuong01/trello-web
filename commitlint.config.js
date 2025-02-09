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
	},
};
