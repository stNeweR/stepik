import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Catalog from "./pages/Catalog.vue"
import Login from "./pages/Login.vue"
import Get from "@/pages/Get.vue";

const routes = [
    { 
        path: '/',
        name: "home",
        component: Home 
    },{
        path: '/about',
        name: "about",
        component: About
     }, {
        path: "/catalog",
        name: "catalog",
        component: Catalog
     }, {
        path: "/login",
        name: "login",
        component: Login
     }, {
        path: "/get",
        name: "get",
        component: Get,
    }
]

export default routes