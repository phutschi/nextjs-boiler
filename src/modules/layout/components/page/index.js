// @flow

import * as React from 'react'

import Head from '../head'
import Main from '../main'

type Props = {
    title?    : string,
    subtitle? : string,
    children  : React.Node,
}

const Page = ( { title, subtitle, children } : Props ) => (
    <div>
        <Head
            title={title}
            subTitle={subtitle}
        />
        <Main>
            {children}
        </Main>
    </div>
)

Page.defaultProps = {
    title    : '',
    subtitle : '',
}

export default Page
