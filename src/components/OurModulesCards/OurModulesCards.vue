<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import OurModulesCardsTop from "./OurModulesCardsTop.vue";
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
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const activeFilter = computed(() => route.query.filter || null);

// تابع فیلتر کردن کارت‌ها بر اساس پارامتر URL
const filteredCards = (type) => {
  if (!activeFilter.value) return true;
  return type === activeFilter.value;
};

const navigateToModule = (card) => {
  // حذف فاصله‌ها و تبدیل به حروف کوچک
  const moduleName = card.title.replace(/\s+/g, "").toLowerCase();
  const routeName = `${moduleName}-module`;

  router.push({ name: routeName });
};

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
</script>

<template>
  <div class="grid gap-5 grid-cols-12 mb-36">
    <div class="col-span-full -mt-24">
      <OurModulesCardsTop />
    </div>
    <!-- cards -->
    <div dir="rtl" class="grid grid-cols-12 col-span-full px-10 mt-10 gap-5">
      <!-- Performance Management -->
      <div v-if="!activeFilter || activeFilter === 'PerformanceManagement'" class="col-span-full flex">
        <div class="border-b-2 text-3xl font-semibold border-neutral-400 border-solid pb-2">مدیریت عملکرد</div>
      </div>

      <div
        @click="navigateToModule(card)"
        v-show="filteredCards('PerformanceManagement')"
        v-for="(card, index) in cards.filter((card) => card.type === 'PerformanceManagement')"
        :key="card.id"
        :class="{ visible: cardVisibility[index] }"
        class="bg-neutral-200 hover:bg-neutral-300 transition-all duration-150 cursor-pointer lg:col-span-4 col-span-full rounded-lg p-3">
        <div class="flex items-center gap-4">
          <div class="flex rounded-full border-4 border-current w-16 h-16 justify-center items-center border-solid">
            <component :is="svgComponents[card.id]" :width="40" :height="40" />
          </div>
          <h3 class="text-center text-lg font-semibold">{{ card.title }}</h3>
        </div>
        <p>{{ card.description }}</p>
      </div>
      <!-- Financial management  -->
      <div v-if="!activeFilter || activeFilter === 'Financialmanagement'" class="col-span-full flex">
        <div class="border-b-2 text-3xl font-semibold border-neutral-400 border-solid pb-2">مدیریت مالی</div>
      </div>

      <div
        @click="navigateToModule(card)"
        v-show="filteredCards('Financialmanagement')"
        v-for="(card, index) in cards.filter((card) => card.type === 'Financialmanagement')"
        :key="card.id"
        :class="{ visible: cardVisibility[index] }"
        class="bg-neutral-200 hover:bg-neutral-300 transition-all duration-150 cursor-pointer lg:col-span-4 col-span-full rounded-lg p-3">
        <div class="flex items-center gap-4">
          <div class="flex rounded-full border-4 border-current w-16 h-16 justify-center items-center border-solid">
            <component :is="svgComponents[card.id]" :width="40" :height="40" />
          </div>
          <h3 class="text-center text-lg font-semibold">{{ card.title }}</h3>
        </div>
        <p>{{ card.description }}</p>
      </div>
      <!-- sells  -->
      <div v-if="!activeFilter || activeFilter === 'sells'" class="col-span-full flex">
        <div class="border-b-2 text-3xl font-semibold border-neutral-400 border-solid pb-2">فروش</div>
      </div>

      <div
        @click="navigateToModule(card)"
        v-show="filteredCards('sells')"
        v-for="(card, index) in cards.filter((card) => card.type === 'sells')"
        :key="card.id"
        :class="{ visible: cardVisibility[index] }"
        class="bg-neutral-200 hover:bg-neutral-300 transition-all duration-150 cursor-pointer lg:col-span-4 col-span-full rounded-lg p-3">
        <div class="flex items-center gap-4">
          <div class="flex rounded-full border-4 border-current w-16 h-16 justify-center items-center border-solid">
            <component :is="svgComponents[card.id]" :width="40" :height="40" />
          </div>
          <h3 class="text-center text-lg font-semibold">{{ card.title }}</h3>
        </div>
        <p>{{ card.description }}</p>
      </div>
      <!-- Production  -->
      <div v-if="!activeFilter || activeFilter === 'Production'" class="col-span-full flex">
        <div class="border-b-2 text-3xl font-semibold border-neutral-400 border-solid pb-2">تولید</div>
      </div>

      <div
        @click="navigateToModule(card)"
        v-show="filteredCards('Production')"
        v-for="(card, index) in cards.filter((card) => card.type === 'Production')"
        :key="card.id"
        :class="{ visible: cardVisibility[index] }"
        class="bg-neutral-200 hover:bg-neutral-300 transition-all duration-150 cursor-pointer lg:col-span-4 col-span-full rounded-lg p-3">
        <div class="flex items-center gap-4">
          <div class="flex rounded-full border-4 border-current w-16 h-16 justify-center items-center border-solid">
            <component :is="svgComponents[card.id]" :width="40" :height="40" />
          </div>
          <h3 class="text-center text-lg font-semibold">{{ card.title }}</h3>
        </div>
        <p>{{ card.description }}</p>
      </div>
      <!-- Human Resources  -->
      <div v-if="!activeFilter || activeFilter === 'HumanResources'" class="col-span-full flex">
        <div class="border-b-2 text-3xl font-semibold border-neutral-400 border-solid pb-2">منابع انسانی</div>
      </div>

      <div
        @click="navigateToModule(card)"
        v-show="filteredCards('HumanResources')"
        v-for="(card, index) in cards.filter((card) => card.type === 'HumanResources')"
        :key="card.id"
        :class="{ visible: cardVisibility[index] }"
        class="bg-neutral-200 hover:bg-neutral-300 transition-all duration-150 cursor-pointer lg:col-span-4 col-span-full rounded-lg p-3">
        <div class="flex items-center gap-4">
          <div class="flex rounded-full border-4 border-current w-16 h-16 justify-center items-center border-solid">
            <component :is="svgComponents[card.id]" :width="40" :height="40" />
          </div>
          <h3 class="text-center text-lg font-semibold">{{ card.title }}</h3>
        </div>
        <p>{{ card.description }}</p>
      </div>
    </div>
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
