<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LastNews from "./LastNews.vue";
import LastNewsMob from "../HomePageMobile/LastNewsMob.vue";
import OurModules from "./OurModules.vue";
import OurModulesMob from "../HomePageMobile/OurModulesMob.vue";
import OurCustomers from "./OurCustomers.vue";
import OurCustomersMob from "../HomePageMobile/OurCustomersMob.vue";
import OurTeam from "./OurTeam.vue";
import OurTeamMob from "../HomePageMobile/OurTeamMob.vue";
import HeaderSection from "./HeaderSection.vue";
import HeaderSectionMob from "../HomePageMobile/HeaderSectionMob.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}

const props = defineProps({});

const showScrollToTop = ref(false);

const handleScroll = () => {
  const playtableElement = document.querySelector(".playtable");
  if (playtableElement) {
    const { top } = playtableElement.getBoundingClientRect();
    showScrollToTop.value = window.scrollY > top;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="grid grid-cols-12 mb-36">
    <div class="col-span-full lg:block hidden -mt-24">
      <HeaderSection @handleDisplay="handleDisplay" />
    </div>
    <!-- <div class="col-span-full lg:hidden block -mt-24">
      <HeaderSectionMob @handleDisplay="handleDisplay" />
    </div> -->
    <div class="col-span-full lg:block hidden mt-20 playtable">
      <OurCustomers @handleDisplay="handleDisplay" />
    </div>
    <!-- <div class="col-span-full lg:hidden block mt-20 playtable">
      <OurCustomersMob @handleDisplay="handleDisplay" />
    </div> -->
    <!-- <div class="col-span-full lg:block hidden mt-20">
      <OurModules @handleDisplay="handleDisplay" />
    </div> -->
    <!-- <div class="col-span-full lg:hidden block mt-20">
      <OurModulesMob @handleDisplay="handleDisplay" />
    </div> -->
    <!-- <div class="col-span-full lg:block hidden mt-36">
      <OurTeam @handleDisplay="handleDisplay" />
    </div> -->
    <!-- <div class="col-span-full lg:hidden block mt-36">
      <OurTeamMob @handleDisplay="handleDisplay" />
    </div> -->
    <!-- <div class="col-span-full lg:block hidden mt-36">
      <LastNews @handleDisplay="handleDisplay" />
    </div> -->
    <!-- <div class="col-span-full lg:hidden block mt-36">
      <LastNewsMob @handleDisplay="handleDisplay" />
    </div> -->
    <!-- <div class="col-span-full lg:block hidden mt-36">
      <OurCustomers @handleDisplay="handleDisplay" />
    </div>
    <div class="col-span-full lg:hidden block mt-36">
      <OurCustomersMob @handleDisplay="handleDisplay" />
    </div> -->
  </div>
  <button v-if="showScrollToTop" @click="scrollToTop" class="fixed bottom-4 z-30 left-4">
    <div class="bg-neutral-700 text-white p-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
    </div>
  </button>
</template>

<style>
.playtable {
  scroll-margin-top: 16px;
}
</style>
