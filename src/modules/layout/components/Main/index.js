// @flow

import * as React from 'react';
import classNames from 'classnames';

import './main.scss';

type Props = {
    primary?  : boolean,
    inverted? : boolean,
    children : React.Node,
}

const Main = ( { primary, inverted, children } : Props ) => {
    const mainClassNames = classNames( 'main', {
        primary,
        inverted,
    } );

    return (
        <div className={mainClassNames}>
            {children}
        </div>
    );
};

Main.defaultProps = {
    primary  : false,
    inverted : false,
};

export default Main;
