/* @flow */

import * as React from 'react';

type Props = {
    children?: React.Node,
};

const Button = ( { children }: Props ) => <button type="button">{children}</button>;

Button.defaultProps = { children : [] };

export default Button;
