<template>
    <el-table :loading="loading" :data="history">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="content" label="Content"></el-table-column>
        <el-table-column prop="deleted_at" label="Deleted At"></el-table-column>
        <el-table-column prop="updated_at" label="Updated At"></el-table-column>
    </el-table>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name    : "HistoryTable",
        data() {
            return {
                'loading': false,
            };
        },
        mounted() {
            if ( this.historyCount < 1 ) {
                this.loading = true;
                this.getHistory()
                    .then(() => {
                        this.loading = false;
                    });
            }
        },
        methods : {
            ...mapActions([
                'getHistory'
            ]),
        },
        computed: {
            ...mapGetters([
                'history',
                'historyCount'
            ]),
        }
    };
</script>

<style scoped>

</style>