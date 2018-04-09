/* global React */

import Link from 'next/link';

import { Head, Intro, Main } from '../modules/layout/components';

import theme from './main.scss';

const Index = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="index" />
        <Main primary>
            <Intro>
                <div className={theme.title}>nextjs-boiler</div>
                <div className={theme.subtitle}>by Philipp Wruck (
                    <a
                        href="https://twitter.com/phutschi"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @phutschi
                    </a>
                )
                </div>
                <div className={theme.subtitle}>Happy Coding ⌥</div>
                <div className={theme.subtitle}>
                    <Link href="/about"><a>About</a></Link>
                </div>
            </Intro>
        </Main>
    </div>
);

export default Index;
