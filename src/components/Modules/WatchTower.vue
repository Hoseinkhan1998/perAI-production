<script setup>
import { ref } from "vue";
import WatchTower from "../SVG/WatchTower.vue";
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
          <img src="/images/ModuleDetails/WatchTower/watchtower1.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <WatchTower :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Watch Tower</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول WATCH TOWER با رصد مستمر و دقیق رویدادها، تغییرات و عملکرد کاربران در سیستم، امکان نظارت کامل و به‌موقع بر تمامی فعالیت‌های نرم‌افزاری را فراهم می‌کند. این
              ماژول با ارائه گزارش‌ها و هشدارهای هوشمند، به بهبود امنیت، افزایش کارایی و تسهیل مدیریت فرآیندهای سازمانی کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Watch Tower به عنوان چشم نظارتی ERP OCTOPUS عمل می‌کند و با رصد مداوم رویدادها، تغییرات و فعالیت‌های کاربران در بخش‌های مختلف سیستم، به مدیران امکان می‌دهد تا به شکلی
        دقیق، شفاف و بی‌وقفه بر روند عملکرد نرم‌افزار نظارت داشته باشند. این ماژول به بهبود امنیت، شناسایی رفتارهای غیرعادی و تحلیل بهتر فرآیندهای سازمانی کمک می‌کند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول WatchTower</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/WatchTower/watchtower1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">لیست جامع جریان‌های کاری در حال اجرا</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Workflow، تمامی فرآیندها و رویدادهای سیستمی که در حال اجرا یا ثبت شده‌اند به‌صورت یک لیست کامل و قابل فیلتر نمایش داده می‌شوند. هر آیتم شامل اطلاعاتی مانند
              ماژول مرتبط، نوع رویداد، زمان وقوع، کاربر مسئول، و وضعیت فعلی است. این صفحه به مدیران کمک می‌کند تا به‌صورت لحظه‌ای بر گردش کارهای مختلف نظارت داشته باشند، نقاط
              گلوگاه را شناسایی کنند و در صورت نیاز، اقدام اصلاحی انجام دهند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">بررسی دقیق رویدادها بر اساس معیارهای متنوع</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              بخش آنالیز در ماژول Watch tower امکان بررسی دقیق فعالیت‌ها را با فیلترهای متنوعی مانند «بر اساس ماژول» (Action by Module) و «بر اساس کاربر» (By User) فراهم می‌کند.
              این قابلیت‌ها کمک می‌کنند تا رفتار کاربران، میزان فعالیت در بخش‌های مختلف و نقاط پرریسک یا نیازمند بهبود به‌راحتی شناسایی شوند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/WatchTower/watchtower2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/WatchTower/watchtower3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">بررسی و تحلیل سریع و جامع</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              نمودار «All Action Treemap» نمایی بصری از تراکم و تنوع رویدادها ارائه می‌دهد و فیلتر «Action by Tag» امکان تحلیل بر اساس برچسب‌های تعریف‌شده را فراهم می‌سازد. این
              ابزار تحلیلی، به مدیران کمک می‌کند تا با دقت، سرعت و شفافیت بیشتر سیستم را تحت کنترل داشته باشن
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
                <WatchTower :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">WatchTower</span>:</p>
            </div>
            <img src="/images/ModuleDetails/WatchTower/watchtower1.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول WATCH TOWER با رصد مستمر و دقیق رویدادها، تغییرات و عملکرد کاربران در سیستم، امکان نظارت کامل و به‌موقع بر تمامی فعالیت‌های نرم‌افزاری را فراهم می‌کند. این
              ماژول با ارائه گزارش‌ها و هشدارهای هوشمند، به بهبود امنیت، افزایش کارایی و تسهیل مدیریت فرآیندهای سازمانی کمک می‌کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Watch Tower به عنوان چشم نظارتی ERP OCTOPUS عمل می‌کند و با رصد مداوم رویدادها، تغییرات و فعالیت‌های کاربران در بخش‌های مختلف سیستم، به مدیران امکان می‌دهد تا به شکلی
        دقیق، شفاف و بی‌وقفه بر روند عملکرد نرم‌افزار نظارت داشته باشند. این ماژول به بهبود امنیت، شناسایی رفتارهای غیرعادی و تحلیل بهتر فرآیندهای سازمانی کمک می‌کند.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول WatchTower</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/WatchTower/watchtower1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">لیست جامع جریان‌های کاری در حال اجرا</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            در صفحه Workflow، تمامی فرآیندها و رویدادهای سیستمی که در حال اجرا یا ثبت شده‌اند به‌صورت یک لیست کامل و قابل فیلتر نمایش داده می‌شوند. هر آیتم شامل اطلاعاتی مانند
            ماژول مرتبط، نوع رویداد، زمان وقوع، کاربر مسئول، و وضعیت فعلی است. این صفحه به مدیران کمک می‌کند تا به‌صورت لحظه‌ای بر گردش کارهای مختلف نظارت داشته باشند، نقاط گلوگاه
            را شناسایی کنند و در صورت نیاز، اقدام اصلاحی انجام دهند.
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
        <img src="/images/ModuleDetails/WatchTower/watchtower2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">بررسی دقیق رویدادها بر اساس معیارهای متنوع</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        بخش آنالیز در ماژول Watch tower امکان بررسی دقیق فعالیت‌ها را با فیلترهای متنوعی مانند «بر اساس ماژول» (Action by Module) و «بر اساس کاربر» (By User) فراهم می‌کند. این
        قابلیت‌ها کمک می‌کنند تا رفتار کاربران، میزان فعالیت در بخش‌های مختلف و نقاط پرریسک یا نیازمند بهبود به‌راحتی شناسایی شوند.
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
      <img src="/images/ModuleDetails/WatchTower/watchtower3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">بررسی و تحلیل سریع و جامع</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        نمودار «All Action Treemap» نمایی بصری از تراکم و تنوع رویدادها ارائه می‌دهد و فیلتر «Action by Tag» امکان تحلیل بر اساس برچسب‌های تعریف‌شده را فراهم می‌سازد. این ابزار
        تحلیلی، به مدیران کمک می‌کند تا با دقت، سرعت و شفافیت بیشتر سیستم را تحت کنترل داشته باشن
      </p>
    </div>
  </div>
</template>

<style scoped></style>
