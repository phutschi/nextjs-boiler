/* global React */

import { connect } from 'react-redux';
import KeyHandler, { KEYDOWN } from 'react-key-handler';

import withData from '../data/withData';

import { Head, Intro, Main, Navigation } from '../modules/layout/components';

import theme from './main.scss';

type Props = {
    count     : Number,
    increment : Function,
    decrement : Function
}

const Redux = ( { count, increment, decrement } : Props ) => {
    const incrementCounter = () => increment();
    const decrementCounter = () => {
        if ( count > 0 ) {
            decrement();
        }
    };

    return (
        <div>
            <KeyHandler keyEventName={KEYDOWN} keyCode={38} onKeyHandle={incrementCounter} />
            <KeyHandler keyEventName={KEYDOWN} keyCode={40} onKeyHandle={decrementCounter} />

            <Head title="nextjs-boiler" subtitle="index" />
            <Main primary>
                <Intro>
                    <div className={theme.title}>redux</div>
                    <div className={theme.subtitle}>
                        {count}
                    </div>
                    <div className={theme.subtitle}>
                        <a role="link" className={theme.noselect} onClick={incrementCounter}>Increment!</a>
                    </div>
                </Intro>
                <Navigation />
            </Main>
        </div>
    );
};

const mapState = state => ( { count : state.count } );

const mapDispatch = ( { count: { increment, decrement } } ) => ( {
    increment,
    decrement,
} );

const ReduxConnected = connect(
    mapState,
    mapDispatch,
)( Redux );

export default withData( ReduxConnected );
