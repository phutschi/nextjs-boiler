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

                    .intro {
                        position: absolute;
                        margin: 0 auto;
                        width: 100%;
                        top: 40%;
                    }

                    .title {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                        font-size: 24px;
                        text-align: center;
                    }

                    .subtitle {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                        font-size: 12px;
                        color: #666;
                        margin: 15px 0 0;
                        text-align: center;
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
