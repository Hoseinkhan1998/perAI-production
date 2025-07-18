<script setup>
import { ref } from "vue";
import Task from "../SVG/Task.vue";
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
          <img src="/images/ModuleDetails/Task/tasktop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Task :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="capitalize">Task</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول TASK در سیستم اختاپوس ابزار قدرتمندی برای مدیریت و پیگیری وظایف است. با قابلیت‌هایی مثل تعیین مهلت، اولویت‌بندی، تگ‌گذاری و اتصال به جلسات و پروژه‌ها، تیم‌ها
              می‌توانند وظایف خود را منظم‌تر، دقیق‌تر و یکپارچه مدیریت کنند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول TASK در اختاپوس، ابزاری کاربردی برای نظم‌دهی به فعالیت‌های روزمره تیم‌هاست. این ماژول با طراحی ساده اما حرفه‌ای، امکان تعریف، دسته‌بندی و پیگیری تسک‌ها را به شکلی
        شفاف و منسجم فراهم می‌کند. از تعیین مهلت و اولویت گرفته تا ثبت یادداشت و اتصال به جلسات و پروژه‌ها، همه چیز برای مدیریت بهتر کارها در یک فضای متمرکز فراهم شده است. با
        استفاده از این ماژول، تیم‌ها می‌توانند بهره‌وری خود را افزایش داده و از سردرگمی در وظایف جلوگیری کنند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول TASK</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Task/task1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مرکز مدیریت شخصی وظایف</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه My Tasks فضایی اختصاصی برای مشاهده و پیگیری تمام وظایف محول‌شده به کاربر است. در این بخش، اطلاعاتی مانند عنوان تسک، ددلاین، میزان فوریت و نام واگذارکننده نمایش
              داده می‌شود تا مدیریت و اولویت‌بندی وظایف ساده‌تر شود. همچنین با وجود بخش To-Do List، کاربران می‌توانند یادداشت‌ها و کارهای روزمره خود را نیز به‌صورت جداگانه مدیریت
              کنند و همیشه یک نمای کلی از برنامه کاری خود داشته باشند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">مرور و مشاهده وظایف انجام ‌شده</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Finished by Me محلی برای مشاهده تمام تسک‌هایی است که توسط کاربر انجام و تکمیل شده‌اند. این بخش با نمایش تاریخ اتمام، عنوان تسک و اطلاعات مربوط به پروژه یا فرد
              واگذارکننده، امکان پیگیری عملکرد فردی و بررسی سوابق کاری را فراهم می‌کند. کاربران با مراجعه به این صفحه می‌توانند دستاوردهای خود را مرور کرده، پیشرفت کاری‌شان را
              بسنجند و در صورت نیاز به اطلاعات گذشته، به‌راحتی به آن‌ها دسترسی داشته باشند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Task/task2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Task/task3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت جزئیات و تکرار وظایف با To-Do و روتین !</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در ماژول تسک اختاپوس، کاربران می‌توانند برای هر تسک، لیستی از وظایف جزئی‌تر به‌صورت To-Do تعریف کنند تا مراحل انجام کار دقیق‌تر و ساختارمندتر پیش برود. این قابلیت به
              ویژه برای تسک‌های چندمرحله‌ای یا نیازمند پیگیری مداوم کاربردی است. همچنین امکان تعیین روتین برای تسک‌ها فراهم شده تا وظایف تکرارشونده مانند گزارش‌نویسی هفتگی یا بررسی
              روزانه، به‌صورت خودکار در بازه‌های زمانی مشخص ایجاد شوند. این ویژگی‌ها باعث افزایش دقت، نظم و صرفه‌جویی در زمان کاربران می‌شود.
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
          <p class="text-2xl font-medium">نمای کلی ددلاین‌ها در تقویم - Deadline Calendar</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Deadline Calendar با نمایش گرافیکی ددلاین تسک‌ها در قالب تقویم، به کاربران کمک می‌کند زمان‌بندی بهتری داشته باشند. این نما امکان شناسایی روزهای پرتسک یا زمان‌های
              آزاد را فراهم می‌کند و مدیریت وظایف را ساده‌تر و دقیق‌تر می‌سازد.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Task/task4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Task/task5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">اولویت‌بندی با آیزن‌هاور (Eisenhower)</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Eisenhower با استفاده از ماتریس معروف اولویت‌بندی، تسک‌ها را در چهار دسته "مهم و فوری"، "مهم اما غیرفوری"، "غیراهم اما فوری" و "غیراهم و غیرفوری" نمایش می‌دهد.
              این ابزار به کاربران کمک می‌کند تا با تمرکز بر وظایف کلیدی، بهره‌وری خود را افزایش داده و از اتلاف زمان بر روی کارهای کم‌اهمیت جلوگیری کنند.
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
    <!-- six step -->
    <div class="grid grid-cols-12 col-span-full gap-28 -mt-16 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">بررسی کیفی تسک‌ها با Rate Analysis</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              بخش Rate Analysis در ماژول TASK، عملکرد وظایف انجام‌شده را بر اساس امتیازهای دریافتی تحلیل می‌کند. با نمایش نمودارهای زمانی که نرخ هر تسک را در بازه‌های مختلف نشان
              می‌دهند، این بخش دید روشنی از کیفیت اجرای وظایف ارائه می‌دهد و به ارزیابی دقیق عملکرد کاربران و تیم‌ها کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Task/task6.png" class="w-[700px] h-[300px]" alt="" />
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
                <Task :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="capitalize">TASK</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Task/tasktop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول TASK در سیستم اختاپوس ابزار قدرتمندی برای مدیریت و پیگیری وظایف است. با قابلیت‌هایی مثل تعیین مهلت، اولویت‌بندی، تگ‌گذاری و اتصال به جلسات و پروژه‌ها، تیم‌ها
              می‌توانند وظایف خود را منظم‌تر، دقیق‌تر و یکپارچه مدیریت کنند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول TASK در اختاپوس، ابزاری کاربردی برای نظم‌دهی به فعالیت‌های روزمره تیم‌هاست. این ماژول با طراحی ساده اما حرفه‌ای، امکان تعریف، دسته‌بندی و پیگیری تسک‌ها را به شکلی
        شفاف و منسجم فراهم می‌کند. از تعیین مهلت و اولویت گرفته تا ثبت یادداشت و اتصال به جلسات و پروژه‌ها، همه چیز برای مدیریت بهتر کارها در یک فضای متمرکز فراهم شده است. با
        استفاده از این ماژول، تیم‌ها می‌توانند بهره‌وری خود را افزایش داده و از سردرگمی در وظایف جلوگیری کنند.
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
      <p dir="rtl" class="text-2xl font-semibold">ویژگی‌های اصلی ماژول TASK</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Task/task1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مرکز مدیریت شخصی وظایف</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            صفحه My Tasks فضایی اختصاصی برای مشاهده و پیگیری تمام وظایف محول‌شده به کاربر است. در این بخش، اطلاعاتی مانند عنوان تسک، ددلاین، میزان فوریت و نام واگذارکننده نمایش
            داده می‌شود تا مدیریت و اولویت‌بندی وظایف ساده‌تر شود. همچنین با وجود بخش To-Do List، کاربران می‌توانند یادداشت‌ها و کارهای روزمره خود را نیز به‌صورت جداگانه مدیریت
            کنند و همیشه یک نمای کلی از برنامه کاری خود داشته باشند.
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
        <img src="/images/ModuleDetails/Task/task2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">مرور و مشاهده وظایف انجام ‌شده</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        صفحه Finished by Me محلی برای مشاهده تمام تسک‌هایی است که توسط کاربر انجام و تکمیل شده‌اند. این بخش با نمایش تاریخ اتمام، عنوان تسک و اطلاعات مربوط به پروژه یا فرد
        واگذارکننده، امکان پیگیری عملکرد فردی و بررسی سوابق کاری را فراهم می‌کند. کاربران با مراجعه به این صفحه می‌توانند دستاوردهای خود را مرور کرده، پیشرفت کاری‌شان را بسنجند و
        در صورت نیاز به اطلاعات گذشته، به‌راحتی به آن‌ها دسترسی داشته باشند.
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
      <img src="/images/ModuleDetails/Task/task3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">مدیریت جزئیات و تکرار وظایف با To-Do و روتین !</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در ماژول تسک اختاپوس، کاربران می‌توانند برای هر تسک، لیستی از وظایف جزئی‌تر به‌صورت To-Do تعریف کنند تا مراحل انجام کار دقیق‌تر و ساختارمندتر پیش برود. این قابلیت به ویژه
        برای تسک‌های چندمرحله‌ای یا نیازمند پیگیری مداوم کاربردی است. همچنین امکان تعیین روتین برای تسک‌ها فراهم شده تا وظایف تکرارشونده مانند گزارش‌نویسی هفتگی یا بررسی روزانه،
        به‌صورت خودکار در بازه‌های زمانی مشخص ایجاد شوند. این ویژگی‌ها باعث افزایش دقت، نظم و صرفه‌جویی در زمان کاربران می‌شود.
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
      <img src="/images/ModuleDetails/Task/task4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">نمای کلی ددلاین‌ها در تقویم - Deadline Calendar</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          صفحه Deadline Calendar با نمایش گرافیکی ددلاین تسک‌ها در قالب تقویم، به کاربران کمک می‌کند زمان‌بندی بهتری داشته باشند. این نما امکان شناسایی روزهای پرتسک یا زمان‌های
          آزاد را فراهم می‌کند و مدیریت وظایف را ساده‌تر و دقیق‌تر می‌سازد.
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
      <img src="/images/ModuleDetails/Task/task5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">اولویت‌بندی با آیزن‌هاور (Eisenhower)</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          صفحه Eisenhower با استفاده از ماتریس معروف اولویت‌بندی، تسک‌ها را در چهار دسته "مهم و فوری"، "مهم اما غیرفوری"، "غیراهم اما فوری" و "غیراهم و غیرفوری" نمایش می‌دهد. این
          ابزار به کاربران کمک می‌کند تا با تمرکز بر وظایف کلیدی، بهره‌وری خود را افزایش داده و از اتلاف زمان بر روی کارهای کم‌اهمیت جلوگیری کنند.
        </p>
      </div>
    </div>
    <!-- left divider -->
    <div class="col-span-full pe-10 mt-10">
      <svg viewBox="0 0 438 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-117 167.918L41.917 9.00046H420" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="matrix(1 0 0 -1 419.5 18)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- six step -->
    <div class="col-span-full px-5 -mt-20">
      <img src="/images/ModuleDetails/Task/task6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">بررسی کیفی تسک‌ها با Rate Analysis</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          بخش Rate Analysis در ماژول TASK، عملکرد وظایف انجام‌شده را بر اساس امتیازهای دریافتی تحلیل می‌کند. با نمایش نمودارهای زمانی که نرخ هر تسک را در بازه‌های مختلف نشان
          می‌دهند، این بخش دید روشنی از کیفیت اجرای وظایف ارائه می‌دهد و به ارزیابی دقیق عملکرد کاربران و تیم‌ها کمک می‌کند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
