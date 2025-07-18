<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}

const modules = [Keyboard, Pagination, Navigation];

const slides = [
  { image: "images/LastNews/crisis.png", title: "در دل بحران، کنار همیم", url:"/remotework" },
  { image: "images/LastNews/marketing.png", title: "انواع بازاریابی", url:"" },
  { image: "images/LastNews/octopusservice.png", title: "خدمات جدید اختاپوس", url:"" },
  { image: "images/LastNews/branding.png", title: "ارزش برند", url:"" },
  
];

</script>
<template>
  <div dir="rtl" class="grid gap-10 grid-cols-12">
    <!-- تیتر -->
    <div class="col-span-full flex justify-center w-full">
      <div class="flex flex-col border-b-4 pb-4 border-neutral-600">
        <div class="text-4xl font-black">آخرین اخبار</div>
      </div>
    </div>
    <div class="col-span-full">
      <swiper
        dir="rtl"
        :slidesPerView="3"
        :spaceBetween="0"
        :keyboard="{
          enabled: true,
          el: '.custom-pagination',
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <router-link :to="slide.url" class="flex cursor-pointer hover:scale-110 transition-all duration-300 justify-center bg-cover bg-center inset-0 relative" :style="{ backgroundImage: `url(${slide.image})`, height: '70vh' }">
            <div class="absolute inset-0 opacity-100 bg-[#00000069]" :style="{ height: '70vh' }"></div>
            <p class=" text-center font-semibold text-xl text-neutral-100 opacity-100 absolute z-20 bottom-8">{{ slide.title }}</p>
          </router-link>
          <div class="custom-pagination mt-16"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
/* تغییر رنگ دایره‌های pagination */
:deep(.swiper-pagination-bullet) {
  background-color: black;
  width: 15px;
  height: 15px;
}

/* تغییر رنگ دایره فعال */
:deep(.swiper-pagination-bullet-active) {
  background-color: rgb(58, 58, 58);
  width: 15px;
  height: 15px;
}
</style>
