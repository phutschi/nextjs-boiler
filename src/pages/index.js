/* global React */

import Link from 'next/link';

import routes from '../routes';
import Head from '../modules/layout/components/head'

const Index = () => (
    <nav>
        <Head />
        <Link href={routes.about}>
            <a>About</a>
        </Link>
    </nav>
);

export default Index;
