<script setup>
import { ref } from "vue";

const customers = ref([
  {
    logo: `<svg class="size-11" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_155)">
<path d="M45.0122 0.493652H25.3938C24.3913 0.493652 23.8892 1.70577 24.5981 2.41467L43.0912 20.9078C43.8001 21.6167 45.0122 21.1146 45.0122 20.1121V0.493652Z" fill="black"/>
<path d="M34.281 12.0032H6.2118C4.20671 12.0032 3.20255 14.4274 4.62036 15.8452L30.4389 41.6638C31.8568 43.0816 34.281 42.0775 34.281 40.0724V12.0032Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.2812 26.766V12.0032H19.5184C18.8629 15.8111 19.89 19.9473 23.1135 23.1708C26.337 26.3944 30.4732 27.4214 34.2812 26.766Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_3_155">
<rect width="45.0124" height="45.0125" fill="white" transform="translate(0 0.493652)"/>
</clipPath>
</defs>
</svg>
`,
    name: "Arbab Construction",
  },
  {
    logo: `<svg class="size-11" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8052 2.24549V22.5008H2.55207C1.30909 22.5008 0.301453 23.5085 0.301453 24.7515L0.301453 33.754C0.301453 34.9969 1.30909 36.0046 2.55207 36.0046H11.5545C12.7975 36.0046 13.8052 34.9969 13.8052 33.754V22.5011H34.0607C35.3037 22.5011 36.3114 21.4935 36.3114 20.2505V2.24549C36.3114 1.00251 35.3037 -0.00512701 34.0607 -0.00512695L16.0558 -0.00512617C14.8128 -0.00512611 13.8052 1.00251 13.8052 2.24549Z" fill="black"/>
</svg>

`,
    name: "Arbab Company",
  },
  {
    logo: `<svg class="size-11" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70345 4.99463V19.2826H12.4661V4.99463H7.70345ZM20.5029 4.99463V26.4266H25.2656V4.99463H20.5029ZM33.6002 19.2826V4.99463H38.3629V19.2826H33.6002ZM22.8844 41.005C13.7867 41.005 6.13326 34.821 3.89839 26.4271H8.88628C10.9593 32.1518 16.4442 36.2424 22.8844 36.2424C29.3247 36.2424 34.8096 32.1518 36.8826 26.4271H41.8705C39.6356 34.821 31.9822 41.005 22.8844 41.005Z" fill="black"/>
</svg>


`,
    name: "Barde Company",
  },
  {
    logo: `<svg class="size-11" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_179)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1479 28.028C29.1845 28.028 34.0782 23.1343 34.0782 17.0976C34.0782 11.061 29.1845 6.16731 23.1479 6.16731H12.2176V17.0976C12.2176 23.1343 17.1113 28.028 23.1479 28.028ZM39.5434 17.0976C39.5434 26.1526 32.2029 33.4931 23.1479 33.4931C14.0929 33.4931 6.75244 26.1526 6.75244 17.0976V0.702148H23.1479C32.2029 0.702148 39.5434 8.04266 39.5434 17.0976Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1478 39.8326C29.1845 39.8326 34.0781 34.939 34.0781 28.9023C34.0781 22.8657 29.1845 17.972 23.1478 17.972H12.2175V28.9023C12.2175 34.939 17.1112 39.8326 23.1478 39.8326ZM39.5433 28.9023C39.5433 37.9573 32.2028 45.2978 23.1478 45.2978C14.0929 45.2978 6.75238 37.9573 6.75238 28.9023V12.5068H23.1478C32.2028 12.5068 39.5433 19.8473 39.5433 28.9023Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_3_179">
        <rect width="45.0124" height="45.0125" fill="white" transform="translate(0.641541 0.493652)"/>
        </clipPath>
        </defs>
        </svg>
      `,
    name: "Barde Company",
  },
  {
    logo: `<svg class="size-11" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_185)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.6565 24.9996L33.9898 41.6662L17.3232 24.9996L24.6745 17.6483L32.0258 24.9997L24.6749 32.3506L25.657 33.3327L33.99 24.9997L25.6566 16.6662L33.9898 8.33301L50.6565 24.9996Z" fill="black"/>
        <path d="M17.3233 10.2984L2.62083 25.0009L17.3233 39.7034L24.6745 32.3521L25.6566 33.3342L17.3233 41.6676L0.656647 25.0009L17.3233 8.33423L25.6566 16.6676L24.6745 17.6497L17.3233 10.2984Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_3_185">
        <rect width="49.9999" height="50" fill="white" transform="translate(0.656738)"/>
        </clipPath>
        </defs>
        </svg>

         `,
    name: "Barde kHAN",
  },
]);
</script>
<template>
  <div class="flex-col flex justify-center w-full">
    <p class="text-center font-semibold">Trusted by 400+ Clients and 20 Company.</p>
    <!-- customer name -->
    <div class="flex justify-center items-center gap-10 mt-10">
      <div v-for="customer in customers" :key="customer" class="flex gap-2 items-center">
        <div v-html="customer.logo" class="w-12 h-12"></div>
        <p class="text-lg font-semibold">{{ customer.name }}</p>
      </div>
    </div>
    <!-- cart -->
    <div class="w-full flex justify-center mt-10 text-white">
      <div class="w-7/12 rounded-xl grid grid-cols-12 bg-cart px-16 pb-10 pt-16">
        <p class="text-5xl col-span-8 font-semibold">Why us?</p>
        <div class="col-span-4 flex mb-12 flex-col gap-3">
          <p class="text-[10px]">
            Globally, numerous clients have partnered with us for AI consulting. Through their collaboration and our dedicated efforts, we've earned several prestigious awards.
          </p>
          <div class="flex">
            <div class="border-neutral-100 text-[10px] border-[0.5px] border-opacity-40 border-solid rounded-3xl px-10 cursor-pointer capitalize py-2">see all</div>
          </div>
        </div>
        <div class="col-span-3 text-center gap-2 flex flex-col">
          <p class="text-4xl font-semibold tracking-wider">$8M+</p>
          <p class="tracking-wider">Money Raised</p>
        </div>
        <div class="col-span-3 text-center gap-2 flex flex-col">
          <p class="text-4xl font-semibold tracking-wider">400+</p>
          <p class="tracking-wider">Our Client</p>
        </div>
        <div class="col-span-3 text-center gap-2 flex flex-col">
          <p class="text-4xl font-semibold tracking-wider">12+</p>
          <p class="tracking-wider">Unicorn Award</p>
        </div>
        <div class="col-span-3 text-center gap-2 flex flex-col">
          <p class="text-4xl font-semibold tracking-wider">550+</p>
          <p class="tracking-wider">Project Complete</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-cart {
  background: #aa87fc;
  background: linear-gradient(159deg, rgba(170, 135, 252, 1) 7%, rgba(119, 85, 230, 1) 28%, rgba(61, 27, 205, 1) 98%);
}
</style>
