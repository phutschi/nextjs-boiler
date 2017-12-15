// @flow

import * as React from 'react';

type Props = {
    black?   : boolean,
    children : React.Node,
}

const Main = ( { black, children } : Props ) => (
    <div className={`main ${black ? 'black' : ''}`}>
        {children}
        <style jsx>
            {`
                .main {
                    background-color: white;
                    color: black;
                    margin: 0;
                }

                .black {
                    background-color: black;
                    color: white;
                }
            `}
        </style>
    </div>
);

Main.defaultProps = { black : false };

export default Main;
