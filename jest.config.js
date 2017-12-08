module.exports = {
    verbose                    : true,
    coverageDirectory          : './coverage',
    coveragePathIgnorePatterns : [
        './src/.next/',
        './node_modules/',
    ],
    coverageReporters : [ 'json' ],
    setupFiles        : [
        '<rootDir>/lib/shim.js',
        '<rootDir>/lib/setup.js',
    ],
};
