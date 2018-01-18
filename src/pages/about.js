/* global React */

import Button from '../modules/components/Button';
import Page from '../modules/layout/components/Page';
import Loading from '../modules/components/Loading';

const About = () => (
    <Page>
        <Loading fullscreen />
        <Button text="Hello, Beauty!" />
    </Page>
);

export default About;
