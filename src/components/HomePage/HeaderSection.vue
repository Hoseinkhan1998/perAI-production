<script setup>
import Header from "./Header.vue";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}
</script>

<template>
  <!-- عکس اصلی -->
  <div class="items-center flex justify-center bg-cover bg-center" :style="{ backgroundImage: `url(/images/topsection.png)`, height: '100vh' }">
    <div class="text-neutral-100 flex items-center justify-center flex-col gap-5">
      <p class="text-[67px] text-center leading-snug font-bold">
        Explore Innovation with<br />
        Expert <span class="text-transparent bg-gradient-to-l from-[#2a57fb67] to-[#2a58fb] bg-clip-text">AI Consulting</span>
      </p>
      <p class="text-center ">Unlock innovation with our AI consulting. We provide tailored solutions to optimize operations <br/> and enhance decision-making, helping you stay ahead in the market.</p>
      <!-- button -->
      <div class=" px-6 py-2 rounded-[60px] bg-neutral-100 text-black mt-10">Get Free Consultant </div>
    </div>
  </div>
</template>

<style scoped></style>
