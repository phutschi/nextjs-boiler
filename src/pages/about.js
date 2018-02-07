/* global React */

import { Head, Main } from '../modules/layout/components';
import { Loading } from '../modules/components/components';

const Index = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="about" />
        <Main primary>
            <div className="intro">
                <Loading fullscreen />
                <div className="title">/about</div>
                <div className="subtitle">Nothing to see here ¯\_(ツ)_/¯</div>
            </div>
        </Main>
    </div>
);

export default Index;
