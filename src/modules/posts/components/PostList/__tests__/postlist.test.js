/* global expect */

import * as React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PostList from '../';
// import { Loading } from '../../../../components/components';

const posts = [ {
    id    : 1,
    title : 'First Blog post',
}, {
    id    : 2,
    title : 'Second Blog Post',
} ];

describe( '<PostList />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <PostList posts={posts} /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );

    it( 'Renders Loading while loading posts', () => {
        const wrapper = shallow( <PostList loading posts={posts} /> );

        expect( wrapper.find( 'Loading' ).length ).toEqual( 1 );
    } );

    it( 'Renders all posts', () => {
        const wrapper = shallow( <PostList posts={posts} /> );

        expect( wrapper.find( '.postListItemContainer' ).length ).toEqual( 1 );
        expect( wrapper.find( '.postListItemContainer' ).children().length ).toEqual( posts.length );
    } );
} );
