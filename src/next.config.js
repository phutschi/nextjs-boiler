const { ANALYZE, NODE_ENV } = process.env;

module.exports = {
    assetPrefix :
        NODE_ENV === 'production' ? 'https://nextjseslintflow.b-cdn.net' : '',
    webpack : config => {
        if ( ANALYZE ) {
            const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );

            config.plugins.push(
                new BundleAnalyzerPlugin( {
                    analyzerMode   : 'static',
                    reportFilename : './analyze-report.html',
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
