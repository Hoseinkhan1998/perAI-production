<script setup>
import { ref } from "vue";
import Salary from "../SVG/Salary.vue";
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
          <img src="/images/ModuleDetails/Salary/salarytop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Salary :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Salary</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Salary (حقوق و دستمزد) ابزاری جامع برای مدیریت پرداخت‌ها، محاسبه حقوق، مزایا و کسورات کارکنان است. این ماژول با ثبت دقیق اطلاعات پرسنلی و مالی، روند پرداخت‌ها را ساده و منظم می‌کند و به سازمان‌ها کمک می‌کند تا امور حقوقی و مالی کارکنان را به صورت کارآمد و بدون خطا مدیریت کنند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Salary  (حقوق و دستمزد) یک سیستم کامل و هوشمند برای مدیریت امور مالی مرتبط با کارکنان است. این ماژول امکان ثبت دقیق اطلاعات پرسنلی، محاسبه حقوق پایه، مزایا، کسورات و مالیات‌ها را فراهم می‌کند و روند پرداخت‌ها را به صورت منظم و خودکار انجام می‌دهد. با استفاده از این ماژول، سازمان‌ها می‌توانند پرداخت‌های حقوقی را به موقع و بدون خطا مدیریت کنند، گزارش‌های مالی دقیق تهیه نمایند و اطمینان حاصل کنند که تمامی محاسبات مطابق با قوانین و مقررات جاری انجام می‌شود. این سیستم به بهبود کارایی مدیریت منابع انسانی و کاهش خطاهای انسانی کمک شایانی می‌کند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Salary</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Salary/salary1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">محاسبه هوشمند و سریع حقوق با Salary Calculator</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              ابزار «Salary Calculator» در سیستم اختاپوس، امکان محاسبه دقیق و سریع حقوق کارکنان را تنها با وارد کردن اطلاعاتی مانند ساعات کاری، نرخ پایه، اضافه‌کاری و مزایای جانبی فراهم می‌کند. این ابزار، فرآیندهای پیچیده محاسباتی را ساده کرده و به مدیران کمک می‌کند تا پرداخت‌ها را بدون خطا و در زمان کوتاه مدیریت کنند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">تعریف منعطف قوانین پرداخت حقوق</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در سیستم اختاپوس، می‌توانید قوانین پرداخت حقوق را متناسب با نوع قرارداد هر کارمند به‌صورت ماهانه، روزانه یا سالانه تنظیم و مدیریت کنید. این قابلیت، انعطاف‌پذیری بالایی در تطبیق با ساختار سازمانی شما فراهم می‌کند. علاوه‌بر این، امکان تعریف دقیق زمان‌بندی کاری هفتگی، نرخ پایه، مرخصی‌ها و شیفت‌ها وجود دارد تا محاسبات حقوق بر اساس واقعیت‌های کاری و سیاست‌های منابع انسانی شما به‌صورت دقیق و خودکار انجام شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Salary/salary2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Salary/salary3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">ردیابی جامع پرداخت‌ها و حقوق پرسنل</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
             بخش «Salary Wages» امکان مدیریت کامل پرداخت‌های ماهانه، اضافه‌کار، پاداش و سایر مزایای مالی را فراهم می‌سازد. با استفاده از این بخش، تمام اطلاعات مربوط به حقوق کارکنان به‌صورت دقیق، شفاف و ساختار‌یافته ثبت و پیگیری می‌شود. این قابلیت به اطمینان از درستی پرداخت‌ها و ایجاد نظم در فرآیند حقوق و دستمزد سازمان کمک می‌کند.
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
          <p class="text-2xl font-medium">مدیریت سوابق پرداخت در بخش آرشیو</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در بخش آرشیو ماژول حقوق و دستمزد، می‌توانید به تمامی سوابق پرداخت حقوق، اضافه‌کار، پاداش‌ها و کسورات دسترسی داشته باشید. این بخش با نمایش دقیق تاریخچه پرداخت‌ها، امکان جستجو، فیلتر و بررسی جزئیات هر رکورد را فراهم می‌کند. دسترسی به اطلاعات آرشیوشده، به شفافیت مالی، پیگیری سوابق کارکنان و گزارش‌گیری دقیق کمک شایانی می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Salary/salary4.png" class="w-[700px] h-[300px]" alt="" />
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
                <Salary :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Salary</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Salary/salarytop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Salary (حقوق و دستمزد) ابزاری جامع برای مدیریت پرداخت‌ها، محاسبه حقوق، مزایا و کسورات کارکنان است. این ماژول با ثبت دقیق اطلاعات پرسنلی و مالی، روند پرداخت‌ها
              را ساده و منظم می‌کند و به سازمان‌ها کمک می‌کند تا امور حقوقی و مالی کارکنان را به صورت کارآمد و بدون خطا مدیریت کنند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Salary (حقوق و دستمزد) یک سیستم کامل و هوشمند برای مدیریت امور مالی مرتبط با کارکنان است. این ماژول امکان ثبت دقیق اطلاعات پرسنلی، محاسبه حقوق پایه، مزایا، کسورات و
        مالیات‌ها را فراهم می‌کند و روند پرداخت‌ها را به صورت منظم و خودکار انجام می‌دهد. با استفاده از این ماژول، سازمان‌ها می‌توانند پرداخت‌های حقوقی را به موقع و بدون خطا مدیریت
        کنند، گزارش‌های مالی دقیق تهیه نمایند و اطمینان حاصل کنند که تمامی محاسبات مطابق با قوانین و مقررات جاری انجام می‌شود. این سیستم به بهبود کارایی مدیریت منابع انسانی و کاهش
        خطاهای انسانی کمک شایانی می‌کند.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Salary</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Salary/salary1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">محاسبه هوشمند و سریع حقوق با Salary Calculator</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            ابزار «Salary Calculator» در سیستم اختاپوس، امکان محاسبه دقیق و سریع حقوق کارکنان را تنها با وارد کردن اطلاعاتی مانند ساعات کاری، نرخ پایه، اضافه‌کاری و مزایای جانبی
            فراهم می‌کند. این ابزار، فرآیندهای پیچیده محاسباتی را ساده کرده و به مدیران کمک می‌کند تا پرداخت‌ها را بدون خطا و در زمان کوتاه مدیریت کنند.
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
        <img src="/images/ModuleDetails/Salary/salary2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">تعریف منعطف قوانین پرداخت حقوق</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در سیستم اختاپوس، می‌توانید قوانین پرداخت حقوق را متناسب با نوع قرارداد هر کارمند به‌صورت ماهانه، روزانه یا سالانه تنظیم و مدیریت کنید. این قابلیت، انعطاف‌پذیری بالایی در
        تطبیق با ساختار سازمانی شما فراهم می‌کند. علاوه‌بر این، امکان تعریف دقیق زمان‌بندی کاری هفتگی، نرخ پایه، مرخصی‌ها و شیفت‌ها وجود دارد تا محاسبات حقوق بر اساس واقعیت‌های
        کاری و سیاست‌های منابع انسانی شما به‌صورت دقیق و خودکار انجام شود.
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
      <img src="/images/ModuleDetails/Salary/salary3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">ردیابی جامع پرداخت‌ها و حقوق پرسنل</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        بخش «Salary Wages» امکان مدیریت کامل پرداخت‌های ماهانه، اضافه‌کار، پاداش و سایر مزایای مالی را فراهم می‌سازد. با استفاده از این بخش، تمام اطلاعات مربوط به حقوق کارکنان
        به‌صورت دقیق، شفاف و ساختار‌یافته ثبت و پیگیری می‌شود. این قابلیت به اطمینان از درستی پرداخت‌ها و ایجاد نظم در فرآیند حقوق و دستمزد سازمان کمک می‌کند.
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
      <img src="/images/ModuleDetails/Salary/salary4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">مدیریت سوابق پرداخت در بخش آرشیو</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در بخش آرشیو ماژول حقوق و دستمزد، می‌توانید به تمامی سوابق پرداخت حقوق، اضافه‌کار، پاداش‌ها و کسورات دسترسی داشته باشید. این بخش با نمایش دقیق تاریخچه پرداخت‌ها، امکان
          جستجو، فیلتر و بررسی جزئیات هر رکورد را فراهم می‌کند. دسترسی به اطلاعات آرشیوشده، به شفافیت مالی، پیگیری سوابق کارکنان و گزارش‌گیری دقیق کمک شایانی می‌کند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
