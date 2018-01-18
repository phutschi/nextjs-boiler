/* global React */

import { Button, Loading } from '../modules/components/components';

import { Head, Main } from '../modules/layout/components';

const About = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="about" />
        <Main primary>
            <Loading fullscreen />
        </Main>
    </div>
);

export default About;
