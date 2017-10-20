/* global React, expect */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../';

configure( { adapter : new Adapter() } );

describe( 'Button Component', () => {
    it( 'should render', () => {
        const wrapper = shallow( <Button text="Submit" /> );

        expect( wrapper.text() ).toEqual( 'Submit' );
    } );
} );
