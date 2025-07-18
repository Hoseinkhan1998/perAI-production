<script setup>
import { ref } from "vue";
import Product from "../SVG/Product.vue";
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
          <img src="/images/ModuleDetails/Product/producttop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Product :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Product</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Product به عنوان هسته مرکزی مدیریت کالا و خدمات، امکان ثبت، دسته‌بندی و بروزرسانی محصولات را در بستری منظم و یکپارچه فراهم می‌کند. این ماژول با اتصال به بخش‌هایی مانند انبار، فروش و حسابداری، هماهنگی بین فرآیندهای تجاری را افزایش داده و به سازمان‌ها کمک می‌کند تا موجودی، قیمت‌گذاری و اطلاعات فنی محصولات خود را به شکلی دقیق و کارآمد مدیریت کنند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Product در اختاپوس مدیریت متمرکز محصولات و خدمات را برای سازمان فراهم می‌کند. این ماژول به کاربران اجازه می‌دهد تا اطلاعات کاملی از هر محصول شامل مشخصات، قیمت‌گذاری، موجودی، دسته‌بندی، و ویژگی‌های فنی یا خدماتی را ثبت و به‌روزرسانی کنند. همچنین با امکان ارتباط با سایر ماژول‌ها، مانند ACCOUNTING و INVENTORY، هماهنگی بین واحدهای مختلف را افزایش داده و فرآیندهای فروش، تامین و تحلیل را تسهیل می‌کند. این ماژول یک پایگاه داده جامع برای مدیریت حرفه‌ای سبد محصولات سازمانی به‌شمار می‌رود.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Product</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Product/product1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium"> نمایش جامع اطلاعات محصولات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Products کاربران به فهرستی کامل از کالاهای ثبت‌شده دسترسی دارند. هر ردیف از جدول شامل اطلاعات کلیدی مانند تصویر محصول، شناسه (ID)، نام کالا، واحد اندازه‌گیری، برند، نوع محصول و خانواده آن است. این چیدمان منظم به کاربران کمک می‌کند تا محصولات را سریع‌تر شناسایی و مدیریت کنند. با امکان فیلتر و جستجو در بین داده‌ها، بررسی و دسترسی به اطلاعات هر کالا ساده‌تر و سریع‌تر انجام می‌شود.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">نمایش کامل اطلاعات یک محصول</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              تمام اطلاعات مرتبط با هر محصول به‌صورت کامل و یک‌جا نمایش داده می‌شود. کاربران می‌توانند جزئیاتی مانند خانواده محصول (Product Family)، واحد اندازه‌گیری (Product Unit)، برند (Brand) و توضیحات دقیق محصول را مشاهده کنند. همچنین فایل‌های پیوست‌شده مثل تصاویر، دستورالعمل‌ها یا برگه مشخصات، مستقیماً قابل دسترسی هستند. این نمایش جامع کمک می‌کند تا تیم‌ها تصمیم‌گیری سریع‌تر و آگاهانه‌تری در مورد محصولات داشته باشند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Product/product2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Product/product3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">اضافه کردن ساده محصول جدید</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه افزودن آیتم جدید، امکان وارد کردن تمامی جزئیات موردنیاز برای تعریف دقیق محصول وجود دارد؛ از جمله نوع، خانواده، وضعیت هشدار، نام، واحد، سطح اهمیت، برند، زیرلایه، محصول والد، تصویر و فایل‌های ضمیمه مانند راهنما یا مشخصات فنی. این ساختار، مدیریت دقیق و کامل محصولات را ممکن می‌سازد.
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
          <p class="text-2xl font-medium"> بررسی دقیق ترکیبات، مراحل تولید</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه «Recipe Details»، که معادل مفهومی BOM (Bill of Materials) اختاپوس محسوب می‌شود، می‌توانید ترکیبات، مراحل ساخت، مقدار مصرف هر ماده و هزینه نهایی تولید یک محصول را به‌صورت دقیق مشاهده کنید. این اطلاعات به شما کمک می‌کنند تا فرمول ساخت محصولات را بهینه‌سازی کرده، هزینه‌ها را کنترل نمایید و کیفیت نهایی محصول را حفظ کنید.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Product/product4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Product/product5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">تصمیم‌های بهتر با دید دقیق‌تر!</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              صفحه آنالیز به شما نمایی کامل از عملکرد فروش، رفتار مشتری‌ها و روند پیشرفت تیم می‌ده. با نمودارها و آمارهای کاربردی، می‌تونید نقاط قوت و ضعف رو شناسایی کنید و تصمیم‌هاتون رو هوشمندانه‌تر بگیرید. داده‌هدر بخش عملکرد موجودی‌ها بر اساس تراکنش‌ها، سیستم اختاپوس با تحلیل ورود و خروج کالا، موجودی‌های پرفروش یا راکد را شناسایی می‌کند. این اطلاعات به بهینه‌سازی سفارش‌گذاری، کاهش هزینه‌ها و مدیریت بهتر انبار کمک می‌کند.ا
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
          <p class="text-2xl font-medium">مروری سریع بر هر تمام محصولات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه آرشیو ماژول INVENTORY ، لیستی کامل از محصولات آرشیو شده نمایش داده می‌شود که امکان جستجو و فیلتر پیشرفته بر اساس دسته‌بندی، تاریخ آرشیو، وضعیت و سایر معیارها را فراهم می‌کند. این قابلیت به کاربران اجازه می‌دهد به سرعت به اطلاعات محصولات قدیمی دسترسی داشته و مدیریت بهتری روی موجودی‌های غیر فعال یا حذف شده داشته باشند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Product/product6.png" class="w-[700px] h-[300px]" alt="" />
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
                <Product :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Product</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Product/producttop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Product به عنوان هسته مرکزی مدیریت کالا و خدمات، امکان ثبت، دسته‌بندی و بروزرسانی محصولات را در بستری منظم و یکپارچه فراهم می‌کند. این ماژول با اتصال به بخش‌هایی مانند انبار، فروش و حسابداری، هماهنگی بین فرآیندهای تجاری را افزایش داده و به سازمان‌ها کمک می‌کند تا موجودی، قیمت‌گذاری و اطلاعات فنی محصولات خود را به شکلی دقیق و کارآمد مدیریت کنند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Product در اختاپوس مدیریت متمرکز محصولات و خدمات را برای سازمان فراهم می‌کند. این ماژول به کاربران اجازه می‌دهد تا اطلاعات کاملی از هر محصول شامل مشخصات، قیمت‌گذاری، موجودی، دسته‌بندی، و ویژگی‌های فنی یا خدماتی را ثبت و به‌روزرسانی کنند. همچنین با امکان ارتباط با سایر ماژول‌ها، مانند ACCOUNTING و INVENTORY، هماهنگی بین واحدهای مختلف را افزایش داده و فرآیندهای فروش، تامین و تحلیل را تسهیل می‌کند. این ماژول یک پایگاه داده جامع برای مدیریت حرفه‌ای سبد محصولات سازمانی به‌شمار می‌رود.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Product</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Product/product1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium"> نمایش جامع اطلاعات محصولات</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
           در صفحه Products کاربران به فهرستی کامل از کالاهای ثبت‌شده دسترسی دارند. هر ردیف از جدول شامل اطلاعات کلیدی مانند تصویر محصول، شناسه (ID)، نام کالا، واحد اندازه‌گیری، برند، نوع محصول و خانواده آن است. این چیدمان منظم به کاربران کمک می‌کند تا محصولات را سریع‌تر شناسایی و مدیریت کنند. با امکان فیلتر و جستجو در بین داده‌ها، بررسی و دسترسی به اطلاعات هر کالا ساده‌تر و سریع‌تر انجام می‌شود.
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
        <img src="/images/ModuleDetails/Product/product2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">نمایش کامل اطلاعات یک محصول</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        تمام اطلاعات مرتبط با هر محصول به‌صورت کامل و یک‌جا نمایش داده می‌شود. کاربران می‌توانند جزئیاتی مانند خانواده محصول (Product Family)، واحد اندازه‌گیری (Product Unit)، برند (Brand) و توضیحات دقیق محصول را مشاهده کنند. همچنین فایل‌های پیوست‌شده مثل تصاویر، دستورالعمل‌ها یا برگه مشخصات، مستقیماً قابل دسترسی هستند. این نمایش جامع کمک می‌کند تا تیم‌ها تصمیم‌گیری سریع‌تر و آگاهانه‌تری در مورد محصولات داشته باشند.
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
      <img src="/images/ModuleDetails/Product/product3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">اضافه کردن ساده محصول جدید</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه افزودن آیتم جدید، امکان وارد کردن تمامی جزئیات موردنیاز برای تعریف دقیق محصول وجود دارد؛ از جمله نوع، خانواده، وضعیت هشدار، نام، واحد، سطح اهمیت، برند، زیرلایه، محصول والد، تصویر و فایل‌های ضمیمه مانند راهنما یا مشخصات فنی. این ساختار، مدیریت دقیق و کامل محصولات را ممکن می‌سازد.
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
      <img src="/images/ModuleDetails/Product/product4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium"> بررسی دقیق ترکیبات، مراحل تولید</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه «Recipe Details»، که معادل مفهومی BOM (Bill of Materials) اختاپوس محسوب می‌شود، می‌توانید ترکیبات، مراحل ساخت، مقدار مصرف هر ماده و هزینه نهایی تولید یک محصول را به‌صورت دقیق مشاهده کنید. این اطلاعات به شما کمک می‌کنند تا فرمول ساخت محصولات را بهینه‌سازی کرده، هزینه‌ها را کنترل نمایید و کیفیت نهایی محصول را حفظ کنید.
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
      <img src="/images/ModuleDetails/Product/product5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">تصمیم‌های بهتر با دید دقیق‌تر!</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          صفحه آنالیز به شما نمایی کامل از عملکرد فروش، رفتار مشتری‌ها و روند پیشرفت تیم می‌ده. با نمودارها و آمارهای کاربردی، می‌تونید نقاط قوت و ضعف رو شناسایی کنید و تصمیم‌هاتون رو هوشمندانه‌تر بگیرید. داده‌هدر بخش عملکرد موجودی‌ها بر اساس تراکنش‌ها، سیستم اختاپوس با تحلیل ورود و خروج کالا، موجودی‌های پرفروش یا راکد را شناسایی می‌کند. این اطلاعات به بهینه‌سازی سفارش‌گذاری، کاهش هزینه‌ها و مدیریت بهتر انبار کمک می‌کند.ا
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
      <img src="/images/ModuleDetails/Product/product6.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">مروری سریع بر هر تمام محصولات</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در صفحه آرشیو ماژول INVENTORY ، لیستی کامل از محصولات آرشیو شده نمایش داده می‌شود که امکان جستجو و فیلتر پیشرفته بر اساس دسته‌بندی، تاریخ آرشیو، وضعیت و سایر معیارها را فراهم می‌کند. این قابلیت به کاربران اجازه می‌دهد به سرعت به اطلاعات محصولات قدیمی دسترسی داشته و مدیریت بهتری روی موجودی‌های غیر فعال یا حذف شده داشته باشند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
