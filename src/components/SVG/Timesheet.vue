<template>
  <div :class="color">
    <svg :width="width" :height="height" viewBox="0 0 40 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.1581 49.5619C18.1876 49.5619 23.0755 44.7351 23.0755 38.7809C23.0755 32.8268 18.1876 28 12.1581 28C6.12861 28 1.24072 32.8268 1.24072 38.7809C1.24072 44.7351 6.12861 49.5619 12.1581 49.5619Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10" />
      <path
        d="M11.8735 41C12.7124 41 13.3925 40.3284 13.3925 39.5C13.3925 38.6716 12.7124 38 11.8735 38C11.0346 38 10.3545 38.6716 10.3545 39.5C10.3545 40.3284 11.0346 41 11.8735 41Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10" />
      <path d="M12.978 37.8975L15.8772 34.7617" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M5.2915 24.5V2.99201C5.2915 1.89319 6.17003 1 7.25789 1H12.7594L36.9313 1.00321C38.016 1.00321 38.8977 1.89319 38.8977 2.99522V37.2128C38.8977 38.3116 38.0192 39.2048 36.9313 39.2048H32.8717"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path d="M22.7672 10.2695H12.856" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M23.3038 22.2695H13.3926" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M27.0361 9.94382L29.2372 12.1736L33.6394 8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M27.5728 21.9438L29.7738 24.1736L34.176 20" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
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
