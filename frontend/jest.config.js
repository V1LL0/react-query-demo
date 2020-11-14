// This file is not necessary in case you run the tests with "craco":
// npm run test
// or
// craco test --all
// but in case you want to run directly "jest" without craco or "react-scripts"
// you will need the jest.config.js and the babel.config.js
// in these two files we are just getting the configuration produced by craco

const { createJestConfig } = require('@craco/craco');

const cracoConfig = require('./craco.config.js');

const jestConfig = createJestConfig(cracoConfig);

module.exports = jestConfig;
