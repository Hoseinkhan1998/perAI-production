<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Arrowup from "./Arrowup.vue";
const router = useRouter();
</script>

<template>
  <div class="flex flex-col px-20">
    <!-- title -->
    <div class="grid items-center grid-cols-12">
      <div class="col-span-6">
        <p class="text-4xl font-semibold">
          Revolutionising Industries <br />
          with Top <span class="text-transparent bg-gradient-to-l from-purple-300 to-purple-500 bg-clip-text">AI Consulting</span>
        </p>
      </div>
      <div class="col-span-6 flex justify-end">
        Explore AI-Powered Projects Uniquely Designed<br />
        to Meet Your Business Needs and Drive Innovation.
      </div>
    </div>
    <!-- cards -->
    <div class="grid grid-cols-12 gap-10 mt-10 px-10">
      <div class="col-span-4">
        <div
          class="flex cursor-pointer rounded-xl hover:scale-110 transition-all duration-300 justify-center bg-cover bg-center inset-0 relative"
          :style="{ backgroundImage: `url(images/LastNews/Rectangle.png)`, height: '40vh' }">
          <div class="absolute inset-0 opacity-100 bg-[#0000003e] rounded-xl" :style="{ height: '40vh' }"></div>
          <p class="text-center font-semibold text-xl text-neutral-100 opacity-100 absolute z-20 bottom-4">AI Based Chatbot</p>
        </div>
      </div>
      <div class="col-span-4">
        <div
          class="flex cursor-pointer rounded-xl hover:scale-110 transition-all duration-300 justify-center bg-cover bg-center inset-0 relative"
          :style="{ backgroundImage: `url(images/LastNews/Rectangle2.png)`, height: '60vh' }">
          <div class="absolute inset-0 opacity-100 bg-[#0000003e] rounded-xl" :style="{ height: '60vh' }"></div>
          <p class="text-center font-semibold text-xl text-neutral-100 opacity-100 absolute z-20 bottom-4">
            AI-Powered Online Social <br />
            Casino Gaming Platform
          </p>
        </div>
      </div>
      <div class="col-span-4">
        <div
          class="flex cursor-pointer rounded-xl hover:scale-110 transition-all duration-300 justify-center bg-cover bg-center inset-0 relative"
          :style="{ backgroundImage: `url(images/LastNews/Rectangle3.png)`, height: '40vh' }">
          <div class="absolute inset-0 opacity-100 bg-[#0000003e] rounded-xl" :style="{ height: '40vh' }"></div>
          <p class="text-center font-semibold text-xl text-neutral-100 opacity-100 absolute z-20 bottom-4">A Platform for Safe Home Hunting</p>
        </div>
      </div>
    </div>
    <div class="mt-10 justify-center flex w-full">
      <router-link to="/blogs" class=" flex gap-3 items-center cursor-pointer">
        <p class="text-lg">see all</p>
        <div class="rotate-90">
          <Arrowup />
        </div>
      </router-link>
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
