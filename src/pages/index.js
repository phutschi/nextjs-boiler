/* global React */

import { Head, Main } from '../modules/layout/components';

const Index = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="index" />
        <Main primary>
            <div className="intro">
                <div className="title">nextjs-boiler</div>
                <div className="subtitle">by Philipp Wruck (<a href="https://twitter.com/phutschi" rel="noopener noreferrer" target="_blank">@phutschi</a>)</div>
                <div className="subtitle">Happy Coding ⌥</div>
            </div>
        </Main>
    </div>
);

export default Index;
