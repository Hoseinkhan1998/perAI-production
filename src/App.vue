<script setup>
import Header from "./components/HomePage/Header.vue";
import Footer from "./components/HomePage/Footer.vue";
</script>

<template>
  <div class=" bg-neutral-100 text-neutral-900">
    <div class="grid grid-cols-12 relative">
      <div class="col-span-full z-20">
        <div class=" text-white h-[60px] flex items-center">
          <Header />
        </div>
      </div>      
      <div class="col-span-full">
        <router-view></router-view> <!-- نمایش کامپوننت‌ها بر اساس روت -->
      </div>
      <div dir="ltr" class="col-span-full">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "IRANSansX";
  src: url("/IRANSansX-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: "IRANSansX", sans-serif;
}
html.dark {
  color-scheme: dark;
}
</style>