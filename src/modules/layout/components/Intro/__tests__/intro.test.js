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

    it( 'Renders with child components', () => {
        const wrapper = shallow(
            <Intro>
                <div className="intro-child" />
            </Intro>,
        );

        expect( wrapper.find( 'div.intro' ) ).toHaveLength( 1 );
        expect( wrapper.find( 'div.intro-child' ) ).toHaveLength( 1 );
    } );
} );
