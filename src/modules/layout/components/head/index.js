// @flow

import * as React from 'react';

import NextHead from 'next/head';
import Router from 'next/router';

import NProgress from 'nprogress';

type Props = {
    description? : string,
    ogImage?     : string,
    subtitle     : string,
    title        : string,
    url?         : string,
}

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Head = ( { description, ogImage, subtitle, title, url }: Props ) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>
            {title}{subtitle && ` | ${subtitle}` }
        </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </NextHead>
);

Head.defaultProps = {
    description : '',
    ogImage     : '',
    url         : '',
};

export default Head;
