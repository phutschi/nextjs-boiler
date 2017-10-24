const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );

const { ANALYZE } = process.env;

module.exports = {
    webpack : ( config ) => {
        if ( ANALYZE ) {
            config.plugins.push(
                new BundleAnalyzerPlugin( {
                    analyzerMode    : 'static',
                    reportFilename  : './analyze-report.html',
                } ),
            );
        }

        return config;
    },
    exportPathMap : () => {
        return {
            '/'      : { page : '/' },
            '/about' : { page : '/about' },
        };
    },
};
