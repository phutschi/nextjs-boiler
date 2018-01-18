/* global React */

import Link from 'next/link';

import routes from '../routes';
import Page from '../modules/layout/components/Page';

const Index = () => (
    <Page title="nextjs-eslint-jest-flow" subtitle="index">
        <Link href={routes.about}>
            <a>About</a>
        </Link>
    </Page>
);

export default Index;
