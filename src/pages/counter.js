import * as React from 'react';

import { connect } from 'react-redux';
import KeyHandler, { KEYDOWN } from 'react-key-handler';

import withData from '../data/withData';

import {
    Head,
    Intro,
    Main,
    Navigation,
} from '../modules/layout/components';

import theme from './main.scss';

type Props = {
    count     : Number,
    increment : Function,
    decrement : Function,
}

class Counter extends React.Component<Props> {
    incrementCounter = () => this.props.increment();
    decrementCounter = () => {
        if ( this.props.count > 0 ) {
            this.props.decrement();
        }
    };

    render() {
        const { count } = this.props;

        return (
            <div>
                <KeyHandler keyEventName={KEYDOWN} keyCode={38} onKeyHandle={this.incrementCounter} />
                <KeyHandler keyEventName={KEYDOWN} keyCode={40} onKeyHandle={this.decrementCounter} />

                <Head title="nextjs-boiler" subtitle="index" />
                <Main primary>
                    <Intro>
                        <div className={theme.title}>Counter</div>
                        <div className={theme.subtitle}>
                            {count}
                        </div>
                        <div className={theme.subtitle}>
                            <a role="link" className={theme.noselect} onClick={this.incrementCounter}>Increment!</a>
                        </div>
                    </Intro>
                    <Navigation />
                </Main>
            </div>
        );
    }
}

const mapStateToProps = state => ( { count : state.count } );

const mapDispatchToProps = ( { count : { increment, decrement } } ) => ( {
    increment,
    decrement,
} );

const CounterReduxConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)( Counter );

export default withData( CounterReduxConnected );
