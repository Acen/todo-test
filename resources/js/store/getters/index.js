export default{
    todos(state) {
        return state.items;
    },
    completedTodo(state) {
        return state.items.filter(item => item.completed_at);
    },
    completedTodoCount(state, getters) {
        return getters.completedTodo.length;
    },
    uncompletedTodo(state) {
        return state.items.filter(item => !item.completed_at);
    },
    uncompletedTodoCount(state, getters) {
        return getters.uncompletedTodo.length;
    },
    history(state) {
        return state.history;
    },
    historyCount(state, getters) {
        return getters.history.length;
    }
}