<script setup>
import { ref } from "vue";
import CRM from "../SVG/CRM.vue";
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
          <img src="/images/ModuleDetails/CRM/crmtop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <CRM :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="capitalize">CRM</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              به‌جای گم‌کردن سرنخ‌های فروش یا فراموش‌کردن تماس‌های مهم، همه تعاملات با مشتریان، سرنخ‌ها و فرصت‌های تجاری به‌صورت متمرکز و حرفه‌ای ثبت و مدیریت می‌شن. این ماژول کمک
              می‌کنه تا ارتباطات‌تون رو تقویت کنید، پیگیری‌های دقیق‌تری داشته باشید و در نهایت، فروش بیشتری رقم بزنید. دیگه نیازی به یادداشت‌های پراکنده یا فایل‌های جدا نیست؛ همه
              چیز در یک سیستم منظم و قابل پیگیری ذخیره شده.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول CRM فقط یک ابزار فروش نیست؛ یک دستیار شخصی برای مدیریت هوشمند ارتباطات با مشتریانه! چه در حال پیگیری مشتریان بالقوه باشید و چه در حال حفظ ارتباط با مشتریان فعلی یا
        شرکای تجاری، این ماژول به شما کمک می‌کنه تا همه اطلاعات رو به‌صورت ساختاریافته، دقیق و همیشه در دسترس نگه دارید. دیگه نیازی به ثبت دستی یا جست‌وجوی وقت‌گیر توی فایل‌های
        پراکنده نیست؛ همه چیز با نظم و دقت کامل ثبت می‌شه. به قول خودمون: «دیگه وقتشه از شر کاغذبازی‌ها راحت بشید و پیگیری‌هارو بسپارید به اختاپوس!»
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول CRM</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CRM/crm1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مسیریابی هوشمند مشتری‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              شما می‌تونید ببینید هر مشتری در چه مرحله‌ای از فرایند فروش قرار داره — از اولین تماس تا نهایی شدن قرارداد. با این قابلیت، هیچ سرنخی گم نمی‌شه و پیگیری‌هاتون هدفمند و
              مؤثر انجام می‌شن. همه چیز شفاف، متمرکز و قابل ردیابیه!
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">همه چیز درباره مشتری، یک‌جا و همیشه در دسترس!</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              از اطلاعات پایه مثل نام و شماره تماس گرفته تا جزئیات دقیق مثل یادداشت‌ها، تعاملات قبلی و مراحل طی‌شده، همه در یک پروفایل متمرکز ذخیره می‌شن. اینطوری هیچ چیزی فراموش
              نمی‌شه و همیشه تصویر کاملی از مشتری جلوی چشم‌تونه!
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CRM/crm2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/CRM/crm3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">شروع داستان هر ارتباط از همین‌جا!</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              فقط با چند کلیک می‌تونید یه مشتری جدید به سیستم اضافه کنید؛ از وارد کردن اطلاعات اولیه گرفته تا مشخص‌کردن مرحله فروش. اینطوری هر ارتباط جدید رو حرفه‌ای و ساختاریافته
              شروع می‌کنید. همه چیز آماده‌ست برای یه پیگیری بی‌نقص!
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
          <p class="text-2xl font-medium">هر موفقیت، یک قدم به جلو!</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              تو این بخش می‌تونید موفقیت‌های هر مشتری یا تیم فروش رو ببینید؛ از قراردادهای نهایی‌شده گرفته تا مراحل کلیدی که پشت سر گذاشتن. یه راه عالی برای رصد رشد، انگیزه‌سازی و
              شناخت مشتریان وفادار و باارزش!
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CRM/crm4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/CRM/crm5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">تصمیم‌های بهتر با دید دقیق‌تر!</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه آنالیز به شما نمایی کامل از عملکرد فروش، رفتار مشتری‌ها و روند پیشرفت تیم می‌ده. با نمودارها و آمارهای کاربردی، می‌تونید نقاط قوت و ضعف رو شناسایی کنید و
              تصمیم‌هاتون رو هوشمندانه‌تر بگیرید. داده‌ها حرف می‌زنن، فقط کافیه گوش بدید!
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
          <p class="text-2xl font-medium">مروری سریع بر هر کاری که انجام دادی!</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              تو این بخش می‌تونی همه فعالیت‌هایی که انجام دادی رو یک‌جا ببینی؛ از تماس‌ها و یادداشت‌ها گرفته تا مشتری‌هایی که پیگیری کردی. یه راه عالی برای مدیریت زمان، بررسی
              عملکرد روزانه و اطمینان از اینکه هیچ کاری از قلم نیفتاده!
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/CRM/crm6.png" class="w-[700px] h-[300px]" alt="" />
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
                <CRM :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="capitalize">CRM</span>:</p>
            </div>
            <img src="/images/ModuleDetails/CRM/crmtop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              به‌جای گم‌کردن سرنخ‌های فروش یا فراموش‌کردن تماس‌های مهم، همه تعاملات با مشتریان، سرنخ‌ها و فرصت‌های تجاری به‌صورت متمرکز و حرفه‌ای ثبت و مدیریت می‌شن. این ماژول کمک
              می‌کنه تا ارتباطات‌تون رو تقویت کنید، پیگیری‌های دقیق‌تری داشته باشید و در نهایت، فروش بیشتری رقم بزنید. دیگه نیازی به یادداشت‌های پراکنده یا فایل‌های جدا نیست؛ همه
              چیز در یک سیستم منظم و قابل پیگیری ذخیره شده.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول CRM فقط یک ابزار فروش نیست؛ یک دستیار شخصی برای مدیریت هوشمند ارتباطات با مشتریانه! چه در حال پیگیری مشتریان بالقوه باشید و چه در حال حفظ ارتباط با مشتریان فعلی یا
        شرکای تجاری، این ماژول به شما کمک می‌کنه تا همه اطلاعات رو به‌صورت ساختاریافته، دقیق و همیشه در دسترس نگه دارید. دیگه نیازی به ثبت دستی یا جست‌وجوی وقت‌گیر توی فایل‌های
        پراکنده نیست؛ همه چیز با نظم و دقت کامل ثبت می‌شه. به قول خودمون: «دیگه وقتشه از شر کاغذبازی‌ها راحت بشید و پیگیری‌هارو بسپارید به اختاپوس!»
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
      <p dir="rtl" class="text-2xl font-semibold">ویژگی‌های اصلی ماژول CRM</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/CRM/crm1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مسیریابی هوشمند مشتری‌ها</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            شما می‌تونید ببینید هر مشتری در چه مرحله‌ای از فرایند فروش قرار داره — از اولین تماس تا نهایی شدن قرارداد. با این قابلیت، هیچ سرنخی گم نمی‌شه و پیگیری‌هاتون هدفمند و
            مؤثر انجام می‌شن. همه چیز شفاف، متمرکز و قابل ردیابیه!
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
        <img src="/images/ModuleDetails/CRM/crm2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">همه چیز درباره مشتری، یک‌جا و همیشه در دسترس!</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        از اطلاعات پایه مثل نام و شماره تماس گرفته تا جزئیات دقیق مثل یادداشت‌ها، تعاملات قبلی و مراحل طی‌شده، همه در یک پروفایل متمرکز ذخیره می‌شن. اینطوری هیچ چیزی فراموش نمی‌شه
        و همیشه تصویر کاملی از مشتری جلوی چشم‌تونه!
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
      <img src="/images/ModuleDetails/CRM/crm3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">شروع داستان هر ارتباط از همین‌جا!</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        فقط با چند کلیک می‌تونید یه مشتری جدید به سیستم اضافه کنید؛ از وارد کردن اطلاعات اولیه گرفته تا مشخص‌کردن مرحله فروش. اینطوری هر ارتباط جدید رو حرفه‌ای و ساختاریافته شروع
        می‌کنید. همه چیز آماده‌ست برای یه پیگیری بی‌نقص!
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
      <img src="/images/ModuleDetails/CRM/crm4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">هر موفقیت، یک قدم به جلو!</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          تو این بخش می‌تونید موفقیت‌های هر مشتری یا تیم فروش رو ببینید؛ از قراردادهای نهایی‌شده گرفته تا مراحل کلیدی که پشت سر گذاشتن. یه راه عالی برای رصد رشد، انگیزه‌سازی و
          شناخت مشتریان وفادار و باارزش!
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
      <img src="/images/ModuleDetails/CRM/crm5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">تصمیم‌های بهتر با دید دقیق‌تر!</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          صفحه آنالیز به شما نمایی کامل از عملکرد فروش، رفتار مشتری‌ها و روند پیشرفت تیم می‌ده. با نمودارها و آمارهای کاربردی، می‌تونید نقاط قوت و ضعف رو شناسایی کنید و تصمیم‌هاتون
          رو هوشمندانه‌تر بگیرید. داده‌ها حرف می‌زنن، فقط کافیه گوش بدید!
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
      <img src="/images/ModuleDetails/CRM/crm6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">مروری سریع بر هر کاری که انجام دادی!</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          تو این بخش می‌تونی همه فعالیت‌هایی که انجام دادی رو یک‌جا ببینی؛ از تماس‌ها و یادداشت‌ها گرفته تا مشتری‌هایی که پیگیری کردی. یه راه عالی برای مدیریت زمان، بررسی عملکرد
          روزانه و اطمینان از اینکه هیچ کاری از قلم نیفتاده!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
