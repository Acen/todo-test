/**
 * Mutations - making the actual modifications against the Vue Store.
 */
export default {
    ADD_ITEM( state, item ) {
        state.items.push({
            id     : item.id,
            content: item.content,
            completed_at: "",
        });
    },
    REMOVE_ITEM( state, index ) {
        state.items.splice(index, 1);
    },
    MODIFY_ITEM( state, index, item ) {
        state.items.splice(index, 1, item);
    },
    CLEAR_ITEMS(state) {
        state.items = [];
    },
    LOAD_ITEMS(state, items) {
        state.items = items;
    },
    ADD_HISTORY( state, history ) {
        state.history.push({history});
    },
    LOAD_HISTORY( state, history ) {
        state.history = history;
    },
};