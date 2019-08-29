<template>
    <el-col :span="12">
        <el-tag type="success">Complete: {{ completedTodoCount }}</el-tag>
        <el-tag>Still Todo.exe: {{ uncompletedTodoCount }}</el-tag>
    </el-col>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "TodoInfo",
        computed: {
            ...mapGetters([
                'completedTodoCount',
                'uncompletedTodoCount',
            ])
        }
    };
</script>

<style scoped>

</style>