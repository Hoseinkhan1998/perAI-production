<script setup>
import { ref } from "vue";
import Assets from "../SVG/Assets.vue";
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
          <img src="/images/ModuleDetails/Assets/assetstop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Assets :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Assets</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Assets در اختاپوس، ابزاری کامل برای مدیریت دارایی‌های ثابت سازمان است. این ماژول با ثبت دقیق مشخصات، وضعیت و موقعیت هر دارایی، امکان پیگیری و کنترل دقیق اموال را فراهم می‌کند و به بهینه‌سازی استفاده، نگهداری و برنامه‌ریزی جایگزینی آن‌ها کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Assets فرآیندهای مدیریت دارایی‌های سازمان را به‌صورت یکپارچه و منظم سامان‌دهی می‌کند. این ماژول با ثبت و به‌روزرسانی اطلاعات دقیق هر دارایی، از جمله وضعیت فعلی، مکان و سوابق تعمیرات، به مدیران امکان می‌دهد تا بر چرخه عمر دارایی‌ها نظارت کامل داشته باشند. همچنین با ارائه گزارش‌های تحلیلی و هشدارهای به‌موقع، به کاهش هزینه‌های ناشی از استهلاک، خرابی یا استفاده نادرست کمک می‌کند. به این ترتیب، سیستم مدیریت دارایی‌ها موجب بهبود برنامه‌ریزی نگهداری، افزایش بهره‌وری سرمایه‌گذاری‌ها و تصمیم‌گیری‌های هوشمندانه‌تر در سطح سازمان می‌شود.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Assets</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Assets/assets1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت کامل و کنترل دارایی‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
               کاربران می‌توانند لیست کامل دارایی‌های سازمان را مشاهده و مدیریت کنند. این بخش با نمایش اطلاعات کلیدی هر دارایی مانند وضعیت، محل نگهداری، و تاریخچه تعمیرات، امکان پیگیری دقیق و به‌روزرسانی سریع داده‌ها را فراهم می‌کند تا کنترل کامل بر دارایی‌ها در دسترس باشد. مدیریت دقیق دارایی‌ها به سازمان کمک می‌کند تا بهره‌وری و دوام تجهیزات را به حداکثر برساند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium"> مدیریت و پیگیری درخواست‌های دارایی</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
             در صفحه Your Requests، کاربران به‌راحتی می‌توانند تمامی درخواست‌های ثبت‌شده برای دریافت، تعمیر یا جایگزینی دارایی‌ها را مشاهده و پیگیری کنند. این بخش با نمایش وضعیت هر درخواست، روند پاسخگویی و زمان‌بندی اجرا را شفاف می‌کند و امکان ارتباط سریع با تیم پشتیبانی را فراهم می‌آورد. این شفافیت باعث افزایش رضایت کاربران و تسریع در پاسخگویی به نیازها می‌شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Assets/assets2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Assets/assets3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">ثبت سریع و دقیق دارایی جدید !</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه Add Asset محیطی ساده و کاربرپسند برای ثبت دارایی‌های جدید در سیستم است. کاربران می‌توانند مشخصات کامل دارایی از جمله نوع، مدل، شماره سریال، محل نگهداری و وضعیت فعلی را وارد کنند تا دارایی‌ها به سرعت و با دقت به پایگاه داده اضافه شوند و مدیریت آسان‌تر شود. ثبت دقیق و به‌موقع دارایی‌ها، پایه‌ای برای برنامه‌ریزی نگهداری و کنترل هزینه‌ها فراهم می‌کند.
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
          <p class="text-2xl font-medium">ثبت درخواست‌های دارایی به‌صورت ساختارمند</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Asset Request Form، کاربران می‌توانند نیازهای خود به دارایی‌های جدید یا تعمیرات را با وارد کردن جزئیات دقیق درخواست کنند. این فرم به تیم مدیریت دارایی‌ها کمک می‌کند تا نیازهای سازمان را به‌صورت ساختارمند دریافت، بررسی و در زمان مناسب پاسخگو باشند. این فرآیند سازمان‌یافته، هماهنگی میان بخش‌ها را افزایش داده و از بروز تأخیر یا خطا جلوگیری می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Assets/assets4.png" class="w-[700px] h-[300px]" alt="" />
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
                <Assets :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Assets</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Assets/assetstop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Assets در اختاپوس، ابزاری کامل برای مدیریت دارایی‌های ثابت سازمان است. این ماژول با ثبت دقیق مشخصات، وضعیت و موقعیت هر دارایی، امکان پیگیری و کنترل دقیق اموال را فراهم می‌کند و به بهینه‌سازی استفاده، نگهداری و برنامه‌ریزی جایگزینی آن‌ها کمک می‌کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Assets فرآیندهای مدیریت دارایی‌های سازمان را به‌صورت یکپارچه و منظم سامان‌دهی می‌کند. این ماژول با ثبت و به‌روزرسانی اطلاعات دقیق هر دارایی، از جمله وضعیت فعلی، مکان و سوابق تعمیرات، به مدیران امکان می‌دهد تا بر چرخه عمر دارایی‌ها نظارت کامل داشته باشند. همچنین با ارائه گزارش‌های تحلیلی و هشدارهای به‌موقع، به کاهش هزینه‌های ناشی از استهلاک، خرابی یا استفاده نادرست کمک می‌کند. به این ترتیب، سیستم مدیریت دارایی‌ها موجب بهبود برنامه‌ریزی نگهداری، افزایش بهره‌وری سرمایه‌گذاری‌ها و تصمیم‌گیری‌های هوشمندانه‌تر در سطح سازمان می‌شود.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Assets</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Assets/assets1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مدیریت کامل و کنترل دارایی‌ها</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
             کاربران می‌توانند لیست کامل دارایی‌های سازمان را مشاهده و مدیریت کنند. این بخش با نمایش اطلاعات کلیدی هر دارایی مانند وضعیت، محل نگهداری، و تاریخچه تعمیرات، امکان پیگیری دقیق و به‌روزرسانی سریع داده‌ها را فراهم می‌کند تا کنترل کامل بر دارایی‌ها در دسترس باشد. مدیریت دقیق دارایی‌ها به سازمان کمک می‌کند تا بهره‌وری و دوام تجهیزات را به حداکثر برساند.
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
        <img src="/images/ModuleDetails/Assets/assets2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5"> مدیریت و پیگیری درخواست‌های دارایی</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Your Requests، کاربران به‌راحتی می‌توانند تمامی درخواست‌های ثبت‌شده برای دریافت، تعمیر یا جایگزینی دارایی‌ها را مشاهده و پیگیری کنند. این بخش با نمایش وضعیت هر درخواست، روند پاسخگویی و زمان‌بندی اجرا را شفاف می‌کند و امکان ارتباط سریع با تیم پشتیبانی را فراهم می‌آورد. این شفافیت باعث افزایش رضایت کاربران و تسریع در پاسخگویی به نیازها می‌شود.
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
      <img src="/images/ModuleDetails/Assets/assets3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">ثبت سریع و دقیق دارایی جدید !</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        صفحه Add Asset محیطی ساده و کاربرپسند برای ثبت دارایی‌های جدید در سیستم است. کاربران می‌توانند مشخصات کامل دارایی از جمله نوع، مدل، شماره سریال، محل نگهداری و وضعیت فعلی را وارد کنند تا دارایی‌ها به سرعت و با دقت به پایگاه داده اضافه شوند و مدیریت آسان‌تر شود. ثبت دقیق و به‌موقع دارایی‌ها، پایه‌ای برای برنامه‌ریزی نگهداری و کنترل هزینه‌ها فراهم می‌کند.
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
      <img src="/images/ModuleDetails/Assets/assets4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">ثبت درخواست‌های دارایی به‌صورت ساختارمند</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه Asset Request Form، کاربران می‌توانند نیازهای خود به دارایی‌های جدید یا تعمیرات را با وارد کردن جزئیات دقیق درخواست کنند. این فرم به تیم مدیریت دارایی‌ها کمک می‌کند تا نیازهای سازمان را به‌صورت ساختارمند دریافت، بررسی و در زمان مناسب پاسخگو باشند. این فرآیند سازمان‌یافته، هماهنگی میان بخش‌ها را افزایش داده و از بروز تأخیر یا خطا جلوگیری می‌کند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
