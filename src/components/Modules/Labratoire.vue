<script setup>
import { ref } from "vue";
import Labratoire from "../SVG/Labratoire.vue";
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
          <img src="/images/ModuleDetails/Labratoire/labratoiretop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Labratoire :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="capitalize">Labratoire</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Labratoire در اختاپوس یک ابزار کاربردی برای مدیریت آسان و دقیق فرآیندهای آزمایشگاهی در سازمان است. این بخش با ثبت و پیگیری نمونه‌ها، مدیریت نتایج و تسهیل ارتباط بین بخش‌ها، به بهبود بهره‌وری و دقت در انجام تست‌های تخصصی کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Labratoire با هدف مدیریت یکپارچه فرآیندهای آزمایشگاهی درون سازمان طراحی شده است. این ماژول امکاناتی مانند ثبت، پیگیری و تحلیل نمونه‌های آزمایش، زمان‌بندی انجام تست‌ها، مدیریت نتایج و مستندسازی مراحل مختلف آزمایش را فراهم می‌کند. همچنین امکان ارتباط میان واحدهای مرتبط با آزمایشگاه (مانند واحد نگهداری یا کنترل کیفیت) را فراهم می‌سازد تا روند رسیدگی به درخواست‌ها و بررسی نتایج با دقت و سرعت بیشتری انجام گیرد. این ماژول کمک می‌کند تا داده‌های آزمایشگاهی به‌صورت شفاف، دقیق و قابل‌اعتماد در دسترس باشند و تصمیم‌گیری‌های فنی بر پایه اطلاعات واقعی صورت گیرد.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Labratoire</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Labratoire/labratoire1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">نمای کلی و جریان کار آزمایشگاهی با Kanban </p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Kanban در ماژول Labratoire نمایی بصری و ساده از وضعیت نمونه‌ها و فرآیندهای آزمایشگاهی ارائه می‌دهد. در این بخش، هر نمونه یا وظیفه به‌صورت یک کارت قابل جابه‌جایی نمایش داده می‌شود که در ستون‌هایی مانند «در انتظار»، «در حال انجام» و «تکمیل‌شده» قرار می‌گیرند. این ساختار کمک می‌کند تا تیم‌ها جریان کار را به‌وضوح مشاهده، اولویت‌بندی کنند و هماهنگی بهتری در انجام مراحل مختلف داشته باشند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">افزودن نمونه جدید با دقت و سهولت !</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Add Sample، کاربران می‌توانند نمونه‌های آزمایشگاهی جدید را به‌صورت دقیق و مرحله‌به‌مرحله ثبت کنند. این بخش شامل وارد کردن اطلاعات کلیدی مانند نوع نمونه، تاریخ ثبت، منبع نمونه و توضیحات تکمیلی است. طراحی ساده و ساختارمند این صفحه باعث می‌شود هیچ داده‌ای از قلم نیفتد و پیگیری‌های بعدی با نظم و دقت بیشتری انجام شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Labratoire/labratoire2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Labratoire/labratoire3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مرجع نمونه‌های تکمیل‌شده برای پیگیری دقیق‌تر</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Completed Samples، تمامی نمونه‌هایی که فرآیند آزمایش آن‌ها به پایان رسیده‌اند به‌صورت منظم و قابل‌جست‌وجو نمایش داده می‌شوند. این بخش با نمایش اطلاعاتی مانند تاریخ انجام آزمایش، نتایج، و وضعیت نهایی، امکان مرور و ارجاع سریع به سوابق را فراهم می‌کند. دسترسی به این اطلاعات به تیم‌ها کمک می‌کند تا تحلیل‌های دقیق‌تری داشته باشند و در صورت نیاز، گزارش‌های مستند ارائه دهند.
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
          <p class="text-2xl font-medium">تحلیل جامع نمونه‌ها در صفحه Sample Overview</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Sample Overview یک دید کامل و تحلیلی از وضعیت و عملکرد نمونه‌های ثبت‌شده در آزمایشگاه ارائه می‌دهد. در این بخش، کاربران می‌توانند داده‌های مرتبط با نمونه‌ها را به‌صورت نمودارهای آماری، جدول‌های مقایسه‌ای و فیلترهای هوشمند بررسی کنند. این صفحه به تصمیم‌گیری دقیق‌تر، ارزیابی کیفیت فرآیندها و شناسایی الگوهای تکرارشونده در داده‌های آزمایشگاهی کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Labratoire/labratoire4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Labratoire/labratoire5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">پیش‌ نویس‌ ها در دسترس برای ادامه آسان فرآیند </p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Drafts، تمامی نمونه‌ها یا فرم‌هایی که به‌صورت ناقص ثبت شده‌اند یا نیاز به بازبینی دارند، نگهداری می‌شوند. این بخش به کاربران امکان می‌دهد بدون از دست رفتن اطلاعات، فرآیند ثبت یا تکمیل نمونه‌ها را در زمان مناسب ادامه دهند. وجود این صفحه موجب کاهش خطا، صرفه‌جویی در زمان و افزایش دقت در تکمیل داده‌های آزمایشگاهی می‌شود.
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
          <p class="text-2xl font-medium">نمودار گانت (Gant chat) تجهیزات برای برنامه‌ریزی و مدیریت دقیق</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Equipment Gantt Chart نمایشی گرافیکی از برنامه زمان‌بندی استفاده، نگهداری و تعمیرات تجهیزات آزمایشگاهی ارائه می‌دهد. این نمودار کمک می‌کند تا وضعیت هر دستگاه در بازه‌های زمانی مختلف به‌وضوح دیده شود، تداخل‌ها شناسایی شده و زمان‌بندی بهینه برای بهره‌برداری و نگهداری تجهیزات برنامه‌ریزی گردد. با این ابزار، مدیریت منابع سخت‌افزاری با دقت و کارایی بیشتری انجام می‌شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Labratoire/labratoire6.png" class="w-[700px] h-[300px]" alt="" />
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
                <Labratoire :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="capitalize">Labratoire</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Labratoire/labratoiretop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Labratoire در اختاپوس یک ابزار کاربردی برای مدیریت آسان و دقیق فرآیندهای آزمایشگاهی در سازمان است. این بخش با ثبت و پیگیری نمونه‌ها، مدیریت نتایج و تسهیل ارتباط بین بخش‌ها، به بهبود بهره‌وری و دقت در انجام تست‌های تخصصی کمک می‌کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
       ماژول Labratoire با هدف مدیریت یکپارچه فرآیندهای آزمایشگاهی درون سازمان طراحی شده است. این ماژول امکاناتی مانند ثبت، پیگیری و تحلیل نمونه‌های آزمایش، زمان‌بندی انجام تست‌ها، مدیریت نتایج و مستندسازی مراحل مختلف آزمایش را فراهم می‌کند. همچنین امکان ارتباط میان واحدهای مرتبط با آزمایشگاه (مانند واحد نگهداری یا کنترل کیفیت) را فراهم می‌سازد تا روند رسیدگی به درخواست‌ها و بررسی نتایج با دقت و سرعت بیشتری انجام گیرد. این ماژول کمک می‌کند تا داده‌های آزمایشگاهی به‌صورت شفاف، دقیق و قابل‌اعتماد در دسترس باشند و تصمیم‌گیری‌های فنی بر پایه اطلاعات واقعی صورت گیرد.
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
      <p dir="rtl" class="text-2xl font-semibold">ویژگی‌های اصلی ماژول Labratoire</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Labratoire/labratoire1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">نمای کلی و جریان کار آزمایشگاهی با Kanban </p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            صفحه Kanban در ماژول Labratoire نمایی بصری و ساده از وضعیت نمونه‌ها و فرآیندهای آزمایشگاهی ارائه می‌دهد. در این بخش، هر نمونه یا وظیفه به‌صورت یک کارت قابل جابه‌جایی نمایش داده می‌شود که در ستون‌هایی مانند «در انتظار»، «در حال انجام» و «تکمیل‌شده» قرار می‌گیرند. این ساختار کمک می‌کند تا تیم‌ها جریان کار را به‌وضوح مشاهده، اولویت‌بندی کنند و هماهنگی بهتری در انجام مراحل مختلف داشته باشند.
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
        <img src="/images/ModuleDetails/Labratoire/labratoire2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">افزودن نمونه جدید با دقت و سهولت !</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Add Sample، کاربران می‌توانند نمونه‌های آزمایشگاهی جدید را به‌صورت دقیق و مرحله‌به‌مرحله ثبت کنند. این بخش شامل وارد کردن اطلاعات کلیدی مانند نوع نمونه، تاریخ ثبت، منبع نمونه و توضیحات تکمیلی است. طراحی ساده و ساختارمند این صفحه باعث می‌شود هیچ داده‌ای از قلم نیفتد و پیگیری‌های بعدی با نظم و دقت بیشتری انجام شود.
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
      <img src="/images/ModuleDetails/Labratoire/labratoire3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">مرجع نمونه‌های تکمیل‌شده برای پیگیری دقیق‌تر</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Completed Samples، تمامی نمونه‌هایی که فرآیند آزمایش آن‌ها به پایان رسیده‌اند به‌صورت منظم و قابل‌جست‌وجو نمایش داده می‌شوند. این بخش با نمایش اطلاعاتی مانند تاریخ انجام آزمایش، نتایج، و وضعیت نهایی، امکان مرور و ارجاع سریع به سوابق را فراهم می‌کند. دسترسی به این اطلاعات به تیم‌ها کمک می‌کند تا تحلیل‌های دقیق‌تری داشته باشند و در صورت نیاز، گزارش‌های مستند ارائه دهند.
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
      <img src="/images/ModuleDetails/Labratoire/labratoire4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">تحلیل جامع نمونه‌ها در صفحه Sample Overview</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          صفحه Sample Overview یک دید کامل و تحلیلی از وضعیت و عملکرد نمونه‌های ثبت‌شده در آزمایشگاه ارائه می‌دهد. در این بخش، کاربران می‌توانند داده‌های مرتبط با نمونه‌ها را به‌صورت نمودارهای آماری، جدول‌های مقایسه‌ای و فیلترهای هوشمند بررسی کنند. این صفحه به تصمیم‌گیری دقیق‌تر، ارزیابی کیفیت فرآیندها و شناسایی الگوهای تکرارشونده در داده‌های آزمایشگاهی کمک می‌کند.
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
      <img src="/images/ModuleDetails/Labratoire/labratoire5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">پیش‌ نویس‌ ها در دسترس برای ادامه آسان فرآیند </p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه Drafts، تمامی نمونه‌ها یا فرم‌هایی که به‌صورت ناقص ثبت شده‌اند یا نیاز به بازبینی دارند، نگهداری می‌شوند. این بخش به کاربران امکان می‌دهد بدون از دست رفتن اطلاعات، فرآیند ثبت یا تکمیل نمونه‌ها را در زمان مناسب ادامه دهند. وجود این صفحه موجب کاهش خطا، صرفه‌جویی در زمان و افزایش دقت در تکمیل داده‌های آزمایشگاهی می‌شود.
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
      <img src="/images/ModuleDetails/Labratoire/labratoire6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">نمودار گانت (Gant chat) تجهیزات برای برنامه‌ریزی و مدیریت دقیق</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
         صفحه Equipment Gantt Chart نمایشی گرافیکی از برنامه زمان‌بندی استفاده، نگهداری و تعمیرات تجهیزات آزمایشگاهی ارائه می‌دهد. این نمودار کمک می‌کند تا وضعیت هر دستگاه در بازه‌های زمانی مختلف به‌وضوح دیده شود، تداخل‌ها شناسایی شده و زمان‌بندی بهینه برای بهره‌برداری و نگهداری تجهیزات برنامه‌ریزی گردد. با این ابزار، مدیریت منابع سخت‌افزاری با دقت و کارایی بیشتری انجام می‌شود.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
