/* global React */

import { Head, Main } from '../modules/layout/components';

import theme from './main.scss';

const Index = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="about" />
        <Main primary>
            <div className={theme.intro}>
                <div className={theme.title}>/about</div>
                <div className={theme.subtitle}>Nothing to see here ¯\_(ツ)_/¯</div>
            </div>
        </Main>
    </div>
);

export default Index;
