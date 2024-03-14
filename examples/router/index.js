import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {path:'/',meta:{title:'首页'},component:()=>import('../views/home.vue')},
    {path:'/upload',meta:{title:'上传'},component:()=>import('../views/upload.vue')},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router
