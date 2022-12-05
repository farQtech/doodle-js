const config = {
    verbose: true,
    coverageDirectory: '__tests__',
    testEnvironment: 'jsdom',
    globals: {
      window: {}
    }
  };
  
  module.exports = config;