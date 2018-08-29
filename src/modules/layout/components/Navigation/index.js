/* global React */

import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import routes from '../../../../routes';
// UI
import theme from './main.scss';

// Props
type Props = { router: Object }

const Navigation = ( { router }: Props ) => {
    const handleLinkClick = href => event => {
        event.preventDefault();

        router.push( href );
    };

    const navigationWrapperClassnames = classNames( theme.navigation );

    return (
        <div className={navigationWrapperClassnames}>
            {
                Object.keys( routes ).map( ( route, index ) => {
                    const linkClassnames = classNames( theme.navigationItem, { [ theme.active ] : router && router.pathname === routes[ route ] } );
                    const path = routes[ route ];

                    return (
                        <div key={path} className={linkClassnames}>
                            <Link href={path}>
                                <span
                                    tabIndex={index}
                                    role="link"
                                    onKeyPress={handleLinkClick( path )}
                                    onClick={handleLinkClick( path )}
                                >
                                    {route.charAt( 0 ).toUpperCase() + route.slice( 1 )}
                                </span>
                            </Link>
                        </div>
                    );
                } )
            }
        </div>
    );
};

export default withRouter( Navigation );
