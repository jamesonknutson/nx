/* eslint-disable */
export default {
   transform: {
      '^.+\\.[tj]sx?$': [
         'ts-jest',
         { tsconfig: '<rootDir>/tsconfig.spec.json' },
      ],
   },
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
   globals: {},
   displayName: 'jest',
   preset: '../../jest.preset.js',
};
