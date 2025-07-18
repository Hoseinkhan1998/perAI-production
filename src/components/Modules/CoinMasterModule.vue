<script setup>
import { ref } from "vue";
import CoinMaster from "../SVG/CoinMaster.vue";
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
          <img src="/images/ModuleDetails/CoinMaster/coinmaster1.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <CoinMaster :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="capitalize">COINMASTER</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
             این ماژول با ارائه قابلیت‌هایی مثل امتیازدهی، جوایز و چالش‌های انگیزشی، به سازمان‌ها کمک می‌کند محیط کاری پویاتر و مشارکت‌محورتری ایجاد کنند. COINMASTER باعث افزایش رضایت و بهره‌وری کارکنان شده و فرهنگ سازمانی را بهبود می‌بخشد.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
       ماژول COINMASTER در ERP OCTOPUS با هدف ارتقاء انگیزه و مشارکت کارکنان طراحی شده است. این ماژول امکان تعریف جوایز، امتیازدهی بر اساس عملکرد و رفتارهای مثبت، و ایجاد رقابت‌های سالم بین کارکنان را فراهم می‌کند. با بهره‌گیری از COINMASTER، سازمان‌ها می‌توانند فضای کاری پویا و انگیزشی ایجاد کرده و رضایت و بهره‌وری نیروی انسانی را به طور چشمگیری افزایش دهند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول COINMASTER</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CoinMaster/coinmaster1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مشاهده و انتخاب پیشنهادهای انگیزشی</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Offers، کاربران می‌توانند فهرستی از پیشنهادها و جوایز فعال را مشاهده کنند، جزئیات هر پیشنهاد را بررسی کرده و بر اساس کوین کسب‌شده، گزینه‌های موردنظر خود را انتخاب کنند. این صفحه به کارکنان امکان می‌دهد انگیزه‌بخش‌ های سازمان را به‌سادگی دنبال کرده و از فرصت‌های موجود بهره‌مند شوند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">انتقال و مدیریت کوین</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Coin Transfer، کاربران می‌توانند کوین خود را به سایر همکاران منتقل کنند و روند انتقال‌ها را به‌صورت کامل مشاهده کنند. این صفحه امکان ثبت تراکنش‌ها، پیگیری تاریخچه انتقال‌ها و مدیریت بهتر کوین را فراهم می‌کند تا تبادل انگیزه‌ها در سازمان به شکلی شفاف و ساده انجام شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CoinMaster/coinmaster2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/CoinMaster/coinmaster3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium"> بررسی کامل پیشنهاد انتخاب‌شده</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در این صفحه، کاربر پس از انتخاب یک Offer می‌تواند اطلاعات کامل آن را مشاهده کند؛ از جمله توضیحات جزئی، شرایط استفاده، مدت اعتبار، و امتیاز مورد نیاز. همچنین، امکانات و خدمات (Amenities & Facilities) مربوط به آن پیشنهاد به‌صورت کامل نمایش داده می‌شود. کاربران می‌توانند نظرات و تجربیات دیگر همکاران درباره آن Offer را نیز بخوانند تا با دید بازتری تصمیم‌گیری کنند و انتخابی مطمئن‌تر داشته باشند.
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
              در صفحه My Offers، کاربران لیستی از پیشنهادهایی که انتخاب کرده‌اند را در قالبی مشابه سبد خرید مشاهده می‌کنند. این صفحه امکان مرور جزئیات هر Offer، بررسی وضعیت (در انتظار تأیید، استفاده‌شده یا فعال)، و مدیریت ساده‌تر پیشنهادها را فراهم می‌کند. کاربران می‌توانند قبل از نهایی‌کردن دریافت پیشنهاد، تمام گزینه‌های انتخابی خود را مرور کرده و تصمیم‌گیری آگاهانه‌تری داشته باشند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CoinMaster/coinmaster4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/CoinMaster/coinmaster5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">آنلایز و بررسی</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه محتوای زمان‌بندی‌شده، کاربران می‌توانند فهرستی از تمامی محتواهایی که برای انتشار در زمان‌های مشخص برنامه‌ریزی شده‌اند مشاهده کنند. این صفحه امکان ویرایش، لغو یا تغییر زمان‌بندی انتشار را به آسانی فراهم می‌کند تا سازمان بتواند برنامه‌ریزی دقیق و موثری برای اطلاع‌رسانی‌های خود داشته باشد. با این ابزار، کنترل کامل بر زمان‌بندی محتواها به دست آمده و روند مدیریت محتوا بهینه‌تر می‌شود.
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
          <p class="text-2xl font-medium">دسترسی به تاریخچه پیشنهادها و تراکنش‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
               آنلایز کوین‌ها در COINMASTER به شما این امکان را می‌دهد که وضعیت و رفتار کوین‌ها را به طور دقیق و آنی بررسی کنید. با استفاده از این ابزار می‌توانید الگوهای مصرف، تراکنش‌ها و جریان‌های مالی مربوط به هر کوین را تحلیل کنید و داده‌های ارزشمندی برای تصمیم‌گیری‌های استراتژیک به دست بیارید. این قابلیت کمک می‌کند تا به طور بهینه‌تری منابع مالی خود را مدیریت کنید و از عملکرد سیستم، بهینه‌ترین استفاده رو ببرید.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CoinMaster/coinmaster6.png" class="w-[700px] h-[300px]" alt="" />
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
                <CoinMaster :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="capitalize">COINMASTER</span>:</p>
            </div>
            <img src="/images/ModuleDetails/CoinMaster/coinmaster1.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              این ماژول با ارائه قابلیت‌هایی مثل امتیازدهی، جوایز و چالش‌های انگیزشی، به سازمان‌ها کمک می‌کند محیط کاری پویاتر و مشارکت‌محورتری ایجاد کنند. COINMASTER باعث افزایش رضایت و بهره‌وری کارکنان شده و فرهنگ سازمانی را بهبود می‌بخشد.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول COINMASTER در ERP OCTOPUS با هدف ارتقاء انگیزه و مشارکت کارکنان طراحی شده است. این ماژول امکان تعریف جوایز، امتیازدهی بر اساس عملکرد و رفتارهای مثبت، و ایجاد رقابت‌های سالم بین کارکنان را فراهم می‌کند. با بهره‌گیری از COINMASTER، سازمان‌ها می‌توانند فضای کاری پویا و انگیزشی ایجاد کرده و رضایت و بهره‌وری نیروی انسانی را به طور چشمگیری افزایش دهند.
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
      <p dir="rtl" class="text-2xl font-semibold">ویژگی‌های اصلی ماژول COINMASTER</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/CoinMaster/coinmaster1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مشاهده و انتخاب پیشنهادهای انگیزشی</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            در صفحه Offers، کاربران می‌توانند فهرستی از پیشنهادها و جوایز فعال را مشاهده کنند، جزئیات هر پیشنهاد را بررسی کرده و بر اساس کوین کسب‌شده، گزینه‌های موردنظر خود را انتخاب کنند. این صفحه به کارکنان امکان می‌دهد انگیزه‌بخش‌ های سازمان را به‌سادگی دنبال کرده و از فرصت‌های موجود بهره‌مند شوند.
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
        <img src="/images/ModuleDetails/CoinMaster/coinmaster2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">انتقال و مدیریت کوین</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Coin Transfer، کاربران می‌توانند کوین خود را به سایر همکاران منتقل کنند و روند انتقال‌ها را به‌صورت کامل مشاهده کنند. این صفحه امکان ثبت تراکنش‌ها، پیگیری تاریخچه انتقال‌ها و مدیریت بهتر کوین را فراهم می‌کند تا تبادل انگیزه‌ها در سازمان به شکلی شفاف و ساده انجام شود.
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
      <img src="/images/ModuleDetails/CoinMaster/coinmaster3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium"> بررسی کامل پیشنهاد انتخاب‌شده</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در این صفحه، کاربر پس از انتخاب یک Offer می‌تواند اطلاعات کامل آن را مشاهده کند؛ از جمله توضیحات جزئی، شرایط استفاده، مدت اعتبار، و امتیاز مورد نیاز. همچنین، امکانات و خدمات (Amenities & Facilities) مربوط به آن پیشنهاد به‌صورت کامل نمایش داده می‌شود. کاربران می‌توانند نظرات و تجربیات دیگر همکاران درباره آن Offer را نیز بخوانند تا با دید بازتری تصمیم‌گیری کنند و انتخابی مطمئن‌تر داشته باشند.
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
      <img src="/images/ModuleDetails/CoinMaster/coinmaster4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">کنترل دقیق زمان، اولویت و مخاطب محتوا</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه My Offers، کاربران لیستی از پیشنهادهایی که انتخاب کرده‌اند را در قالبی مشابه سبد خرید مشاهده می‌کنند. این صفحه امکان مرور جزئیات هر Offer، بررسی وضعیت (در انتظار تأیید، استفاده‌شده یا فعال)، و مدیریت ساده‌تر پیشنهادها را فراهم می‌کند. کاربران می‌توانند قبل از نهایی‌کردن دریافت پیشنهاد، تمام گزینه‌های انتخابی خود را مرور کرده و تصمیم‌گیری آگاهانه‌تری داشته باشند.
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
      <img src="/images/ModuleDetails/CoinMaster/coinmaster5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">آنلایز و بررسی</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
         در صفحه محتوای زمان‌بندی‌شده، کاربران می‌توانند فهرستی از تمامی محتواهایی که برای انتشار در زمان‌های مشخص برنامه‌ریزی شده‌اند مشاهده کنند. این صفحه امکان ویرایش، لغو یا تغییر زمان‌بندی انتشار را به آسانی فراهم می‌کند تا سازمان بتواند برنامه‌ریزی دقیق و موثری برای اطلاع‌رسانی‌های خود داشته باشد. با این ابزار، کنترل کامل بر زمان‌بندی محتواها به دست آمده و روند مدیریت محتوا بهینه‌تر می‌شود.
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
      <img src="/images/ModuleDetails/CoinMaster/coinmaster6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">دسترسی به تاریخچه پیشنهادها و تراکنش‌ها</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
           آنلایز کوین‌ها در COINMASTER به شما این امکان را می‌دهد که وضعیت و رفتار کوین‌ها را به طور دقیق و آنی بررسی کنید. با استفاده از این ابزار می‌توانید الگوهای مصرف، تراکنش‌ها و جریان‌های مالی مربوط به هر کوین را تحلیل کنید و داده‌های ارزشمندی برای تصمیم‌گیری‌های استراتژیک به دست بیارید. این قابلیت کمک می‌کند تا به طور بهینه‌تری منابع مالی خود را مدیریت کنید و از عملکرد سیستم، بهینه‌ترین استفاده رو ببرید.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
