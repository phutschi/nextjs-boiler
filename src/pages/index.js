/* global React */

import { Head, Main } from '../modules/layout/components';

import theme from './main.scss';

const Index = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="index" />
        <Main primary>
            <div className={theme.intro}>
                <div className={theme.title}>nextjs-boiler</div>
                <div className={theme.subtitle}>by Philipp Wruck (<a href="https://twitter.com/phutschi" rel="noopener noreferrer" target="_blank">@phutschi</a>)</div>
                <div className={theme.subtitle}>Happy Coding ⌥</div>
            </div>
        </Main>
    </div>
);

export default Index;
