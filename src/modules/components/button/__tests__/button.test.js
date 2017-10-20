/* global React, expect */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from 'components/button';

configure( { adapter : new Adapter() } );

describe( 'Button Component', () => {
    it( 'should render', () => {
        const wrapper = shallow( <Button>Submit</Button> );

        expect( wrapper.text() ).toEqual( 'Submit' );
    } );
} );
