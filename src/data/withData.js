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

        static async getInitialProps() {
            let stateRedux = {};

            // Evaluate the composed component's getInitialProps()
            let composedInitialProps = {};
            if ( ComposedComponent.getInitialProps ) {
                composedInitialProps = await ComposedComponent.getInitialProps();
            }

            if ( !process.browser ) {
                const redux = initRedux();

                Head.rewind();

                stateRedux = redux.getState();
            }

            return {
                stateRedux,
                ...composedInitialProps,
            };
        }

        constructor( props ) {
            super( props );

            this.redux = initRedux();
        }

        render() {
            return (
                <Provider store={this.redux}>
                    <ComposedComponent {...this.props} />
                </Provider>
            );
        }
    };
};
