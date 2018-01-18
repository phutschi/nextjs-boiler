const express = require( 'express' );
const next = require( 'next' );
const LRUCache = require( 'lru-cache' );

const port = parseInt( process.env.PORT, 10 ) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next( { dir : './src', dev } );
const handle = app.getRequestHandler();

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache( {
    max    : 100,
    maxAge : 10000 * 60 * 60, // 10 hours, enough if your page doesn't change a lot
} );

app.prepare().then( () => {
    const server = express();

    // Use the `renderAndCache` utility defined below to serve pages
    server.get( '/', ( req, res ) => {
        renderAndCache( req, res, '/' );
    } );

    server.get( '/about', ( req, res ) => {
        renderAndCache( req, res, '/about' );
    } );

    server.get( '*', ( req, res ) => {
        return handle( req, res );
    } );

    server.listen( port, err => {
        if ( err ) throw err;
        console.log( `> Flying on http://localhost:${port} in ${process.env.NODE_ENV} ✈️` ); // eslint-disable-line
    } );
} );

/*
 * make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey( req ) {
    return `${req.url}`;
}

function renderAndCache( req, res, pagePath, queryParams ) {
    const key = getCacheKey( req );

    // If we have a page in the cache, let's serve it
    if ( ssrCache.has( key ) ) {
        res.send( ssrCache.get( key ) );

        return;
    }

    // If not let's render the page into HTML
    app
        .renderToHTML( req, res, pagePath, queryParams )
        .then( html => {
        // Let's cache this page
            ssrCache.set( key, html );

            res.send( html );
        } )
        .catch( err => {
            app.renderError( err, req, res, pagePath, queryParams );
        } );
}
