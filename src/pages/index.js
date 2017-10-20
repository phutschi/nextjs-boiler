/* global React */

import Link from 'next/link';

import { Button } from '../modules/components'

const Index = () => (
    <nav>
        <Link href="/about">
            <Button>About</Button>
        </Link>
    </nav>
);

export default Index;
