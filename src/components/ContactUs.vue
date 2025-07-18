<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HeaderSection from "./HomePage/HeaderSection.vue";
import HeaderSectionMob from "./HomePageMobile/HeaderSectionMob.vue";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}

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
  if (type === "success") showSuccessToast.value = true;
  else showErrorToast.value = true;

  setTimeout(() => {
    if (type === "success") showSuccessToast.value = false;
    else showErrorToast.value = false;
  }, 4000);
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

const props = defineProps({});

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
  <div class="fixed top-4 right-4 flex flex-col gap-2 items-end z-50 pointer-events-none">
    <transition name="fade">
      <div v-if="showSuccessToast" class="mt-4 bg-green-600 text-xl text-white px-4 py-2 rounded-lg shadow pointer-events-auto">پیام شما با موفقیت ارسال شد.</div>
    </transition>
    <transition name="fade">
      <div v-if="showErrorToast" class="mt-4 bg-red-600 text-white text-xl px-4 py-2 rounded-lg shadow pointer-events-auto">ارسال پیام ناموفق بود. لطفاً دوباره تلاش کنید.</div>
    </transition>
  </div>
  <div class="grid grid-cols-12 mb-36">
    <div class="col-span-full lg:block hidden -mt-24">
      <HeaderSection @handleDisplay="handleDisplay" />
    </div>
    <div class="col-span-full lg:hidden block -mt-24">
      <HeaderSectionMob @handleDisplay="handleDisplay" />
    </div>
    <!-- About us -->
    <div class="col-span-full flex mb-20 justify-center w-full mt-20">
      <div class="flex flex-col border-b-4 border-neutral-600">
        <div class="pb-5 text-4xl font-black">تماس با ما</div>
      </div>
    </div>
    <div class="col-span-full pt-6" dir="rtl">
      <div class="lg:px-28 sm:px-5 flex lg:justify-center justify-start">
        <p class="leading-loose text-justify text-xl">
          در صورت تمایل به دریافت اطلاعات بیشتر در خصوص سامانه ERP، درخواست مشاوره تخصصی، یا برقراری ارتباط جهت همکاری، لطفاً فرم زیر را با دقت تکمیل فرمایید.<br />کارشناسان ما پس
          از بررسی درخواست شما، در کوتاه‌ترین زمان ممکن پاسخ‌گوی نیازتان خواهند بود. همچنین می‌توانید از طریق اطلاعات تماس درج‌شده در این صفحه با ما در ارتباط باشید.
        </p>
      </div>
    </div>
    <div class="col-span-full pt-6" dir="rtl">
      <div class="grid grid-cols-2 gap-10 lg:px-28 sm:px-5">
        <!-- message form -->
        <div class="lg:col-span-1 col-span-full">
          <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-5">
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
        <!-- information -->
        <div class="lg:col-span-1 col-span-full">
          <div class="flex flex-col gap-4">
            <!-- Address -->
            <div class="flex lg:flex-row flex-col gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 -mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p class="text-xl">آدرس : تهران – خیابان میرزای شیرازی – پایین تر از بهشتی – نبش کوچه شهدا – پلاک 229 – واحد 10</p>
            </div>
            <!-- phone -->
            <div class="flex lg:flex-row flex-col gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <p class="text-xl">تلفن : ۸۸۵۵۴۴۱ – ۸۸۵۵۳۵۶۸ – ۸۸۵۵۴۹۹۵ - ۰۲۱</p>
            </div>
            <!-- Email -->
            <a href="mailto:info@octopus.com" target="_blank" class="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <p class="text-xl">info@octopus.com</p>
            </a>
            <!-- Whats app -->
            <a href="whatsapp://send?text=سلام&phone=+989124807191" target="_blank" class="flex gap-3">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.0498 5.41005C18.1329 4.48416 17.0408 3.75002 15.8373 3.25042C14.6338 2.75081 13.3429 2.49574 12.0398 2.50005C6.5798 2.50005 2.1298 6.95005 2.1298 12.4101C2.1298 14.1601 2.5898 15.8601 3.4498 17.3601L2.0498 22.5001L7.2998 21.1201C8.7498 21.9101 10.3798 22.3301 12.0398 22.3301C17.4998 22.3301 21.9498 17.8801 21.9498 12.4201C21.9498 9.77005 20.9198 7.28005 19.0498 5.41005ZM12.0398 20.6501C10.5598 20.6501 9.1098 20.2501 7.8398 19.5001L7.5398 19.3201L4.4198 20.1401L5.2498 17.1001L5.0498 16.7901C4.22735 15.4771 3.79073 13.9593 3.7898 12.4101C3.7898 7.87005 7.4898 4.17005 12.0298 4.17005C14.2298 4.17005 16.2998 5.03005 17.8498 6.59005C18.6174 7.35392 19.2257 8.2626 19.6394 9.26338C20.0531 10.2642 20.264 11.3371 20.2598 12.4201C20.2798 16.9601 16.5798 20.6501 12.0398 20.6501ZM16.5598 14.4901C16.3098 14.3701 15.0898 13.7701 14.8698 13.6801C14.6398 13.6001 14.4798 13.5601 14.3098 13.8001C14.1398 14.0501 13.6698 14.6101 13.5298 14.7701C13.3898 14.9401 13.2398 14.9601 12.9898 14.8301C12.7398 14.7101 11.9398 14.4401 10.9998 13.6001C10.2598 12.9401 9.7698 12.1301 9.6198 11.8801C9.4798 11.6301 9.5998 11.5001 9.7298 11.3701C9.8398 11.2601 9.9798 11.0801 10.0998 10.9401C10.2198 10.8001 10.2698 10.6901 10.3498 10.5301C10.4298 10.3601 10.3898 10.2201 10.3298 10.1001C10.2698 9.98005 9.7698 8.76005 9.5698 8.26005C9.3698 7.78005 9.1598 7.84005 9.0098 7.83005H8.5298C8.3598 7.83005 8.0998 7.89005 7.8698 8.14005C7.6498 8.39005 7.0098 8.99005 7.0098 10.2101C7.0098 11.4301 7.89981 12.6101 8.0198 12.7701C8.1398 12.9401 9.7698 15.4401 12.2498 16.5101C12.8398 16.7701 13.2998 16.9201 13.6598 17.0301C14.2498 17.2201 14.7898 17.1901 15.2198 17.1301C15.6998 17.0601 16.6898 16.5301 16.8898 15.9501C17.0998 15.3701 17.0998 14.8801 17.0298 14.7701C16.9598 14.6601 16.8098 14.6101 16.5598 14.4901Z"
                  fill="#404040" />
              </svg>

              <p class="text-xl">واتساپ</p>
            </a>
            <!-- map -->
            <div class="relative w-full h-80 mt-4 rounded-lg overflow-hidden ring-1 ring-neutral-300">
              <iframe
                width="100%"
                height="100%"
                style="border: 0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=35.72655123611572,51.416044008851095&hl=fa&z=15&output=embed">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
