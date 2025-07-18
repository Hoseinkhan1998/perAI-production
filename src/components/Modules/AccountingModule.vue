<script setup>
import { ref } from "vue";
import Accounting from "../SVG/Accounting.vue";
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
          <img src="/images/ModuleDetails/Accounting/accountingtop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Accounting :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Accounting</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Accounting با هدف مدیریت یکپارچه مالی طراحی شده و به سازمان‌ها کمک می‌کند تا اسناد، تراکنش‌ها و گزارش‌های مالی خود را با دقت و انسجام بیشتری کنترل کنند. اتصال
              آن با سایر بخش‌ها، روند مالی را ساده، شفاف و بدون خطا می‌سازد.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Accounting در ERP OCTOPUS طراحی شده تا تمامی فرآیندهای مالی سازمان را به‌صورت دقیق، منظم و یکپارچه مدیریت کند. از ثبت اسناد حسابداری و پیگیری تراکنش‌ها تا گزارش‌گیری
        لحظه‌ای و تحلیل‌های مالی، این ماژول ابزارهایی را در اختیار تیم مالی قرار می‌دهد که شفافیت، کنترل و تصمیم‌گیری سریع را ممکن می‌سازد. اتصال مستقیم با سایر ماژول‌ها نیز باعث
        کاهش خطا، حذف ورود اطلاعات تکراری و بهبود بهره‌وری در مدیریت مالی می‌شود.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Accounting</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Accounting/accounting1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">نمایش دقیق معین افراد</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند اطلاعات معین حساب هر شخص را به‌صورت دقیق و قابل فیلتر مشاهده کنند. با امکان جستجو بر اساس نام فرد، تاریخ و شماره سند، این صفحه دسترسی سریع به سوابق
              مالی افراد را فراهم می‌سازد. نام شخص به‌صورت برجسته در بالای جدول نمایش داده می‌شود و سایر فیلترهای اعمال‌شده نیز در بالای صفحه قابل مشاهده‌اند، تا فرآیند بررسی و
              پیگیری حساب‌ها با دقت و شفافیت بیشتری انجام شود.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">مدیریت متمرکز اسناد مالی</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              تمامی اسناد ثبت‌شده در سیستم به‌صورت یکپارچه نمایش داده می‌شوند و کاربران می‌توانند به‌سادگی به آن‌ها دسترسی داشته باشند. هر سندی که از بخش New Document ذخیره نهایی
              شود، در این صفحه ثبت می‌شود. همچنین اسناد ذخیره‌شده به‌صورت پیش‌نویس (Save Draft) به بخش Drafts منتقل می‌شوند تا در صورت نیاز در آینده تکمیل یا ویرایش گردند. این
              ساختار به تیم مالی کمک می‌کند تا کنترل دقیق‌تری بر روند تهیه و مدیریت اسناد حسابداری داشته باشند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Accounting/accounting2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Accounting/accounting3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">رصد دقیق چک‌های دریافتی و پرداختی</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند تمام چک‌های دریافتی و پرداختی سازمان را در یک بازه زمانی مشخص مشاهده و بررسی کنند. این صفحه با ارائه نمایی تحلیلی از وضعیت چک‌ها، به مدیران مالی
              امکان می‌دهد تا جریان نقدی را با دقت بیشتری کنترل کرده و از موعدهای پرداخت یا دریافت عقب نمانند. فیلترهای پیشرفته به کاربر کمک می‌کنند تا اطلاعات مورد نظر را به‌سرعت
              استخراج کرده و تصمیم‌گیری مالی هوشمندانه‌تری داشته باشد.
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
          <p class="text-2xl font-medium">تکمیل سریع اسناد در انتظار</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه My PettyCash داشبوردی کامل برای مدیریت هزینه‌های نقدی سازمان است که با فیلترهای پیشرفته و نمایش گرافیکی، وضعیت بودجه‌ها، هزینه‌های ثبت شده و میزان باقی‌مانده هر
              دسته را به صورت دقیق نشان می‌دهد. همچنین جزئیات مهم هر دسته مانند تامین‌کننده بودجه، تاریخ‌ها و تاییدکننده‌ها برای مدیریت مالی ساده‌تر و دقیق‌تر نمایش داده می‌شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Accounting/accounting4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Accounting/accounting5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">نمایش دسته‌بندی‌شده اطلاعات حسابداری ، دسترسی سریع، تحلیل دقیق</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در بخش اطلاعات حسابداری، کاربران می‌توانند داده‌ها را بر اساس بخش بندی هایی مثل مخاطب، بانک، شرکت یا موارد نشان‌شده دسته‌بندی و مشاهده کنند. این فیلترها کمک می‌کنند
              تا کاربر سریع‌تر به اطلاعات موردنیازش دسترسی پیدا کند. بعد از انتخاب هر دسته، تمام اطلاعات مربوط به آن شامل جزئیات تراکنش‌ها، وضعیت حساب، سوابق پرداخت و دریافت، اسناد
              مالی و سایر داده‌های مهم، کامل و یکپارچه نمایش داده می‌شوند تا تصمیم‌گیری‌های مالی با دقت بیشتری انجام شود.
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
          <p class="text-2xl font-medium">دسترسی شفاف به جزئیات و وضعیت پرداخت</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              بخش اطلاعات چک در این ماژول امکان دسترسی سریع و کامل به جزئیات هر چک را فراهم می‌کند. کاربران می‌توانند وضعیت چک، تاریخ صدور، مبلغ، گیرنده و سایر اطلاعات مرتبط را
              به‌صورت دقیق و شفاف مشاهده کنند که این ویژگی به تصمیم‌گیری بهتر و مدیریت دقیق‌تر تراکنش‌های چکی کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Accounting/accounting6.png" class="w-[700px] h-[300px]" alt="" />
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
                <Accounting :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Accounting</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Accounting/accountingtop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Accounting با هدف مدیریت یکپارچه مالی طراحی شده و به سازمان‌ها کمک می‌کند تا اسناد، تراکنش‌ها و گزارش‌های مالی خود را با دقت و انسجام بیشتری کنترل کنند. اتصال
              آن با سایر بخش‌ها، روند مالی را ساده، شفاف و بدون خطا می‌سازد.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Accounting در ERP OCTOPUS طراحی شده تا تمامی فرآیندهای مالی سازمان را به‌صورت دقیق، منظم و یکپارچه مدیریت کند. از ثبت اسناد حسابداری و پیگیری تراکنش‌ها تا گزارش‌گیری
        لحظه‌ای و تحلیل‌های مالی، این ماژول ابزارهایی را در اختیار تیم مالی قرار می‌دهد که شفافیت، کنترل و تصمیم‌گیری سریع را ممکن می‌سازد. اتصال مستقیم با سایر ماژول‌ها نیز باعث
        کاهش خطا، حذف ورود اطلاعات تکراری و بهبود بهره‌وری در مدیریت مالی می‌شود.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Accounting</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Accounting/accounting1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">نمایش دقیق معین افراد</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            کاربران می‌توانند اطلاعات معین حساب هر شخص را به‌صورت دقیق و قابل فیلتر مشاهده کنند. با امکان جستجو بر اساس نام فرد، تاریخ و شماره سند، این صفحه دسترسی سریع به سوابق
            مالی افراد را فراهم می‌سازد. نام شخص به‌صورت برجسته در بالای جدول نمایش داده می‌شود و سایر فیلترهای اعمال‌شده نیز در بالای صفحه قابل مشاهده‌اند، تا فرآیند بررسی و
            پیگیری حساب‌ها با دقت و شفافیت بیشتری انجام شود.
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
        <img src="/images/ModuleDetails/Accounting/accounting2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">مدیریت متمرکز اسناد مالی</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        تمامی اسناد ثبت‌شده در سیستم به‌صورت یکپارچه نمایش داده می‌شوند و کاربران می‌توانند به‌سادگی به آن‌ها دسترسی داشته باشند. هر سندی که از بخش New Document ذخیره نهایی شود، در
        این صفحه ثبت می‌شود. همچنین اسناد ذخیره‌شده به‌صورت پیش‌نویس (Save Draft) به بخش Drafts منتقل می‌شوند تا در صورت نیاز در آینده تکمیل یا ویرایش گردند. این ساختار به تیم مالی
        کمک می‌کند تا کنترل دقیق‌تری بر روند تهیه و مدیریت اسناد حسابداری داشته باشند.
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
      <img src="/images/ModuleDetails/Accounting/accounting3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">رصد دقیق چک‌های دریافتی و پرداختی</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        کاربران می‌توانند تمام چک‌های دریافتی و پرداختی سازمان را در یک بازه زمانی مشخص مشاهده و بررسی کنند. این صفحه با ارائه نمایی تحلیلی از وضعیت چک‌ها، به مدیران مالی امکان
        می‌دهد تا جریان نقدی را با دقت بیشتری کنترل کرده و از موعدهای پرداخت یا دریافت عقب نمانند. فیلترهای پیشرفته به کاربر کمک می‌کنند تا اطلاعات مورد نظر را به‌سرعت استخراج کرده
        و تصمیم‌گیری مالی هوشمندانه‌تری داشته باشد.
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
      <img src="/images/ModuleDetails/Accounting/accounting4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">تکمیل سریع اسناد در انتظار</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          صفحه My PettyCash داشبوردی کامل برای مدیریت هزینه‌های نقدی سازمان است که با فیلترهای پیشرفته و نمایش گرافیکی، وضعیت بودجه‌ها، هزینه‌های ثبت شده و میزان باقی‌مانده هر دسته
          را به صورت دقیق نشان می‌دهد. همچنین جزئیات مهم هر دسته مانند تامین‌کننده بودجه، تاریخ‌ها و تاییدکننده‌ها برای مدیریت مالی ساده‌تر و دقیق‌تر نمایش داده می‌شود.
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
      <img src="/images/ModuleDetails/Accounting/accounting5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">نمایش دسته‌بندی‌شده اطلاعات حسابداری ، دسترسی سریع، تحلیل دقیق</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در بخش اطلاعات حسابداری، کاربران می‌توانند داده‌ها را بر اساس بخش بندی هایی مثل مخاطب، بانک، شرکت یا موارد نشان‌شده دسته‌بندی و مشاهده کنند. این فیلترها کمک می‌کنند تا
          کاربر سریع‌تر به اطلاعات موردنیازش دسترسی پیدا کند. بعد از انتخاب هر دسته، تمام اطلاعات مربوط به آن شامل جزئیات تراکنش‌ها، وضعیت حساب، سوابق پرداخت و دریافت، اسناد مالی و
          سایر داده‌های مهم، کامل و یکپارچه نمایش داده می‌شوند تا تصمیم‌گیری‌های مالی با دقت بیشتری انجام شود.
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
      <img src="/images/ModuleDetails/Accounting/accounting6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">دسترسی شفاف به جزئیات و وضعیت پرداخت</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          بخش اطلاعات چک در این ماژول امکان دسترسی سریع و کامل به جزئیات هر چک را فراهم می‌کند. کاربران می‌توانند وضعیت چک، تاریخ صدور، مبلغ، گیرنده و سایر اطلاعات مرتبط را به‌صورت
          دقیق و شفاف مشاهده کنند که این ویژگی به تصمیم‌گیری بهتر و مدیریت دقیق‌تر تراکنش‌های چکی کمک می‌کند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
