/* global React */

// UI
import Page from '../modules/layout/components/Page';
import theme from './main.scss';

const Index = () => (

    <Page
        title="nextjs-boiler"
        subtitle="index"
        hideFooter
    >
        <div className={theme.centeredContent}>
            <div className={theme.title}>
                <span>nextjs-boiler</span>
            </div>
            <div className={theme.subtitle}>
                <span>
                    by Philipp Wruck (
                    <a
                        href="https://twitter.com/phutschi"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @phutschi
                    </a>
                    )
                </span>
            </div>
            <div className={theme.subtitle}>
                <span>
                    Happy
                    <a
                        href="https://github.com/quiez/nextjs-boiler"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Coding ⌥
                    </a>
                </span>
            </div>
        </div>
        {/* TODO: move style somewhere else */}
        <style jsx global>{`
            html, body {
                margin: 0;
                padding: 0;
            }
        `}
        </style>
    </Page>
);

export default Index;
