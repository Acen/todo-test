<template>
    <el-row>
        <el-col :span="4">
            <el-button @click="onClick" v-loading="loading">Donezo??</el-button>
        </el-col>
        <el-col :span="12" :class="{'probably-green':completed}">
            <p>{{ item.content }}</p>
        </el-col>
    </el-row>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name   : "TodoItem",
        props  : {
            item: {
                type    : Object,
                required: true,
            }
        },
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            onClick(){
                this.loading = true;
                this.completeItem(this.item.id).then(() => {
                    this.loading = false;
                });
            },
            ...mapActions([
                'completeItem'
            ]),
        },
        computed: {
            completed() {
                return this.item && this.item.completed_at;
            },
        }
    };
</script>

<style scoped>
    .probably-green {
        background-color: #0dff00;
    }

</style>