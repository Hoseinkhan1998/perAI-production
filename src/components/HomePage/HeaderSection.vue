<script setup>
import Icon1 from "../SVG/Icon1.vue";
import Icon2 from "../SVG/Icon2.vue";
import Icon3 from "../SVG/Icon3.vue";
import Icon4 from "../SVG/Icon4.vue";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}
</script>

<template>
  <!-- عکس اصلی -->
  <div class="flex pt-[20vh] flex-col bg-cover bg-center relative" :style="{ backgroundImage: `url(/images/landing.png)`, height: '110vh', minHeight: '600px' }">
    <div class="text-neutral-100 w-full flex flex-col gap-5">
      <p class="text-[67px] text-center leading-snug font-bold md:text-[80px] lg:text-[90px]">
        because each<span class="text-[#2A58FB]"> project</span><br />
        requires<span class="text-[#8400FF]"> specific</span> approach
      </p>
    </div>
    <div class="relative w-full h-full">
      <!-- آیکون 1 - بالا چپ -->
      <div class="absolute top-[25%] left-[15%] md:left-[20%] lg:left-[25%] culg:left-[25%] transform -translate-x-1/2 -translate-y-1/2 floating floating-1">
        <Icon1 />
      </div>
      <!-- آیکون 2 - پایین چپ -->
      <div class="absolute bottom-[25%] left-[15%] md:left-[20%] lg:left-[25%] culg:left-[25%] transform -translate-x-1/2 translate-y-1/2 floating floating-2 ps-20">
        <Icon2 />
      </div>
      <!-- آیکون 3 - بالا راست -->
      <div class="absolute top-[25%] right-[15%] md:right-[20%] lg:right-[25%] culg:right-[25%] transform translate-x-1/2 -translate-y-1/2 floating floating-3 ps-20">
        <Icon3 />
      </div>
      <!-- آیکون 4 - پایین راست -->
      <div class="absolute bottom-[25%] right-[15%] md:right-[20%] lg:right-[25%] culg:right-[25%] transform translate-x-1/2 translate-y-1/2 floating floating-4">
        <Icon4 />
      </div>
    </div>
  </div>
</template>

<style scoped>
.floating {
  animation: float 6s ease-in-out infinite;
}

.floating-1 {
  animation-delay: 0s;
}

.floating-2 {
  animation-delay: 1.5s;
  animation-duration: 7s;
}

.floating-3 {
  animation-delay: 0.5s;
  animation-duration: 5.5s;
}

.floating-4 {
  animation-delay: 2s;
}

@keyframes float {
  0% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
}

@media (min-width: 1536px) { /* Tailwind's 2xl breakpoint */
  .floating-1 {
    top: 25% !important;
    left: 25% !important;
  }
  .floating-2 {
    bottom: 25% !important;
    left: 25% !important;
  }
  .floating-3 {
    top: 25% !important;
    right: 25% !important;
  }
  .floating-4 {
    bottom: 25% !important;
    right: 25% !important;
  }
}
</style>