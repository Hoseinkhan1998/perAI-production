<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Project from "../SVG/Project.vue";
import Task from "../SVG/Task.vue";
import Poeple from "../SVG/People.vue";
import Meeting from "../SVG/Meeting.vue";
import Timesheet from "../SVG/Timesheet.vue";
import CoinMaster from "../SVG/CoinMaster.vue";
import CRM from "../SVG/CRM.vue";
import Inventory from "../SVG/Inventory.vue";
import Invoice from "../SVG/Invoice.vue";
import PettyChash from "../SVG/PettyCash.vue";
import Product from "../SVG/Product.vue";
import Salary from "../SVG/Salary.vue";
import WatchTower from "../SVG/WatchTower.vue";
import UsersandPermissions from "../SVG/UsersandPermissions.vue";
import Helpcenter from "../SVG/Helpcenter.vue";
import Accounting from "../SVG/Accounting.vue";
import Labratoire from "../SVG/Labratoire.vue";
import Assets from "../SVG/Assets.vue";
import CMMS from "../SVG/CMMS.vue";
import Rental from "../SVG/Task.vue";
import Mailbox from "../SVG/Mailbox.vue";
import Chat from "../SVG/Chat.vue";
import CMS from "../SVG/CMS.vue";
import cards from "../../data/cards.json";

const router = useRouter();

// نقشه‌ای برای اتصال title به کامپوننت SVG
const svgComponents = {
  1: Task,
  2: Timesheet,
  3: Meeting,
  4: Project,
  5: Poeple,
  6: PettyChash,
  7: Product,
  8: Invoice,
  9: WatchTower,
  10: CoinMaster,
  11: Salary,
  12: Inventory,
  13: UsersandPermissions,
  14: Helpcenter,
  15: CRM,
  16: Accounting,
  17: Labratoire,
  18: Assets,
  19: CMMS,
  20: Rental,
  21: Mailbox,
  22: Chat,
  23: CMS,
};

// ref برای ذخیره وضعیت نمایش هر کارت
const cardVisibility = ref(Array(cards.length).fill(false));

// تابع برای بررسی اسکرول
const handleScroll = () => {
  const cardsElements = document.querySelectorAll(".skill-card");
  cardsElements.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8 && !cardVisibility.value[index]) {
      cardVisibility.value[index] = true; // کارت نمایش داده شده است
    }
  });
};

// اضافه کردن event listener برای اسکرول
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // بررسی اولیه برای کارت‌هایی که در viewport هستند
});

// حذف event listener هنگام unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navigateToModule = (card) => {
  // حذف فاصله‌ها و تبدیل به حروف کوچک
  const moduleName = card.title.replace(/\s+/g, "").toLowerCase();
  const routeName = `${moduleName}-module`;

  router.push({ name: routeName });
};
</script>

<template>
  <div class="grid gap-5 grid-cols-12 px-20">
    <div class="col-span-full flex mb-20 justify-center w-full">
      <div class="flex flex-col border-b-4 border-neutral-500">
        <div class="pb-5 text-4xl font-black">ماژول های ما</div>
      </div>
    </div>
    <!-- cards -->
    <div @click="navigateToModule(card)" v-for="(card, index) in cards" :key="card.id" class="col-span-12 lg:col-span-2 skill-card" :class="{ visible: cardVisibility[index] }">
      <div class="flex flex-col justify-center cursor-pointer items-center">
        <div class="flex rounded-full border-4 border-current w-28 h-28 justify-center items-center border-solid">
          <component :is="svgComponents[card.id]" :width="64" :height="64" />
        </div>
        <h3 class="mt-2 text-center font-semibold">{{ card.title }}</h3>
      </div>
    </div>
    <router-link to="/our-modules-cards" class="cursor-pointer col-span-2 flex items-center gap-3 justify-center skill-card" :class="{ visible: cardVisibility[cards.length - 1] }">
      <p>اطلاعات بیشتر</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </router-link>
  </div>
</template>

<style scoped>
.skill-card {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.skill-card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
