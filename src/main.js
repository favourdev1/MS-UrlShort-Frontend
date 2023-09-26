import { createApp } from "vue";
import "@/assets/tailwind.css";

// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router"; // Import from 'vue-router' instead of 'vue'

import App from "./App.vue";
import UsersPage from "./UsersPage.vue";
import HomePage from "./HomePage.vue";
import LoginPage from "./LoginPage.vue";

// Vue.use(VueRouter);

const routes = [{
        path: "/users",
        component: UsersPage
    },
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/login",
        component: LoginPage,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");