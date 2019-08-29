<template>
    <el-form :model="form">
        <el-form-item>
            <el-input @change="onChange" v-model="form.content"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "TodoNew",
        methods: {
            onChange() {
                this.$emit('sync-content', this.form.content);
            }
        },
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