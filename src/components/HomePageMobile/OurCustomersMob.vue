<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}

const modules = [Pagination, Autoplay];

const slides = [
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
  "images/OurCustomer/vanalogo.png",
];
const isHovered = ref(slides.map(() => false));
// متغیر برای ذخیره تصویر انتخاب شده
const selectedImage = ref(slides[0]);

// تابعی برای به‌روزرسانی تصویر پس‌زمینه با اولین تصویر اسلایدر
const updateSelectedImage = (swiper) => {
  selectedImage.value = slides[swiper];
};

onMounted(() => {
  // اطمینان از این که تصویر اولیه درست تنظیم شود
  selectedImage.value = slides[0];
});
</script>
<template>
  <div class="grid grid-cols-12 sm:px-3 lg:px-0">
    <!-- تیتر -->
    <div class="col-span-full flex mb-20 justify-center w-full">
      <div class="flex flex-col border-b-4 border-green-600">
        <div class="pb-5 text-4xl font-black">مشتریان ما</div>
      </div>
    </div>
    <div class="col-span-full pt-6">
      <swiper
        :slidesPerView="2"
        :loop="true"
        :spaceBetween="10"
        :grabCursor="true"
        :autoplay="{
         delay: 1500,
         disableOnInteraction: false,
         }"
        :modules="modules "
        @slideChange="updateSelectedImage"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div
            class="h-[100px] bg-center rounded-xl bg-cover"
            :style="{ backgroundImage: `url(${slide})` }"
          ></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<style scoped>
.bg-grad {
  background: linear-gradient(to right, #dd33336b, rgba(156, 81, 81, 0));
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
}

.dot-selected {
  background-color: red;
}
</style>