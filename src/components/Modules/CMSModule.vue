<script setup>
import { ref } from "vue";
import CMS from "../SVG/CMS.vue";
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
          <img src="/images/ModuleDetails/CMS/cms1.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <CMS :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">CMS</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول CMS فضایی ساده و یکپارچه برای ایجاد، ویرایش و انتشار انواع محتوا فراهم می‌کند. از اطلاعیه‌های داخلی تا مستندات و صفحات آموزشی، همه چیز به‌صورت متمرکز و
              قابل‌کنترل مدیریت می‌شود تا ارتباطات سازمانی شفاف و منظم باقی بماند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول CMS در ERP OCTOPUS به سازمان‌ها این امکان را می‌دهد تا انواع محتوای متنی، تصویری و رسانه‌ای را به‌صورت متمرکز ایجاد، ویرایش و مدیریت کنند. با رابط کاربری ساده و
        ابزارهای قدرتمند، این ماژول برای انتشار اخبار داخلی، مستندات، صفحات اطلاع‌رسانی و محتوای آموزشی کاربرد دارد. همچنین با امکان دسته‌بندی محتوا و تعیین سطح دسترسی، انتشار
        اطلاعات درون‌سازمانی هدفمند، امن و منظم انجام می‌شود.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول CMS</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CMS/cms1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت مرکزی محتوای دیجیتال</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Content، کاربران می‌توانند تمام محتوای ایجادشده در سیستم را به‌صورت یکجا و دسته بندی مشاهده کنند. این بخش با ارائه فهرستی کامل از محتواها به همراه میزان فوریت
              ، دسته‌بندی و تاریخ ایجاد، به کاربران کمک می‌کند تا به‌راحتی محتوای موردنظر را پیدا و مدیریت کنند. فیلترها و ابزارهای جستجوی پیشرفته نیز روند دسترسی و ساماندهی
              اطلاعات را سریع‌تر و دقیق‌تر می‌کنند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">ایجاد سریع و راحت محتوا</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Add Content، کاربران می‌توانند به‌سادگی محتوای جدید ایجاد کنند؛ چه از طریق انتخاب تمپلیت‌های آماده، ساخت تمپلیت‌های اختصاصی، یا استفاده مجدد از تمپلیت‌هایی که
              قبلاً ساخته یا استفاده کرده‌اند. این قابلیت‌ها باعث می‌شود فرآیند تولید محتوا سریع‌تر، منسجم‌تر و حرفه‌ای‌تر انجام شود. با این روش، کاربران بدون نیاز به شروع از صفر،
              می‌توانند محتواهایی با ظاهر یکپارچه و ساختار منظم تولید کرده و در سیستم منتشر کنند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CMS/cms2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/CMS/cms3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">ساختاردهی حرفه‌ای به محتوای دیجیتال</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در بخش Add Section، کاربران می‌توانند بخش‌های مختلفی مانند متن، تصویر، ویدئو، دکمه، جدول و سایر عناصر محتوایی را به صورت جداگانه اضافه کنند. این قابلیت به آن‌ها اجازه
              می‌دهد تا محتوای خود را به‌صورت ماژولار و کاملاً شخصی‌سازی‌شده طراحی کنند. با چینش دقیق و انعطاف‌پذیر سکشن‌ها، محتوا ساختاری حرفه‌ای، منظم و خوانا پیدا می‌کند که
              متناسب با نیازهای ارتباطی و بصری سازمان قابل تنظیم است.
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
          <p class="text-2xl font-medium">کنترل دقیق زمان، اولویت و مخاطب محتوا</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در بخش انتشار محتوا، کاربران می‌توانند جزئیات نمایش محتوای خود را به‌صورت دقیق تنظیم کنند. از جمله امکان تعیین میزان فوریت محتوا، انتخاب تاریخ و ساعت انتشار، و مشخص
              کردن اینکه محتوا برای کدام نهاد یا استان نمایش داده شود. این سطح از کنترل به سازمان‌ها کمک می‌کند تا محتوای خود را هدفمند، زمان‌بندی‌شده و متناسب با مخاطب مورد نظر
              منتشر کنند، و از پراکندگی یا ناهماهنگی در اطلاع‌رسانی جلوگیری شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CMS/cms4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/CMS/cms5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت انتشار‌های برنامه‌ریزی شده</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه محتوای زمان‌بندی‌شده، کاربران می‌توانند فهرستی از تمامی محتواهایی که برای انتشار در زمان‌های مشخص برنامه‌ریزی شده‌اند مشاهده کنند. این صفحه امکان ویرایش، لغو
              یا تغییر زمان‌بندی انتشار را به آسانی فراهم می‌کند تا سازمان بتواند برنامه‌ریزی دقیق و موثری برای اطلاع‌رسانی‌های خود داشته باشد. با این ابزار، کنترل کامل بر
              زمان‌بندی محتواها به دست آمده و روند مدیریت محتوا بهینه‌تر می‌شود.
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
          <p class="text-2xl font-medium">بررسی عملکرد و تاثیرگذاری محتوا</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه آنالیز محتوا، کاربران می‌توانند با مشاهده گزارش‌های دقیق و نمودارهای تعاملی، عملکرد محتوای منتشرشده را ارزیابی کنند. این بخش اطلاعاتی مانند تعداد بازدیدها،
              میزان تعامل کاربران، مدت زمان مشاهده و نرخ پاسخ‌دهی را نمایش می‌دهد. تحلیل داده‌ها به مدیران کمک می‌کند تا نقاط قوت و ضعف محتوا را شناسایی کرده و استراتژی‌های بهبود
              ارتباطات سازمانی را به‌صورت هدفمند تنظیم کنند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CMS/cms6.png" class="w-[700px] h-[300px]" alt="" />
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
                <CMS :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">CMS</span>:</p>
            </div>
            <img src="/images/ModuleDetails/CMS/cms1.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول CMS فضایی ساده و یکپارچه برای ایجاد، ویرایش و انتشار انواع محتوا فراهم می‌کند. از اطلاعیه‌های داخلی تا مستندات و صفحات آموزشی، همه چیز به‌صورت متمرکز و
              قابل‌کنترل مدیریت می‌شود تا ارتباطات سازمانی شفاف و منظم باقی بماند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول CMS در ERP OCTOPUS به سازمان‌ها این امکان را می‌دهد تا انواع محتوای متنی، تصویری و رسانه‌ای را به‌صورت متمرکز ایجاد، ویرایش و مدیریت کنند. با رابط کاربری ساده و
        ابزارهای قدرتمند، این ماژول برای انتشار اخبار داخلی، مستندات، صفحات اطلاع‌رسانی و محتوای آموزشی کاربرد دارد. همچنین با امکان دسته‌بندی محتوا و تعیین سطح دسترسی، انتشار
        اطلاعات درون‌سازمانی هدفمند، امن و منظم انجام می‌شود.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول CMS</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/CMS/cms1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مدیریت مرکزی محتوای دیجیتال</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            در صفحه Content، کاربران می‌توانند تمام محتوای ایجادشده در سیستم را به‌صورت یکجا و دسته بندی مشاهده کنند. این بخش با ارائه فهرستی کامل از محتواها به همراه میزان فوریت ،
            دسته‌بندی و تاریخ ایجاد، به کاربران کمک می‌کند تا به‌راحتی محتوای موردنظر را پیدا و مدیریت کنند. فیلترها و ابزارهای جستجوی پیشرفته نیز روند دسترسی و ساماندهی اطلاعات را
            سریع‌تر و دقیق‌تر می‌کنند.
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
        <img src="/images/ModuleDetails/CMS/cms2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">ایجاد سریع و راحت محتوا</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Add Content، کاربران می‌توانند به‌سادگی محتوای جدید ایجاد کنند؛ چه از طریق انتخاب تمپلیت‌های آماده، ساخت تمپلیت‌های اختصاصی، یا استفاده مجدد از تمپلیت‌هایی که قبلاً
        ساخته یا استفاده کرده‌اند. این قابلیت‌ها باعث می‌شود فرآیند تولید محتوا سریع‌تر، منسجم‌تر و حرفه‌ای‌تر انجام شود. با این روش، کاربران بدون نیاز به شروع از صفر، می‌توانند
        محتواهایی با ظاهر یکپارچه و ساختار منظم تولید کرده و در سیستم منتشر کنند.
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
      <img src="/images/ModuleDetails/CMS/cms3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">ساختاردهی حرفه‌ای به محتوای دیجیتال</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در بخش Add Section، کاربران می‌توانند بخش‌های مختلفی مانند متن، تصویر، ویدئو، دکمه، جدول و سایر عناصر محتوایی را به صورت جداگانه اضافه کنند. این قابلیت به آن‌ها اجازه
        می‌دهد تا محتوای خود را به‌صورت ماژولار و کاملاً شخصی‌سازی‌شده طراحی کنند. با چینش دقیق و انعطاف‌پذیر سکشن‌ها، محتوا ساختاری حرفه‌ای، منظم و خوانا پیدا می‌کند که متناسب با
        نیازهای ارتباطی و بصری سازمان قابل تنظیم است.
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
      <img src="/images/ModuleDetails/CMS/cms4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">کنترل دقیق زمان، اولویت و مخاطب محتوا</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در بخش انتشار محتوا، کاربران می‌توانند جزئیات نمایش محتوای خود را به‌صورت دقیق تنظیم کنند. از جمله امکان تعیین میزان فوریت محتوا، انتخاب تاریخ و ساعت انتشار، و مشخص کردن
          اینکه محتوا برای کدام نهاد یا استان نمایش داده شود. این سطح از کنترل به سازمان‌ها کمک می‌کند تا محتوای خود را هدفمند، زمان‌بندی‌شده و متناسب با مخاطب مورد نظر منتشر کنند،
          و از پراکندگی یا ناهماهنگی در اطلاع‌رسانی جلوگیری شود.
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
      <img src="/images/ModuleDetails/CMS/cms5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">مدیریت انتشار‌های برنامه‌ریزی شده</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه محتوای زمان‌بندی‌شده، کاربران می‌توانند فهرستی از تمامی محتواهایی که برای انتشار در زمان‌های مشخص برنامه‌ریزی شده‌اند مشاهده کنند. این صفحه امکان ویرایش، لغو یا
          تغییر زمان‌بندی انتشار را به آسانی فراهم می‌کند تا سازمان بتواند برنامه‌ریزی دقیق و موثری برای اطلاع‌رسانی‌های خود داشته باشد. با این ابزار، کنترل کامل بر زمان‌بندی
          محتواها به دست آمده و روند مدیریت محتوا بهینه‌تر می‌شود.
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
      <img src="/images/ModuleDetails/CMS/cms6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">بررسی عملکرد و تاثیرگذاری محتوا</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه آنالیز محتوا، کاربران می‌توانند با مشاهده گزارش‌های دقیق و نمودارهای تعاملی، عملکرد محتوای منتشرشده را ارزیابی کنند. این بخش اطلاعاتی مانند تعداد بازدیدها، میزان
          تعامل کاربران، مدت زمان مشاهده و نرخ پاسخ‌دهی را نمایش می‌دهد. تحلیل داده‌ها به مدیران کمک می‌کند تا نقاط قوت و ضعف محتوا را شناسایی کرده و استراتژی‌های بهبود ارتباطات
          سازمانی را به‌صورت هدفمند تنظیم کنند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
