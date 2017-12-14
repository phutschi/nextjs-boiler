// @flow

import * as React from 'react'

import Head from '../head'

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
        {children}
    </div>
)

Page.defaultProps = {
    title    : '',
    subtitle : '',
}

export default Page
