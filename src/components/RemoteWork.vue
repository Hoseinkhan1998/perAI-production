<script setup>
import { ref } from "vue";
import People from "./SVG/People.vue";
import Task from "./SVG/Task.vue";
import Meeting from "./SVG/Meeting.vue";
import Chat from "./SVG/Chat.vue";
import { useRouter } from "vue-router";
import Project from "./SVG/Project.vue";
import CRM from "./SVG/CRM.vue";
import Timesheet from "./SVG/Timesheet.vue";
import CoinMaster from "./SVG/CoinMaster.vue";

const router = useRouter();
const emit = defineEmits(["handleDisplay", "goBack"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}

const modules = [
  {
    title: "people",
    description: "ثبت و مدیریت مشخصات کارکنان، مشتریان و تامین کنندگان",
    icon: People,
    to: "/people-module",
  },
  {
    title: "task",
    description: "ایجاد، واگذاری و پیگیری آسان وظایف برای نظم تیم",
    icon: Task,
    to: "/task-module",
  },
  {
    title: "project",
    description: "مدیریت پروژه با امکان زمان‌بندی و پیگیری پیشرفت پروژه",
    icon: Project,
    to: "/project-module",
  },
  {
    title: "meeting",
    description: "مدیریت، اطلاع رسانی و ثبت نتایج جلسات آنلاین و حضوری",
    icon: Meeting,
    to: "/meeting-module",
  },
  {
    title: "chat",
    description: "گفت‌وگوی آنلاین سریع برای تسهیل همکاری تیمی و افزایش بهره‌وری",
    icon: Chat,
    to: "/chat-module",
  },
  {
    title: "timesheet",
    description: "مدیریت زمان با پیگیری ساعات کاری و حضور و غیاب",
    icon: Timesheet,
    to: "/timesheet-module",
  },
  {
    title: "crm",
    description: "مدیریت مؤثر مشتری برای بهبود تجربه و افزایش وفاداری",
    icon: CRM,
    to: "/crm-module",
  },
  {
    title: "coinmaster",
    description: "افزایش انگیزه و بهره‌وری با امتیازدهی و پاداش",
    icon: CoinMaster,
    to: "/coinmaster-module",
  },
];

const others = [
  "پشتیبانی، آموزش و راه‌اندازی سریع توسط تیم اختصاصی با امکان آرشیو محتوای آموزشی",
  "تامین هزینه زیرساخت (هاست و سرور) با تعرفه پایه بر عهده مشتری",
  "بدون دریافت هزینه لایسنس و خدمات نرم‌افزاری",
  "فعال‌سازی فوری و در اسرع وقت",
  "ظــرفیـت پذیـــــرش محــــــــــدود ",
];

const WEB3FORMS_ACCESS_KEY = "b55ec0de-0bce-40ac-b9fc-417f86fcdd9e";
// const WEB3FORMS_ACCESS_KEY = "47772d95-1a04-4142-ba31-34d773c16d15";

const name = ref("");
const companyname = ref("");
const email = ref("");
const phone = ref("");
const title = ref("");
const description = ref("");

const showSuccessToast = ref(false);
const showErrorToast = ref(false);

function triggerToast(type) {
  if (type === "success") {
    showSuccessToast.value = true;
    setTimeout(() => {
      showSuccessToast.value = false;
    }, 4000);
  } else {
    showErrorToast.value = true;
    setTimeout(() => {
      showErrorToast.value = false;
    }, 4000);
  }
}

const submitForm = async () => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        companyname: companyname.value,
        email: email.value,
        phone: phone.value,
        title: title.value,
        description: description.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      triggerToast("success");

      // پاک‌کردن فیلدهای فرم بعد از ارسال موفق
      name.value = "";
      companyname.value = "";
      email.value = "";
      phone.value = "";
      title.value = "";
      description.value = "";
    } else {
      triggerToast("error");
      throw new Error(result.message || "ارسال پیام با مشکل مواجه شد.");
    }
  } catch (error) {
    triggerToast("error");
  }
};

const handlePhoneInput = (e) => {
  let input = e.target.value;
  const hasPlusAtStart = input.charAt(0) === "+";

  if (hasPlusAtStart) {
    input = "+" + input.slice(1).replace(/[^\d]/g, "");
  } else {
    input = input.replace(/\D/g, "");
  }

  input = input.substring(0, 15);

  phone.value = input;
};
</script>

