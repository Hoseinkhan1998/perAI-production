import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue";
import Products from "../components/HomePage/Products.vue";
import Blogs from "../components/HomePage/Blogs.vue";
// import HomePageMob from "../components/HomePageMobile/HomePageMob.vue";
import TaskModule from "../components/Modules/TaskModule.vue";
import ProjectModule from "../components/Modules/ProjectModule.vue";
import PeopleModule from "../components/Modules/PeopleModule.vue";
import TimeSheetModule from "../components/Modules/TimeSheetModule.vue";
import InvoiceModule from "../components/Modules/InvoiceModule.vue";
import WatchTower from "../components/Modules/WatchTower.vue";
import CoinMasterModule from "../components/Modules/CoinMasterModule.vue";
import CRMModule from "../components/Modules/CRMModule.vue";
import InventoryModule from "../components/Modules/InventoryModule.vue";
import PettyCashModule from "../components/Modules/PettyCashModule.vue";
import ProductModule from "../components/Modules/ProductModule.vue";
import SalaryModule from "../components/Modules/SalaryModule.vue";
import MeetingModule from "../components/Modules/MeetingModule.vue";
import AboutUs from "../components/AboutUs.vue";
import RentalModule from "../components/Modules/RentalModule.vue";
import AssetsModule from "../components/Modules/AssetsModule.vue";
import ChatModule from "../components/Modules/ChatModule.vue";
import CMMSModule from "../components/Modules/CMMSModule.vue";
import CMSModule from "../components/Modules/CMSModule.vue";
import MailboxModule from "../components/Modules/MailboxModule.vue";
import AccountingModule from "../components/Modules/AccountingModule.vue";
import WebsiteModule from "../components/Modules/WebsiteModule.vue";
import OurModulesCards from "../components/OurModulesCards/OurModulesCards.vue";
import DashboardModule from "../components/Modules/DashboardModule.vue";
import UsersPermissions from "../components/Modules/UsersPermissions.vue";
import Helpcenter from "../components/Modules/Helpcenter.vue";
import Labratoire from "../components/Modules/Labratoire.vue";
import ContactUs from "../components/ContactUs.vue";
import RemoteWork from "../components/RemoteWork.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/products", component: Products, name: "products" },
  { path: "/blogs", component: Blogs, name: "blogs" },
  { path: "/task-module", component: TaskModule, name: "task-module" },
  { path: "/project-module", component: ProjectModule, name: "project-module" },
  { path: "/people-module", component: PeopleModule, name: "people-module" },
  { path: "/timesheet-module", component: TimeSheetModule, name: "timesheet-module" },
  { path: "/coinmaster-module", component: CoinMasterModule, name: "coinmaster-module" },
  { path: "/crm-module", component: CRMModule, name: "crm-module" },
  { path: "/inventory-module", component: InventoryModule, name: "inventory-module" },
  { path: "/pettycash-module", component: PettyCashModule, name: "pettycash-module" },
  { path: "/product-module", component: ProductModule, name: "product-module" },
  { path: "/invoice-module", component: InvoiceModule, name: "invoice-module" },
  { path: "/watchtower-module", component: WatchTower, name: "watchtower-module" },
  { path: "/usersandpermissions-module", component: UsersPermissions, name: "usersandpermissions-module" },
  { path: "/helpcenter-module", component: Helpcenter, name: "helpcenter-module" },
  { path: "/labratoire-module", component: Labratoire, name: "labratoire-module" },
  { path: "/salary-module", component: SalaryModule, name: "salary-module" },
  { path: "/meeting-module", component: MeetingModule, name: "meeting-module" },
  { path: "/accounting-module", component: AccountingModule, name: "accounting-module" },
  { path: "/rental-module", component: RentalModule, name: "rental-module" },
  { path: "/assets-module", component: AssetsModule, name: "assets-module" },
  { path: "/chat-module", component: ChatModule, name: "chat-module" },
  { path: "/cmms-module", component: CMMSModule, name: "cmms-module" },
  { path: "/cms-module", component: CMSModule, name: "cms-module" },
  { path: "/mailbox-module", component: MailboxModule, name: "mailbox-module" },
  { path: "/website-module", component: WebsiteModule, name: "website-module" },
  { path: "/dashboard-module", component: DashboardModule, name: "dashboard-module" },
  { path: "/aboutus", component: AboutUs, name: "aboutus" },
  { path: "/contact", component: ContactUs, name: "contact" },
  { path: "/remotework", component: RemoteWork, name: "remotework" },
  { path: "/our-modules-cards", component: OurModulesCards, name: "ourmodulescards" },
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
