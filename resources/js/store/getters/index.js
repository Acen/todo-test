export default{
    completedTodo(state) {
        return state.items.filter(item => item.done);
    },
    completedTodoCount(state, getters) {
        return getters.completedTodo.length;
    },
    uncompletedTodo(state) {
        return state.items.filter(item => !item.done);
    },
    uncompletedTodoCount(state, getters) {
        return getters.uncompletedTodo.length;
    }
}