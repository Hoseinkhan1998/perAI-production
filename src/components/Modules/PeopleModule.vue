<script setup>
import { ref } from "vue";
import Task from "../SVG/Task.vue";
import People from "../SVG/People.vue";
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
          <img src="/images/ModuleDetails/People/peopletop.png" alt="" />
        </div>
        <div dir="rtl" class="col-span-5 text-neutral-100">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div class="border-4 border-neutral-400 border-solid rounded-full h-20 w-20 flex items-center justify-center">
                <People :width="58" :height="58" :color="'text-neutral-100'" />
              </div>
              <p class="text-4xl">ماژول <span class="capitalize">people</span>:</p>
            </div>
            <p class="text-2xl mt-1 leading-relaxed text-justify">
              ماژول People مثل یک دفترچه تلفن هوشمند و پیشرفته است، اما با این تفاوت که به جای گم کردن شماره‌ها، همه چیز رو به‌صورت سازمان‌یافته و حرفه‌ای مدیریت می‌کنه! این ماژول
              به شما کمک می‌کنه تا تمامی اطلاعات مربوط به کارکنان، مشتریان و شرکا رو به‌صورت متمرکز و قابل جستجو ذخیره کنید. دیگه نیازی نیست دنبال کاغذهای پراکنده یا اکسل‌های
              گم‌شده بگردید؛ همه چیز در یک جای امن و قابل دسترس قرار داره.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-20 text-2xl">
      <p class="leading-relaxed text-justify">
        ماژول People نه‌تنها برای مدیریت اطلاعات داخلی سازمان مفیده، بلکه برای مدیریت اطلاعات مشتریان و شرکای خارجی هم مثل یک دستیار شخصی عمل می‌کنه. این ماژول به شما کمک می‌کنه تا
        اطلاعات رو به‌صورت ساختارمند نگه دارید و از شر خطاهای ناشی از مدیریت دستی اطلاعات خلاص بشید. به قول معروف، "دیگه وقتشه از شر کاغذبازی‌ها راحت بشید و همه چیز رو به اختاپوس
        بسپارید!"
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
      <p dir="rtl" class="text-2xl font-medium">ویژگی‌های اصلی ماژول People</p>
    </div>
    <!-- first step -->
    <div class="grid grid-cols-12 col-span-full gap-28 px-28">
      <div class="col-span-6">
        <img src="/images/ModuleDetails/People/people1.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">وارد کردن اشخاص سازمان</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              این ویژگی مثل اینه که یه لیست VIP از همه افراد سازمانتون داشته باشید! شما می‌تونید اطلاعات اولیه مثل نام، نام خانوادگی، سمت و بخش مربوطه رو وارد کنید و در صورت نیاز،
              اطلاعات بیشتری هم اضافه کنید. اینطوری همه اطلاعات افراد سازمان در یک مکان متمرکز ذخیره می‌شه و دیگه نیازی نیست دنبال کاغذهای پراکنده بگردید.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second step -->
    <div class="grid grid-cols-12 col-span-full gap-28 mt-20 px-28">
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="">
          <p class="text-2xl font-medium">وارد کردن تمامی اطلاعات افراد سازمان اعم از اطلاعات شخصی و بانکی</p>
          <div class="pe-10">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              با این ویژگی، می‌تونید اطلاعات کامل افراد شامل اطلاعات شخصی (مثل آدرس، شماره تماس و ایمیل) و اطلاعات بانکی (مثل شماره حساب و شماره شبا) رو وارد کنید. این اطلاعات
              به‌صورت امن ذخیره می‌شن و فقط برای افراد مجاز قابل دسترسی هستند. به قول معروف، "اطلاعات شما مثل گنجینه‌ست و اختاپوس هم مثل یک گنجور مطمئن عمل می‌کنه!"
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/People/people2.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/People/people3.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">ساختن گروه با یک سری از افراد سازمان به صورت شخصی</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              این ویژگی به شما امکان می‌ده تا گروه‌های خاصی از افراد سازمان رو ایجاد کنید. مثلاً می‌تونید گروه‌هایی برای بخش‌های مختلف سازمان یا پروژه‌های خاص ایجاد کنید. این
              گروه‌بندی به شما کمک می‌کنه تا ارتباطات و هماهنگی‌ها رو به‌صورت موثرتری مدیریت کنید. به قول معروف، "دیگه نیازی نیست برای هر پروژه جدید، گروه‌های واتساپ جدید بسازید؛
              همه چیز اینجا سازمان‌یافته‌ست! ”
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
          <p class="text-2xl font-medium">وارد کردن شرکت جدید و تمامی اطلاعات آن شرکت</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              این ویژگی به شما امکان می‌ده تا اطلاعات شرکت‌های همکار یا مشتریان خود رو وارد کنید. شما می‌تونید اطلاعاتی مثل نام شرکت، آدرس، شماره تماس و اطلاعات تماس افراد مرتبط با
              شرکت رو ذخیره کنید. این اطلاعات به شما کمک می‌کنه تا ارتباطات خود با شرکت‌های خارجی رو به‌صورت سازمان‌یافته مدیریت کنید. به قول معروف، "دیگه نیازی نیست دنبال کارت
              ویزیت‌های گم‌شده بگردید؛ همه چیز اینجا ذخیره شده . “
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <img src="/images/ModuleDetails/People/people4.png" class="w-[700px] h-[300px]" alt="" />
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
        <img src="/images/ModuleDetails/People/people5.png" class="w-[700px] h-[300px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-6 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">وارد نمودن مشخصات افراد به‌صورت خصوصی (Private)</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              این ویژگی به شما امکان می‌ده تا اطلاعات حساس افراد رو به‌صورت خصوصی ذخیره کنید. اطلاعات خصوصی فقط برای افراد مجاز قابل مشاهده‌ست و از دسترسی غیرمجاز به این اطلاعات
              جلوگیری می‌شه. این ویژگی به حفظ حریم شخصی افراد کمک می‌کنه و امنیت داده‌ها رو افزایش می‌ده. به قول معروف، "اطلاعات خصوصی شما مثل رازهای کوچولو هستند و اختاپوس هم مثل
              یک محافظ مطمئن عمل می‌کنه! “
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
                <People :width="38" :height="38" :color="'text-neutral-100'" />
              </div>
              <p class="text-2xl">ماژول <span class="capitalize">People</span>:</p>
            </div>
            <img src="/images/ModuleDetails/People/peopletop.png" class="w-full h-[200px]" alt="" />
            <p class="text-2xl mt-1 leading-relaxed text-justify text-justify">
              ماژول People مثل یک دفترچه تلفن هوشمند و پیشرفته است، اما با این تفاوت که به جای گم کردن شماره‌ها، همه چیز رو به‌صورت سازمان‌یافته و حرفه‌ای مدیریت می‌کنه! این ماژول
              به شما کمک می‌کنه تا تمامی اطلاعات مربوط به کارکنان، مشتریان و شرکا رو به‌صورت متمرکز و قابل جستجو ذخیره کنید. دیگه نیازی نیست دنبال کاغذهای پراکنده یا اکسل‌های
              گم‌شده بگردید؛ همه چیز در یک جای امن و قابل دسترس قرار داره.
            </p>
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <p class="leading-relaxed text-justify">
        ماژول People نه‌تنها برای مدیریت اطلاعات داخلی سازمان مفیده، بلکه برای مدیریت اطلاعات مشتریان و شرکای خارجی هم مثل یک دستیار شخصی عمل می‌کنه. این ماژول به شما کمک می‌کنه تا
        اطلاعات رو به‌صورت ساختارمند نگه دارید و از شر خطاهای ناشی از مدیریت دستی اطلاعات خلاص بشید. به قول معروف، "دیگه وقتشه از شر کاغذبازی‌ها راحت بشید و همه چیز رو به اختاپوس
        بسپارید!"
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
      <p dir="rtl" class="text-2xl font-semibold">ویژگی‌های اصلی ماژول People</p>
    </div>
    <!-- first step -->
    <div class="col-span-full mt-5 px-4">
      <img src="/images/ModuleDetails/People/people1.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full mt-5 px-5 text-neutral-900">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">وارد کردن اشخاص سازمان</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            این ویژگی مثل اینه که یه لیست VIP از همه افراد سازمانتون داشته باشید! شما می‌تونید اطلاعات اولیه مثل نام، نام خانوادگی، سمت و بخش مربوطه رو وارد کنید و در صورت نیاز،
            اطلاعات بیشتری هم اضافه کنید. اینطوری همه اطلاعات افراد سازمان در یک مکان متمرکز ذخیره می‌شه و دیگه نیازی نیست دنبال کاغذهای پراکنده بگردید.
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
        <img src="/images/ModuleDetails/People/people2.png" class="w-full h-[200px]" alt="" />
      </div>
      <p class="text-2xl font-medium mt-5">وارد کردن تمامی اطلاعات افراد سازمان اعم از اطلاعات شخصی و بانکی</p>
      <p class="text-xl leading-relaxed text-justify mt-5">
        با این ویژگی، می‌تونید اطلاعات کامل افراد شامل اطلاعات شخصی (مثل آدرس، شماره تماس و ایمیل) و اطلاعات بانکی (مثل شماره حساب و شماره شبا) رو وارد کنید. این اطلاعات به‌صورت
        امن ذخیره می‌شن و فقط برای افراد مجاز قابل دسترسی هستند. به قول معروف، "اطلاعات شما مثل گنجینه‌ست و اختاپوس هم مثل یک گنجور مطمئن عمل می‌کنه!"
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
      <img src="/images/ModuleDetails/People/people3.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full px-5 text-neutral-900 mt-5">
      <p class="text-2xl font-medium">ساختن گروه با یک سری از افراد سازمان به صورت شخصی</p>
      <p class="text-xl leading-relaxed text-justify mt-5">
        این ویژگی به شما امکان می‌ده تا گروه‌های خاصی از افراد سازمان رو ایجاد کنید. مثلاً می‌تونید گروه‌هایی برای بخش‌های مختلف سازمان یا پروژه‌های خاص ایجاد کنید. این گروه‌بندی
        به شما کمک می‌کنه تا ارتباطات و هماهنگی‌ها رو به‌صورت موثرتری مدیریت کنید. به قول معروف، "دیگه نیازی نیست برای هر پروژه جدید، گروه‌های واتساپ جدید بسازید؛ همه چیز اینجا
        سازمان‌یافته‌ست! ”
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
      <img src="/images/ModuleDetails/People/people4.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5 mt-5">
      <p class="text-2xl font-medium">وارد کردن شرکت جدید و تمامی اطلاعات آن شرکت</p>
      <div class="">
        <p class="text-xl leading-relaxed text-justify mt-5">
          این ویژگی به شما امکان می‌ده تا اطلاعات شرکت‌های همکار یا مشتریان خود رو وارد کنید. شما می‌تونید اطلاعاتی مثل نام شرکت، آدرس، شماره تماس و اطلاعات تماس افراد مرتبط با
          شرکت رو ذخیره کنید. این اطلاعات به شما کمک می‌کنه تا ارتباطات خود با شرکت‌های خارجی رو به‌صورت سازمان‌یافته مدیریت کنید. به قول معروف، "دیگه نیازی نیست دنبال کارت
          ویزیت‌های گم‌شده بگردید؛ همه چیز اینجا ذخیره شده . “
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
      <img src="/images/ModuleDetails/People/people5.png" class="w-full h-[200px]" alt="" />
    </div>
    <div dir="rtl" class="col-span-full text-neutral-900 px-5">
      <div class="flex flex-col mt-5">
        <p class="text-2xl font-medium">وارد نمودن مشخصات افراد به‌صورت خصوصی (Private)</p>
        <p class="text-xl leading-relaxed text-justify mt-5">
          این ویژگی به شما امکان می‌ده تا اطلاعات حساس افراد رو به‌صورت خصوصی ذخیره کنید. اطلاعات خصوصی فقط برای افراد مجاز قابل مشاهده‌ست و از دسترسی غیرمجاز به این اطلاعات
          جلوگیری می‌شه. این ویژگی به حفظ حریم شخصی افراد کمک می‌کنه و امنیت داده‌ها رو افزایش می‌ده. به قول معروف، "اطلاعات خصوصی شما مثل رازهای کوچولو هستند و اختاپوس هم مثل یک
          محافظ مطمئن عمل می‌کنه! “
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
