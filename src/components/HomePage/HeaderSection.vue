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
  <div class="flex pt-[20vh] flex-col bg-cover bg-center" :style="{ backgroundImage: `url(/images/landing.png)`, height: '110vh' }">
    <div class="text-neutral-100 w-full flex flex-col gap-5">
      <p class="text-[67px] text-center leading-snug font-bold">
        because each<span class="text-[#2A58FB]"> project</span><br />
        requires<span class="text-[#8400FF]"> specific</span> approach
      </p>
    </div>
    <div class="flex text-white px-20 w-full justify-between">
      <div class="flex flex-col gap-10">
        <div class="floating floating-1">
          <Icon1 />
        </div>
        <div class="floating floating-2 ps-20">
          <Icon2 />
        </div>
      </div>
      <div class="flex flex-col gap-10">
        <div class="floating floating-3 ps-20">
          <Icon3 />
        </div>
        <div class="floating floating-4">
          <Icon4 />
        </div>
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