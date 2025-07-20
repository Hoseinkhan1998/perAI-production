import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue";
import Products from "../components/HomePage/Products.vue";
import Blogs from "../components/HomePage/Blogs.vue";
// import HomePageMob from "../components/HomePageMobile/HomePageMob.vue";
import AboutUs from "../components/AboutUs.vue";
import ContactUs from "../components/ContactUs.vue";
import RemoteWork from "../components/RemoteWork.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/products", component: Products, name: "products" },
  { path: "/blogs", component: Blogs, name: "blogs" },
  { path: "/aboutus", component: AboutUs, name: "aboutus" },
  { path: "/contact", component: ContactUs, name: "contact" },
  { path: "/remotework", component: RemoteWork, name: "remotework" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // همیشه به بالای صفحه بروید
    return { top: 0 };
  },
});

export default router;
