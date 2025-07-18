<template>
  <div :class="color">
    <svg :width="width" :height="height" viewBox="0 0 54 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.739 7.3511C20.4901 7.3511 21.9146 5.92664 21.9146 4.17555C21.9146 2.42446 20.4901 1 18.739 1C16.9879 1 15.5635 2.42446 15.5635 4.17555C15.5635 5.92664 16.9879 7.3511 18.739 7.3511Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M35.5061 7.65969C37.2572 7.65969 38.6817 6.23523 38.6817 4.48414C38.6817 2.73305 37.2572 1.30859 35.5061 1.30859C33.755 1.30859 32.3306 2.73305 32.3306 4.48414C32.3306 6.23523 33.746 7.65969 35.5061 7.65969Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M23.5483 9.25584C22.7862 8.60259 22.0059 8.21245 21.3436 8.53C17.1428 11.2882 16.1629 8.25781 14.3937 8.25781C14.2122 8.25781 14.0126 8.32132 13.813 8.4302"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M41.0222 9.53722C40.2329 8.90211 39.4163 8.53011 38.7268 8.8386C34.2991 11.5968 33.2558 8.56641 31.3867 8.56641C30.8968 8.56641 30.307 8.97469 29.7173 9.55536"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M42.7644 17.6402C44.5155 17.6402 45.94 16.2157 45.94 14.4646C45.94 12.7135 44.5155 11.2891 42.7644 11.2891C41.0133 11.2891 39.5889 12.7135 39.5889 14.4646C39.5889 16.2157 41.0043 17.6402 42.7644 17.6402Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M11.009 16.7311C12.7601 16.7311 14.1846 15.107 14.1846 13.1019C14.1846 11.0967 12.7601 9.47266 11.009 9.47266C9.25796 9.47266 7.8335 11.0967 7.8335 13.1019C7.8335 15.107 9.24888 16.7311 11.009 16.7311Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M53.0758 23.0281C53.0758 23.0281 49.3606 17.7938 46.9563 18.8463C41.83 21.8857 40.6233 18.5469 38.4549 18.5469C37.4478 18.5469 36.0324 19.9986 34.9346 21.3686"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M18.4217 20.7776C17.1424 19.5164 15.5274 18.3279 14.2844 18.8269C9.15817 21.5851 7.95146 18.5547 5.78301 18.5547C3.87768 18.5547 1 22.5928 1 22.5928"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M26.433 19.454C29.1912 19.454 31.4232 17.0134 31.4232 14.0102C31.4232 11.007 29.1912 8.56641 26.433 8.56641C23.6748 8.56641 21.4429 11.007 21.4429 14.0102C21.4429 17.0134 23.6748 19.454 26.433 19.454Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
      <path
        d="M36 31.5015C38.5 30.5015 40 29.5015 41.4032 27.9665C41.4032 27.9665 35.2427 19.3653 31.9673 20.7716C24.9902 24.8272 23.348 20.3633 20.4083 20.3633C17.8225 20.3633 12.3696 27.9665 12.3696 27.9665C12.3696 27.9665 17.7408 32.4576 25.5164 33.011"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round" />
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
