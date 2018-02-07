/* @flow */

import * as React from 'react';

import './main.scss';

type Props = {
    fullscreen? : boolean
};

const Loading = ( { fullscreen } : Props ) => (
    <div className={`loading-wrapper ${fullscreen ? 'fullscreen' : ''}`}>
        <div className="loading" />
    </div>
);

Loading.defaultProps = { fullscreen : false };

export default Loading;
