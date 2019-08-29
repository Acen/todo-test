<template>
    <div>
        <template v-for="todo in todos">
            <todo-item :item="todo"></todo-item>
        </template>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import TodoItem from "./TodoList/TodoItem";

    export default {
        name: "TodoList",
        components: {TodoItem},
        created() {
            this.getItems();
        },
        methods: {
            ...mapActions([
                'getItems'
            ])
        },
        computed: {
            ...mapGetters([
                'todos'
            ]),
        },
    };
</script>

<style scoped>

</style>