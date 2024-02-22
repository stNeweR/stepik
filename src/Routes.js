import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Catalog from "@/pages/Catalog.vue"
import Login from "@/pages/Login.vue"
import Page from "@/pages/Page.vue";
import Register from "@/pages/Register.vue";

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
        path: "/page",
        name: "page",
        component: Page,
    }, {
        path: "/register",
        name: "register",
        component: Register
    }
]

export default routes