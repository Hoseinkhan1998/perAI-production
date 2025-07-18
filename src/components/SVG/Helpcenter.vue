<template>
  <div :class="color">
    <svg :width="width" :height="height" viewBox="0 0 98 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M78.6778 27.4071C78.7303 27.8091 78.7652 28.2302 78.7652 28.6704V53.3245C78.7652 57.6696 75.5476 61.2107 71.5604 61.2107H52.2718H47.865C44.0353 70.992 29.5557 67.9485 30.3077 67.7188C34.3997 66.532 35.8162 62.6081 36.2009 61.2107C36.2009 61.2107 28.7163 61.2682 26.3206 61.1916C19.0808 60.9428 18.766 54.2816 18.5562 49.7259V28.6704C18.5562 24.3253 21.7738 20.7842 25.761 20.7842H71.5779C75.1453 20.7842 78.1182 23.6554 78.6778 27.4071Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10" />
      <path
        d="M11.4726 49.1179H6.65723C3.99565 49.1179 1.85938 46.7513 1.85938 43.846V40.729C1.85938 37.8044 4.01316 35.457 6.65723 35.457H11.4726V49.1179Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10" />
      <path
        d="M85.8486 35.457H91.1709C94.1126 35.457 96.4738 37.8236 96.4738 40.729V43.846C96.4738 46.7706 94.0933 49.1179 91.1709 49.1179H85.8486V35.457Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10" />
      <path
        d="M7.4248 34.949C7.4248 16.2173 25.6735 1.0498 48.8205 1.0498C71.9674 1.0498 89.3901 16.2367 89.3901 34.949"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10" />
      <path
        d="M18.5559 74.2614C6.36755 75.5121 7.82377 69.1991 7.4647 56.0968C7.44475 55.5806 7.4248 49.625 7.4248 49.625"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10" />
      <path
        d="M21.5919 76.9446C23.2685 76.9446 24.6277 75.5854 24.6277 73.9088C24.6277 72.2322 23.2685 70.873 21.5919 70.873C19.9153 70.873 18.5562 72.2322 18.5562 73.9088C18.5562 75.5854 19.9153 76.9446 21.5919 76.9446Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10" />
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
