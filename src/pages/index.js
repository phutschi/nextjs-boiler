/* global React */

import { Head, Main } from '../modules/layout/components';

const Index = () => (
    <div>
        <Head title="nextjs-boiler" subtitle="index " />
        <Main primary>
            <div className="intro">
                <div className="title">nextjs-boiler</div>
                <div className="author">by Philipp Wruck (<a href="https://twitter.com/phutschi" rel="noopener noreferrer" target="_blank">@phutschi</a>)</div>
                <style jsx>
                    {`
                        .intro {
                            position: absolute;
                            margin: 0 auto;
                            width: 100%;
                            top: 40%;
                        }

                        .title {
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                            font-size: 24px;
                            text-align: center;
                        }

                        .author {
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                            font-size: 12px;
                            color: #666;
                            margin: 15px 0 0;
                            text-align: center;
                        }
                    `}
                </style>
            </div>
        </Main>
    </div>
);

export default Index;
