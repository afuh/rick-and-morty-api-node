/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts'],
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
