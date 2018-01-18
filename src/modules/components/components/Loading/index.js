/* @flow */

import * as React from 'react';

type Props = {
    fullscreen? : boolean
};

const Loading = ( { fullscreen } : Props ) => (
    <div className={`loading-wrapper ${fullscreen ? 'fullscreen' : ''}`}>
        <div className="loading" />
        <style jsx>
            {`
                @-webkit-keyframes spin {
                    0% {
                        -webkit-transform: rotate(0deg);
                            transform: rotate(0deg);
                    }
                    100% {
                        -webkit-transform: rotate(360deg);
                            transform: rotate(360deg);
                    }
                }

                @keyframes spin {
                    0% {
                        -webkit-transform: rotate(0deg);
                            transform: rotate(0deg);
                    }
                    100% {
                        -webkit-transform: rotate(360deg);
                            transform: rotate(360deg);
                    }
                }
                
                .loading {
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    border: 0.25rem solid rgba(255, 255, 255, 0.2);
                    border-top-color: black;
                    -webkit-animation: spin 1s infinite linear;
                            animation: spin 1s infinite linear;
                }

                .loading-wrapper.fullscreen {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    background-color: white;
                    z-index: 2;
                }

                .loading-wrapper.fullscreen .loading {
                    position: relative;
                    top: 50%;
                    left: 50%;
                }
            `}
        </style>
    </div>
);

Loading.defaultProps = { fullscreen : false };

export default Loading;
