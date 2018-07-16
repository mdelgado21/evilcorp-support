module.exports = {
  collectCoverageFrom: [
    '!src/**/*.{js,jsx}',
    'server/**/*.{js,jsx}',
    '!<rootDir>/node_modules/'
  ],
  coverageReporters: ['text', 'html']
};
