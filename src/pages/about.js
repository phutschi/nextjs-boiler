/* global React */

import Link from 'next/link';

import { Head, Main, Intro } from '../modules/layout/components';

import theme from './main.scss';

const Index = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="about" />
        <Main primary>
            <Intro>
                <div className={theme.title}>/about</div>
                <div className={theme.subtitle}>Nothing to see here ¯\_(ツ)_/¯</div>
                <div className={theme.subtitle}>
                    <Link href="/"><a>Go back</a></Link>
                </div>
            </Intro>
        </Main>
    </div>
);

export default Index;
