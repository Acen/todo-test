import {historyFetch, store} from '../../api';
/**
 * An action a user might take.
 * Practically calls the methods set in the other parts/libraries in their correct orders.
 */
export function getHistory({commit}) {
    return historyFetch.then((data) => {
        commit('LOAD_HISTORY', data);
    })
}

export function storeItem({commit}, data) {
    return store(data).then((item) => {
        commit('ADD_ITEM', item);
    });
}