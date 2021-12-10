module.exports = {
  displayName: 'wolox-express-demo-nx',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  setupFilesAfterEnv: ['./src/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coveragePathIgnorePatterns: ['/tests/'],
  coverageDirectory: '../../coverage/apps/wolox-express-demo-nx',
};
