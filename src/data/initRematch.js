import { init } from '@rematch/core';

import * as models from './models';

let reduxStore = null;

const create = () => {
    return init( { models } );
};

const initRematch = ( initialState ) => {
    if ( !process.browser ) {
        return create( initialState );
    }

    if  ( !reduxStore ) {
        reduxStore = create( initialState );
    }

    return reduxStore;
};

export default initRematch;
