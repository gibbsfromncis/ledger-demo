module.exports = {
  collectCoverageFrom: [
    'app/tests/**/*.{js,jsx}',
    '!app/tests/**/*.test.{js,jsx}',
    '!app/tests/*/RbGenerated*/*.{js,jsx}',
    '!app/tests/app.js',
    '!app/tests/*/*/Loadable.{js,jsx}'
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98
    }
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>/config/jest-mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest-mocks/image.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/config/test-setup.js',
  testRegex: 'app/tests/.*\\.test\\.js$'
};
