module.exports = {
    verbose                    : true,
    coverageDirectory          : './coverage',
    coveragePathIgnorePatterns : [
        '<root_dir>/src/.next/',
        '<root_dir>/node_modules/',
    ],
    coverageReporters : [ 'json' ],
};
