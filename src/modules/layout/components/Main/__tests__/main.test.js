/* global expect */

import * as React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Main from '../';

describe( '<Main />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <Main /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );

    it( 'Renders without props', () => {
        const wrapper = shallow( <Main /> );

        expect( wrapper.find( 'div.main' ) ).toHaveLength( 1 );
        expect( wrapper.find( 'div.main' ).hasClass( 'primary' ) ).toEqual( false );
        expect( wrapper.find( 'div.main' ).hasClass( 'inverted' ) ).toEqual( false );
    } );

    it( 'Renders with props', () => {
        const wrapper = shallow( <Main primary /> );

        expect( wrapper.find( 'div.main' ) ).toHaveLength( 1 );
        expect( wrapper.find( 'div.main' ).hasClass( 'primary' ) ).toEqual( true );
    } );

    it( 'Renders with child components', () => {
        const wrapper = shallow(
            <Main>
                <div className="main-child" />
            </Main>,
        );

        expect( wrapper.find( 'div.main' ) ).toHaveLength( 1 );
        expect( wrapper.find( 'div.main-child' ) ).toHaveLength( 1 );
    } );
} );
