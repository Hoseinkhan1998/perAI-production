<template>
  <div :class="color">
    <svg :width="width" :height="height" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.516 16.3206H1V7.94531H8.64246" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M33.873 7.94531H45.075V16.3206H38.6888" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M42.9814 16.3203V45.6339H3.19873V23" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M24.3462 17.0535C23.9275 17.1582 23.5087 17.2629 23.0899 17.2629C20.0539 17.2629 17.646 14.855 17.646 11.8189C17.646 8.7829 20.0539 6.375 23.0899 6.375C26.126 6.375 28.5339 8.7829 28.5339 11.8189C28.5339 12.5518 28.3245 13.2846 28.1151 14.0175"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M20.8911 11.7094L22.4615 13.1751L25.2881 10.4531" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M28.0504 26.5017V33.0973L22.9205 29.6425L18 33.202V22"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M6.33936 39.3516H15.7616" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.33936 42.4922H11.5739" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M24.1367 1.8726L25.6023 1.24445C26.8586 0.616302 28.429 1.24445 28.8478 2.60544L29.3712 4.07111C29.5806 4.69926 30.1041 5.22272 30.8369 5.53679L32.3026 6.06025C33.6636 6.5837 34.2917 8.04938 33.6636 9.30567L33.0354 10.7713C32.7213 11.3995 32.7213 12.1323 33.0354 12.7605L33.6636 14.2262C34.2917 15.4825 33.6636 17.0528 32.3026 17.4716L30.8369 17.995C30.2087 18.2044 29.6853 18.7279 29.3712 19.4607L28.8478 20.9264C28.3243 22.2874 26.8586 22.9155 25.6023 22.2874L24.1367 21.7639C23.5085 21.4499 22.7757 21.4499 22.1475 21.7639L20.6818 22.3921C19.4256 23.0202 17.8552 22.3921 17.4364 21.0311L16.913 19.5654C16.7036 18.9373 16.1801 18.4138 15.4473 18.0997L13.8769 17.5763C12.5159 17.0528 11.8878 15.5871 12.5159 14.3309L13.1441 12.8652C13.4582 12.237 13.4582 11.5042 13.1441 10.876L12.5159 9.41036C11.8878 8.15407 12.5159 6.5837 13.8769 6.16494L15.3426 5.64148C15.9707 5.4321 16.4942 4.90864 16.8083 4.1758L17.3317 2.71013C17.8552 1.34914 19.3209 0.720993 20.5772 1.34914L22.0428 1.97729C22.7757 2.18667 23.5085 2.18667 24.1367 1.8726Z"
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
