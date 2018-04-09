/* global React */

import Link from 'next/link';
import { connect } from 'react-redux';

import theme from './main.scss';

const handlePathChange = e => {
    console.log( e );
};

const Navigation = changePath => (
    <div className={theme.navigation}>
        <Link href="/"><a onClick={handlePathChange} >Home</a></Link>
        <Link href="/redux"><a onClick={handlePathChange} >Redux</a></Link>
    </div>
);

const mapState = state => ( { currentPath : state.router.currentPath } );

const mapDispatch = ( { router: { changePath } } ) => ( { changePath : path => changePath( path ) } );

export default connect(
    mapState,
    mapDispatch,
)( Navigation );
