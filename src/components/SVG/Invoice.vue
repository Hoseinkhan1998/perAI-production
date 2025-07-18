<template>
  <div :class="color">
    <svg :width="width" :height="height" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 35.1016H1V43.0016H43V35.1016H35.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M35.5 39H8.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M19.3998 25.1016H21.9998V29.5016H6.7998V25.1016H9.59981"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M5.7998 1H14.8998C17.0998 1 18.8998 2.6 18.8998 4.6V25.1H9.59981" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
      <path
        d="M6.2998 5.9H2.2998V4.5C2.2998 2.6 3.99981 1 5.99981 1C7.99981 1 9.69981 2.6 9.69981 4.5V25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M33.2998 8.80078V14.5008" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
      <path d="M28.1001 8.80078V14.5008" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
      <path d="M37.9999 1.30078H23.3999V9.10078H37.9999V1.30078Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M39.8999 35.1V16.8C39.8999 15.5 38.8999 14.5 37.5999 14.5H19.3999" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
      <path d="M9.2001 14.5H6.5001C5.2001 14.5 4.1001 15.6 4.1001 16.9V24.3" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
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
