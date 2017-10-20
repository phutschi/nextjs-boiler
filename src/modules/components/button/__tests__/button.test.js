/* global React, expect */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from 'components/button';

configure( { adapter : new Adapter() } );

describe( 'Button Component', () => {
    it( 'should render', () => {
        const wrapper = shallow( <Button /> );

        expect( wrapper.exists ).toBeTruthy()
    } );
    it( 'should set defaultProps', () => {
        const wrapper = shallow( <Button /> );

        expect( wrapper.text() ).toEqual( '' );
    } );
    it( 'should have text prop as text', () => {
        const wrapper = shallow( <Button text="Submit" /> );

        expect( wrapper.text() ).toEqual( 'Submit' );
    } );
} );
