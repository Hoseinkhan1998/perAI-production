<script setup>
import { ref } from "vue";
import Timesheet from "../SVG/Timesheet.vue";
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
          <img src="/images/ModuleDetails/TimeSheet/timesheettop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Timesheet :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Timesheet</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Timesheet به‌عنوان پل ارتباطی میان زمان، فعالیت و خروجی در سازمان عمل می‌کند. با استفاده از این ابزار، کاربران می‌توانند ساعت‌های کاری خود را ثبت، برنامه‌ریزی‌ها را دنبال و به مدیریت زمان‌بندی پروژه‌ها کمک کنند. این ماژول ساختاری یکپارچه برای مدیریت موثر نیروی انسانی فراهم کرده و نقش کلیدی در هماهنگ‌سازی منابع و پیشبرد اهداف سازمانی ایفا می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Timesheet در اختاپوس ابزاری کلیدی برای ثبت و پیگیری زمان صرف‌شده روی وظایف، پروژه‌ها و فعالیت‌های روزانه است. کاربران می‌توانند زمان شروع و پایان کار، نوع فعالیت، استراحت‌ها و برچسب‌های مرتبط را وارد کنند. این اطلاعات با ارائه گزارش‌های دقیق، به مدیران در تحلیل بهره‌وری، بهبود برنامه‌ریزی و شناسایی نقاط اتلاف زمان کمک می‌کند. Timesheet همچنین نقشی مهم در مدیریت هزینه منابع انسانی و افزایش شفافیت عملکرد در تیم‌ها دارد.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Timesheet</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/TimeSheet/timesheet1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت روزانه فعالیت‌ها در Timesheet</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه «Today's Timesheet»، کاربران می‌توانند لیستی از تسک‌های روز جاری خود را مشاهده کرده، وضعیت آن‌ها را به‌روزرسانی کنند و پیشرفت خود را ثبت نمایند. همچنین این صفحه امکان وارد کردن تایم‌شیت روزانه به همراه توضیحاتی درباره احساس یا وضعیت ذهنی کاربر را فراهم می‌کند تا یک نمای دقیق‌تر و انسانی‌تر از بهره‌وری روزانه ارائه دهد. این ویژگی به تحلیل‌های عمیق‌تر در حوزه مدیریت منابع انسانی کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">بررسی و به‌روزرسانی جزئیات هر تسک</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
             در این بخش، کاربران می‌توانند با انتخاب هر تسک، به اطلاعات کامل آن شامل توضیحات، زمان شروع و پایان، وضعیت فعلی، و وابستگی‌ها دسترسی پیدا کنند. همچنین امکان به‌روزرسانی وضعیت تسک (در حال انجام، انجام شده، نیازمند بررسی و...) وجود دارد تا هماهنگی و پیگیری پیشرفت کارها به‌صورت دقیق و لحظه‌ای انجام شود. این قابلیت، تسک منیجمنت روزانه را سریع‌تر، شفاف‌تر و مؤثرتر می‌سازد.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/TimeSheet/timesheet2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/TimeSheet/timesheet3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">صفحه "Waste-time Detector" — شناسایی زمان‌های تلف‌شده</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
             کاربران می‌توانند با بررسی تحلیل‌های زمانی، فعالیت‌هایی را که بهره‌وری کمی داشته‌اند یا منجر به اتلاف زمان شده‌اند شناسایی کنند. این بخش با مقایسه زمان صرف‌شده بر روی تسک‌ها با خروجی واقعی، نقاط ضعف در مدیریت زمان را مشخص می‌کند. هدف این ابزار، کمک به بهبود عادت‌های کاری، تمرکز بیشتر روی وظایف مؤثر، و افزایش بهره‌وری فردی و تیمی است.
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
          <p class="text-2xl font-medium"> دید عمیق بر نحوه استفاده از زمان</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
            کاربران می‌توانند محتوا و جزئیات کامل هر پیام دریافتی را به‌راحتی مشاهده کنند. این صفحه امکانات متنوعی مانند پاسخ‌دهی سریع، فوروارد کردن، حذف و علامت‌گذاری پیام را در اختیار کاربر قرار می‌دهد. همچنین قابلیت نمایش فایل‌های پیوست شده و مدیریت بهتر مکاتبات با گزینه‌هایی مانند آرشیو و انتقال پیام به پوشه‌های مختلف، تجربه‌ای کارآمد و سازمان‌یافته از مدیریت صندوق پستی فراهم می‌کند. طراحی این بخش با تمرکز بر سادگی و دسترسی سریع، به کاربران امکان می‌دهد ارتباطات خود را با دقت و سرعت بیشتری مدیریت کنند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/TimeSheet/timesheet4.png" class="w-[700px] h-[300px]" alt="" />
      </div>
    </div>
    <!-- left divider -->
    <div class="col-span-full mt-10">
      <svg width="438" height="169" viewBox="0 0 438 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-117 167.918L41.917 9.00046H420" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="matrix(1 0 0 -1 419.5 18)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- fifth step -->
    <div class="grid grid-cols-12 col-span-full gap-28 -mt-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/TimeSheet/timesheet5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium"> مدیریت ساده و شفاف مرخصی‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
             در این صفحه، کاربران می‌توانند تحلیل‌های دقیق و بصری از نحوه صرف زمان خود و تیم‌شان در پروژه‌ها و تسک‌های مختلف مشاهده کنند. با استفاده از نمودارها، جداول و فیلترهای کاربردی، اطلاعاتی نظیر میزان زمان صرف‌شده بر اساس هر پروژه، بیشترین و کم‌اثرترین فعالیت‌ها، الگوی کاری افراد و بازه‌های زمانی پرکار یا کم‌کار نمایش داده می‌شود. این بخش به بهینه‌سازی زمان، شناسایی گلوگاه‌های عملکردی و تصمیم‌گیری بهتر برای برنامه‌ریزی‌های آتی کمک می‌کند.
            </p>
          </div>
        </div>
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
                <Timesheet :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Timesheet</span>:</p>
            </div>
            <img src="/images/ModuleDetails/TimeSheet/timesheettop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Timesheet به‌عنوان پل ارتباطی میان زمان، فعالیت و خروجی در سازمان عمل می‌کند. با استفاده از این ابزار، کاربران می‌توانند ساعت‌های کاری خود را ثبت، برنامه‌ریزی‌ها را دنبال و به مدیریت زمان‌بندی پروژه‌ها کمک کنند. این ماژول ساختاری یکپارچه برای مدیریت موثر نیروی انسانی فراهم کرده و نقش کلیدی در هماهنگ‌سازی منابع و پیشبرد اهداف سازمانی ایفا می‌کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
       ماژول Timesheet در اختاپوس ابزاری کلیدی برای ثبت و پیگیری زمان صرف‌شده روی وظایف، پروژه‌ها و فعالیت‌های روزانه است. کاربران می‌توانند زمان شروع و پایان کار، نوع فعالیت، استراحت‌ها و برچسب‌های مرتبط را وارد کنند. این اطلاعات با ارائه گزارش‌های دقیق، به مدیران در تحلیل بهره‌وری، بهبود برنامه‌ریزی و شناسایی نقاط اتلاف زمان کمک می‌کند. Timesheet همچنین نقشی مهم در مدیریت هزینه منابع انسانی و افزایش شفافیت عملکرد در تیم‌ها دارد.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Timesheet</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/TimeSheet/timesheet1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مدیریت روزانه فعالیت‌ها در Timesheet</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
           در صفحه «Today's Timesheet»، کاربران می‌توانند لیستی از تسک‌های روز جاری خود را مشاهده کرده، وضعیت آن‌ها را به‌روزرسانی کنند و پیشرفت خود را ثبت نمایند. همچنین این صفحه امکان وارد کردن تایم‌شیت روزانه به همراه توضیحاتی درباره احساس یا وضعیت ذهنی کاربر را فراهم می‌کند تا یک نمای دقیق‌تر و انسانی‌تر از بهره‌وری روزانه ارائه دهد. این ویژگی به تحلیل‌های عمیق‌تر در حوزه مدیریت منابع انسانی کمک می‌کند.
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
        <img src="/images/ModuleDetails/TimeSheet/timesheet2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">بررسی و به‌روزرسانی جزئیات هر تسک</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
       در این بخش، کاربران می‌توانند با انتخاب هر تسک، به اطلاعات کامل آن شامل توضیحات، زمان شروع و پایان، وضعیت فعلی، و وابستگی‌ها دسترسی پیدا کنند. همچنین امکان به‌روزرسانی وضعیت تسک (در حال انجام، انجام شده، نیازمند بررسی و...) وجود دارد تا هماهنگی و پیگیری پیشرفت کارها به‌صورت دقیق و لحظه‌ای انجام شود. این قابلیت، تسک منیجمنت روزانه را سریع‌تر، شفاف‌تر و مؤثرتر می‌سازد.
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
      <img src="/images/ModuleDetails/TimeSheet/timesheet3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">صفحه "Waste-time Detector" — شناسایی زمان‌های تلف‌شده</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        کاربران می‌توانند با بررسی تحلیل‌های زمانی، فعالیت‌هایی را که بهره‌وری کمی داشته‌اند یا منجر به اتلاف زمان شده‌اند شناسایی کنند. این بخش با مقایسه زمان صرف‌شده بر روی تسک‌ها با خروجی واقعی، نقاط ضعف در مدیریت زمان را مشخص می‌کند. هدف این ابزار، کمک به بهبود عادت‌های کاری، تمرکز بیشتر روی وظایف مؤثر، و افزایش بهره‌وری فردی و تیمی است.
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
      <img src="/images/ModuleDetails/TimeSheet/timesheet4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium"> دید عمیق بر نحوه استفاده از زمان</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          کاربران می‌توانند محتوا و جزئیات کامل هر پیام دریافتی را به‌راحتی مشاهده کنند. این صفحه امکانات متنوعی مانند پاسخ‌دهی سریع، فوروارد کردن، حذف و علامت‌گذاری پیام را در اختیار کاربر قرار می‌دهد. همچنین قابلیت نمایش فایل‌های پیوست شده و مدیریت بهتر مکاتبات با گزینه‌هایی مانند آرشیو و انتقال پیام به پوشه‌های مختلف، تجربه‌ای کارآمد و سازمان‌یافته از مدیریت صندوق پستی فراهم می‌کند. طراحی این بخش با تمرکز بر سادگی و دسترسی سریع، به کاربران امکان می‌دهد ارتباطات خود را با دقت و سرعت بیشتری مدیریت کنند.
        </p>
      </div>
    </div>
    <!-- right divider -->
    <div dir="rtl" class="col-span-full pe-10 mt-10">
      <svg viewBox="0 0 423 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M554.5 167.918L395.583 9.00046H17.5002" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(-180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- fifth step -->
    <div class="col-span-full px-5 -mt-20">
      <img src="/images/ModuleDetails/TimeSheet/timesheet5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium"> مدیریت ساده و شفاف مرخصی‌ها</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در این صفحه، کاربران می‌توانند تحلیل‌های دقیق و بصری از نحوه صرف زمان خود و تیم‌شان در پروژه‌ها و تسک‌های مختلف مشاهده کنند. با استفاده از نمودارها، جداول و فیلترهای کاربردی، اطلاعاتی نظیر میزان زمان صرف‌شده بر اساس هر پروژه، بیشترین و کم‌اثرترین فعالیت‌ها، الگوی کاری افراد و بازه‌های زمانی پرکار یا کم‌کار نمایش داده می‌شود. این بخش به بهینه‌سازی زمان، شناسایی گلوگاه‌های عملکردی و تصمیم‌گیری بهتر برای برنامه‌ریزی‌های آتی کمک می‌کند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
