<template>
    <div>
        <template v-for="todo in todos">
            <p>{{ todo }}</p>
        </template>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "TodoList",
        mounted() {
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