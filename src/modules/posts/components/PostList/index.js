// @flow

import * as React from 'react';
import classNames from 'classnames';

import { Loading } from '../../../components/components';

import theme from './main.scss';

type Props = {
    posts   : Array,
    loading : Boolean,
};

const PostList = ( { posts, loading } : Props ) => {
    const postListClassnames = classNames( theme.postList );

    if ( loading || posts.length < 1 ) {
        return <Loading />;
    }

    return (
        <div className={postListClassnames}>
            <div className={theme.postListItemContainer}>
                {posts.map( post => (
                    <div key={post.id}>{post.title}</div>
                ) ) }
            </div>
        </div>
    );
};

PostList.defaultProps = { };

export default PostList;
