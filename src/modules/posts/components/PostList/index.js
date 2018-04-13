// @flow

import * as React from 'react';
import classNames from 'classnames';

import theme from './main.scss';

type Props = { }

const PostList = ( {} : Props ) => {
    const mainClassnames = classNames( theme.postList );

    return (
        <div className={mainClassnames}>
            {children}
        </div>
    );
};

PostList.defaultProps = { };

export default PostList;
