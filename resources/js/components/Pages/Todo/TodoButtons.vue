<template>
    <el-col :span="12">
        <el-button-group>
            <el-button type="primary" @click="addItem">Add a new Item</el-button>
            <el-button type="danger" @click="checkClearList">Clear the List</el-button>
        </el-button-group>
        <el-dialog :visible.sync="dialog" title="Are you sure you want to clear the Todo List?">
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog = false">Cancel</el-button>
                <el-button type="danger" @click="onClearList">Clear List</el-button>
            </span>
        </el-dialog>
    </el-col>
</template>

<script>
    export default {
        name   : "TodoButtons",
        data() {
            return {
                dialog: false,
            }
        },
        methods: {
            addItem() {
                this.$emit('add-item');
            },
            checkClearList() {
                this.dialog = true;
            },
            onClearList() {
                this.dialog = false;
                this.$emit('clear-list');
            }
        }
    };
</script>

<style scoped>

</style>