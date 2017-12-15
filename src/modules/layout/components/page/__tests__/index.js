/* global expect */

import * as React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Page from '../';
import Head from '../../head';
import Main from '../../main';

describe( '<Page />', () => {
    it( 'Snapshot', () => {
        const wrapper = renderer.create( <Page /> ).toJSON();

        expect( wrapper ).toMatchSnapshot();
    } );

    it( 'Renders without props', () => {
        const wrapper = shallow( <Page /> );

        expect( wrapper.find( Head ) ).toHaveLength( 1 );
        expect( wrapper.find( Main ) ).toHaveLength( 1 );
    } );

    it( 'Passes props to Head', () => {
        const title = 'title';
        const subTitle = 'subTitle';
        const wrapper = mount(
            <Page title={title} subTitle={subTitle} />,
        );

        expect( wrapper.find( Head ).props() ).toMatchObject( {
            title,
            subTitle,
        } );
    } );

    it( 'Renders children in Main', () => {
        const title = 'title';
        const subTitle = 'subTitle';
        const wrapper = mount(
            <Page title={title} subTitle={subTitle}>
                <div className="in-main" />
            </Page>
            ,
        );

        expect( wrapper.find( Main ).find( 'div.in-main' ) ).toHaveLength( 1 );
    } );
} );
