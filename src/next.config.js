const { ANALYZE, NODE_ENV, CDN_URL } = process.env;

module.exports = {
    assetPrefix :
        CDN_URL && NODE_ENV === 'production' ? CDN_URL : '',
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
        // Put routes and their pages in here if you want to use a custom route
        return {
            '/me' : { page : '/about' },
        };
    },
};
