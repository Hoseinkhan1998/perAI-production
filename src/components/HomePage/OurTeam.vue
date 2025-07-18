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
  { image: "images/OurTeam/alireza.png", title: "علیرضا زرگرانی", subtitle: "هم‌بنیانگذار - مدیر عامل" },
  { image: "images/OurTeam/amin.png", title: "امین سامینی", subtitle: "هم‌بنیانگذار - مدیر فنی" },
  { image: "images/OurTeam/keyvan.png", title: "کیوان ایلبگ", subtitle: "هم‌بنیانگذار - هیئت مدیره" },
  { image: "images/OurTeam/hosein.png", title: "حسین مزینانی", subtitle: "توسعه دهنده" },
  { image: "images/OurTeam/shilan.png", title: "شیلان ایلخانی", subtitle: "توسعه دهنده" },
  { image: "images/OurTeam/zahra.png", title: "زهرا مشهدی", subtitle: "توسعه دهنده" },
  { image: "images/OurTeam/mohammad.png", title: "محمد بدری", subtitle: "توسعه دهنده" },
  { image: "images/OurTeam/niki.png", title: "نیکی فرزام", subtitle: "طراح سایت" },
  { image: "images/OurTeam/ata.png", title: "امیر عطا عباسی", subtitle: "طراح سایت" },
  { image: "images/OurTeam/mobina.png", title: "مبینا قاسمی", subtitle: "کارشناس فروش" },
  { image: "images/OurTeam/sara.png", title: "سارا عباسی", subtitle: "مشاور مدیریت" },
  { image: "images/OurTeam/melika.png", title: "ملیکا جنابی", subtitle: "مشاور مدیریت" },
];
</script>

<template>
  <div class="grid ps-5 pe-8 grid-cols-12" ref="containerRef">
    <div class="col-span-full flex mb-20 justify-center w-full">
      <div class="flex flex-col border-b-4 border-neutral-600">
        <div class="pb-5 text-4xl font-black">تیم ما</div>
      </div>
    </div>
    <div class="col-span-full pt-6">
      <swiper
        dir="rtl"
        :slidesPerView="5"
        :spaceBetween="30"
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
          <!-- <div class="flex flex-col gap-4">
            <p class="text-2xl font-semibold hover:text-blue-600 transition-all duration-150 cursor-pointer">{{ slide.title }}</p>
            <div class="w-full h-[1px] bg-neutral-300"></div>
            <div>{{ slide.subtitle }}</div>
            <img class="mt-5 bg-center bg-cover" :src="slide.image" alt />
          </div> -->
          <div class="flex flex-col justify-center items-center gap-2">
            <img class="mt-5 bg-center bg-cover rounded-full h-[200px] border-4 border-neutral-400 border-solid w-[200px]" :src="slide.image" alt />
            <p class="text-lg font-semibold ">{{ slide.title }}</p>
            <p class="text-sm opacity-70 font-semibold ">{{ slide.subtitle }}</p>
          </div>
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
