<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}

const WEB3FORMS_ACCESS_KEY = "47772d95-1a04-4142-ba31-34d773c16d15";

const name = ref("");
const email = ref("");
// const phone = ref("");
const message = ref("");

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
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      triggerToast("success");

      // پاک‌کردن فیلدهای فرم بعد از ارسال موفق
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      triggerToast("error");
      throw new Error(result.message || "ارسال پیام با مشکل مواجه شد.");
    }
  } catch (error) {
    triggerToast("error");
  }
};

function resetForm() {
  name.value = "";
  email.value = "";
  message.value = "";
}

const props = defineProps({});

// const handlePhoneInput = (e) => {
//   let input = e.target.value;
//   const hasPlusAtStart = input.charAt(0) === "+";

//   if (hasPlusAtStart) {
//     input = "+" + input.slice(1).replace(/[^\d]/g, "");
//   } else {
//     input = input.replace(/\D/g, "");
//   }

//   input = input.substring(0, 15);

//   phone.value = input;
// };
</script>

<template>
  <div class="fixed top-4 right-4 flex flex-col gap-2 items-end z-50 pointer-events-none">
    <transition name="fade">
      <div v-if="showSuccessToast" class="mt-4 bg-green-600 text-xl text-white px-4 py-2 rounded-lg shadow pointer-events-auto">Your message was sent successfully.</div>
    </transition>
    <transition name="fade">
      <div v-if="showErrorToast" class="mt-4 bg-red-600 text-white text-xl px-4 py-2 rounded-lg shadow pointer-events-auto">Failed to send message. Please try again.</div>
    </transition>
  </div>
  <div
    class="flex ps-20 text-white rounded-xl items-center justify-center bg-cover bg-center mx-20 relative"
    :style="{ backgroundImage: `url(images/contatus.png)`, height: '50vh' }">
    <div class="grid grid-cols-12 items-center">
      <div class="col-span-7 flex gap-4 flex-col">
        <p>Ready to Innovate?</p>
        <p class="text-5xl leading-snug">Get Started with Our AI Consulting Services Today!</p>
        <p>Contact us to learn how our AI experts can help you bring your ideas to life. From concept to completion, we are your trusted partner in AI innovation.</p>
      </div>
      <div class="col-span-1"></div>
      <!-- form -->
      <div class="col-span-4 h-[60vh] pe-10">
        <div class="rounded-xl h-full bg-neutral-100 shadow-none border-purple-700 border-solid border-[1px]" style="box-shadow: 0 -8px 24px -8px rgba(0, 0, 0, 0.15), 0 8px 24px -8px rgba(0, 0, 0, 0.15)">
          <form @submit.prevent="submitForm" class="flex flex-col w-full gap-2 px-6 pt-10">
            <!-- name -->
            <p class="capitalize text-neutral-600 font-semibold">name</p>
            <input
              class="border-b-2 border-neutral-900 border-solid w-full ps-2 pb-2 placeholder-neutral-500 text-black focus:outline-none"
              type="text"
              name="name"
              placeholder="Arbab kodan"
              v-model="name"
              required
              autocomplete="off" />
              <!-- email -->
            <p class="capitalize text-neutral-600 font-semibold mt-5">email</p>
            <input
              class="border-b-2 border-neutral-900 border-solid w-full ps-2 pb-2 placeholder-neutral-500 text-black focus:outline-none"
              placeholder="arbabghavi@gmail.com"
              type="email"
              name="email"
              v-model="email"
              required
              autocomplete="off" />
              <!-- message -->
            <p class="capitalize text-neutral-600 font-semibold mt-5">message</p>
            <textarea
              class="border-b-2 resize-none border-neutral-900 border-solid w-full ps-2 pb-2 placeholder-neutral-500 text-black focus:outline-none"
              name="message"
              rows="2"
              v-model="message"
              autocomplete="off"></textarea>
              <div class=" flex items-center gap-2 mt-5">
                <button class="bg-neutral-900 text-white rounded-3xl px-7 py-3 cursor-pointer capitalize">submit</button>
                <div @click="resetForm()" class="border-solid border-neutral-900 border-2 text-black rounded-3xl cursor-pointer px-8 py-3 capitalize">reset</div>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full bg-neutral-800 -mt-[30vh] h-[70vh]"></div>
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
