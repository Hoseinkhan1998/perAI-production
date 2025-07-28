import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue";
import Products from "../components/HomePage/Products.vue";
import Blogs from "../components/HomePage/Blogs.vue";
// import HomePageMob from "../components/HomePageMobile/HomePageMob.vue";
// import AboutUs from "../components/AboutUs.vue";
import ContactUs from "../components/ContactUs.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/products", component: Products, name: "products" },
  { path: "/blogs", component: Blogs, name: "blogs" },
  // { path: "/aboutus", component: AboutUs, name: "aboutus" },
  { path: "/contact", component: ContactUs, name: "contact" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
      offset: { y: 60 } // اضافه کردن offset
    };
  }
  if (to.name === 'aboutus') {
    return { 
      path: '/', 
      hash: '#our-customers',
      offset: { y: 60 }
    };
  }
  if (to.name === 'contact') {
    return { 
      path: '/', 
      hash: '#contact-us',
      offset: { y: 60 }
    };
  }
  return { top: 0 };
},
});

export default router;
