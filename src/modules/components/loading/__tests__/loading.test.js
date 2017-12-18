/* global React, expect */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from '../';

describe( '<Loading />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <Loading /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );

    it( 'Renders without props', () => {
        const wrapper = shallow( <Loading /> );

        expect( wrapper.find( 'title' ).text() ).toEqual( '' );
    } );
} );
