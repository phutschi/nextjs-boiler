/* global expect */

import * as React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Navigation from '../';

describe( '<Navigation />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <Navigation /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );
} );
