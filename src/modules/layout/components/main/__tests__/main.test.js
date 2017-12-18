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
        expect( wrapper.find( 'div.main' ).hasClass( 'black' ) ).toEqual( false );
    } );

    it( 'Renders with props', () => {
        const wrapper = shallow( <Main black /> );

        expect( wrapper.find( 'div.main' ) ).toHaveLength( 1 );
        expect( wrapper.find( 'div.main' ).hasClass( 'black' ) ).toEqual( true );
    } );

    it( 'Renders with child component', () => {
        const wrapper = shallow(
            <Main>
                <div className="main-child" />
            </Main>,
        );

        expect( wrapper.find( 'div.main' ) ).toHaveLength( 1 );
        expect( wrapper.find( 'div.main-child' ) ).toHaveLength( 1 );
    } );
} );
