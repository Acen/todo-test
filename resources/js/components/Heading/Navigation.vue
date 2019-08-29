<template>
    <el-menu mode="horizontal" :default-active="$route.name" :router="true">
        <el-menu-item index="search" route="/">Todo</el-menu-item>
        <el-menu-item index="history" route="/history">History</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name    : "Navigation",
    };
</script>

<style scoped>
    .el-menu {
        float:         right;
        border-bottom: none;
    }
</style>