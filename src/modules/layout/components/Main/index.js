// @flow

import * as React from 'react';
import classNames from 'classnames';

import theme from './main.scss';

type Props = {
    primary?  : boolean,
    inverted? : boolean,
    children : React.Node,
}

const Main = ( { primary, inverted, children } : Props ) => {
    const mainClassnames = classNames( theme.main, {
        [ theme.primary ]  : primary,
        [ theme.inverted ] : inverted,
    } );

    return (
        <div className={mainClassnames}>
            {children}
        </div>
    );
};

Main.defaultProps = {
    primary  : false,
    inverted : false,
};

export default Main;
