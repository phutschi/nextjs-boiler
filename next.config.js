const { ANALYZE, NODE_ENV, CDN_URL } = process.env;
const withSass = require( '@zeit/next-sass' );

const isProd = NODE_ENV === 'production';
const hasCDNUrl = CDN_URL !== undefined;

module.exports = withSass( {
    cssModules       : true,
    cssLoaderOptions : {
        importLoaders  : 1,
        localIdentName : '[local]___[hash:base64:5]',
    },
    assetPrefix : isProd && hasCDNUrl ? CDN_URL : '',
    webpack( config ) {
        if ( ANALYZE ) {
            const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );

            config.plugins.push(
                new BundleAnalyzerPlugin( {
                    analyzerMode   : 'server',
                    analyzerPort   : 8888,
                    openAnalyzer   : true,
                } ),
            );
        }

        return config;
    },
} );
