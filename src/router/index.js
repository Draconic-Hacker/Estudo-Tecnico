import { createRouter, createWebHistory } from 'vue-router';
import estudotecnico from '@/views/primeira-tela.vue'

const routes = [
    { path: '/', component: estudotecnico },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router