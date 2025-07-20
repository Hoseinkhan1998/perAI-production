<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const closeDropdown = () => {
  const activeElement = document.activeElement;
  if (activeElement) {
    activeElement.blur();
  }
};

const isDark = ref(false);
const toggleDark = () => {};

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const menuRef = ref(null);
const buttonRef = ref(null);

function handleClickOutside(event) {
  if (menuRef.value && !menuRef.value.contains(event.target) && buttonRef.value && !buttonRef.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
}

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener("click", handleClickOutside);
  } else {
    document.removeEventListener("click", handleClickOutside);
  }
});

// اضافه کردن منطق تغییر رنگ دکمه همبرگر
const hamburgerColor = ref("text-neutral-500");

const handleScroll = () => {
  const vh50 = window.innerHeight * 0.25; // محاسبه 50vh
  hamburgerColor.value = window.scrollY < vh50 ? "text-neutral-500" : "text-neutral-500";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // اجرای اولیه برای تنظیم رنگ در بارگذاری
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});

const isCollapsed = ref(false);

const menu = ref([
  { name: "home", path: "/" },
  { name: "aboutUs", path: "" },
  { name: "products", path: "products" },
  { name: "blogs", path: "/blogs" },
  { name: "contact", path: "" },
]);
</script>

<template>
  <!-- desktop version -->
  <div class="hidden lg:flex flex-row justify-between w-full pt-8 px-10">
    <!-- logo -->
    <div class=" rounded-lg pb-5">
      <img src="/images/perAI-white Logo.png" class="h-10 w-20" alt="" />
    </div>
    <!-- menu -->
    <div class="flex gap-10">
      <div v-for="m in menu" :key="m">
        <router-link class="hover-underline cursor-pointer capitalize text-xl mt-2 font-semibold" :to="m.path">{{ m.name }}</router-link>
      </div>
    </div>
  </div>

  <!-- Mobile version -->
  <div class="flex flex-col w-full justify-center items-center lg:hidden">
    <div class="w-full">
      <div class="flex w-full justify-end">
        <!-- اعمال رنگ دینامیک به دکمه همبرگر -->
        <button ref="buttonRef" class="mt-2 z-30 swap swap-rotate" :class="hamburgerColor" @click="toggleMenu">
          <input type="checkbox" :checked="isMenuOpen" />
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg class="swap-on fill-neutral-900" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
      </div>

      <Transition name="menu">
        <div
          dir="rtl"
          v-if="isMenuOpen"
          ref="menuRef"
          class="fixed top-0 left-0 right-0 text-neutral-900 dark:text-neutral-100 bg-neutral-100 text-center flex justify-center items-center dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-out z-10">
          <div class="pt-20 pb-5 text-2xl text-center items-center flex flex-col justify-center">
            <button @click="toggleMenu()" class="block capitalize text-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700">
              <router-link to="/" class="hover:text-green-600 transition-all duration-150 cursor-pointer">خانه</router-link>
            </button>
            <button class="block capitalize !m-0 !p-0 !text-center w-full">
              <div class="collapse !m-0 !p-0 !text-center">
                <input type="checkbox" v-model="isCollapsed" class="!m-0 !p-0" />
                <div class="collapse-title !h-0 !text-current !text-center !mr-3 !p-0 !text-2xl">
                  <div class="flex justify-center items-center gap-2">
                    <p>ماژول‌ها</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 transition-transform duration-200"
                      :class="{ 'rotate-180': isCollapsed }">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div class="collapse-content !m-0 !p-0 !text-center text-sm">
                  <div class="flex flex-col pb-5 justify-center items-center gap-5">
                    <router-link to="/our-modules-cards" @click="toggleMenu()">همه ماژول ها</router-link>
                    <router-link to="/our-modules-cards?filter=PerformanceManagement" @click="toggleMenu()"> مدیریت عملکرد </router-link>
                    <router-link to="/our-modules-cards?filter=Financialmanagement" @click="toggleMenu()"> مدیریت مالی </router-link>
                    <router-link to="/our-modules-cards?filter=sells" @click="toggleMenu()"> فروش </router-link>
                    <router-link to="/our-modules-cards?filter=Production" @click="toggleMenu()"> تولید </router-link>
                    <router-link to="/our-modules-cards?filter=HumanResources" @click="toggleMenu()"> منابع انسانی </router-link>
                  </div>
                </div>
              </div>
            </button>
            <button @click="toggleMenu()" class="block capitalize text-center w-full px-4 py-2 -mt-5 hover:bg-gray-100 dark:hover:bg-neutral-700">
              <router-link to="/contact" class="hover:text-green-600 transition-all duration-150 cursor-pointer">تماس باما</router-link>
            </button>
            <button @click="toggleMenu()" class="block capitalize text-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700">
              <router-link to="/aboutus" class="hover:text-green-600 transition-all duration-150 cursor-pointer">درباره ما</router-link>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.3s ease-out, opacity 0.2s ease-out;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateY(-70px);
  opacity: 0;
}

.menu-enter-to,
.menu-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.hover-underline {
  color: #ffffff;
  position: relative;
  display: inline-block;
}

.hover-underline::after,
.hover-underline::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #ff0000, #00ffff);
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease-out;
}

.hover-underline::before {
  top: -5px;
  transform-origin: left;
}

.hover-underline:hover::after,
.hover-underline:hover::before {
  transform: scaleX(1);
}
</style>
