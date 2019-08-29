/**
 * Mutations - making the actual modifications against the Vue Store.
 */
export default {
    ADD_ITEM( state, payload ) {
        state.items.push({
            id     : payload.id,
            content: payload.content,
            completed_at: "",
        });
    },
    REMOVE_ITEM( state, payload ) {
        state.items.splice(payload, 1);
    },
    MODIFY_ITEM( state, payload ) {
        console.log('index', payload);
        state.items.splice(payload.index, 1, payload.data);
    },
    CLEAR_ITEMS(state) {
        state.items = [];
    },
    LOAD_ITEMS(state, payload) {
        state.items = payload;
    },
    ADD_HISTORY( state, payload ) {
        state.history.push({payload});
    },
    LOAD_HISTORY( state, payload ) {
        state.history = payload;
    },
};