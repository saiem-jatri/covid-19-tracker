import { createRouter, createWebHistory } from 'vue-router'
 import Header from "./components/AppHeader.vue";



const routes=[
     {path:'/header',component:header},

]
const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;