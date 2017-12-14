/* @flow */

import * as React from 'react';

const Loading = () => (
    <div className="loading">
        <div className="loading-wrapper">
            <div className="loading-text">LOADING</div>
            <div className="loading-content" />
        </div>
        <style jsx>
            {`
                .loading {
                    background-color: white;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    position: fixed;
                }

                .loading-wrapper {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                }
                
                .loading-text {
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    color: #999;
                    width: 100px;
                    height: 30px;
                    margin: -7px 0 0 -45px;
                    text-align: center;
                    font-family: 'PT Sans Narrow', sans-serif;
                    font-size: 20px;
                }
                
                .loading-content {
                    display: block;
                    position: relative;
                    left: 50%;
                    top: 50%;
                    width: 170px;
                    height: 170px;
                    margin: -85px 0 0 -85px;
                    border: 3px solid #F00;
                }
                
                .loading-content:after {
                    content: "";
                    position: absolute;
                    border: 3px solid #0F0;
                    left: 15px;
                    right: 15px;
                    top: 15px;
                    bottom: 15px;
                }
                
                .loading-content:before {
                    content: "";
                    position: absolute;
                    border: 3px solid #00F;
                    left: 5px;
                    right: 5px;
                    top: 5px;
                    bottom: 5px;
                }
                
                .loading-content {
                    border: 3px solid transparent;
                    border-top-color: #4D658D;
                    border-bottom-color: #4D658D;
                    border-radius: 50%;
                    -webkit-animation: loader 2s linear infinite;
                    -moz-animation: loader 2s linear infinite;
                    -o-animation: loader 2s linear infinite;
                    animation: loader 2s linear infinite;
                }
                
                .loading-content:before {
                    border: 3px solid transparent;
                    border-top-color: #D4CC6A;
                    border-bottom-color: #D4CC6A;
                    border-radius: 50%;
                    -webkit-animation: loader 3s linear infinite;
                    -moz-animation: loader 2s linear infinite;
                    -o-animation: loader 2s linear infinite;
                    animation: loader 3s linear infinite;
                }
                
                .loading-content:after {
                    border: 3px solid transparent;
                    border-top-color: #84417C;
                    border-bottom-color: #84417C;
                    border-radius: 50%;
                    -webkit-animation: loader 1.5s linear infinite;
                    animation: loader 1.5s linear infinite;
                    -moz-animation: loader 2s linear infinite;
                    -o-animation: loader 2s linear infinite;
                }
                
                @-webkit-keyframes loaders {
                    0% {
                    -webkit-transform: rotate(0deg);
                    -ms-transform: rotate(0deg);
                    transform: rotate(0deg);
                    }
                    100% {
                    -webkit-transform: rotate(360deg);
                    -ms-transform: rotate(360deg);
                    transform: rotate(360deg);
                    }
                }
                
                @keyframes loader {
                    0% {
                    -webkit-transform: rotate(0deg);
                    -ms-transform: rotate(0deg);
                    transform: rotate(0deg);
                    }
                    100% {
                    -webkit-transform: rotate(360deg);
                    -ms-transform: rotate(360deg);
                    transform: rotate(360deg);
                    }
                }
            `}
        </style>
    </div>
)

export default Loading;
