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
  <div class="flex 3xl:pt-[120px] 2xl:pt-[100px] xl:pt-[100px] md:pt-[100px] flex-col bg-cover bg-center 3xl:h-[900px] 2xl:h-[800px] xl:h-[700px] md:h-[650px] relative" :style="{ backgroundImage: `url(/images/landing.png)`}">
    <div class="text-neutral-100 w-full flex flex-col gap-5">
      <p class="2xl:text-[5rem] xl:text-[4rem] md:text-[3rem] text-center leading-snug font-bold">
        because each<span class="text-[#2A58FB]"> project</span><br />
        requires<span class="text-[#8400FF]"> specific</span> approach
      </p>
    </div>
    <div class="relative w-full h-full">
      <!-- آیکون 1 - بالا چپ -->
      <div class="absolute top-[100px] 3xl:left-[250px] xl:left-[200px] lg:left-[100px] md:left-[50px] transform -translate-x-1/2 -translate-y-1/2 floating floating-1">
        <Icon1 />
      </div>
      <!-- آیکون 2 - پایین چپ -->
      <div class="absolute 3xl:bottom-[1px] xl:bottom-[10px] md:bottom-[20px] 3xl:left-[350px] xl:left-[300px] lg:left-[200px] md:left-[90px] transform -translate-x-1/2 translate-y-1/2 floating floating-2">
        <Icon2 />
      </div>
      <!-- آیکون 3 - بالا راست -->
      <div class="absolute top-[100px] 3xl:right-[250px] xl:right-[200px] lg:right-[100px] md:right-[50px] transform translate-x-1/2 -translate-y-1/2 floating floating-3 ps-20">
        <Icon3 />
      </div>
      <!-- آیکون 4 - پایین راست -->
      <div class="absolute bottom-[-30px] 3xl:right-[350px] xl:right-[300px] lg:right-[200px] md:right-[90px] transform translate-x-1/2 translate-y-1/2 floating floating-4">
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

</style>