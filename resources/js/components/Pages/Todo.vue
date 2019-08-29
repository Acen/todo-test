<template>
    <el-container>
        <el-header>
            <h2>Do you want do.. a thing?</h2>
        </el-header>
        <el-main>
            <el-row>
                <todo-info></todo-info>
                <todo-buttons @add-item="onAddItem" @clear-list="onClearList"></todo-buttons>
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
        <el-dialog :visible.sync="dialog" :destroy-on-close="true" title="Add New Item">
            <todo-new @sync-content="onSyncContent"></todo-new>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog = false">Cancel</el-button>
                <el-button type="primary" @click="onSubmitItem">Confirm</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>

<script>
    import TodoButtons from "./Todo/TodoButtons";
    import TodoInfo from "./Todo/TodoInfo";
    import TodoList from "./Todo/TodoList";
    import TodoNew from "./Todo/TodoNew";
    import { mapActions } from 'vuex';

    export default {
        name      : "Todo",
        components: {TodoNew, TodoList, TodoInfo, TodoButtons},
        data() {
            return {
                'dialog' : false,
                'newItem': {content: ""},
                loading  : false,
            };
        },
        methods   : {
            onSyncContent( text ) {
                this.newItem.content = text;
            },
            onAddItem() {
                this.dialog = true;
            },
            onSubmitItem() {
                this.loading = true;
                this.storeItem(this.newItem).then(() => {
                    this.loading = false;
                }).catch(() => {
                    this.$message('There has been an issue. Something something blah.')
                });
                this.dialog = false;
                this.newItem = {content: ""};
            },
            onClearList() {
                this.loading = true;
                this.clearItems().then(() => {
                    this.loading = false;
                });
            },
            ...mapActions([
                'clearItems',
                'storeItem'
            ]),

        },
    };
</script>

<style scoped>

</style>