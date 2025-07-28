<script setup>
import Header from "./Header.vue";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}
</script>

<template>
  <!-- عکس اصلی -->
  <div class="flex justify-center pt-[20vh]  bg-cover bg-center" :style="{ backgroundImage: `url(/images/landing.png)`, height: '110vh' }">
    <div class="text-neutral-100 flex flex-col gap-5">
      <p class="text-[67px] text-center leading-snug font-bold">
        because each<span class="text-[#2A58FB]"> project</span><br />
        requires<span class="text-[#8400FF]"> specific</span> approach
      </p>
    </div>
  </div>
</template>

<style scoped></style>
