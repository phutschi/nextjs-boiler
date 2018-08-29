// @flow

import * as React from 'react';
import classNames from 'classnames';

import theme from './main.scss';

type Props = {
    size?      : string,
    color?     : string,
    style?     : string,
    text?      : string,
    className? : string,
    children   : React.Node
}

const Text = ( { size, style, align, color, className, children, ...other }: Props ) => {
    const textClassName = classNames( theme.text, className, theme[ size ], theme[ align ], theme[ color ],
        theme[ weight ], {
            // font style
            [ theme.italic ]     : italic,
            [ theme.underlined ] : underlined,
            // Misc
            [ theme.nowrap ]     : nowrap,
            [ theme.inline ]     : inline,
            [ theme.spaced ]     : spaced,
            [ theme.uppercase ]  : uppercase,
            [ theme.lowercase ]  : lowercase,
            [ theme.capitalize ] : capitalize
        } );

    return (
        <p className={theme.text} {...other}>
            {children}
        </p>
    );
};

Text.defaultProps = {
    size      : 'normal',
    style     : 'normal',
    className : '',
};

export default Text;
