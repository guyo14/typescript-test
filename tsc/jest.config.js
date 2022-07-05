/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  verbose: true,
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.[tj]s'
  ],
};
