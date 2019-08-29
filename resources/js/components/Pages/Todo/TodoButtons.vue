<template>
    <el-col :span="12">
        <el-button-group>
            <el-button type="primary" @click="addItem">Add a new Item</el-button>
            <el-button type="danger" @click="clearList">Clear the List</el-button>
        </el-button-group>
    </el-col>
</template>

<script>
    export default {
        name   : "TodoButtons",
        methods: {
            addItem() {
                this.$emit('addItem');
            },
            clearList() {
                this.$emit('clearList');
            }
        }
    };
</script>

<style scoped>

</style>