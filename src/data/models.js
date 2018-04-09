export const count = {
    state    : 0,
    reducers : {
        increment( state, payload ) {
            return state + 1;
        },
        decrement( state, payload ) {
            return state - 1;
        },
    },
};

