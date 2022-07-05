const fs = require('fs');

const swcConf = JSON.parse(fs.readFileSync('.swcrc', 'utf8'));
delete swcConf.exclude;

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(t|j)s$': ['@swc/jest', swcConf],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!**/node_modules/**'
  ],
};
