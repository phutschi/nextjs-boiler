/* global React */

import { connect } from 'react-redux';

import withData from '../data/withData';

import { Head, Intro, Main, Navigation } from '../modules/layout/components';

import theme from './main.scss';

const Redux = ( { count, addByOne } ) => (
    <div>
        <Head title="nextjs-boiler" subtitle="index" />
        <Main primary>
            <Intro>
                <div className={theme.title}>redux</div>
                <div className={theme.subtitle}>
                    {count}
                </div>
                <div className={theme.subtitle}>
                    <a className={theme.noselect} onClick={addByOne}>Increment!</a>
                </div>
            </Intro>
            <Navigation />
        </Main>
    </div>
);

const mapState = state => ( { count : state.count } );

const mapDispatch = ( { count: { increment, incrementAsync } } ) => ( {
    addByOne      : () => increment( 1 ),
    addByOneAsync : () => incrementAsync( 1 ),
} );

const ReduxConnected = connect(
    mapState,
    mapDispatch,
)( Redux );

export default withData( ReduxConnected );
