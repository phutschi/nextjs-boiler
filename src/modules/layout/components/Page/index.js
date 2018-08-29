// @flow

import * as React from 'react';
import { Head, Navigation } from '../';

import theme from './main.scss';

type Props = {
    title?          : String,
    subtitle?       : String,
    hideNavigation? : Boolean,
    hideFooter?     : Boolean,
    children        : React.Node
};

const Page = ( { title, subtitle, hideNavigation, hideFooter, children }: Props ) => (
    <div className={theme.page}>
        <Head title={title} subtitle={subtitle} />
        <header>
            {!hideNavigation &&
                <Navigation />
            }
        </header>

        {children}

        {!hideFooter &&
            <footer>
                {'I`m here to stay'}
            </footer>
        }
    </div>
);

Page.defaultProps = {
    title          : 'nextjs-boiler',
    subtitle       : '',
    hideNavigation : false,
    hideFooter     : false,
};

export default Page;
