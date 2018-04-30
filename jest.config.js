module.exports = {
    verbose                    : true,
    testPathIgnorePatterns     : [ '<rootDir>/.next/', '<rootDir>/node_modules/' ],
    coverageDirectory          : './coverage',
    coveragePathIgnorePatterns : [
        './src/.next/',
        './node_modules/',
    ],
    coverageReporters : [ 'json' ],
    setupFiles        : [
        '<rootDir>/lib/jest.shim.js',
        '<rootDir>/lib/jest.setup.js',
    ],
    transform        : { '^.+\\.js?$' : 'babel-jest' },
    moduleNameMapper : { '\\.(scss|less)$' : 'identity-obj-proxy' },
};
