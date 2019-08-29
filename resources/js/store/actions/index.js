import {History, Items} from '../../api';
/**
 * An action a user might take.
 * Practically calls the methods set in the other parts/libraries in their correct orders.
 */
export function getHistory({commit}) {
    return History.get().then((response) => {
        commit('LOAD_HISTORY', response.data);
    })
}

export function storeItem({commit}, data) {
    return Items.create(data).then((response) => {
        commit('ADD_ITEM', response.data);
    });
}

// @todo check for race conditions.
export function deleteItem({commit, state}, index) {
    const id = state.items[index].id;
    return Items.delete(id).then(() => {
        commit('REMOVE_ITEM', index);
    })
}

// @todo check for race conditions
export function editItem({commit, state}, index, item) {
    const id = state.items[index].id;
    return Items.edit(id, data).then((response) => {
        commit('MODIFY_ITEM', index, response.data);
    })
}

export function clearItems({commit}) {
    return Items.clear().then(() => {
        commit('CLEAR_ITEMS');
    });
}

export function getItems({commit}) {
    return Items.get().then((response) => {
        commit('LOAD_ITEMS', response.data);
    });
}