<script setup>
import { ref } from "vue";
import Mailbox from "../SVG/Mailbox.vue";
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
          <img src="/images/ModuleDetails/Mailbox/mailbox1.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Mailbox :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Mailbox</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Mail Box به کاربران این امکان را می‌دهد که تمامی پیام‌ها و مکاتبات اینترنتی خود را در یک فضای امن و متمرکز مدیریت کنند. این ماژول با قابلیت‌های پیشرفته‌ای همچون
              دسته‌بندی، جستجو و فیلتر پیام‌ها، ارسال و دریافت سریع و هماهنگی با سایر سیستم‌ها، فرآیند مدیریت ارتباطات را ساده‌تر و کارآمدتر می‌سازد و به افزایش بهره‌وری و نظم در
              مکاتبات سازمان کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول MailBox در ERP OCTOPUS با هدف ارائه بستری امن و کارآمد برای مدیریت تمامی پیام‌ها و مکاتبات اینترنتی سازمان طراحی شده است. این ماژول امکان ارسال، دریافت، دسته‌بندی و
        آرشیو پیام‌ها را در یک فضای متمرکز و ساده فراهم می‌کند تا کاربران بتوانند به‌راحتی ارتباطات روزمره خود را مدیریت کنند. با امکانات پیشرفته‌ای مانند جستجوی سریع، فیلترهای
        هوشمند، علامت‌گذاری پیام‌ها و هماهنگی کامل با دیگر بخش‌های سیستم ERP، ماژول صندوق پستی اینترنتی به بهبود روند کاری، افزایش دقت در پاسخ‌دهی و حفظ نظم در تبادل اطلاعات کمک
        شایانی می‌کند. این ماژول به سازمان‌ها امکان می‌دهد تا تمامی مکاتبات دیجیتال خود را به صورت سازمان‌یافته و تحت کنترل داشته باشند و از اتلاف وقت و اطلاعات مهم جلوگیری کنند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Mailbox</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Mailbox/mailbox1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">دریافت و مدیریت آسان پیام ‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Inbox ماژول MailBox کاربران می‌توانند تمامی پیام‌های دریافتی خود را به‌صورت یکجا مشاهده و مدیریت کنند. این صفحه با طراحی ساده و کاربرپسند امکان دسته‌بندی،
              جستجو و فیلتر پیام‌ها را فراهم می‌کند تا کاربران بتوانند به سرعت پیام‌های مهم را پیدا کرده و پاسخ دهند. علاوه بر این، قابلیت علامت‌گذاری پیام‌ها و انتقال آن‌ها به
              پوشه‌های مختلف، نظم بیشتری به صندوق پستی می‌بخشد و فرآیند مدیریت مکاتبات را بهینه می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">ارسال پیام‌های دقیق و سازمان‌یافته</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Compose ماژول Mail Box، کاربران می‌توانند پیام‌های جدید خود را با امکانات کامل و حرفه‌ای ایجاد و ارسال کنند. این صفحه امکان افزودن گیرندگان اصلی، همچنین
              استفاده از قابلیت‌های BCC و CC برای ارسال پیام به مخاطبین مختلف به‌صورت خصوصی یا عمومی را فراهم می‌کند. طراحی ساده و کاربرپسند این صفحه باعث می‌شود فرایند نوشتن و
              ارسال پیام‌ها سریع و بدون اشتباه انجام شود و کاربران بتوانند ارتباطات خود را به شکل موثری مدیریت کنند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Mailbox/mailbox2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Mailbox/mailbox3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">ذخیره و مدیریت پیش‌نویس‌های پیام‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه Drafts ماژول MailBox، کاربران می‌توانند پیام‌هایی که در حال نوشتن هستند اما هنوز ارسال نشده‌اند را ذخیره و در هر زمان به آن‌ها دسترسی داشته باشند. این صفحه
              امکان ویرایش، حذف یا ارسال پیش‌نویس‌ها را با سهولت فراهم می‌کند و به کاربران اجازه می‌دهد تا پیام‌های خود را با دقت و بدون نگرانی از دست دادن اطلاعات تکمیل کنند.
              طراحی کاربرپسند این بخش، مدیریت پیش‌نویس‌ها را سریع و منظم می‌سازد و به بهبود فرآیند ارتباطات کمک می‌کند.
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
          <p class="text-2xl font-medium">مشاهده پیام</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              کاربران می‌توانند محتوا و جزئیات کامل هر پیام دریافتی را به‌راحتی مشاهده کنند. این صفحه امکانات متنوعی مانند پاسخ‌دهی سریع، فوروارد کردن، حذف و علامت‌گذاری پیام را در
              اختیار کاربر قرار می‌دهد. همچنین قابلیت نمایش فایل‌های پیوست شده و مدیریت بهتر مکاتبات با گزینه‌هایی مانند آرشیو و انتقال پیام به پوشه‌های مختلف، تجربه‌ای کارآمد و
              سازمان‌یافته از مدیریت صندوق پستی فراهم می‌کند. طراحی این بخش با تمرکز بر سادگی و دسترسی سریع، به کاربران امکان می‌دهد ارتباطات خود را با دقت و سرعت بیشتری مدیریت
              کنند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Mailbox/mailbox4.png" class="w-[700px] h-[300px]" alt="" />
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
                <Mailbox :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Mailbox</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Mailbox/mailbox1.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Mail Box به کاربران این امکان را می‌دهد که تمامی پیام‌ها و مکاتبات اینترنتی خود را در یک فضای امن و متمرکز مدیریت کنند. این ماژول با قابلیت‌های پیشرفته‌ای همچون
              دسته‌بندی، جستجو و فیلتر پیام‌ها، ارسال و دریافت سریع و هماهنگی با سایر سیستم‌ها، فرآیند مدیریت ارتباطات را ساده‌تر و کارآمدتر می‌سازد و به افزایش بهره‌وری و نظم در
              مکاتبات سازمان کمک می‌کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول MailBox در ERP OCTOPUS با هدف ارائه بستری امن و کارآمد برای مدیریت تمامی پیام‌ها و مکاتبات اینترنتی سازمان طراحی شده است. این ماژول امکان ارسال، دریافت، دسته‌بندی و
        آرشیو پیام‌ها را در یک فضای متمرکز و ساده فراهم می‌کند تا کاربران بتوانند به‌راحتی ارتباطات روزمره خود را مدیریت کنند. با امکانات پیشرفته‌ای مانند جستجوی سریع، فیلترهای
        هوشمند، علامت‌گذاری پیام‌ها و هماهنگی کامل با دیگر بخش‌های سیستم ERP، ماژول صندوق پستی اینترنتی به بهبود روند کاری، افزایش دقت در پاسخ‌دهی و حفظ نظم در تبادل اطلاعات کمک
        شایانی می‌کند. این ماژول به سازمان‌ها امکان می‌دهد تا تمامی مکاتبات دیجیتال خود را به صورت سازمان‌یافته و تحت کنترل داشته باشند و از اتلاف وقت و اطلاعات مهم جلوگیری کنند.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Mailbox</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Mailbox/mailbox1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">دریافت و مدیریت آسان پیام ‌ها</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            دریافت و مدیریت آسان پیام ‌ها در صفحه Inbox ماژول MailBox کاربران می‌توانند تمامی پیام‌های دریافتی خود را به‌صورت یکجا مشاهده و مدیریت کنند. این صفحه با طراحی ساده و
            کاربرپسند امکان دسته‌بندی، جستجو و فیلتر پیام‌ها را فراهم می‌کند تا کاربران بتوانند به سرعت پیام‌های مهم را پیدا کرده و پاسخ دهند. علاوه بر این، قابلیت علامت‌گذاری
            پیام‌ها و انتقال آن‌ها به پوشه‌های مختلف، نظم بیشتری به صندوق پستی می‌بخشد و فرآیند مدیریت مکاتبات را بهینه می‌کند.
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
        <img src="/images/ModuleDetails/Mailbox/mailbox2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">ارسال پیام‌های دقیق و سازمان‌یافته</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Compose ماژول Mail Box، کاربران می‌توانند پیام‌های جدید خود را با امکانات کامل و حرفه‌ای ایجاد و ارسال کنند. این صفحه امکان افزودن گیرندگان اصلی، همچنین استفاده از
        قابلیت‌های BCC و CC برای ارسال پیام به مخاطبین مختلف به‌صورت خصوصی یا عمومی را فراهم می‌کند. طراحی ساده و کاربرپسند این صفحه باعث می‌شود فرایند نوشتن و ارسال پیام‌ها سریع و
        بدون اشتباه انجام شود و کاربران بتوانند ارتباطات خود را به شکل موثری مدیریت کنند.
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
      <img src="/images/ModuleDetails/Mailbox/mailbox3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">ذخیره و مدیریت پیش‌نویس‌های پیام‌ها</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه Drafts ماژول MailBox، کاربران می‌توانند پیام‌هایی که در حال نوشتن هستند اما هنوز ارسال نشده‌اند را ذخیره و در هر زمان به آن‌ها دسترسی داشته باشند. این صفحه امکان
        ویرایش، حذف یا ارسال پیش‌نویس‌ها را با سهولت فراهم می‌کند و به کاربران اجازه می‌دهد تا پیام‌های خود را با دقت و بدون نگرانی از دست دادن اطلاعات تکمیل کنند. طراحی کاربرپسند
        این بخش، مدیریت پیش‌نویس‌ها را سریع و منظم می‌سازد و به بهبود فرآیند ارتباطات کمک می‌کند.
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
      <img src="/images/ModuleDetails/Mailbox/mailbox4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">مشاهده پیام</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          کاربران می‌توانند محتوا و جزئیات کامل هر پیام دریافتی را به‌راحتی مشاهده کنند. این صفحه امکانات متنوعی مانند پاسخ‌دهی سریع، فوروارد کردن، حذف و علامت‌گذاری پیام را در
          اختیار کاربر قرار می‌دهد. همچنین قابلیت نمایش فایل‌های پیوست شده و مدیریت بهتر مکاتبات با گزینه‌هایی مانند آرشیو و انتقال پیام به پوشه‌های مختلف، تجربه‌ای کارآمد و
          سازمان‌یافته از مدیریت صندوق پستی فراهم می‌کند. طراحی این بخش با تمرکز بر سادگی و دسترسی سریع، به کاربران امکان می‌دهد ارتباطات خود را با دقت و سرعت بیشتری مدیریت کنند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
