const count = {
    state    : 0,
    reducers : {
        increment( state ) {
            return state + 1;
        },
        decrement( state ) {
            return state - 1;
        },
    },
};

export default count;
