<script setup>
import { ref } from "vue";
import Project from "../SVG/Project.vue";
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
          <img src="/images/ModuleDetails/Project/project1.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Project :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Project</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Project در اختاپوس برای مدیریت هدفمند و ساختارمند پروژه‌ها طراحی شده است. این ماژول امکان برنامه‌ریزی، پیگیری، تخصیص منابع و ارزیابی عملکرد را در قالبی یکپارچه
              فراهم می‌کند تا تیم‌ها بتوانند پروژه‌های خود را به‌موقع و با کیفیت به پایان برسانند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Project در سیستم اختاپوس، ابزار جامعی برای مدیریت کامل پروژه‌ها از مرحله تعریف تا اجرا و ارزیابی نهایی فراهم می‌کند. کاربران می‌توانند پروژه‌ها را ایجاد کرده، وظایف و
        مراحل را مشخص کنند، مسئولین را تعیین کرده و منابع مالی و انسانی را به‌درستی تخصیص دهند. همچنین با کمک نمودارهای تحلیلی و گزارش‌های دقیق، امکان ردیابی پیشرفت، مدیریت
        هزینه‌ها و بررسی عملکرد تیم‌ها به‌صورت لحظه‌ای وجود دارد. این ماژول به افزایش بهره‌وری، کنترل بهتر زمان و هزینه و دستیابی به اهداف سازمانی کمک می‌کند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Project</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Project/project1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت کامل پروژه‌ها در یک نگاه</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند تمامی پروژه‌های خود را به‌صورت یکجا مشاهده کنند. این صفحه اطلاعات کاملی مانند عنوان پروژه، ددلاین، وضعیت فعلی، درصد پیشرفت و اعضای مشارکت‌کننده را
              نمایش می‌دهد. با این قابلیت، کاربران به‌راحتی می‌توانند پروژه‌ها را بررسی، اولویت‌بندی و روند انجام آن‌ها را پیگیری کنند تا کنترل دقیق‌تری بر زمان‌بندی و موفقیت
              پروژه‌هایشان داشته باشند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">نمای کلی پروژه و مدیریت جزئیات</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              با باز کردن هر پروژه، به نمایی کامل و دقیق از اطلاعات آن دسترسی پیدا می‌کنند. این بخش شامل عنوان پروژه، توضیحات، وضعیت پیشرفت، تاریخ شروع و پایان، اعضای تیم، تسک‌ها و
              فایل‌های مرتبط است. همچنین، کاربران می‌توانند ساب‌پروژه‌های مربوط به هر پروژه اصلی را مشاهده، مدیریت و به‌روزرسانی کنند. این قابلیت، امکان سازماندهی بهتر، تقسیم وظایف
              و نظارت دقیق‌ بر پیشرفت کار را فراهم می‌سازد.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Project/project2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Project/project3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت دقیق تسک‌ها در ساب‌پروژه‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در این بخش، کاربر با باز کردن یک ساب‌پروژه، به فهرستی کامل از وظایف (تسک‌ها) دسترسی دارد. هر تسک شامل اطلاعاتی مانند عنوان، وضعیت، اولویت، ددلاین، مسئول انجام،
              توضیحات و فایل‌های پیوست است. کاربر می‌تواند وظایف موجود را بررسی کرده، وضعیت آن‌ها را به‌روزرسانی کند یا تسک جدیدی اضافه نماید. این ساختار کمک می‌کند تا روند اجرای
              ساب‌پروژه‌ها شفاف، منظم و قابل پیگیری باشد.
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
          <p class="text-2xl font-medium">ایجاد سریع پروژه با استفاده از قالب‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در این بخش، کاربران می‌توانند برای ایجاد پروژه‌های جدید از تِمپلیت‌های آماده استفاده کنند. این قابلیت به آن‌ها کمک می‌کند تا فرآیندهای تکراری را برای پروژه‌های مشابه،
              هر بار از ابتدا انجام ندهند. با انتخاب یک قالب، ساختار کلی پروژه شامل مراحل، ساب‌پروژه‌ها، تسک‌ها و تنظیمات اولیه به‌صورت خودکار بارگذاری می‌شود و تنها نیاز به ویرایش
              جزئیات خاص پروژه جدید است. این ویژگی باعث صرفه‌جویی در زمان، افزایش دقت و استانداردسازی مدیریت پروژه‌ها در سازمان می‌شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Project/project4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Project/project5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">پروژه‌های خاتمه‌یافته (Terminated Projects)</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در این صفحه، تمامی پروژه‌هایی که به صورت رسمی خاتمه یافته و دیگر فعال نیستند، نمایش داده می‌شوند. کاربران می‌توانند به لیست پروژه‌های ترمنیت شده دسترسی داشته باشند،
              جزئیات نهایی هر پروژه را مشاهده کنند و در صورت نیاز از اطلاعات آرشیو شده برای بررسی‌های بعدی استفاده نمایند. این صفحه کمک می‌کند تا مدیریت پروژه‌ها به صورت مرتب و
              سازمان‌یافته انجام شود و پروژه‌های گذشته به راحتی قابل پیگیری باشند.
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
          <p class="text-2xl font-medium">مدیریت و پیگیری تسک‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه «My Works»، کاربران می‌توانند تمامی تسک‌های خود را از پروژه‌های مختلف به‌صورت جامع و با جزئیات کامل مشاهده کنند. این صفحه امکان پیگیری وضعیت هر تسک، مهلت
              انجام، اولویت و توضیحات مربوط به آن را فراهم می‌کند تا کاربران بتوانند به‌راحتی وظایف خود را مدیریت و برنامه‌ریزی کنند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Project/project6.png" class="w-[700px] h-[300px]" alt="" />
      </div>
    </div>
    <!-- left divider -->
    <div class="col-span-full mt-10">
      <svg width="438" height="169" viewBox="0 0 438 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-117 167.918L41.917 9.00046H420" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="matrix(1 0 0 -1 419.5 18)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- Seventh step -->
    <div class="grid grid-cols-12 col-span-full gap-28 -mt-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Project/project7.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">آرشیو پروژه‌ها و تسک‌های خاتمه‌یافته</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه آرشیو، پروژه‌ها خاتمه‌یافته به‌صورت مرتب و دسته‌بندی شده نمایش داده می‌شوند تا کاربران بتوانند به‌راحتی به سوابق کاری گذشته دسترسی داشته و در صورت نیاز
              اطلاعات مرتبط را مرور یا بازیابی کنند. این بخش کمک می‌کند تا روند انجام پروژه‌ها به‌خوبی مستندسازی شده و مدیریت سابقه کاری به‌صورت منظم انجام شود.
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
    <!-- Eighth step -->
    <div class="grid grid-cols-12 col-span-full gap-28 -mt-16 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">گزارش‌ها و تحلیل‌های جامع پروژه‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه آنالیز، کاربران به مجموعه‌ای از گزارش‌ها و تحلیل‌های دقیق درباره هر پروژه دسترسی دارند. این گزارش‌ها شامل ارزیابی پیشرفت کار، عملکرد اعضای تیم، مدیریت
              زمان‌بندی و مصرف منابع می‌شود. با بهره‌گیری از این داده‌ها، مدیران می‌توانند نقاط قوت و ضعف پروژه را شناسایی کرده و تصمیمات هوشمندانه‌تری برای بهینه‌سازی فرآیندها و
              افزایش بهره‌وری اتخاذ کنند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Project/project8.png" class="w-[700px] h-[300px]" alt="" />
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
                <Project :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Project</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Project/project1.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Project در اختاپوس برای مدیریت هدفمند و ساختارمند پروژه‌ها طراحی شده است. این ماژول امکان برنامه‌ریزی، پیگیری، تخصیص منابع و ارزیابی عملکرد را در قالبی یکپارچه
              فراهم می‌کند تا تیم‌ها بتوانند پروژه‌های خود را به‌موقع و با کیفیت به پایان برسانند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Project در سیستم اختاپوس، ابزار جامعی برای مدیریت کامل پروژه‌ها از مرحله تعریف تا اجرا و ارزیابی نهایی فراهم می‌کند. کاربران می‌توانند پروژه‌ها را ایجاد کرده، وظایف و
        مراحل را مشخص کنند، مسئولین را تعیین کرده و منابع مالی و انسانی را به‌درستی تخصیص دهند. همچنین با کمک نمودارهای تحلیلی و گزارش‌های دقیق، امکان ردیابی پیشرفت، مدیریت
        هزینه‌ها و بررسی عملکرد تیم‌ها به‌صورت لحظه‌ای وجود دارد. این ماژول به افزایش بهره‌وری، کنترل بهتر زمان و هزینه و دستیابی به اهداف سازمانی کمک می‌کند.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Project</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Project/project1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مدیریت کامل پروژه‌ها در یک نگاه</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            کاربران می‌توانند تمامی پروژه‌های خود را به‌صورت یکجا مشاهده کنند. این صفحه اطلاعات کاملی مانند عنوان پروژه، ددلاین، وضعیت فعلی، درصد پیشرفت و اعضای مشارکت‌کننده را
            نمایش می‌دهد. با این قابلیت، کاربران به‌راحتی می‌توانند پروژه‌ها را بررسی، اولویت‌بندی و روند انجام آن‌ها را پیگیری کنند تا کنترل دقیق‌تری بر زمان‌بندی و موفقیت
            پروژه‌هایشان داشته باشند.
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
        <img src="/images/ModuleDetails/Project/project2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">نمای کلی پروژه و مدیریت جزئیات</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        با باز کردن هر پروژه، به نمایی کامل و دقیق از اطلاعات آن دسترسی پیدا می‌کنند. این بخش شامل عنوان پروژه، توضیحات، وضعیت پیشرفت، تاریخ شروع و پایان، اعضای تیم، تسک‌ها و
        فایل‌های مرتبط است. همچنین، کاربران می‌توانند ساب‌پروژه‌های مربوط به هر پروژه اصلی را مشاهده، مدیریت و به‌روزرسانی کنند. این قابلیت، امکان سازماندهی بهتر، تقسیم وظایف و
        نظارت دقیق‌ بر پیشرفت کار را فراهم می‌سازد.
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
      <img src="/images/ModuleDetails/Project/project3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">مدیریت دقیق تسک‌ها در ساب‌پروژه‌ها</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در این بخش، کاربر با باز کردن یک ساب‌پروژه، به فهرستی کامل از وظایف (تسک‌ها) دسترسی دارد. هر تسک شامل اطلاعاتی مانند عنوان، وضعیت، اولویت، ددلاین، مسئول انجام، توضیحات و
        فایل‌های پیوست است. کاربر می‌تواند وظایف موجود را بررسی کرده، وضعیت آن‌ها را به‌روزرسانی کند یا تسک جدیدی اضافه نماید. این ساختار کمک می‌کند تا روند اجرای ساب‌پروژه‌ها
        شفاف، منظم و قابل پیگیری باشد.
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
      <img src="/images/ModuleDetails/Project/project4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">ایجاد سریع پروژه با استفاده از قالب‌ها</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در این بخش، کاربران می‌توانند برای ایجاد پروژه‌های جدید از تِمپلیت‌های آماده استفاده کنند. این قابلیت به آن‌ها کمک می‌کند تا فرآیندهای تکراری را برای پروژه‌های مشابه، هر
          بار از ابتدا انجام ندهند. با انتخاب یک قالب، ساختار کلی پروژه شامل مراحل، ساب‌پروژه‌ها، تسک‌ها و تنظیمات اولیه به‌صورت خودکار بارگذاری می‌شود و تنها نیاز به ویرایش جزئیات
          خاص پروژه جدید است. این ویژگی باعث صرفه‌جویی در زمان، افزایش دقت و استانداردسازی مدیریت پروژه‌ها در سازمان می‌شود.
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
      <img src="/images/ModuleDetails/Project/project5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">پروژه‌های خاتمه‌یافته (Terminated Projects)</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در این صفحه، تمامی پروژه‌هایی که به صورت رسمی خاتمه یافته و دیگر فعال نیستند، نمایش داده می‌شوند. کاربران می‌توانند به لیست پروژه‌های ترمنیت شده دسترسی داشته باشند،
          جزئیات نهایی هر پروژه را مشاهده کنند و در صورت نیاز از اطلاعات آرشیو شده برای بررسی‌های بعدی استفاده نمایند. این صفحه کمک می‌کند تا مدیریت پروژه‌ها به صورت مرتب و
          سازمان‌یافته انجام شود و پروژه‌های گذشته به راحتی قابل پیگیری باشند.
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
      <img src="/images/ModuleDetails/Project/project6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">مدیریت و پیگیری تسک‌ها</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه «My Works»، کاربران می‌توانند تمامی تسک‌های خود را از پروژه‌های مختلف به‌صورت جامع و با جزئیات کامل مشاهده کنند. این صفحه امکان پیگیری وضعیت هر تسک، مهلت انجام،
          اولویت و توضیحات مربوط به آن را فراهم می‌کند تا کاربران بتوانند به‌راحتی وظایف خود را مدیریت و برنامه‌ریزی کنند.
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
    <!-- seventh step -->
    <div class="col-span-full px-5 -mt-20">
      <img src="/images/ModuleDetails/Project/project7.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">آرشیو پروژه‌ها و تسک‌های خاتمه‌یافته</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه آرشیو، پروژه‌ها خاتمه‌یافته به‌صورت مرتب و دسته‌بندی شده نمایش داده می‌شوند تا کاربران بتوانند به‌راحتی به سوابق کاری گذشته دسترسی داشته و در صورت نیاز اطلاعات
          مرتبط را مرور یا بازیابی کنند. این بخش کمک می‌کند تا روند انجام پروژه‌ها به‌خوبی مستندسازی شده و مدیریت سابقه کاری به‌صورت منظم انجام شود.
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
    <!-- Eighth step -->
    <div class="col-span-full px-5 -mt-20">
      <img src="/images/ModuleDetails/Project/project8.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">گزارش‌ها و تحلیل‌های جامع پروژه‌ها</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه آنالیز، کاربران به مجموعه‌ای از گزارش‌ها و تحلیل‌های دقیق درباره هر پروژه دسترسی دارند. این گزارش‌ها شامل ارزیابی پیشرفت کار، عملکرد اعضای تیم، مدیریت زمان‌بندی و
          مصرف منابع می‌شود. با بهره‌گیری از این داده‌ها، مدیران می‌توانند نقاط قوت و ضعف پروژه را شناسایی کرده و تصمیمات هوشمندانه‌تری برای بهینه‌سازی فرآیندها و افزایش بهره‌وری
          اتخاذ کنند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
