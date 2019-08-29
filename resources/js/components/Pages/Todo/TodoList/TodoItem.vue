<template>
    <el-row>
        <el-col :span="4">
            <el-button @click="onComplete" v-loading="loading">Donezo??</el-button>
        </el-col>
        <el-col :span="16" :class="{'probably-green':completed}">
            <p>{{ item.content }}</p>
        </el-col>
        <el-col :span="4">
            <el-button @click="onDelete" v-loading="loading" type="danger">Kiiiilll meeee</el-button>
        </el-col>
    </el-row>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name    : "TodoItem",
        props   : {
            item: {
                type    : Object,
                required: true,
            }
        },
        data() {
            return {
                loading: false,
            };
        },
        methods : {
            onComplete() {
                this.loading = true;
                this.completeItem(this.item.id)
                    .then(() => {
                        this.loading = false;
                    });
            },
            onDelete() {
                this.loading = true;
                this.deleteItem(this.item.id)
                    .then(() => {
                        this.loading = false;
                    });

            },
            ...mapActions([
                'completeItem',
                'deleteItem',
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