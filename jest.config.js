module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,ts}', '!**/*.d.ts'],
  coverageReporters: ['lcov'],
  coverageDirectory: '<rootDir>/coverage',
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest'
  },
  testMatch: ['**/?(*.)test.(js|ts)'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json']
};
