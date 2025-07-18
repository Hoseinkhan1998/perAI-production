<template>
  <div :class="color">
    <svg :width="width" :height="height" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M45.7979 24.3876C45.7979 24.3876 45.45 20.7852 42.1507 20.7852C38.8513 20.7852 36.8637 20.7852 35.2538 20.7852C34.3594 20.7852 32.4712 21.7373 32.4413 23.5729C32.4115 25.1336 32.4413 26.1447 32.4413 26.1447L45.4401 29.2269V31.1606C45.4401 31.1606 45.4401 34.076 41.9022 34.076C38.5631 34.076 36.3072 34.076 35.0749 34.0367C33.4252 33.9778 33.0873 33.0944 32.6699 32.1128C32.2625 31.1312 32.1631 30.0809 32.1631 30.0809"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path d="M38.9805 16.043V20.7743" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M38.9805 34.1445V38.8856" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M38.9802 43.3623C47.8717 43.3623 55.0796 36.2428 55.0796 27.4604C55.0796 18.6781 47.8717 11.5586 38.9802 11.5586C30.0888 11.5586 22.8809 18.6781 22.8809 27.4604C22.8809 36.2428 30.0888 43.3623 38.9802 43.3623Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M41.9615 43.3728C41.9615 45.0317 40.6 46.3666 38.9304 46.3666H9.01738C7.33788 46.3666 5.98633 45.0219 5.98633 43.3728C5.98633 41.7139 7.34782 40.3789 9.01738 40.3789"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M23.8151 52.394H9.00762C7.32811 52.394 5.97656 51.0492 5.97656 49.4001C5.97656 47.7412 7.33805 46.4062 9.00762 46.4062H38.9207C40.6002 46.4062 41.9517 47.751 41.9517 49.4001C41.9517 51.059 40.5902 52.394 38.9207 52.394H34.5381"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path d="M8.62988 34.3906H24.4808" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M11.4323 40.3901H3.94902C2.26952 40.3901 0.917969 39.0453 0.917969 37.3962C0.917969 35.7373 2.27946 34.4023 3.94902 34.4023H5.51921"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path d="M29.5691 40.3867H14.6523" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M9.7627 27.4607V4.34412C9.7627 2.82265 11.0049 1.60547 12.5354 1.60547H36.4161C37.9565 1.60547 39.1888 2.83246 39.1888 4.34412V11.5588"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M28.6645 1.60547V10.4987L24.5999 8.31958L20.5254 10.4987V1.60547"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: 110, // مقدار پیش‌فرض عرض
  },
  height: {
    type: [String, Number],
    default: 121, // مقدار پیش‌فرض ارتفاع
  },
});
</script>

<style></style>
