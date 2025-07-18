<script setup>
import { ref } from "vue";
import CMMS from "../SVG/CMMS.vue";
const emit = defineEmits(["handleDisplay", "goBack"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}
</script>

<template>
  <!-- desktop -->
  <div class="relative lg:grid grid-cols-12 hidden mb-36">
    <!-- top section -->
    <div
      class="relative col-span-full flex items-center pt-20 px-5 -top-[88px] inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(images/ModuleDetails/topmoduledetails.png)`, height: '100vh' }">
      <div class="grid grid-cols-12 px-10 gap-10">
        <div class="col-span-7">
          <img src="/images/ModuleDetails/CMMS/cmmstop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <CMMS :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">CMMS</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول CMMS در اختاپوس، سیستمی یکپارچه برای مدیریت نگهداری و تعمیرات تجهیزات است. این ماژول با برنامه‌ریزی دقیق، ثبت و پیگیری تعمیرات، به افزایش عمر دارایی‌ها، کاهش
              خرابی‌ها و بهبود بهره‌وری سازمان کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول CMMS (سیستم مدیریت نگهداری و تعمیرات) ابزاری جامع برای برنامه‌ریزی، پیگیری و بهینه‌سازی فرآیندهای نگهداری و تعمیرات در سازمان‌هاست. این ماژول با مدیریت تجهیزات، ثبت
        درخواست‌های تعمیر، زمان‌بندی سرویس‌های پیشگیرانه و پیگیری تاریخچه تعمیرات، به افزایش عمر مفید دارایی‌ها و کاهش هزینه‌های ناخواسته کمک می‌کند. همچنین گزارش‌های تحلیلی و
        داشبوردهای مدیریتی موجود در این ماژول، تصمیم‌گیری هوشمندانه‌تر و بهبود مستمر عملکرد نگهداری را ممکن می‌سازد.
      </p>
    </div>
    <!-- big divider -->
    <div dir="rtl" class="col-span-full mt-10">
      <svg width="848" height="170" viewBox="0 0 848 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M954 168.918L795.083 10.0005H17" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <div class="col-span-full flex justify-center -mt-28">
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول CMMS</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CMMS/cmms1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">پایگاه عملیات تعمیرات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Work Orders مرکز مدیریت و پیگیری تمام دستورهای کاری مرتبط با نگهداری و تعمیرات است. در این بخش، کاربران می‌توانند لیست کامل درخواست‌ها را همراه با جزئیاتی مانند
              وضعیت، اولویت، محل، زمان‌بندی و مسئول اجرا مشاهده و مدیریت کنند. این صفحه با ایجاد شفافیت و نظم در روند اجرایی، به هماهنگی بهتر تیم‌ها و انجام به‌موقع فعالیت‌های
              نگهداری کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">جزئیات کامل برای مدیریت مؤثر</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              هر درخواست کاری در این بخش با اطلاعات دقیقی از نوع فعالیت، زمان‌بندی، وضعیت اجرا و مسئول مربوطه همراه است. این جزئیات به کاربران امکان می‌دهد تا روند انجام کار را
              مرحله‌به‌مرحله پیگیری کرده، هماهنگی‌های لازم را میان تیم‌ها برقرار کنند و در صورت نیاز، اقدامات اصلاحی یا به‌روزرسانی‌ها را به‌موقع انجام دهند. این شفافیت، دقت و سرعت
              عملیات نگهداری را به‌طور چشمگیری افزایش می‌دهد.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CMMS/cmms2.png" class="w-[700px] h-[300px]" alt="" />
      </div>
    </div>
    <!-- left divider -->
    <div class="col-span-full mt-10">
      <svg width="438" height="169" viewBox="0 0 438 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-117 167.918L41.917 9.00046H420" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="matrix(1 0 0 -1 419.5 18)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- third step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CMMS/cmms3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">پیگیری وظایف محول‌شده</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند تمام دستورهای کاری یا تسک‌هایی که به دیگران محول کرده‌اند را مشاهده و پیگیری کنند. این بخش با نمایش اطلاعاتی مانند وضعیت انجام، زمان‌بندی، و مسئول
              اجرا، به مدیران یا سرپرستان کمک می‌کند بر روند اجرای وظایف نظارت داشته باشند، در صورت نیاز بازخورد بدهند و اطمینان حاصل کنند که کارها به‌درستی و به‌موقع پیش می‌رود.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- right divider -->
    <div dir="rtl" class="col-span-full mt-20">
      <svg width="423" height="169" viewBox="0 0 423 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M554.5 167.918L395.583 9.00046H17.5002" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(-180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- fourth step -->
    <div class="grid grid-cols-12 col-span-full gap-28 -mt-16 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">جزئیات کلیدی عملیات تعمیرات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در بخش Work Order Info، اطلاعات کامل و دقیقی درباره هر دستور کار نمایش داده می‌شود؛ از جمله شرح فعالیت، محل انجام، زمان شروع و پایان، اولویت، وضعیت، مسئول اجرا و
              منابع مورد نیاز. این بخش به عنوان مرجع اصلی برای بررسی و مدیریت هر عملیات نگهداری عمل می‌کند و با فراهم کردن یک نمای کلی و کاربردی، تصمیم‌گیری و پیگیری کارها را برای
              کاربران ساده‌تر و مؤثرتر می‌سازد.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CMMS/cmms4.png" class="w-[700px] h-[300px]" alt="" />
      </div>
    </div>
  </div>

  <!-- mobile -->
  <div class="relative grid grid-cols-12 lg:hidden mb-36">
    <!-- top section -->
    <div
      class="relative col-span-full flex items-center pt-20 px-5 -top-[88px] inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(images/ModuleDetails/topmoduledetails.png)` }">
      <div class="grid grid-cols-12 py-5">
        <div dir="rtl" class="col-span-full text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-16 w-16 flex items-center justify-center">
                <CMMS :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">CMMS</span>:</p>
            </div>
            <img src="/images/ModuleDetails/CMMS/cmmstop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول CMMS در اختاپوس، سیستمی یکپارچه برای مدیریت نگهداری و تعمیرات تجهیزات است. این ماژول با برنامه‌ریزی دقیق، ثبت و پیگیری تعمیرات، به افزایش عمر دارایی‌ها، کاهش
              خرابی‌ها و بهبود بهره‌وری سازمان کمک می‌کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول CMMS (سیستم مدیریت نگهداری و تعمیرات) ابزاری جامع برای برنامه‌ریزی، پیگیری و بهینه‌سازی فرآیندهای نگهداری و تعمیرات در سازمان‌هاست. این ماژول با مدیریت تجهیزات، ثبت
        درخواست‌های تعمیر، زمان‌بندی سرویس‌های پیشگیرانه و پیگیری تاریخچه تعمیرات، به افزایش عمر مفید دارایی‌ها و کاهش هزینه‌های ناخواسته کمک می‌کند. همچنین گزارش‌های تحلیلی و
        داشبوردهای مدیریتی موجود در این ماژول، تصمیم‌گیری هوشمندانه‌تر و بهبود مستمر عملکرد نگهداری را ممکن می‌سازد.
      </p>
    </div>
    <!-- big divider -->
    <div dir="rtl" class="col-span-full pe-10 mt-10">
      <svg viewBox="0 0 848 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M954 168.918L795.083 10.0005H17" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <div class="col-span-full flex justify-center -mt-10">
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول CMMS</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/CMMS/cmms1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">پایگاه عملیات تعمیرات</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            صفحه Work Orders مرکز مدیریت و پیگیری تمام دستورهای کاری مرتبط با نگهداری و تعمیرات است. در این بخش، کاربران می‌توانند لیست کامل درخواست‌ها را همراه با جزئیاتی مانند
            وضعیت، اولویت، محل، زمان‌بندی و مسئول اجرا مشاهده و مدیریت کنند. این صفحه با ایجاد شفافیت و نظم در روند اجرایی، به هماهنگی بهتر تیم‌ها و انجام به‌موقع فعالیت‌های
            نگهداری کمک می‌کند.
          </p>
        </div>
      </div>
    </div>
    <!-- left divider -->
    <div class="col-span-full pe-10 mt-10">
      <svg viewBox="0 0 438 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-117 167.918L41.917 9.00046H420" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="matrix(1 0 0 -1 419.5 18)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- second step -->
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 -mt-20">
      <div class="col-span-full">
        <img src="/images/ModuleDetails/CMMS/cmms2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">جزئیات کامل برای مدیریت مؤثر</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        هر درخواست کاری در این بخش با اطلاعات دقیقی از نوع فعالیت، زمان‌بندی، وضعیت اجرا و مسئول مربوطه همراه است. این جزئیات به کاربران امکان می‌دهد تا روند انجام کار را
        مرحله‌به‌مرحله پیگیری کرده، هماهنگی‌های لازم را میان تیم‌ها برقرار کنند و در صورت نیاز، اقدامات اصلاحی یا به‌روزرسانی‌ها را به‌موقع انجام دهند. این شفافیت، دقت و سرعت
        عملیات نگهداری را به‌طور چشمگیری افزایش می‌دهد.
      </p>
    </div>
    <!-- right divider -->
    <div dir="rtl" class="col-span-full pe-10 mt-10">
      <svg viewBox="0 0 423 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M554.5 167.918L395.583 9.00046H17.5002" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(-180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- third step -->
    <div class="col-span-full px-5 -mt-20">
      <img src="/images/ModuleDetails/CMMS/cmms3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">پیگیری وظایف محول‌شده</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        کاربران می‌توانند تمام دستورهای کاری یا تسک‌هایی که به دیگران محول کرده‌اند را مشاهده و پیگیری کنند. این بخش با نمایش اطلاعاتی مانند وضعیت انجام، زمان‌بندی، و مسئول اجرا،
        به مدیران یا سرپرستان کمک می‌کند بر روند اجرای وظایف نظارت داشته باشند، در صورت نیاز بازخورد بدهند و اطمینان حاصل کنند که کارها به‌درستی و به‌موقع پیش می‌رود.
      </p>
    </div>
    <!-- left divider -->
    <div class="col-span-full pe-10 mt-10">
      <svg viewBox="0 0 438 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-117 167.918L41.917 9.00046H420" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="matrix(1 0 0 -1 419.5 18)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- fourth step -->
    <div class="col-span-full px-5 -mt-20">
      <img src="/images/ModuleDetails/CMMS/cmms4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">جزئیات کلیدی عملیات تعمیرات</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در بخش Work Order Info، اطلاعات کامل و دقیقی درباره هر دستور کار نمایش داده می‌شود؛ از جمله شرح فعالیت، محل انجام، زمان شروع و پایان، اولویت، وضعیت، مسئول اجرا و منابع
          مورد نیاز. این بخش به عنوان مرجع اصلی برای بررسی و مدیریت هر عملیات نگهداری عمل می‌کند و با فراهم کردن یک نمای کلی و کاربردی، تصمیم‌گیری و پیگیری کارها را برای کاربران
          ساده‌تر و مؤثرتر می‌سازد.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
