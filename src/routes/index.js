// @flow

type Route = {
    name: string,
    path: string
}

const routes: Array<Route> = [
    {
        name : 'index',
        path : '/',
    }, {
        name : 'about',
        path : '/about',
    },
];

export default routes
