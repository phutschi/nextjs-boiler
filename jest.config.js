module.exports = {
    verbose                    : true,
    coverageDirectory          : './coverage',
    coveragePathIgnorePatterns : [
        './src/.next/',
        './node_modules/',
    ],
    coverageReporters : [ 'json' ],
    setupFiles        : [ './src/utils/shim.js' ],
};
