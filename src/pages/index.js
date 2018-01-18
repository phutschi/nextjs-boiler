/* global React */

import Link from 'next/link';

import { Head, Main, Navbar } from '../modules/layout/components';

const Index = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="index " />
        <Main primary>
            <div>Hello, World!</div>
        </Main>
    </div>
);

export default Index;
