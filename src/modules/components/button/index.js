/* @flow */

import * as React from 'react';

type Props = {
    text? : string,
};

const Button = ( { text }: Props ) => <button type="button">{text}</button>;

Button.defaultProps = { text : '' };

export default Button;
