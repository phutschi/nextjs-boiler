/* global expect */

import * as React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Intro from '../';

describe( '<Intro />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <Intro /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );
} );
