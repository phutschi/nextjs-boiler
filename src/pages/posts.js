import * as React from 'react';

import { connect } from 'react-redux';

import withData from '../data/withData';

import {
    Head,
    Main,
    Navigation,
} from '../modules/layout/components';

import { PostList } from '../modules/posts/components';

import theme from './main.scss';

type Props = {
    items              : Array,
    loading            : Boolean,
    fetchAllPostsAsync : Function,
};

class Posts extends React.Component<Props> {
    componentWillMount() {
        this.props.fetchAllPostsAsync();
    }

    render() {
        const { items, loading } = this.props;

        return (
            <div>
                <Head title="nextjs-boiler" subtitle="index" />
                <Main primary>
                    <div className={theme.title}>Posts</div>
                    <PostList posts={items} loading={loading} />
                </Main>
                <Navigation />
            </div>
        );
    }
}

const mapStateToProps = ( { posts : { items, loading } } ) => ( { items, loading } );

const mapDispatchToProps = ( { posts : { fetchAllPostsAsync } } ) => ( { fetchAllPostsAsync } );

const PostsReduxConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)( Posts );

export default withData( PostsReduxConnected );
