<script setup>
import { ref } from "vue";
import Inventory from "../SVG/Inventory.vue";
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
          <img src="/images/ModuleDetails/Inventory/inventory1.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Inventory :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Inventory</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Inventory در اختاپوس به سازمان‌ها کمک می‌کند تا کنترل دقیقی بر کالاها، انبارها و جریان ورود و خروج اقلام داشته باشند. با قابلیت‌هایی مثل تعریف محصولات،
              دسته‌بندی‌ها و هشدارهای کمبود، این ماژول مسیر تصمیم‌گیری‌های تأمین و توزیع را هوشمندتر می‌سازد. هدف آن کاهش خطا و بهینه‌سازی موجودی در بستر یکپارچه نرم‌افزار است.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Inventory در سیستم اختاپوس، مدیریت دقیق و یکپارچه‌ای از موجودی کالاها را فراهم می‌کند. این ماژول امکان ردیابی لحظه‌ای اقلام، بررسی سطح موجودی، مدیریت ورود و خروج
        کالاها، ثبت سفارش‌های تأمین، و هشدارهای مربوط به کمبود موجودی را فراهم می‌سازد. با استفاده از قابلیت‌هایی مانند تعریف واحدهای اندازه‌گیری، گروه‌بندی کالاها، و تنظیم نقاط
        سفارش مجدد، سازمان‌ها می‌توانند انبارهای خود را بهینه‌سازی کرده، از هدررفت منابع جلوگیری کنند و فرآیندهای تأمین و توزیع را با دقت بیشتری کنترل نمایند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Inventory</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Inventory/inventory1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت جامع اقلام و محصولات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              تمام محصولات و اقلام تعریف‌شده در سیستم به‌صورت یکجا نمایش داده می‌شوند. این لیست شامل اطلاعاتی مانند نام محصول، ID، واحد، نوع، موجودی است و به کاربران امکان می‌دهد
              تا به‌راحتی کالاها را مشاهده، فیلتر و مدیریت کنند. این صفحه نقطه شروعی برای بررسی دقیق وضعیت موجودی‌ها در انبار است. با استفاده از امکانات جستجو و فیلتر پیشرفته،
              دسترسی به اطلاعات هر کالا سریع‌تر و دقیق‌تر انجام می‌شود.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">نمایش جزئیات و وضعیت موجودی محصول</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربر می‌تواند تمامی اطلاعات مرتبط هر محصول را مشاهده کند. این اطلاعات شامل جزئیات کامل محصول، میزان موجودی فعلی در انبار، سطح هشدار (Alarm Quantity) و حد بحرانی
              موجودی (Critical Quantity) می‌شود. این داده‌ها به کاربران امکان می‌دهد تا به‌صورت دقیق وضعیت محصول را رصد کرده و در صورت نیاز اقدامات لازم برای سفارش یا مدیریت موجودی
              را به موقع انجام دهند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Inventory/inventory2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Inventory/inventory3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">طراحی و زمان‌بندی جلسات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه «Invoice Request»، کاربران می‌توانند تمامی درخواست‌های ثبت شده برای صدور فاکتور را مشاهده کنند و با بررسی جزئیات هر درخواست، آن را تأیید یا رد نمایند. این
              صفحه امکان مدیریت و کنترل دقیق‌تر فرآیند صدور فاکتورها را فراهم می‌کند.
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
          <p class="text-2xl font-medium">بررسی جامع تراکنش‌های آیتم‌ها برای مدیریت دقیق موجودی</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران به مجموعه‌ای کامل از اطلاعات مربوط به هر تراکنش دسترسی دارند. جزئیاتی مانند موجودی فعلی، تصویر محصول، واحد اندازه‌گیری، برند، ابعاد، تاریخ انقضا، تعداد، تاریخ
              ثبت تراکنش، نام تأمین‌کننده، آدرس، توضیحات تکمیلی و فایل‌های ضمیمه به‌صورت یکپارچه نمایش داده می‌شوند. این سطح از شفافیت و جزئیات به تیم‌های انبار و تامین کمک می‌کند
              تا فرآیندهای مربوط به مدیریت موجودی، ردیابی کالاها و کنترل کیفی را با دقت و سرعت بیشتری انجام دهند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Inventory/inventory4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Inventory/inventory5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">تحلیل هوشمند گردش کالا برای بهینه‌سازی انبارداری</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در بخش عملکرد موجودی‌ها بر اساس تراکنش‌ها، سیستم اختاپوس با تحلیل ورود و خروج کالا، موجودی‌های پرفروش یا راکد را شناسایی می‌کند. این اطلاعات به بهینه‌سازی
              سفارش‌گذاری، کاهش هزینه‌ها و مدیریت بهتر انبار کمک می‌کند.
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
          <p class="text-2xl font-medium">مدیریت دقیق محصولات آرشیو‌شده</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه آرشیو ماژول INVENTORY ، لیستی کامل از محصولات آرشیو شده نمایش داده می‌شود که امکان جستجو و فیلتر پیشرفته بر اساس دسته‌بندی، تاریخ آرشیو، وضعیت و سایر معیارها
              را فراهم می‌کند. این قابلیت به کاربران اجازه می‌دهد به سرعت به اطلاعات محصولات قدیمی دسترسی داشته و مدیریت بهتری روی موجودی‌های غیر فعال یا حذف شده داشته باشند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Inventory/inventory6.png" class="w-[700px] h-[300px]" alt="" />
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
                <Inventory :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Inventory</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Inventory/inventory1.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Inventory در اختاپوس به سازمان‌ها کمک می‌کند تا کنترل دقیقی بر کالاها، انبارها و جریان ورود و خروج اقلام داشته باشند. با قابلیت‌هایی مثل تعریف محصولات،
              دسته‌بندی‌ها و هشدارهای کمبود، این ماژول مسیر تصمیم‌گیری‌های تأمین و توزیع را هوشمندتر می‌سازد. هدف آن کاهش خطا و بهینه‌سازی موجودی در بستر یکپارچه نرم‌افزار است.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Inventory در سیستم اختاپوس، مدیریت دقیق و یکپارچه‌ای از موجودی کالاها را فراهم می‌کند. این ماژول امکان ردیابی لحظه‌ای اقلام، بررسی سطح موجودی، مدیریت ورود و خروج
        کالاها، ثبت سفارش‌های تأمین، و هشدارهای مربوط به کمبود موجودی را فراهم می‌سازد. با استفاده از قابلیت‌هایی مانند تعریف واحدهای اندازه‌گیری، گروه‌بندی کالاها، و تنظیم نقاط
        سفارش مجدد، سازمان‌ها می‌توانند انبارهای خود را بهینه‌سازی کرده، از هدررفت منابع جلوگیری کنند و فرآیندهای تأمین و توزیع را با دقت بیشتری کنترل نمایند.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Inventory</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Inventory/inventory1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مدیریت جامع اقلام و محصولات</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            تمام محصولات و اقلام تعریف‌شده در سیستم به‌صورت یکجا نمایش داده می‌شوند. این لیست شامل اطلاعاتی مانند نام محصول، ID، واحد، نوع، موجودی است و به کاربران امکان می‌دهد تا
            به‌راحتی کالاها را مشاهده، فیلتر و مدیریت کنند. این صفحه نقطه شروعی برای بررسی دقیق وضعیت موجودی‌ها در انبار است. با استفاده از امکانات جستجو و فیلتر پیشرفته، دسترسی به
            اطلاعات هر کالا سریع‌تر و دقیق‌تر انجام می‌شود.
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
        <img src="/images/ModuleDetails/Inventory/inventory2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">مایش جزئیات و وضعیت موجودی محصول</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        کاربر می‌تواند تمامی اطلاعات مرتبط هر محصول را مشاهده کند. این اطلاعات شامل جزئیات کامل محصول، میزان موجودی فعلی در انبار، سطح هشدار (Alarm Quantity) و حد بحرانی موجودی
        (Critical Quantity) می‌شود. این داده‌ها به کاربران امکان می‌دهد تا به‌صورت دقیق وضعیت محصول را رصد کرده و در صورت نیاز اقدامات لازم برای سفارش یا مدیریت موجودی را به موقع
        انجام دهند.
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
      <img src="/images/ModuleDetails/Inventory/inventory3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">طراحی و زمان‌بندی جلسات</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه «Invoice Request»، کاربران می‌توانند تمامی درخواست‌های ثبت شده برای صدور فاکتور را مشاهده کنند و با بررسی جزئیات هر درخواست، آن را تأیید یا رد نمایند. این صفحه
        امکان مدیریت و کنترل دقیق‌تر فرآیند صدور فاکتورها را فراهم می‌کند.
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
      <img src="/images/ModuleDetails/Inventory/inventory4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">بررسی جامع تراکنش‌های آیتم‌ها برای مدیریت دقیق موجودی</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          کاربران به مجموعه‌ای کامل از اطلاعات مربوط به هر تراکنش دسترسی دارند. جزئیاتی مانند موجودی فعلی، تصویر محصول، واحد اندازه‌گیری، برند، ابعاد، تاریخ انقضا، تعداد، تاریخ ثبت
          تراکنش، نام تأمین‌کننده، آدرس، توضیحات تکمیلی و فایل‌های ضمیمه به‌صورت یکپارچه نمایش داده می‌شوند. این سطح از شفافیت و جزئیات به تیم‌های انبار و تامین کمک می‌کند تا
          فرآیندهای مربوط به مدیریت موجودی، ردیابی کالاها و کنترل کیفی را با دقت و سرعت بیشتری انجام دهند.
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
      <img src="/images/ModuleDetails/Inventory/inventory5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">تحلیل هوشمند گردش کالا برای بهینه‌سازی انبارداری</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در بخش عملکرد موجودی‌ها بر اساس تراکنش‌ها، سیستم اختاپوس با تحلیل ورود و خروج کالا، موجودی‌های پرفروش یا راکد را شناسایی می‌کند. این اطلاعات به بهینه‌سازی سفارش‌گذاری،
          کاهش هزینه‌ها و مدیریت بهتر انبار کمک می‌کند.
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
      <img src="/images/ModuleDetails/Inventory/inventory6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">مدیریت دقیق محصولات آرشیو‌شده</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه آرشیو ماژول INVENTORY ، لیستی کامل از محصولات آرشیو شده نمایش داده می‌شود که امکان جستجو و فیلتر پیشرفته بر اساس دسته‌بندی، تاریخ آرشیو، وضعیت و سایر معیارها را
          فراهم می‌کند. این قابلیت به کاربران اجازه می‌دهد به سرعت به اطلاعات محصولات قدیمی دسترسی داشته و مدیریت بهتری روی موجودی‌های غیر فعال یا حذف شده داشته باشند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
