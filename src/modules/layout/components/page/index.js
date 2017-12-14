// @flow

import * as React from 'react'

import Head from '../head'
import Main from '../main'

type Props = {
    title     : string,
    subTitle  : string,
    children  : React.Node,
}

const Page = ( { title, subTitle, children } : Props ) => (
    <div>
        <Head
            title={title}
            subTitle={subTitle}
        />
        <Main>
            {children}
        </Main>
    </div>
)

export default Page
