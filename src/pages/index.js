/* global React */

import Link from 'next/link';
import routes from '../routes';

const Index = () => (
    <nav>
        <Link href={routes.about}>
            <a>About</a>
        </Link>
    </nav>
);

export default Index;
