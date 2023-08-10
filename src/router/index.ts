import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Main from '../view/Main.vue'
import Tarefas from '../view/Tarefas.vue'
import Projetos from '../view/Projetos.vue'

const main = {
    path: "/",
    name: "Main",
    component: Main
}

const tarefas = {
    path: "/tarefas",
    name: "Tarefas",
    component: Tarefas
}

const projetos = {
    path: "/Projetos",
    name: "Projetos",
    component: Projetos
}

const routes: RouteRecordRaw[] =[
    main,
    tarefas,
    projetos
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router