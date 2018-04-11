/* global React */

import withData from '../data/withData';

import { Head, Intro, Main, Navigation } from '../modules/layout/components';

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
                <div className={theme.subtitle}>Happy <a href="https://github.com/quiez/nextjs-boiler" target="_blank" rel="noopener noreferrer">Coding ⌥</a></div>
            </Intro>
            <Navigation />
        </Main>
    </div>
);

export default withData( Index );
