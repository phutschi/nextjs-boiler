// @flow

import * as React from 'react';
import classNames from 'classnames';

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
            <style jsx global>
                {`
                    a {
                        color: maroon;
                    }

                    .main {
                        margin: 0;
                    }

                    .main.primary {
                        background-color: white;
                        color: black;
                    }

                    .main.inverted {
                        background-color: black;
                        color: white;
                    }
                `}
            </style>
        </div>
    );
};

Main.defaultProps = {
    primary  : false,
    inverted : false,
};

export default Main;
