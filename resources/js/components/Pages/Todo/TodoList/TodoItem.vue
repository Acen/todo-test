<template>
    <el-row>
        <el-col :span="4">
            <el-checkbox-button label="Donez0??" :key="item.id">Donezo??</el-checkbox-button>
        </el-col>
        <el-col :span="12">
            <p>{{ item.content }}</p>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            item: {
                type: Object,
                required: true,
            }
        }
    };
</script>

<style scoped>

</style>