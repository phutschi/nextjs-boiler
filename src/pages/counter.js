/* global React */

import { connect } from 'react-redux';
import KeyHandler, { KEYDOWN } from 'react-key-handler';

import withData from '../data/withData';

import { Head, Intro, Main, Navigation } from '../modules/layout/components';

import theme from './main.scss';

type Props = {
    count              : Number,
    increment          : Function,
    decrement          : Function,
    fetchAllPostsAsync : Function,
    items              : Array,
    loading            : Boolean,
}

class Redux extends React.Component<Props> {
    componentWillMount() {
        this.props.fetchAllPostsAsync();
    }

    incrementCounter = () => this.props.increment();
    decrementCounter = () => {
        if ( this.props.count > 0 ) {
            this.props.decrement();
        }
    };

    render() {
        const { count, items, loading } = this.props;

        return (
            <div>
                <KeyHandler keyEventName={KEYDOWN} keyCode={38} onKeyHandle={this.incrementCounter} />
                <KeyHandler keyEventName={KEYDOWN} keyCode={40} onKeyHandle={this.decrementCounter} />

                <Head title="nextjs-boiler" subtitle="index" />
                <Main primary>
                    <Intro>
                        <div className={theme.title}>redux</div>
                        <div className={theme.subtitle}>
                            {count}
                        </div>
                        <div className={theme.subtitle}>
                            <a role="link" className={theme.noselect} onClick={this.incrementCounter}>Increment!</a>
                        </div>
                    </Intro>
                    {!loading &&
                        <div className={theme.subtitle}>
                            {items.length > 0 && items.map( post => (
                                <div key={post.id}>
                                    {post.name}
                                </div>
                            ) )}
                        </div>
                    }
                    <Navigation />
                </Main>
            </div>
        );
    }
}

const mapState = state => {
    const { items, loading } = state.posts;
    const { count } = state;

    return {
        items,
        loading,
        count,
    };
};

const mapDispatch = ( { count: { increment, decrement }, posts: { fetchAllPosts, fetchAllPostsAsync } } ) => ( {
    fetchAllPosts,
    fetchAllPostsAsync,
    increment,
    decrement,
} );

const ReduxConnected = connect(
    mapState,
    mapDispatch,
)( Redux );

export default withData( ReduxConnected );
