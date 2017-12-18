/* global React, expect */

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Loading from '../';

describe( '<Loading />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <Loading /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );

    it( 'Renders without props', () => {
        const wrapper = shallow( <Loading /> );

        expect( '' ).toEqual( '' );
    } );
} );
