import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Head from 'next/head';

import initRedux from './initRedux';

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName( Component ) {
    return Component.displayName || Component.name || 'Unknown';
}

export default ComposedComponent => {
    return class WithData extends React.Component {
        static displayName = `WithData(${getComponentDisplayName( ComposedComponent )})`;
        static propTypes = { stateRedux  : PropTypes.object.isRequired };

        static async getInitialProps( ctx ) {
            let stateRedux = {};

            // Evaluate the composed component's getInitialProps()
            let composedInitialProps = {};
            if ( ComposedComponent.getInitialProps ) {
                composedInitialProps = await ComposedComponent.getInitialProps( ctx );
            }

            if ( !process.browser ) {
                const rematch = initRedux();
                const url = { query : ctx.query, pathname : ctx.pathname };

                try {
                    // Run all GraphQL queries
                    await getDataFromTree(
                        <Provider store={rematch}>
                            <ComposedComponent url={url} {...composedInitialProps} />
                        </Provider>,
                        {
                            router : {
                                asPath   : ctx.asPath,
                                pathname : ctx.pathname,
                                query    : ctx.query,
                            },
                        },
                    );
                } catch ( error ) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                }
                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind();

                stateRedux = rematch.getState();
            }

            return {
                stateRedux,
                ...composedInitialProps,
            };
        }

        constructor( props ) {
            super( props );

            this.rematch = initRedux( props.stateRedux );
        }

        render() {
            return (
                <Provider store={this.rematch}>
                    <ComposedComponent {...this.props} />
                </Provider>
            );
        }
    };
};
