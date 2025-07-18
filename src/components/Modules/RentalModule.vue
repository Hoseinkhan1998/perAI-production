<script setup>
import { ref } from "vue";
import Rental from "../SVG/Task.vue";
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
          <img src="/images/ModuleDetails/Rental/rental1.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Rental :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Rental</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Rental در ERP OCTOPUS به سازمان‌ها امکان می‌دهد تا فرآیندهای مرتبط با اجاره کالاها و تجهیزات را به‌صورت کامل و هوشمند مدیریت کنند. از ثبت قراردادهای اجاره و
              پیگیری وضعیت آن‌ها تا مدیریت بازگشت و تمدید، این ماژول با طراحی کاربرپسند، کنترل دقیق و گزارش‌دهی جامع، فرآیندهای اجاره را تسهیل کرده و به بهینه‌سازی منابع و افزایش
              بهره‌وری کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Rental در اختاپوس راهکاری هوشمند برای مدیریت زمان و فضای سازمانی است. این ماژول امکان رزرو و زمان‌بندی منابعی مانند اتاق جلسات، تجهیزات، وسایل نقلیه و فضاهای کاری را
        فراهم می‌کند. با طراحی دقیق و منعطف، Rental به سازمان‌ها کمک می‌کند تا از منابع خود به‌صورت بهینه استفاده کرده، تداخل‌ها را کاهش دهند و برنامه‌ریزی دقیقی برای تخصیص فضا و
        زمان داشته باشند. این ماژول با ارائه نمایی شفاف از وضعیت رزروها، بهره‌وری منابع را افزایش داده و فرآیند هماهنگی درون‌سازمانی را ساده‌تر می‌کند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Rental</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Rental/rental1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت سفارش‌های اجاره با دید مرحله‌ای</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند تمامی سفارش‌های اجاره را بر اساس مراحل مختلف فرآیند Rental مشاهده و مدیریت کنند. سفارش‌ها به‌صورت مرحله‌ای از Pending تا Fully Invoiced و Canceled
              طبقه‌بندی شده‌اند و با نمایش اطلاعات کلیدی مانند نام متقاضی، مبلغ، شناسه سفارش و تاریخ، امکان پیگیری دقیق هر سفارش فراهم شده است. طراحی مرحله‌محور این بخش، دیدی شفاف
              از وضعیت فعلی هر درخواست ارائه می‌دهد و به کاربران کمک می‌کند در کمترین زمان ممکن اقدامات لازم را برای بررسی، تایید یا پیگیری سفارش‌ها انجام دهند. این ساختار، هماهنگی
              و بهره‌وری را در مدیریت منابع اجاره‌ای سازمان به شکل چشمگیری افزایش می‌دهد.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">آغاز سریع فرآیند اجاره</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه New Order کاربران می‌توانند یک سفارش اجاره جدید را به‌صورت سریع و ساده ثبت کنند. با وارد کردن اطلاعات کلیدی مانند نوع منبع، تاریخ شروع و پایان، مشخصات مشتری و
              مبلغ، فرآیند اجاره بدون پیچیدگی آغاز می‌شود. این صفحه با طراحی کاربرمحور، تجربه‌ای روان و کارآمد را برای ثبت سفارش فراهم می‌کند و به تیم‌ها اجازه می‌دهد تا منابع
              موردنیاز را به‌موقع رزرو و مدیریت کنند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Rental/rental2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Rental/rental3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">دسترسی سریع به اطلاعات اجاره‌کنندگان</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Customer History کاربران می‌توانند فهرستی از مشتریان قبلی را به‌ صورت کارت‌ هایی شامل نام، شماره تماس و تصویر مشاهده کنند. این نمایش کارت‌محور، مرور سوابق
              مشتریان را ساده و سریع می‌سازد و به مدیران اجازه می‌دهد تا در کمترین زمان ممکن به اطلاعات پایه هر مشتری دسترسی داشته باشند. طراحی این بخش با تمرکز بر شناسایی سریع و
              تجربه کاربری روان، به بهبود ارتباط با مشتریان و پیگیری سفارش‌های گذشته کمک می‌کند.
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
          <p class="text-2xl font-medium">نمای کامل از تعاملات گذشته</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              نمای کامل از تعاملات گذشته در این صفحه از Customer History، پس از انتخاب یک مشتری، اطلاعات کامل و سابقه سفارش‌های او نمایش داده می‌شود. کاربران می‌توانند جزئیاتی
              مانند نام، شماره تماس، تصویر مشتری و وضعیت سفارش‌ها را مشاهده کنند. این بخش با هدف مرور سریع و شناخت بهتر مشتری طراحی شده تا تصمیم‌گیری‌ها دقیق‌تر و خدمات‌دهی مؤثرتر
              باشد.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Rental/rental4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Rental/rental5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">برنامه ‌ریزی دقیق منابع و زمان‌بندی اجاره ‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Schedule کاربران می‌توانند نمایی تقویمی و زمان‌محور از تمامی سفارش‌های اجاره را مشاهده کنند. این بخش با نمایش منابع و بازه‌های زمانی رزرو، به تیم‌ها کمک می‌کند تا تداخل‌ها را شناسایی کرده و زمان‌بندی دقیق‌تری برای استفاده از فضاها و تجهیزات داشته باشند. طراحی این صفحه به گونه‌ای است که با یک نگاه می‌توان وضعیت اشغال یا آزاد بودن هر منبع را بررسی کرد. Schedule ابزار کاربردی برای برنامه‌ریزی مؤثر و استفاده حداکثری از منابع سازمانی به‌شمار می‌رود. 
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
          <p class="text-2xl font-medium">مدیریت کامل اطلاعات اجاره</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه جزئیات سفارش (Order Detail)، کاربران می‌توانند اطلاعات کامل مربوط به یک سفارش اجاره را به‌صورت یکپارچه مشاهده و مدیریت کنند. این صفحه شامل اطلاعات مشتری، بازه زمانی اجاره، روش پرداخت، فایل‌های ضمیمه، برچسب‌ها و خدمات اضافی مانند غذا، نظافت و اسپا است. با طراحی منظم و کاربردی، امکان ویرایش سریع، رفتن به مرحله Check-in یا Terminate سفارش، و مشاهده دقیق شرایط قرارداد فراهم شده است. این صفحه به تیم‌ها کمک می‌کند تا با دیدی جامع، تصمیم‌گیری‌های دقیق‌تری درباره مدیریت منابع و ارتباط با مشتری داشته باشند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Rental/rental6.png" class="w-[700px] h-[300px]" alt="" />
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
                <Rental :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Rental</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Rental/rental1.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Rental در ERP OCTOPUS به سازمان‌ها امکان می‌دهد تا فرآیندهای مرتبط با اجاره کالاها و تجهیزات را به‌صورت کامل و هوشمند مدیریت کنند. از ثبت قراردادهای اجاره و
              پیگیری وضعیت آن‌ها تا مدیریت بازگشت و تمدید، این ماژول با طراحی کاربرپسند، کنترل دقیق و گزارش‌دهی جامع، فرآیندهای اجاره را تسهیل کرده و به بهینه‌سازی منابع و افزایش
              بهره‌وری کمک می‌کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Rental در اختاپوس راهکاری هوشمند برای مدیریت زمان و فضای سازمانی است. این ماژول امکان رزرو و زمان‌بندی منابعی مانند اتاق جلسات، تجهیزات، وسایل نقلیه و فضاهای کاری را
        فراهم می‌کند. با طراحی دقیق و منعطف، Rental به سازمان‌ها کمک می‌کند تا از منابع خود به‌صورت بهینه استفاده کرده، تداخل‌ها را کاهش دهند و برنامه‌ریزی دقیقی برای تخصیص فضا و
        زمان داشته باشند. این ماژول با ارائه نمایی شفاف از وضعیت رزروها، بهره‌وری منابع را افزایش داده و فرآیند هماهنگی درون‌سازمانی را ساده‌تر می‌کند.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Rental</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Rental/rental1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مدیریت سفارش‌های اجاره با دید مرحله‌ای</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            کاربران می‌توانند تمامی سفارش‌های اجاره را بر اساس مراحل مختلف فرآیند Rental مشاهده و مدیریت کنند. سفارش‌ها به‌صورت مرحله‌ای از Pending تا Fully Invoiced و Canceled
            طبقه‌بندی شده‌اند و با نمایش اطلاعات کلیدی مانند نام متقاضی، مبلغ، شناسه سفارش و تاریخ، امکان پیگیری دقیق هر سفارش فراهم شده است. طراحی مرحله‌محور این بخش، دیدی شفاف از
            وضعیت فعلی هر درخواست ارائه می‌دهد و به کاربران کمک می‌کند در کمترین زمان ممکن اقدامات لازم را برای بررسی، تایید یا پیگیری سفارش‌ها انجام دهند. این ساختار، هماهنگی و
            بهره‌وری را در مدیریت منابع اجاره‌ای سازمان به شکل چشمگیری افزایش می‌دهد.
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
        <img src="/images/ModuleDetails/Rental/rental2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">آغاز سریع فرآیند اجاره</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه New Order کاربران می‌توانند یک سفارش اجاره جدید را به‌صورت سریع و ساده ثبت کنند. با وارد کردن اطلاعات کلیدی مانند نوع منبع، تاریخ شروع و پایان، مشخصات مشتری و مبلغ،
        فرآیند اجاره بدون پیچیدگی آغاز می‌شود. این صفحه با طراحی کاربرمحور، تجربه‌ای روان و کارآمد را برای ثبت سفارش فراهم می‌کند و به تیم‌ها اجازه می‌دهد تا منابع موردنیاز را
        به‌موقع رزرو و مدیریت کنند.
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
      <img src="/images/ModuleDetails/Rental/rental3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">دسترسی سریع به اطلاعات اجاره‌کنندگان</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Customer History کاربران می‌توانند فهرستی از مشتریان قبلی را به‌ صورت کارت‌ هایی شامل نام، شماره تماس و تصویر مشاهده کنند. این نمایش کارت‌محور، مرور سوابق مشتریان
        را ساده و سریع می‌سازد و به مدیران اجازه می‌دهد تا در کمترین زمان ممکن به اطلاعات پایه هر مشتری دسترسی داشته باشند. طراحی این بخش با تمرکز بر شناسایی سریع و تجربه کاربری
        روان، به بهبود ارتباط با مشتریان و پیگیری سفارش‌های گذشته کمک می‌کند.
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
      <img src="/images/ModuleDetails/Rental/rental4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">نمای کامل از تعاملات گذشته</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در این صفحه از Customer History، پس از انتخاب یک مشتری، اطلاعات کامل و سابقه سفارش‌های او نمایش داده می‌شود. کاربران می‌توانند جزئیاتی مانند نام، شماره تماس، تصویر مشتری
          و وضعیت سفارش‌ها را مشاهده کنند. این بخش با هدف مرور سریع و شناخت بهتر مشتری طراحی شده تا تصمیم‌گیری‌ها دقیق‌تر و خدمات‌دهی مؤثرتر باشد.
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
      <img src="/images/ModuleDetails/Rental/rental5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">برنامه ‌ریزی دقیق منابع و زمان‌بندی اجاره ‌ها</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه Schedule کاربران می‌توانند نمایی تقویمی و زمان‌محور از تمامی سفارش‌های اجاره را مشاهده کنند. این بخش با نمایش منابع و بازه‌های زمانی رزرو، به تیم‌ها کمک می‌کند تا
          تداخل‌ها را شناسایی کرده و زمان‌بندی دقیق‌تری برای استفاده از فضاها و تجهیزات داشته باشند. طراحی این صفحه به گونه‌ای است که با یک نگاه می‌توان وضعیت اشغال یا آزاد بودن هر
          منبع را بررسی کرد. Schedule ابزار کاربردی برای برنامه‌ریزی مؤثر و استفاده حداکثری از منابع سازمانی به‌شمار می‌رود.
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
      <img src="/images/ModuleDetails/Rental/rental6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">مدیریت کامل اطلاعات اجاره</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه جزئیات سفارش (Order Detail)، کاربران می‌توانند اطلاعات کامل مربوط به یک سفارش اجاره را به‌صورت یکپارچه مشاهده و مدیریت کنند. این صفحه شامل اطلاعات مشتری، بازه
          زمانی اجاره، روش پرداخت، فایل‌های ضمیمه، برچسب‌ها و خدمات اضافی مانند غذا، نظافت و اسپا است. با طراحی منظم و کاربردی، امکان ویرایش سریع، رفتن به مرحله Check-in یا
          Terminate سفارش، و مشاهده دقیق شرایط قرارداد فراهم شده است. این صفحه به تیم‌ها کمک می‌کند تا با دیدی جامع، تصمیم‌گیری‌های دقیق‌تری درباره مدیریت منابع و ارتباط با مشتری
          داشته باشند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
