<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HeaderSection from "./HomePage/HeaderSection.vue";
import HeaderSectionMob from "./HomePageMobile/HeaderSectionMob.vue";
import OurTeam from "./HomePage/OurTeam.vue";
import OurTeamMob from "./HomePageMobile/OurTeamMob.vue";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}

const props = defineProps({});
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="col-span-full lg:block hidden -mt-24">
      <HeaderSection @handleDisplay="handleDisplay" />
    </div>
    <div class="col-span-full lg:hidden block -mt-24">
      <HeaderSectionMob @handleDisplay="handleDisplay" />
    </div>
    <!-- About us -->
    <div class="col-span-full flex mb-20 justify-center w-full mt-20">
      <div class="flex flex-col border-b-4 border-neutral-600">
        <div class="pb-5 text-4xl font-black">درباره ما</div>
      </div>
    </div>
    <div class="col-span-full pt-6" dir="rtl">
      <div class=" lg:px-28 sm:px-5 flex lg:justify-center justify-start">
        <p class="leading-loose text-justify text-xl">
          شرکت اختاپوس با هدف توسعه نرم‌افزارهای ERP هوشمند و تطبیق‌پذیر تأسیس شده است.<br /> تیم بنیان‌گذاران ما با سابقه‌ای درخشان در حوزه مدیریت و مشاوره سازمانی، بر آن شدند تا
          راهکاری نوین برای بهبود بهره‌وری و تصمیم‌گیری مدیران ارائه دهند. نرم‌افزار اختاپوس، الهام گرفته از این موجود باهوش و انعطاف‌پذیر، طراحی شده تا به سازمان‌ها در اشراف
          اطلاعاتی و دستیابی به عملکردی کارآمدتر کمک کند.<br /> ما در اختاپوس باور داریم که ERP باید به نیازهای واقعی کسب‌وکارها پاسخ دهد، نه اینکه صرفاً مجموعه‌ای از امکانات غیرضروری
          ارائه کند. به همین دلیل، ماژول‌های نرم‌افزار اختاپوس دقیقاً بر اساس نیازهای مشتریان طراحی و به مرور زمان متناسب با تغییرات آنها توسعه می‌یابد. اختاپوس نه‌تنها راهکاری
          مقرون‌به‌صرفه‌تر برای کسب‌وکارهای کوچک، متوسط و استارتاپ‌ها ارائه می‌دهد، بلکه با رابط کاربری ساده و دلپذیر خود تجربه‌ای متفاوت از نرم‌افزارهای مدیریتی را فراهم می‌آورد.<br />
          ما متعهدیم که به درک عمیقی از نیازهای مشتریان برسیم و راهکارهایی کاربردی و انعطاف‌پذیر ارائه کنیم. اختاپوس نه‌فقط یک ابزار مدیریتی، بلکه شریک هوشمندی در مسیر رشد و موفقیت
          سازمان شماست.
        </p>
      </div>
    </div>
    <div class="col-span-full bg-neutral-200 lg:block hidden mt-36 pt-10 pb-28">
      <OurTeam @handleDisplay="handleDisplay" />
    </div>
    <div class="col-span-full lg:hidden block mt-36 pt-10 pb-28">
      <OurTeamMob @handleDisplay="handleDisplay" />
    </div>
  </div>
</template>

<style scoped></style>
>
