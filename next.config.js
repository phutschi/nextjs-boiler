const withPlugins = require( 'next-compose-plugins' );
const sass = require( '@zeit/next-sass' );
const optimizedImages = require( 'next-optimized-images' );

const { ANALYZE, NODE_ENV, CDN_URL } = process.env;
const isProd = NODE_ENV === 'production';
const hasCDNUrl = CDN_URL !== undefined;

// next config
const nextConfig = {
    webpack( config ) {
        if ( ANALYZE ) {
            const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );

            config.plugins.push(
                new BundleAnalyzerPlugin( {
                    analyzerMode : 'server',
                    analyzerPort : 8888,
                    openAnalyzer : true,
                } ),
            );
        }

        return config;
    },
    assetPrefix : isProd && hasCDNUrl ? CDN_URL : '',
};

module.exports = withPlugins( [
    [ sass, {
        cssModules       : true,
        cssLoaderOptions : {
            importLoaders  : 1,
            localIdentName : '[local]___[hash:base64:5]',
        },
    } ],
    [ optimizedImages, { optimizeImagesInDev : false } ],
], nextConfig );
