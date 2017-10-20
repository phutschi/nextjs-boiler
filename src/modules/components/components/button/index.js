/* @flow */

import * as React from 'react';

type Props = {
    children?: React.Node,
};

const Button = ( { children }: Props ) => <button>{children}</button>;

Button.defaultProps = { children : [] };
