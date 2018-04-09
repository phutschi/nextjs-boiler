/* global React */

import Link from 'next/link';
import { withRouter } from 'next/router';

import classNames from 'classnames';

import routes from '../../../../routes';

import theme from './main.scss';

const Navigation = ( { router } ) => {
    const handleLinkClick = href => event => {
        event.preventDefault();
        router.push( href );
    };

    const navigationWrapperClassnames = classNames( theme.navigation );

    return (
        <div className={navigationWrapperClassnames}>
            {
                Object.keys( routes ).map( route => {
                    const linkClassnames = classNames( theme.link, { [ theme.active ] : router.pathname === routes[ route ] } );
                    const path = routes[ route ];

                    return (
                        <Link key={path} href={path}>
                            <a
                                href="#"
                                onClick={handleLinkClick( path )}
                                className={linkClassnames}
                            >
                                {route.charAt( 0 ).toUpperCase() + route.slice( 1 )}
                            </a>
                        </Link>
                    );
                } )
            }
        </div>
    );
};

export default withRouter( Navigation );
