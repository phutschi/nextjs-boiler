const { parse } = require( 'url' );
const next = require( 'next' );

const dev = process.env.NODE_ENV !== 'production';

const app = next( { dev, dir : './src' } );
const handle = app.getRequestHandler();

async function main( req, res ) {
    const parsedUrl = parse( req.url, true );

    if ( req.url.indexOf( '.css' ) > -1 ) {
        res.setHeader( 'Cache-Control', 'public, max-age=2592000' );
        res.setHeader( 'Expires', new Date( Date.now() + 2592000000 ).toUTCString() );
    }

    return handle( req, res, parsedUrl );
}

async function setup( handler ) {
    await app.prepare();

    return handler;
}

module.exports = setup( main );
