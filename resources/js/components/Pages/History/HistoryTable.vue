<template>
    <el-table :loading="loading" :data="history"></el-table>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "HistoryTable",
        data() {
            return {
                'loading': false,
            };
        },
        mounted() {
            if(this.historyCount < 1){
                this.loading = true;
                this.getHistory().then(() => {
                    this.loading = false;
                });
            }
        },
        methods: {
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