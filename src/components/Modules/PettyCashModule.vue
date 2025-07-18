<script setup>
import { ref } from "vue";
import Task from "../SVG/Task.vue";
import PettyCash from "../SVG/PettyCash.vue";
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
          <img src="/images/ModuleDetails/PettyCash/pettycashtop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <PettyCash :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="capitalize">PettyCash</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Pettycash در اختاپوس سیستم مدیریت متمرکزی است که هزینه‌های نقدی و کوچک سازمان را به‌صورت دقیق ثبت و کنترل می‌کند. این ماژول با ساده‌سازی فرآیندهای ثبت هزینه‌ها
              و ارائه گزارش‌های قابل اعتماد، به بهینه‌سازی مصرف بودجه و افزایش شفافیت مالی کمک می‌کند. با Pettycash، سازمان‌ها می‌توانند نظارت بهتری بر هزینه‌های روزمره داشته باشند
              و روند حسابداری خود را تسهیل کنند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Pettycash ابزاری ساده و کارآمد برای مدیریت هزینه‌های جزئی و نقدی در سازمان‌ها است. این ماژول به کاربران امکان ثبت، پیگیری و کنترل هزینه‌های روزمره را می‌دهد تا از
        هدررفت منابع مالی جلوگیری شود و گزارش‌های شفاف و دقیقی از تراکنش‌های نقدی در دسترس مدیران قرار گیرد. با استفاده از Pettycash، فرآیند مدیریت هزینه‌های کوچک سازمان به شکلی
        منظم، سریع و دقیق انجام می‌شود. این ماژول به بهبود شفافیت مالی و تسهیل تصمیم‌گیری‌های اقتصادی کمک می‌کند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Pettycash</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/PettyCash/pettycash1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت تراکنش‌ها به‌صورت کامل</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Manager View | Transactions، مدیران می‌توانند تمامی تراکنش‌های مرتبط با هزینه‌های نقدی را به‌صورت جامع و دقیق مشاهده و مدیریت کنند. این بخش شامل فیلترهای
              پیشرفته، جزئیات کامل هر تراکنش، وضعیت پرداخت و گزارش‌های تحلیلی است که به مدیران کمک می‌کند کنترل کامل و دقیقی بر جریان مالی داشته باشند و تصمیمات بهتری برای مدیریت
              بودجه اتخاذ کنند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">پیگیری آسان درخواست های نقدی هزینه ‌ها</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه PettyCash Request | Your Requests کاربران می‌توانند تمامی درخواست‌های هزینه نقدی خود را مشاهده، پیگیری و مدیریت کنند. این بخش با نمایش وضعیت هر درخواست، تاریخ
              ثبت و مبلغ، فرآیند رسیدگی به هزینه‌ها را شفاف و قابل‌پیگیری می‌سازد و به کاربران امکان می‌دهد به‌راحتی تاریخچه هزینه‌های خود را مرور کنند. این قابلیت باعث افزایش نظم
              در مدیریت هزینه‌ها و تسریع روند تایید درخواست‌ها می‌شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/PettyCash/pettycash2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/PettyCash/pettycash3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">ثبت تراکنش جدید و مدیریت ساده هزینه‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Add Transaction کاربران می‌توانند هزینه‌های نقدی جدید را با وارد کردن اطلاعات دقیق مانند مبلغ، تاریخ، دسته‌بندی و توضیحات ثبت کنند. این صفحه با طراحی
              کاربرپسند، فرآیند ثبت هزینه‌ها را سریع و بدون پیچیدگی می‌کند و به سازمان‌ها کمک می‌کند کنترل بهتری روی هزینه‌های روزمره خود داشته باشند. همچنین، امکان مشاهده آخرین
              تراکنش ثبت‌شده در این صفحه، به کاربران اجازه می‌دهد تا به سرعت وضعیت اخیر هزینه‌ها را بررسی کنند.
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
          <p class="text-2xl font-medium">نمای کلی ددلاین‌ها در تقویم - Deadline Calendar</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه My PettyCash داشبوردی کامل برای مدیریت هزینه‌های نقدی سازمان است که با فیلترهای پیشرفته و نمایش گرافیکی، وضعیت بودجه‌ها، هزینه‌های ثبت شده و میزان باقی‌مانده هر
              دسته را به صورت دقیق نشان می‌دهد. همچنین جزئیات مهم هر دسته مانند تامین‌کننده بودجه، تاریخ‌ها و تاییدکننده‌ها برای مدیریت مالی ساده‌تر و دقیق‌تر نمایش داده می‌شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/PettyCash/pettycash4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/PettyCash/pettycash5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">تأیید تراکنش‌ها و تضمین صحت و اعتبار اطلاعات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Validation کاربران می‌توانند تراکنش‌های ثبت شده را بررسی و تأیید کنند تا از صحت و اعتبار اطلاعات وارد شده اطمینان حاصل شود. این صفحه با فرآیندی ساده و قابل
              فهم، به مدیران و حسابداران امکان می‌دهد خطاها و موارد ناهماهنگ را شناسایی و اصلاح کنند و بدین ترتیب، مدیریت هزینه‌های نقدی با دقت و نظم بیشتری انجام شود. با استفاده
              از این قابلیت، سازمان‌ها می‌توانند از گزارش‌های مالی دقیق‌تر و قابل اعتمادتر برخوردار شوند.
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
          <p class="text-2xl font-medium">جزئیات تراکنش | مشاهده دقیق و شفاف اطلاعات هزینه</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در بخش Detail کاربران می‌توانند تمام اطلاعات مرتبط با یک تراکنش نقدی را به صورت کامل و دقیق مشاهده کنند. این صفحه شامل جزئیاتی مانند مبلغ، تاریخ، دسته‌بندی، توضیحات و
              وضعیت تأیید تراکنش است که به کاربران کمک می‌کند به راحتی روند هزینه‌ها را پیگیری کرده و درک کاملی از هر هزینه داشته باشند. طراحی کاربرپسند این بخش، مشاهده اطلاعات را
              سریع و بدون ابهام می‌کند و باعث افزایش شفافیت در مدیریت مالی سازمان می‌شود.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/PettyCash/pettycash6.png" class="w-[700px] h-[300px]" alt="" />
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
                <PettyCash :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="capitalize">PettyCash</span>:</p>
            </div>
            <img src="/images/ModuleDetails/PettyCash/pettycashtop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Pettycash در اختاپوس سیستم مدیریت متمرکزی است که هزینه‌های نقدی و کوچک سازمان را به‌صورت دقیق ثبت و کنترل می‌کند. این ماژول با ساده‌سازی فرآیندهای ثبت هزینه‌ها
              و ارائه گزارش‌های قابل اعتماد، به بهینه‌سازی مصرف بودجه و افزایش شفافیت مالی کمک می‌کند. با Pettycash، سازمان‌ها می‌توانند نظارت بهتری بر هزینه‌های روزمره داشته باشند
              و روند حسابداری خود را تسهیل کنند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Pettycash ابزاری ساده و کارآمد برای مدیریت هزینه‌های جزئی و نقدی در سازمان‌ها است. این ماژول به کاربران امکان ثبت، پیگیری و کنترل هزینه‌های روزمره را می‌دهد تا از
        هدررفت منابع مالی جلوگیری شود و گزارش‌های شفاف و دقیقی از تراکنش‌های نقدی در دسترس مدیران قرار گیرد. با استفاده از Pettycash، فرآیند مدیریت هزینه‌های کوچک سازمان به شکلی
        منظم، سریع و دقیق انجام می‌شود. این ماژول به بهبود شفافیت مالی و تسهیل تصمیم‌گیری‌های اقتصادی کمک می‌کند.
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
      <p dir="rtl" class="text-2xl font-semibold">ویژگی‌های اصلی ماژول Pettycash</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/PettyCash/pettycash1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">مدیریت تراکنش‌ها به‌صورت کامل</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            در صفحه Manager View | Transactions، مدیران می‌توانند تمامی تراکنش‌های مرتبط با هزینه‌های نقدی را به‌صورت جامع و دقیق مشاهده و مدیریت کنند. این بخش شامل فیلترهای
            پیشرفته، جزئیات کامل هر تراکنش، وضعیت پرداخت و گزارش‌های تحلیلی است که به مدیران کمک می‌کند کنترل کامل و دقیقی بر جریان مالی داشته باشند و تصمیمات بهتری برای مدیریت
            بودجه اتخاذ کنند.
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
        <img src="/images/ModuleDetails/PettyCash/pettycash2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">پیگیری آسان درخواست های نقدی هزینه ‌ها</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        صفحه PettyCash Request | Your Requests کاربران می‌توانند تمامی درخواست‌های هزینه نقدی خود را مشاهده، پیگیری و مدیریت کنند. این بخش با نمایش وضعیت هر درخواست، تاریخ ثبت و
        مبلغ، فرآیند رسیدگی به هزینه‌ها را شفاف و قابل‌پیگیری می‌سازد و به کاربران امکان می‌دهد به‌راحتی تاریخچه هزینه‌های خود را مرور کنند. این قابلیت باعث افزایش نظم در مدیریت
        هزینه‌ها و تسریع روند تایید درخواست‌ها می‌شود.
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
      <img src="/images/ModuleDetails/PettyCash/pettycash3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">ثبت تراکنش جدید و مدیریت ساده هزینه‌ها</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Add Transaction کاربران می‌توانند هزینه‌های نقدی جدید را با وارد کردن اطلاعات دقیق مانند مبلغ، تاریخ، دسته‌بندی و توضیحات ثبت کنند. این صفحه با طراحی کاربرپسند،
        فرآیند ثبت هزینه‌ها را سریع و بدون پیچیدگی می‌کند و به سازمان‌ها کمک می‌کند کنترل بهتری روی هزینه‌های روزمره خود داشته باشند. همچنین، امکان مشاهده آخرین تراکنش ثبت‌شده در
        این صفحه، به کاربران اجازه می‌دهد تا به سرعت وضعیت اخیر هزینه‌ها را بررسی کنند.
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
      <img src="/images/ModuleDetails/PettyCash/pettycash4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">نمای کلی ددلاین‌ها در تقویم - Deadline Calendar</p>
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
      <img src="/images/ModuleDetails/PettyCash/pettycash5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">تأیید تراکنش‌ها و تضمین صحت و اعتبار اطلاعات</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه Validation کاربران می‌توانند تراکنش‌های ثبت شده را بررسی و تأیید کنند تا از صحت و اعتبار اطلاعات وارد شده اطمینان حاصل شود. این صفحه با فرآیندی ساده و قابل فهم،
          به مدیران و حسابداران امکان می‌دهد خطاها و موارد ناهماهنگ را شناسایی و اصلاح کنند و بدین ترتیب، مدیریت هزینه‌های نقدی با دقت و نظم بیشتری انجام شود. با استفاده از این
          قابلیت، سازمان‌ها می‌توانند از گزارش‌های مالی دقیق‌تر و قابل اعتمادتر برخوردار شوند.
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
      <img src="/images/ModuleDetails/PettyCash/pettycash6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">جزئیات تراکنش | مشاهده دقیق و شفاف اطلاعات هزینه</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در بخش Detail کاربران می‌توانند تمام اطلاعات مرتبط با یک تراکنش نقدی را به صورت کامل و دقیق مشاهده کنند. این صفحه شامل جزئیاتی مانند مبلغ، تاریخ، دسته‌بندی، توضیحات و
          وضعیت تأیید تراکنش است که به کاربران کمک می‌کند به راحتی روند هزینه‌ها را پیگیری کرده و درک کاملی از هر هزینه داشته باشند. طراحی کاربرپسند این بخش، مشاهده اطلاعات را سریع
          و بدون ابهام می‌کند و باعث افزایش شفافیت در مدیریت مالی سازمان می‌شود.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
