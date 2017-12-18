/* global React, expect */

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../';

describe( '<Button />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <Button /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );

    it( 'should render', () => {
        const wrapper = shallow( <Button /> );

        expect( wrapper.exists ).toBeTruthy();
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
