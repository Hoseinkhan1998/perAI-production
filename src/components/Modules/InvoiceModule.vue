<script setup>
import { ref } from "vue";
import Invoice from "../SVG/Invoice.vue";
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
          <img src="/images/ModuleDetails/Invoice/invoice1.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Invoice :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Invoice</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Invoice مدیریت یکپارچه صورتحساب‌ها را بر عهده دارد. با امکان ثبت، صدور و پیگیری فاکتورها، به سازمان کمک می‌کند تا تراکنش‌های مالی را به‌صورت دقیق و ساختارمند کنترل کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Invoice یکی از بخش‌های کلیدی در سیستم مالی اختاپوس است که وظیفه ثبت، مدیریت و پیگیری صورتحساب‌های فروش و خرید را بر عهده دارد. این ماژول به کاربران کمک می‌کند تا به‌صورت دقیق، اطلاعات مربوط به معاملات مالی خود را با مشتریان و تأمین‌کنندگان ثبت کرده، جزئیات هر صورتحساب را مشاهده و وضعیت پرداخت‌ها را ردیابی کنند. همچنین امکان صدور فاکتورهای رسمی، زمان‌بندی پرداخت‌ها، اتصال به سایر ماژول‌های مالی و کنترل بدهی‌ها و بستانکاری‌ها نیز در آن فراهم شده تا فرایند مالی با دقت و شفافیت بیشتری مدیریت شود.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Invoice</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Invoice/invoice1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">ثبت هوشمند تراکنش‌ها و مدیریت دقیق فاکتور ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند به‌سادگی فاکتورهای جدیدی برای خرید یا فروش ثبت کنند. این فاکتورها شامل اطلاعات کاملی از قبیل طرف حساب، تاریخ، شماره سند، جزئیات محصولات یا خدمات، قیمت‌ها، مالیات، تخفیف و جمع نهایی هستند. قابلیت ذخیره به‌صورت پیش‌نویس، ویرایش‌پذیری آسان، و محاسبات خودکار، این بخش را به ابزار قدرتمندی برای مدیریت فرآیندهای مالی تبدیل کرده است
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">جزئیات کامل فاکتور</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              هر فاکتور شامل اطلاعات کاملی از مشتری، فروشنده، تاریخ‌ها و اقلام سفارش است. جزئیاتی مانند آدرس، کد پستی، درصد فروشنده، تاریخ تحویل و توضیحات تکمیلی، امکان پیگیری آسان و مدیریت بهینه فرآیند فروش را فراهم می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Invoice/invoice2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Invoice/invoice3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت پیش‌نویس فاکتوره</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Drafts، کاربران می‌توانند پیش‌نویس‌های فاکتورها را مشاهده کنند. هر کارت شامل اطلاعاتی مانند عنوان (Title)، صادر کننده فاکتور (Issuer)، مقدار هزینه (Amount) و تاریخ (Date) است. این اطلاعات به کاربران کمک می‌کند تا به‌راحتی پیش‌نویس‌های فاکتور را بررسی، ویرایش یا نهایی کنند. تایتل بده
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
          <p class="text-2xl font-medium"> صرفه‌جویی در زمان با ثبت گروهی فاکتورها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران این امکان را دارند تا فاکتورهای خود را به صورت دسته‌ای و از طریق فایل‌های استاندارد مانند Excel یا CSV به سیستم وارد کنند. این قابلیت باعث می‌شود فرآیند ثبت فاکتورها بسیار سریع‌تر و کم‌خطاتر انجام شود و نیاز به ورود دستی اطلاعات به حداقل برسد. علاوه بر این، سیستم به صورت خودکار صحت داده‌ها را بررسی کرده و در صورت وجود خطا یا ناسازگاری، کاربران را مطلع می‌کند تا اصلاحات لازم را انجام دهند. این صفحه به ویژه برای شرکت‌هایی با حجم بالای فاکتور بسیار کاربردی است و به صرفه‌جویی قابل توجه در زمان و منابع کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Invoice/invoice4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Invoice/invoice5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium"> ثبت و رصد دقیق تراکنش‌های مالی</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              علاوه بر نمایش کامل تراکنش‌های مالی مرتبط با صندوق‌ها و حساب‌های بانکی، امکان افزودن حساب‌ها و صندوق‌های جدید را نیز فراهم می‌کند. کاربران می‌توانند به‌سادگی حساب‌های مختلف بانکی یا صندوق‌های نقدی سازمان را ثبت کنند و برای هر کدام اطلاعات مربوطه را وارد نمایند. این قابلیت باعث می‌شود مدیریت منابع مالی سازمان به صورت دقیق‌تر و سازمان‌یافته‌تر انجام شود. همچنین امکان مشاهده گردش نقدی، فیلترگذاری بر اساس نوع حساب، تاریخ و نوع تراکنش، و دریافت گزارش‌های جامع از وضعیت نقدینگی، در این صفحه فراهم شده است تا کنترل کامل و بهینه‌ای بر روی امور مالی داشته باشید.
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
          <p class="text-2xl font-medium">بررسی و آنالیز دقیق فاکتور ها </p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند گزارش‌های متنوعی مانند گزارش فاکتورها، محصولات، اشخاص، حساب‌های بانکی و صندوق‌ها و همچنین گزارش مطالبات را مشاهده کنند. این گزارش‌ها با نمایش نمودارها و جداول تحلیلی، تصویری کامل و دقیق از روند مالی سازمان ارائه می‌دهند. دسترسی سریع به جزئیات هر گزارش باعث تسهیل تصمیم‌گیری‌های مالی و بهبود مدیریت منابع می‌شود. طراحی ساده و کاربرپسند این بخش، امکان تحلیل جامع و هوشمندانه را تنها با چند کلیک فراهم می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Invoice/invoice6.png" class="w-[700px] h-[300px]" alt="" />
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
                <Invoice :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Invoice</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Invoice/invoice1.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Invoice مدیریت یکپارچه صورتحساب‌ها را بر عهده دارد. با امکان ثبت، صدور و پیگیری فاکتورها، به سازمان کمک می‌کند تا تراکنش‌های مالی را به‌صورت دقیق و ساختارمند کنترل کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Invoice یکی از بخش‌های کلیدی در سیستم مالی اختاپوس است که وظیفه ثبت، مدیریت و پیگیری صورتحساب‌های فروش و خرید را بر عهده دارد. این ماژول به کاربران کمک می‌کند تا به‌صورت دقیق، اطلاعات مربوط به معاملات مالی خود را با مشتریان و تأمین‌کنندگان ثبت کرده، جزئیات هر صورتحساب را مشاهده و وضعیت پرداخت‌ها را ردیابی کنند. همچنین امکان صدور فاکتورهای رسمی، زمان‌بندی پرداخت‌ها، اتصال به سایر ماژول‌های مالی و کنترل بدهی‌ها و بستانکاری‌ها نیز در آن فراهم شده تا فرایند مالی با دقت و شفافیت بیشتری مدیریت شود.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Invoice</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Invoice/invoice1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">ثبت هوشمند تراکنش‌ها و مدیریت دقیق فاکتور ها</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            کاربران می‌توانند به‌سادگی فاکتورهای جدیدی برای خرید یا فروش ثبت کنند. این فاکتورها شامل اطلاعات کاملی از قبیل طرف حساب، تاریخ، شماره سند، جزئیات محصولات یا خدمات، قیمت‌ها، مالیات، تخفیف و جمع نهایی هستند. قابلیت ذخیره به‌صورت پیش‌نویس، ویرایش‌پذیری آسان، و محاسبات خودکار، این بخش را به ابزار قدرتمندی برای مدیریت فرآیندهای مالی تبدیل کرده است
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
        <img src="/images/ModuleDetails/Invoice/invoice2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">جزئیات کامل فاکتور</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        هر فاکتور شامل اطلاعات کاملی از مشتری، فروشنده، تاریخ‌ها و اقلام سفارش است. جزئیاتی مانند آدرس، کد پستی، درصد فروشنده، تاریخ تحویل و توضیحات تکمیلی، امکان پیگیری آسان و مدیریت بهینه فرآیند فروش را فراهم می‌کند.
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
      <img src="/images/ModuleDetails/Invoice/invoice3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">مدیریت پیش‌نویس فاکتوره</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Drafts، کاربران می‌توانند پیش‌نویس‌های فاکتورها را مشاهده کنند. هر کارت شامل اطلاعاتی مانند عنوان (Title)، صادر کننده فاکتور (Issuer)، مقدار هزینه (Amount) و تاریخ (Date) است. این اطلاعات به کاربران کمک می‌کند تا به‌راحتی پیش‌نویس‌های فاکتور را بررسی، ویرایش یا نهایی کنند. تایتل بده
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
      <img src="/images/ModuleDetails/Invoice/invoice4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium"> صرفه‌جویی در زمان با ثبت گروهی فاکتورها</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          کاربران این امکان را دارند تا فاکتورهای خود را به صورت دسته‌ای و از طریق فایل‌های استاندارد مانند Excel یا CSV به سیستم وارد کنند. این قابلیت باعث می‌شود فرآیند ثبت فاکتورها بسیار سریع‌تر و کم‌خطاتر انجام شود و نیاز به ورود دستی اطلاعات به حداقل برسد. علاوه بر این، سیستم به صورت خودکار صحت داده‌ها را بررسی کرده و در صورت وجود خطا یا ناسازگاری، کاربران را مطلع می‌کند تا اصلاحات لازم را انجام دهند. این صفحه به ویژه برای شرکت‌هایی با حجم بالای فاکتور بسیار کاربردی است و به صرفه‌جویی قابل توجه در زمان و منابع کمک می‌کند.
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
      <img src="/images/ModuleDetails/Invoice/invoice5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium"> ثبت و رصد دقیق تراکنش‌های مالی</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
         علاوه بر نمایش کامل تراکنش‌های مالی مرتبط با صندوق‌ها و حساب‌های بانکی، امکان افزودن حساب‌ها و صندوق‌های جدید را نیز فراهم می‌کند. کاربران می‌توانند به‌سادگی حساب‌های مختلف بانکی یا صندوق‌های نقدی سازمان را ثبت کنند و برای هر کدام اطلاعات مربوطه را وارد نمایند. این قابلیت باعث می‌شود مدیریت منابع مالی سازمان به صورت دقیق‌تر و سازمان‌یافته‌تر انجام شود. همچنین امکان مشاهده گردش نقدی، فیلترگذاری بر اساس نوع حساب، تاریخ و نوع تراکنش، و دریافت گزارش‌های جامع از وضعیت نقدینگی، در این صفحه فراهم شده است تا کنترل کامل و بهینه‌ای بر روی امور مالی داشته باشید.
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
      <img src="/images/ModuleDetails/Invoice/invoice6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">بررسی و آنالیز دقیق فاکتور ها </p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
         کاربران می‌توانند گزارش‌های متنوعی مانند گزارش فاکتورها، محصولات، اشخاص، حساب‌های بانکی و صندوق‌ها و همچنین گزارش مطالبات را مشاهده کنند. این گزارش‌ها با نمایش نمودارها و جداول تحلیلی، تصویری کامل و دقیق از روند مالی سازمان ارائه می‌دهند. دسترسی سریع به جزئیات هر گزارش باعث تسهیل تصمیم‌گیری‌های مالی و بهبود مدیریت منابع می‌شود. طراحی ساده و کاربرپسند این بخش، امکان تحلیل جامع و هوشمندانه را تنها با چند کلیک فراهم می‌کند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
