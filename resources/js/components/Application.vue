<template>
    <el-container>
        <el-header>
            <heading></heading>
        </el-header>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Heading from './Heading';

    export default {
        name      : "Application",
        components: {
            Heading,
            Notification,
        },
    };
</script>

<style scoped>
    .el-container{
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .el-header{
        height:20px;
    }
</style>