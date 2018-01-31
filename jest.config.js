module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!coverage/*',
    '!.eslintrc.js',
    '!jest.config.js',
    '!next.config.js',
    '!jest.setup.js'
  ],
  coverageDirectory: './coverage'
}