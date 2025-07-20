<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}

const WEB3FORMS_ACCESS_KEY = "47772d95-1a04-4142-ba31-34d773c16d15";

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
