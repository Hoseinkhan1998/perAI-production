<template>
  <div :class="color">
    <svg
     :width="width"
      :height="height"
      viewBox="0 0 90 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.366 21.6562H7.61226C4.89262 21.6562 2.69629 23.8892 2.69629 26.6363V112.188C2.69629 114.943 4.90055 117.168 7.61226 117.168H46.625M71.6467 21.6643H81.7958C84.5075 21.6643 86.7118 23.8892 86.7118 26.6443V112.188C86.7118 114.935 84.5154 117.168 81.7958 117.168H71.6467"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M21.366 22.5H7.61226C4.89262 22.5 2.69629 24.733 2.69629 27.48V113.032C2.69629 115.787 4.90055 118.012 7.61226 118.012H46.625M71.6467 22.508H81.7958C84.5075 22.508 86.7118 24.733 86.7118 27.4881V113.032C86.7118 115.779 84.5154 118.012 81.7958 118.012H71.6467"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M71.1566 34.4203V14.2753H56.71C56.7576 13.8657 56.7893 13.456 56.7893 13.0384C56.7813 7.21496 52.127 2.5 46.3865 2.5C40.6459 2.5 35.9836 7.21496 35.9836 13.0384C35.9836 13.456 36.0154 13.8657 36.0629 14.2753H21.6084V34.4203H46.3865"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M46.3865 55.8594H21.6084"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M46.3865 77.2969H21.6084"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M46.3865 97.4023H21.6084"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M57.0591 55.0392L62.5618 60.6136L73.5672 50.1797"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M57.0591 73.6679L62.5618 79.2423L73.5672 68.8164"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M57.0591 92.3009L62.5618 97.8673L73.5672 87.4414"
        stroke="currentColor"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
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
  color: {
    type: String,
    default: 'text-neutral-900', // مقدار پیش‌فرض رنگ
  },
});
</script>
  
  <style>
</style>