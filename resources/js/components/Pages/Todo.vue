<template>
    <el-container>
        <el-header>
            <h2>Do you want do.. a thing?</h2>
        </el-header>
        <el-main>
            <el-row>
                <todo-info></todo-info>
                <todo-buttons
                @addItem="addNewItem"></todo-buttons>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-divider></el-divider>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <todo-list></todo-list>
                </el-col>
            </el-row>
        </el-main>
        <el-dialog
                :visible.sync="dialog"
                :destroy-on-close="true"
                :item.sync="itemData"
                title="Add New Item">
            <todo-new></todo-new>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog = false">Cancel</el-button>
                <el-button type="primary" @click="storeItem">Confirm</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>

<script>
    import TodoButtons from "./Todo/TodoButtons";
    import TodoInfo from "./Todo/TodoInfo";
    import TodoList from "./Todo/TodoList";
    import TodoNew from "./Todo/TodoNew";
    import {mapActions} from 'vuex';

    export default {
        name: "Todo",
        components: {TodoNew, TodoList, TodoInfo, TodoButtons},
        data() {
            return {
                'dialog': false,
                'itemData': {content: ""}
            }
        },
        methods: {
            addNewItem() {
                this.dialog = true;
            },
            ...mapActions([
                'storeItem'
            ]),

        },
    };
</script>

<style scoped>

</style>