import { init } from '@rematch/core';

import * as models from './models';

let reduxStore = null;

const initRedux = () => {
    if ( !process.browser ) {
        return init( { models } );
    }

    if ( !reduxStore ) {
        reduxStore = init( { models } );
    }

    return reduxStore;
};

export default initRedux;
