/* global expect */

import * as React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Head from '../';

describe( '<Head />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <Head /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );

    it( 'Renders without props', () => {
        const wrapper = shallow( <Head /> );

        expect( wrapper.find( 'title' ).text() ).toEqual( '' );
    } );

    it( 'Renders with title only', () => {
        const title = 'nextjs-eslint-jest-flow';
        const wrapper = shallow( <Head title={title} /> );

        expect( wrapper.find( 'title' ).text() ).toEqual( `${title}` );
    } );

    it( 'Renders with deafault title and subTitle', () => {
        const subTitle = 'Home';
        const wrapper = shallow( <Head subTitle={subTitle} /> );

        expect( wrapper.find( 'title' ).text() ).toEqual(
            ` | ${subTitle}`,
        );
    } );

    it( 'Renders with custom title and subTitle', () => {
        const title = '';
        const subTitle = 'Home';
        const wrapper = shallow( <Head title={title} subTitle={subTitle} /> );

        expect( wrapper.find( 'title' ).text() ).toEqual( `${title} | ${subTitle}` );
    } );
} );
