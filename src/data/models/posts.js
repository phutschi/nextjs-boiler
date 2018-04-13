const posts = {
    state    : {
        items   : [],
        loading : false,
        error   : '',
    },
    reducers : {
        fetchAllPosts( state, payload ) {
            return {
                ...state,
                posts : payload,
            };
        },
        startFetchAllPosts( state ) {
            return {
                ...state,
                loading : true,
            };
        },
        fetchAllPostsSuccessful( state, payload ) {
            return {
                ...state,
                items   : payload,
                loading : false,
            };
        },
        fetchAllPostsFailure( state, payload ) {
            return {
                ...state,
                error   : payload,
                loading : false,
            };
        },
    },
    effects  : {
        async fetchAllPostsAsync() {
            this.startFetchAllPosts();
            await fetch( 'https://jsonplaceholder.typicode.com/posts' )
                .then( response => response.json() )
                .then( json => this.fetchAllPostsSuccessful( json ) )
                .catch( e => this.fetchAllPostsFailure( e ) );
        },
    },
};


export default posts;

