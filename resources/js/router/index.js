import VueRouter from "vue-router";
import Todo from "../components/pages/Todo"
import History from "../components/pages/History"

export default new VueRouter({
    mode  : 'history',
    routes: [
        {path: '/', component: Todo, name: 'Todo'},
        {path: '/history', component: History, name: 'history'},
    ],
});