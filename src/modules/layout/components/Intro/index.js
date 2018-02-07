import * as React from 'react';

import theme from './main.scss';

type Props = {
    children : React.Node
}

const Intro = ( { children }: Props ) => (
    <div className={theme.intro}>
        {children}
    </div>
);

export default Intro;