<template>
  <div class="toast toast-top toast-end fixed z-50" ref="toastContainer"></div>
  <!-- desktop -->
  <div class="relative lg:grid grid-cols-12 hidden mb-36">
    <!-- top section -->
    <div
      class="relative col-span-full flex items-center pt-20 px-5 -top-[88px] inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(images/ModuleDetails/topmoduledetails.png)`, height: '100vh' }">
      <div class="grid grid-cols-12 items-center px-10 gap-10">
        <div class="col-span-6">
          <img src="/images/remotepic1.png" class="h-[60vh]" alt="" />
        </div>
        <div dir="rtl" class="col-span-6 text-neutral-100">
          <div class="flex flex-col gap-3 text-center">
            <p class="text-[6vh] font-semibold">کنارتان هستیم حتی در شرایط سخت</p>
            <p class="text-2xl mt-3 leading-relaxed">
              ابزار های دورکاری اختاپوس،<br />
              رایگان در خدمت کسب و کارها
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- description -->
    <div class="grid grid-cols-12 col-span-full gap-5 px-28">
      <div class="col-span-5">
        <img src="/images/remotepic2.png" class="w-[400px] h-[500px]" alt="" />
      </div>
      <div dir="rtl" class="col-span-7 text-neutral-900">
        <div class="flex flex-col gap-3">
          <p class="text-2xl font-medium">همدلی از همزبانی بهتر است</p>
          <div class="">
            <p class="text-xl mt-3 leading-relaxed text-justify">
              همدلی از همزبانی بهتر است. روزهایی را پشت سر گذاشته‌ایم که معنای کار، امنیت و ارتباط برای بسیاری از ما دگرگون شد.<br />
              جنگ ۱۲ روزه، چیزی فراتر از یک درگیری نظامی بود؛ این جنگ، یک شوک سنگین به رگ‌های اقتصاد، ارتباطات و پیوستگی تیم‌ها وارد کرد. قطع سراسری اینترنت، سکوت ناگهانی کانال‌های
              فروش، گسست در تیم‌ها و بلاتکلیفی وظایف، همه و همه نشان داد که سازمان‌ها بیش از همیشه به زیرساخت‌های چابک و قابل‌اعتماد نیاز دارند.<br />
              در چنین شرایطی، ما در تیم اختاپوس به‌عنوان یک استارتاپ ایرانی فعال در توسعه نرم‌افزار مدیریت یکپارچه منابع سازمانی نه‌تنها با همین چالش‌ها روبرو شدیم، بلکه با تکیه بر
              ابزارهایی که خودمان ساخته بودیم، توانستیم از دل بحران عبور کنیم. به همین علت تصمیم گرفتیم تا در چارچوب مسئولیت اجتماعی و در پاسخ به وضعیت پرمخاطره‌ی کسب‌وکارهای
              ایرانی، لایسنس ماژول‌های کارتیمی اختاپوس که ابزارهایی متناسب با شرایط دورکاری را نیز شامل می‌شود به‌صورت رایگان در اختیار سازمان‌هایی قرار دهیم که تحت‌تأثیر بحران
              اخیر قرار گرفته‌اند.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- big divider -->
    <div dir="rtl" class="col-span-full mt-10">
      <svg width="848" height="170" viewBox="0 0 848 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M954 168.918L795.083 10.0005H17" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- mudoles -->
    <div class="col-span-full text-center -mt-28">
      <p class="text-2xl font-semibold">:جزئیات این طرح حمایتی به شرح زیر است</p>
    </div>
    <div class="col-span-full text-right px-28 flex items-center justify-end gap-2">
      <p class="text-xl font-semibold">:فعالسازی رایگان لایسنس نرم‌افزار شامل ماژول‌های</p>
      <div class="bg-black rounded-full size-2"></div>
    </div>
    <!-- carts -->
    <div dir="rtl" class="col-span-full grid grid-cols-12 px-28 gap-x-16 gap-y-5 mt-5">
      <div v-for="(mod, index) in modules" :key="index" class="col-span-6 flex">
        <router-link :to="mod.to" class="cursor-pointer flex-col flex gap-4">
          <div class="flex items-center gap-4">
            <div class="flex rounded-full border-2 border-current w-16 h-16 justify-center items-center border-solid">
              <component :is="mod.icon" :width="40" :height="40" />
            </div>
            <div class="uppercase border-b-[1px] text-xl border-neutral-700 border-solid font-semibold">
              {{ mod.title }}
            </div>
          </div>
          <div class="h-[1px] w-[250px] bg-neutral-400"></div>
          <p>{{ mod.description }}</p>
        </router-link>
      </div>
    </div>
    <!-- right divider -->
    <div dir="rtl" class="col-span-full mt-20">
      <svg width="423" height="169" viewBox="0 0 423 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M554.5 167.918L395.583 9.00046H17.5002" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(-180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <div dir="rtl" class="col-span-full px-28 -mt-28">
      <div class="grid grid-cols-12 gap-10">
        <div v-for="other in others" :key="other" class="col-span-6 flex gap-2">
          <div class="bg-black rounded-full size-2 mt-2"></div>
          <p class="font-semibold text-xl">{{ other }}</p>
        </div>
      </div>
    </div>
    <!-- left divider -->
    <div class="col-span-full mt-10">
      <svg width="740" height="170" viewBox="0 0 740 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-214 168.917L-55.083 9.99997H723" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="matrix(1 0 0 -1 722 18)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <div dir="rtl" class="col-span-full -mt-28 px-28">
      <p class="text-xl leading-relaxed text-justify">
        ما باور داریم که امروز بیش از هر زمان دیگر، پایداری و بقای کسب‌وکارهای ایرانی یک مسئولیت جمعی است.<br />
        اختاپوس با هدف حفظ بهره‌وری و سلامت منابع انسانی سازمان‌ها، تمام توان خود را در خدمت تیم‌هایی قرار می‌دهد که در شرایط دشوار نیز می‌کوشند چراغ فعالیت خود را روشن نگه دارند.
      </p>
    </div>
    <!-- message form -->
    <div class="col-span-full flex justify-center items-center mt-10">
      <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-5 w-2/6">
        <!-- name -->
        <div class="lg:col-span-1 col-span-full">
          <v-text-field
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            type="text"
            dir="rtl"
            name="name"
            v-model="name"
            autocomplete="off"
            placeholder="نام و نام خانوادگی *"
            density="compact"
            variant="outlined"
            required></v-text-field>
        </div>
        <!-- company name -->
        <div class="lg:col-span-1 col-span-full">
          <v-text-field
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            type="text"
            dir="rtl"
            name="companyname"
            v-model="companyname"
            autocomplete="off"
            placeholder="نام شرکت (اختیاری)"
            density="compact"
            variant="outlined"></v-text-field>
        </div>
        <!-- email -->
        <div class="lg:col-span-1 col-span-full">
          <v-text-field
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            dir="rtl"
            type="email"
            name="email"
            v-model="email"
            autocomplete="off"
            placeholder="ایمیل"
            density="compact"
            variant="outlined"></v-text-field>
        </div>
        <!-- phone -->
        <div class="lg:col-span-1 col-span-full">
          <v-text-field
            @input="handlePhoneInput"
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            type="text"
            name="phone"
            v-model="phone"
            autocomplete="off"
            dir="rtl"
            placeholder="شماره تماس *"
            required
            density="compact"
            variant="outlined"></v-text-field>
        </div>
        <!-- title -->
        <div class="col-span-full">
          <v-text-field
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            type="text"
            dir="rtl"
            name="title"
            v-model="title"
            autocomplete="off"
            placeholder="موضوع پیام"
            density="compact"
            variant="outlined"></v-text-field>
        </div>
        <!-- description -->
        <div class="col-span-full">
          <v-textarea
            dir="rtl"
            class="input mb-16 !bg-neutral-100 !outline-none !border-none !p-0 !m-0 col-span-3"
            rounded="lg"
            name="description"
            v-model="description"
            autocomplete="off"
            placeholder="متن پیام"
            density="compact"
            variant="outlined"
            rows="5"></v-textarea>
        </div>
        <button
          type="submit"
          class="col-span-full mt-5 flex items-start justify-center !text-neutral-100 bg-neutral-900 hover:dark:bg-neutral-700 transition-hover duration-150 dark:bg-neutral-800 ring-1 hover:bg-neutral-800 ring-neutral-100 rounded-md py-2">
          ارسال پیام
        </button>
      </form>
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
          <div class="flex flex-col justify-center items-center pe-4 gap-3">
            <div class="flex flex-col gap-3 text-center">
              <p class="text-2xl font-semibold">کنارتان هستیم حتی در شرایط سخت</p>
              <p class="text-xl mt-3 leading-relaxed">
                ابزار های دورکاری اختاپوس،<br />
                رایگان در خدمت کسب و کارها
              </p>
            </div>
            <img src="/images/remotepic1.png" class="h-[30vh]" alt="" />
          </div>
        </div>
        <div class="col-span-full"></div>
      </div>
    </div>
    <!-- description -->
    <div dir="rtl" class="col-span-full px-5 text-xl">
      <div class="flex flex-col gap-3">
        <p class="text-2xl font-medium">همدلی از همزبانی بهتر است</p>
        <div class="">
          <p class="text-xl mt-3 leading-relaxed text-justify">
            همدلی از همزبانی بهتر است. روزهایی را پشت سر گذاشته‌ایم که معنای کار، امنیت و ارتباط برای بسیاری از ما دگرگون شد.<br />
            جنگ ۱۲ روزه، چیزی فراتر از یک درگیری نظامی بود؛ این جنگ، یک شوک سنگین به رگ‌های اقتصاد، ارتباطات و پیوستگی تیم‌ها وارد کرد. قطع سراسری اینترنت، سکوت ناگهانی کانال‌های
            فروش، گسست در تیم‌ها و بلاتکلیفی وظایف، همه و همه نشان داد که سازمان‌ها بیش از همیشه به زیرساخت‌های چابک و قابل‌اعتماد نیاز دارند.<br />
            در چنین شرایطی، ما در تیم اختاپوس به‌عنوان یک استارتاپ ایرانی فعال در توسعه نرم‌افزار مدیریت یکپارچه منابع سازمانی نه‌تنها با همین چالش‌ها روبرو شدیم، بلکه با تکیه بر
            ابزارهایی که خودمان ساخته بودیم، توانستیم از دل بحران عبور کنیم. به همین علت تصمیم گرفتیم تا در چارچوب مسئولیت اجتماعی و در پاسخ به وضعیت پرمخاطره‌ی کسب‌وکارهای ایرانی،
            لایسنس ماژول‌های کارتیمی اختاپوس که ابزارهایی متناسب با شرایط دورکاری را نیز شامل می‌شود به‌صورت رایگان در اختیار سازمان‌هایی قرار دهیم که تحت‌تأثیر بحران اخیر قرار
            گرفته‌اند.
          </p>
        </div>
      </div>
    </div>
    <div class="col-span-full px-5 mt-10">
      <img src="/images/remotepic2.png" class="w-full h-[500px]" alt="" />
    </div>
    <!-- right divider -->
    <div dir="rtl" class="col-span-full pe-10 mt-10">
      <svg viewBox="0 0 423 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M554.5 167.918L395.583 9.00046H17.5002" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(-180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <!-- mudoles -->
    <div class="col-span-full text-center -mt-28 px-5">
      <p class="text-xl font-semibold">:جزئیات این طرح حمایتی به شرح زیر است</p>
    </div>
    <div class="col-span-full text-right px-5 -mt-10 flex items-center justify-end gap-2">
      <p class="font-semibold">:فعالسازی رایگان لایسنس نرم‌افزار شامل ماژول‌های</p>
      <div class="bg-black rounded-full size-2"></div>
    </div>
    <!-- carts -->
    <div dir="rtl" class="col-span-full grid grid-cols-12 px-5 gap-y-5 mt-5">
      <div v-for="(mod, index) in modules" :key="index" class="col-span-full flex">
        <router-link :to="mod.to" class="cursor-pointer flex-col flex gap-4">
          <div class="flex items-center gap-4">
            <div class="flex rounded-full border-2 border-current w-16 h-16 justify-center items-center border-solid">
              <component :is="mod.icon" :width="40" :height="40" />
            </div>
            <div class="uppercase border-b-[1px] text-xl border-neutral-700 border-solid font-semibold">
              {{ mod.title }}
            </div>
          </div>
          <div class="h-[1px] w-[250px] bg-neutral-400"></div>
          <p>{{ mod.description }}</p>
        </router-link>
      </div>
    </div>
    <!-- right divider -->
    <div dir="rtl" class="col-span-full pe-10 mt-10">
      <svg viewBox="0 0 423 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M554.5 167.918L395.583 9.00046H17.5002" stroke="#E5E5E5" stroke-width="3" />
        <circle cx="9" cy="9" r="7.5" transform="rotate(-180 9 9)" stroke="#E5E5E5" stroke-width="3" />
      </svg>
    </div>
    <div dir="rtl" class="col-span-full px-5 -mt-28">
      <div class="grid grid-cols-12 gap-y-3">
        <div v-for="other in others" :key="other" class="col-span-full flex gap-2">
          <div class="bg-black rounded-full size-2 mt-2"></div>
          <p class="font-semibold text-xl">{{ other }}</p>
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
    <div dir="rtl" class="col-span-full -mt-28 px-5">
      <p class="text-xl leading-relaxed text-justify">
        ما باور داریم که امروز بیش از هر زمان دیگر، پایداری و بقای کسب‌وکارهای ایرانی یک مسئولیت جمعی است.<br />
        اختاپوس با هدف حفظ بهره‌وری و سلامت منابع انسانی سازمان‌ها، تمام توان خود را در خدمت تیم‌هایی قرار می‌دهد که در شرایط دشوار نیز می‌کوشند چراغ فعالیت خود را روشن نگه دارند.
      </p>
    </div>
    <!-- message form -->
    <div class="col-span-full flex justify-center items-center mt-10">
      <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-5 w-full px-5">
        <!-- name -->
        <div class="col-span-full">
          <v-text-field
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            type="text"
            dir="rtl"
            name="name"
            v-model="name"
            autocomplete="off"
            placeholder="نام و نام خانوادگی *"
            density="compact"
            variant="outlined"
            required></v-text-field>
        </div>
        <!-- company name -->
        <div class="col-span-full">
          <v-text-field
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            type="text"
            dir="rtl"
            name="companyname"
            v-model="companyname"
            autocomplete="off"
            placeholder="نام شرکت (اختیاری)"
            density="compact"
            variant="outlined"></v-text-field>
        </div>
        <!-- email -->
        <div class="col-span-full">
          <v-text-field
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            dir="rtl"
            type="email"
            name="email"
            v-model="email"
            autocomplete="off"
            placeholder="ایمیل"
            density="compact"
            variant="outlined"></v-text-field>
        </div>
        <!-- phone -->
        <div class="col-span-full">
          <v-text-field
            @input="handlePhoneInput"
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            type="text"
            name="phone"
            v-model="phone"
            autocomplete="off"
            dir="rtl"
            placeholder="شماره تماس *"
            required
            density="compact"
            variant="outlined"></v-text-field>
        </div>
        <!-- title -->
        <div class="col-span-full">
          <v-text-field
            class="input !bg-neutral-100 dark:!bg-neutral-900 !outline-none !border-none !p-0 !m-0"
            rounded="lg"
            type="text"
            dir="rtl"
            name="title"
            v-model="title"
            autocomplete="off"
            placeholder="موضوع پیام"
            density="compact"
            variant="outlined"></v-text-field>
        </div>
        <!-- description -->
        <div class="col-span-full">
          <v-textarea
            dir="rtl"
            class="input mb-16 !bg-neutral-100 !outline-none !border-none !p-0 !m-0 col-span-3"
            rounded="lg"
            name="description"
            v-model="description"
            autocomplete="off"
            placeholder="متن پیام"
            density="compact"
            variant="outlined"
            rows="5"></v-textarea>
        </div>
        <button
          type="submit"
          class="col-span-full mt-5 flex items-start justify-center !text-neutral-100 bg-neutral-900 hover:dark:bg-neutral-700 transition-hover duration-150 dark:bg-neutral-800 ring-1 hover:bg-neutral-800 ring-neutral-100 rounded-md py-2">
          ارسال پیام
        </button>
      </form>
    </div>
  </div>
  <!-- toast -->
  <div class="toast toast-top toast-end">
    <div v-if="showSuccessToast" class="bg-green-600 text-white p-5 rounded-xl">
      <span class="text-right">.پیام با موفقیت ارسال شد</span>
    </div>
    <div v-if="showErrorToast" class="bg-red-600 text-white">
      <span class="text-right">.ارسال پیام با مشکل مواجه شد</span>
    </div>
  </div>
</template>

<style scoped>
/* انیمیشن برای ورود و خروج توست از سمت راست */
@keyframes slideInOut {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  90% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.toast > div {
  animation: slideInOut 4s ease-in-out forwards;
}
</style>
