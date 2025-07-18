<script setup>
import { ref } from "vue";
import Chat from "../SVG/Chat.vue";
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
          <img src="/images/ModuleDetails/Chat/chattop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <Chat :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="uppercase">Chat</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Chat بستری ساده و امن برای گفت‌وگوهای درون‌سازمانی فراهم می‌کند. این ماژول امکان ارسال پیام‌های متنی، صوتی و اشتراک‌گذاری فایل را به صورت فردی و گروهی میسر
              می‌سازد و ارتباطات تیمی را به شکل موثر و سریع بهبود می‌بخشد. طراحی کاربرپسند این ماژول، همکاری و هماهنگی بین اعضای سازمان را آسان‌تر می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول Chat در ERP OCTOPUS با هدف تسهیل و بهبود ارتباطات داخلی سازمان طراحی شده است. این ماژول امکان گفت‌وگوی فوری، ارسال پیام‌های متنی، صوتی و تصویری را در محیطی امن و قابل
        مدیریت فراهم می‌کند. کاربران می‌توانند به صورت فردی یا گروهی ارتباط برقرار کنند، فایل‌ها و اطلاعات مهم را به اشتراک بگذارند و گفتگوها را به‌سادگی پیگیری کنند. با طراحی
        کاربرپسند و امکانات پیشرفته، ماژول چت به افزایش همکاری تیمی، کاهش زمان پاسخ‌دهی و ارتقاء بهره‌وری سازمان کمک می‌کند.
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
      <p dir="rtl" class="text-2xl font-medium uppercase">ویژگی‌های اصلی ماژول Chat</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Chat/chat1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">دسترسی سریع به گفتگوها و کانتکت‌ها</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه اصلی ماژول Chat ، کاربران می‌توانند به‌راحتی بین گفتگوهای فردی، گروهی و پیام‌های مرتبط از سایر ماژول‌ها جابجا شوند. این صفحه با نمایش فهرستی مرتب از کانتکت‌ها
              و گروه‌ها، امکان انتخاب سریع و دسترسی آسان به مکالمات جاری را فراهم می‌کند. طراحی هوشمند و کاربرپسند این بخش، مدیریت ارتباطات را ساده‌تر کرده و تجربه گفتگو را بهینه
              می‌سازد.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">مدیریت جامع و سریع مکالمات</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در صفحه مشاهده همه چت‌ها، کاربران می‌توانند تمام گفتگوهای فردی و گروهی خود را به صورت یکجا مشاهده و مدیریت کنند. این صفحه با امکاناتی مانند جستجو، فیلتر و مرتب‌سازی،
              به کاربران کمک می‌کند به سرعت به مکالمات موردنظر دسترسی پیدا کنند و روند ارتباطات خود را به‌صورت سازمان‌یافته دنبال کنند. طراحی ساده و کاربردی این بخش، تجربه کاربری
              روان و کارآمدی را در مدیریت چت‌ها فراهم می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Chat/chat2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Chat/chat3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">مدیریت جزئیات و تکرار وظایف با To-Do و روتین !</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              مدیران می‌توانند نمایی کلی از فعالیت‌های ارتباطی در ماژول CHAT را مشاهده کنند. این صفحه با ارائه آمارهایی مانند تعداد پیام‌های ارسال‌شده، فعال‌ترین کاربران، حجم
              پیام‌ها در بازه‌های زمانی مختلف و میزان مشارکت در گفتگوهای گروهی، پیام های انقادی و تشویقی، به تحلیل و بهینه‌سازی ارتباطات درون‌سازمانی کمک می‌کند. طراحی این بخش با
              تمرکز بر نمایش داده‌های کاربردی و قابل فهم، ابزار مناسبی برای ارزیابی و ارتقاء کیفیت ارتباطات تیمی در اختیار سازمان قرار می‌دهد.
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
          <p class="text-2xl font-medium">دسته‌بندی احساسی پیام‌ها برای بهبود تعاملات</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              دسته‌بندی احساسی پیام‌ها برای بهبود تعاملات پیام‌های کاربران بر اساس لحن و محتوای احساسی مشخص به سه دسته مثبت، منفی و خنثی تحلیل و دسته‌بندی می‌شوند. این ابزار به
              مدیران و تیم منابع انسانی کمک می‌کند تا روند کلی تعاملات را بهتر درک کرده و نقاط ضعف یا تنش‌های احتمالی را شناسایی کنند. با استفاده از نمودارها و آمارهای قابل درک،
              این صفحه دیدی روشن از فضای ارتباطی سازمان ارائه می‌دهد و به بهبود فرهنگ گفت‌وگو و روابط تیمی کمک می‌کند.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/Chat/chat4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/Chat/chat5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">ایجاد فضای گفت‌وگوی تیمی</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              در ماژول CHAT، کاربران می‌توانند به‌راحتی گروه‌های جدیدی برای گفت‌وگوی تیمی ایجاد کنند. هنگام ساخت گروه، امکان انتخاب اعضا، تعیین نام، تصویر گروه و تنظیم سطح دسترسی‌
              فراهم است. این قابلیت به تیم‌ها کمک می‌کند تا مکالمات خود را در فضای اختصاصی و منظم دنبال کرده و همکاری مؤثرتری در پروژه‌ها و فعالیت‌های روزمره داشته باشند.
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
                <Chat :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="uppercase">Chat</span>:</p>
            </div>
            <img src="/images/ModuleDetails/Chat/chattop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول Chat بستری ساده و امن برای گفت‌وگوهای درون‌سازمانی فراهم می‌کند. این ماژول امکان ارسال پیام‌های متنی، صوتی و اشتراک‌گذاری فایل را به صورت فردی و گروهی میسر
              می‌سازد و ارتباطات تیمی را به شکل موثر و سریع بهبود می‌بخشد. طراحی کاربرپسند این ماژول، همکاری و هماهنگی بین اعضای سازمان را آسان‌تر می‌کند.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول Chat در ERP OCTOPUS با هدف تسهیل و بهبود ارتباطات داخلی سازمان طراحی شده است. این ماژول امکان گفت‌وگوی فوری، ارسال پیام‌های متنی، صوتی و تصویری را در محیطی امن و قابل
        مدیریت فراهم می‌کند. کاربران می‌توانند به صورت فردی یا گروهی ارتباط برقرار کنند، فایل‌ها و اطلاعات مهم را به اشتراک بگذارند و گفتگوها را به‌سادگی پیگیری کنند. با طراحی
        کاربرپسند و امکانات پیشرفته، ماژول چت به افزایش همکاری تیمی، کاهش زمان پاسخ‌دهی و ارتقاء بهره‌وری سازمان کمک می‌کند.
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
      <p dir="rtl" class="text-2xl font-semibold uppercase">ویژگی‌های اصلی ماژول Chat</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/Chat/chat1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">دسترسی سریع به گفتگوها و کانتکت‌ها</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            در صفحه اصلی ماژول Chat ، کاربران می‌توانند به‌راحتی بین گفتگوهای فردی، گروهی و پیام‌های مرتبط از سایر ماژول‌ها جابجا شوند. این صفحه با نمایش فهرستی مرتب از کانتکت‌ها و
            گروه‌ها، امکان انتخاب سریع و دسترسی آسان به مکالمات جاری را فراهم می‌کند. طراحی هوشمند و کاربرپسند این بخش، مدیریت ارتباطات را ساده‌تر کرده و تجربه گفتگو را بهینه
            می‌سازد.
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
        <img src="/images/ModuleDetails/Chat/chat2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">مدیریت جامع و سریع مکالمات</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        در صفحه مشاهده همه چت‌ها، کاربران می‌توانند تمام گفتگوهای فردی و گروهی خود را به صورت یکجا مشاهده و مدیریت کنند. این صفحه با امکاناتی مانند جستجو، فیلتر و مرتب‌سازی، به
        کاربران کمک می‌کند به سرعت به مکالمات موردنظر دسترسی پیدا کنند و روند ارتباطات خود را به‌صورت سازمان‌یافته دنبال کنند. طراحی ساده و کاربردی این بخش، تجربه کاربری روان و
        کارآمدی را در مدیریت چت‌ها فراهم می‌کند.
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
      <img src="/images/ModuleDetails/Chat/chat3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">مدیریت جزئیات و تکرار وظایف با To-Do و روتین !</p>
      <p class="text-xl leading-relaxed mt-5 text-justify">
        مدیران می‌توانند نمایی کلی از فعالیت‌های ارتباطی در ماژول CHAT را مشاهده کنند. این صفحه با ارائه آمارهایی مانند تعداد پیام‌های ارسال‌شده، فعال‌ترین کاربران، حجم پیام‌ها در
        بازه‌های زمانی مختلف و میزان مشارکت در گفتگوهای گروهی، پیام های انقادی و تشویقی، به تحلیل و بهینه‌سازی ارتباطات درون‌سازمانی کمک می‌کند. طراحی این بخش با تمرکز بر نمایش
        داده‌های کاربردی و قابل فهم، ابزار مناسبی برای ارزیابی و ارتقاء کیفیت ارتباطات تیمی در اختیار سازمان قرار می‌دهد.
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
      <img src="/images/ModuleDetails/Chat/chat4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">دسته‌بندی احساسی پیام‌ها برای بهبود تعاملات</p>
      <div class="">
        <p class="text-xl leading-relaxed mt-5 text-justify">
          پیام‌های کاربران بر اساس لحن و محتوای احساسی مشخص به سه دسته مثبت، منفی و خنثی تحلیل و دسته‌بندی می‌شوند. این ابزار به مدیران و تیم منابع انسانی کمک می‌کند تا روند کلی
          تعاملات را بهتر درک کرده و نقاط ضعف یا تنش‌های احتمالی را شناسایی کنند. با استفاده از نمودارها و آمارهای قابل درک، این صفحه دیدی روشن از فضای ارتباطی سازمان ارائه می‌دهد
          و به بهبود فرهنگ گفت‌وگو و روابط تیمی کمک می‌کند.
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
      <img src="/images/ModuleDetails/Chat/chat5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">ایجاد فضای گفت‌وگوی تیمی</p>
        <p class="text-xl leading-relaxed mt-5 text-justify">
          در ماژول CHAT، کاربران می‌توانند به‌راحتی گروه‌های جدیدی برای گفت‌وگوی تیمی ایجاد کنند. هنگام ساخت گروه، امکان انتخاب اعضا، تعیین نام، تصویر گروه و تنظیم سطح دسترسی‌
          فراهم است. این قابلیت به تیم‌ها کمک می‌کند تا مکالمات خود را در فضای اختصاصی و منظم دنبال کرده و همکاری مؤثرتری در پروژه‌ها و فعالیت‌های روزمره داشته باشند.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
