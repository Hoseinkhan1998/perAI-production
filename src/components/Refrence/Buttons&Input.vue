<template>
  <!-- دکمه قرمز -->
  <div
    class="text-white flex cursor-pointer justify-center items-center gap-3 py-2 px-5 rounded-lg bg-red-600"
  >
    <p>انتشار</p>
  </div>
<!-- دکمه سیاه -->
  <div
    class="text-white flex cursor-pointer justify-center items-center gap-3 py-2 px-5 rounded-lg hover:bg-red-600 bg-neutral-800 transition-all duration-150 flex-row"
  >
    <p>نویس</p>
  </div>

  <!-- توضیحات فیلم -->
  <div class="col-span-5">
    <div class="flex flex-col gap-2">
      <p>توضیحات فیلم</p>
      <v-text-field
        type="text"
        dir="rtl"
        density="compact"
        hide-details
        rounded="xl"
        variant="outlined"
        class="!bg-inherit !outline-none !border-none !p-0 !m-0 input"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>