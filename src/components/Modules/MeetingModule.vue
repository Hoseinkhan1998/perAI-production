<script setup>
import { ref } from "vue";
import Meeting from "../SVG/Meeting.vue";
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
          <img src="/images/ModuleDetails/Meeting/meetingtop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Meeting :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">meeting</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Meeting در ERP اختاپوس، ابزاری کاربردی برای مدیریت مؤثر جلسات سازمانی است. از برنامه‌ریزی و دعوت اعضا تا ثبت تصمیمات و پیگیری خروجی‌ها، این ماژول به سازمان‌ها
              کمک می‌کند جلسات منسجم‌تر، هدفمندتر و قابل‌پیگیری‌تری داشته باشند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Meeting در سیستم اختاپوس، ابزاری هوشمند برای برنامه‌ریزی، مدیریت و پیگیری جلسات سازمانی است. این ماژول با فراهم‌کردن امکاناتی مانند تعیین زمان و مکان جلسه، دعوت از
        اعضا، تنظیم دستور جلسه، ثبت تصمیمات و وظایف خروجی، به بهینه‌سازی فرآیند جلسات کمک می‌کند. همچنین با اتصال به ماژول‌هایی مانند TASK و PEOPLE، یکپارچگی کامل بین برنامه‌ریزی
        جلسات و اجرای تصمیمات فراهم می‌شود تا جلسات از حالت فرمالیته خارج شده و به ابزاری موثر برای پیشبرد اهداف سازمان تبدیل شوند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول MEETING</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Meeting/meeting1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مرکز کنترل جلسات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند اطلاعات جامع هر جلسه را مشاهده کنند و از امکانات متنوعی مانند چت داخلی برای ارتباط لحظه‌ای، ثبت یادداشت‌های مهم (نوت) و گزینه‌های عملیاتی
              (Operation) برای مدیریت بهتر جلسه بهره‌مند شوند. این ویژگی‌ها امکان همکاری مؤثر، مستندسازی تصمیمات و انجام اقدامات لازم را در یک محیط یکپارچه فراهم می‌کند تا جلسات با
              نظم و کارایی بیشتری برگزار شوند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">جزئیات کامل جلسه با امکانات ارتباطی و مدیریت</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
             کاربران می‌توانند اطلاعات جامع هر جلسه را مشاهده کنند و از امکانات متنوعی مانند چت داخلی برای ارتباط لحظه‌ای، ثبت یادداشت‌های مهم (نوت) و گزینه‌های عملیاتی (Operation) برای مدیریت بهتر جلسه بهره‌مند شوند. این ویژگی‌ها امکان همکاری مؤثر، مستندسازی تصمیمات و انجام اقدامات لازم را در یک محیط یکپارچه فراهم می‌کند تا جلسات با نظم و کارایی بیشتری برگزار شوند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Meeting/meeting2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Meeting/meeting3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">طراحی و زمان‌بندی جلسات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Add New Meeting فضایی ساده و کاربرپسند برای برنامه‌ریزی سریع و دقیق جلسات جدید است. در این بخش، کاربران می‌توانند اطلاعات کلیدی مانند عنوان جلسه، تاریخ و ساعت، مکان، اعضای دعوت‌شده و دستور جلسه را به‌راحتی وارد کنند. این صفحه با طراحی هوشمندانه، فرایند ثبت جلسات را تسریع می‌کند و اطمینان می‌دهد که هیچ جزئیاتی از قلم نیفتد، تا جلسات به بهترین شکل ممکن برنامه‌ریزی و برگزار شوند.
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
          <p class="text-2xl font-medium">نمای کلی میتینگ ها در تقویم</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Meeting Calendar نمایی جامع و گرافیکی از تمام جلسات برنامه‌ریزی‌شده در قالب تقویم ارائه می‌دهد. این بخش به کاربران امکان می‌دهد تا به‌سرعت زمان‌بندی جلسات، روزهای پرکار و زمان‌های آزاد را مشاهده و مدیریت کنند. با استفاده از این تقویم، برنامه‌ریزی بهتر و هماهنگی دقیق‌تر بین اعضای تیم تضمین می‌شود و از تداخل جلسات جلوگیری می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Meeting/meeting4.png" class="w-[700px] h-[300px]" alt="" />
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
                <Meeting :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="capitalize">MEETING</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Meeting/meetingtop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
             ماژول Meeting در ERP اختاپوس، ابزاری کاربردی برای مدیریت مؤثر جلسات سازمانی است. از برنامه‌ریزی و دعوت اعضا تا ثبت تصمیمات و پیگیری خروجی‌ها، این ماژول به سازمان‌ها کمک می‌کند جلسات منسجم‌تر، هدفمندتر و قابل‌پیگیری‌تری داشته باشند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Meeting در سیستم اختاپوس، ابزاری هوشمند برای برنامه‌ریزی، مدیریت و پیگیری جلسات سازمانی است. این ماژول با فراهم‌کردن امکاناتی مانند تعیین زمان و مکان جلسه، دعوت از اعضا، تنظیم دستور جلسه، ثبت تصمیمات و وظایف خروجی، به بهینه‌سازی فرآیند جلسات کمک می‌کند. همچنین با اتصال به ماژول‌هایی مانند TASK و PEOPLE، یکپارچگی کامل بین برنامه‌ریزی جلسات و اجرای تصمیمات فراهم می‌شود تا جلسات از حالت فرمالیته خارج شده و به ابزاری موثر برای پیشبرد اهداف سازمان تبدیل شوند.
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
      <p dir="rtl" class="text-2xl font-semibold">ویژگی‌های اصلی ماژول MEETING</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Meeting/meeting1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مرکز کنترل جلسات</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            صفحه My Meeting محیطی اختصاصی برای مشاهده و مدیریت تمام جلسات برنامه‌ریزی‌شده برای هر کاربر است. در این بخش، کاربران می‌توانند جزئیات جلسات شامل زمان، مکان، موضوع و اعضای دعوت‌شده را ببینند و حضور خود را تأیید یا رد کنند. این صفحه به ساده‌تر شدن پیگیری جلسات و آمادگی بهتر برای هر نشست کمک می‌کند و ارتباط موثرتر میان اعضای تیم را تسهیل می‌نماید.
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
        <img src="/images/ModuleDetails/Meeting/meeting2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">جزئیات کامل جلسه با امکانات ارتباطی و مدیریت</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        کاربران می‌توانند اطلاعات جامع هر جلسه را مشاهده کنند و از امکانات متنوعی مانند چت داخلی برای ارتباط لحظه‌ای، ثبت یادداشت‌های مهم (نوت) و گزینه‌های عملیاتی (Operation) برای مدیریت بهتر جلسه بهره‌مند شوند. این ویژگی‌ها امکان همکاری مؤثر، مستندسازی تصمیمات و انجام اقدامات لازم را در یک محیط یکپارچه فراهم می‌کند تا جلسات با نظم و کارایی بیشتری برگزار شوند.
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
      <img src="/images/ModuleDetails/Meeting/meeting3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">طراحی و زمان‌بندی جلسات</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        صفحه Add New Meeting فضایی ساده و کاربرپسند برای برنامه‌ریزی سریع و دقیق جلسات جدید است. در این بخش، کاربران می‌توانند اطلاعات کلیدی مانند عنوان جلسه، تاریخ و ساعت، مکان، اعضای دعوت‌شده و دستور جلسه را به‌راحتی وارد کنند. این صفحه با طراحی هوشمندانه، فرایند ثبت جلسات را تسریع می‌کند و اطمینان می‌دهد که هیچ جزئیاتی از قلم نیفتد، تا جلسات به بهترین شکل ممکن برنامه‌ریزی و برگزار شوند.
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
      <img src="/images/ModuleDetails/Meeting/meeting4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">نمای کلی میتینگ ها در تقویم</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
         صفحه Meeting Calendar نمایی جامع و گرافیکی از تمام جلسات برنامه‌ریزی‌شده در قالب تقویم ارائه می‌دهد. این بخش به کاربران امکان می‌دهد تا به‌سرعت زمان‌بندی جلسات، روزهای پرکار و زمان‌های آزاد را مشاهده و مدیریت کنند. با استفاده از این تقویم، برنامه‌ریزی بهتر و هماهنگی دقیق‌تر بین اعضای تیم تضمین می‌شود و از تداخل جلسات جلوگیری می‌کند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
