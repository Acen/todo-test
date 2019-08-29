<template>
    <el-form :model="form">
        <el-form-item>
            <el-input v-model="form.content"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "TodoNew",
        data() {
            return {
                form: {
                    content: ""
                }
            }
        }
    };
</script>

<style scoped>

</style>