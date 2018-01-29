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
        const subtitle = 'Home';
        const wrapper = shallow( <Head subtitle={subtitle} /> );

        expect( wrapper.find( 'title' ).text() ).toEqual(
            ` | ${subtitle}`,
        );
    } );

    it( 'Renders with custom title and subtitle', () => {
        const title = '';
        const subtitle = 'Home';
        const wrapper = shallow( <Head title={title} subtitle={subtitle} /> );

        expect( wrapper.find( 'title' ).text() ).toEqual( `${title} | ${subtitle}` );
    } );
} );
