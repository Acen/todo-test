<template>
    <el-container>
        <el-header>
            <h2>Ooh, look what's happened.</h2>
        </el-header>
        <el-main>
            <history-table></history-table>
        </el-main>
    </el-container>
</template>

<script>
    import HistoryTable from "./History/HistoryTable";
    export default {
        name: "History",
        components: {HistoryTable}
    };
</script>

<style scoped>

</style>