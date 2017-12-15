/* global React */

import Button from '../modules/components/button';
import Page from '../modules/layout/components/page';
import Loading from '../modules/components/loading';

const About = () => (
    <Page>
        <Loading fullscreen />
        <Button text="Hello, Beauty!" />
    </Page>
);

export default About;
