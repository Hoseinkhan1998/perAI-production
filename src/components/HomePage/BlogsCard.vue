<script setup>
const emit = defineEmits(["handleDisplay"]);

function handleDisplay(item) {
  emit("handleDisplay", item);
}
</script>

<template>
  <div class="ps-20 grid items-center grid-cols-12 gap-10">
    <div class="col-span-5">
      <div class="flex flex-col gap-5">
        <p class="text-5xl font-semibold">
          How Our <span class="text-transparent bg-gradient-to-l from-[#2a57fb67] to-[#2a58fb] bg-clip-text">AI Consulting</span> <br />
          Works: Simple Steps
        </p>
        <p class="text-sm">
          PropTalk's AI refines your property search with personalized <br />
          recommendations, using advanced algorithms and natural language <br />
          processing for both typing and voice commands.
        </p>
        <div class="grid grid-cols-6 gap-x-3">
          <div class="col-span-2 flex-col px-8 py-5 flex justify-center items-center h-[200px] text-center bg-[#2a57fb3f] rounded-xl">
            <p class="text-xl font-semibold">Start Consultation</p>
            <p class="mt-3 leading-tight">Discuss your needs with our experts</p>
          </div>
          <div class="col-span-2 flex-col px-8 py-5 flex justify-center items-center h-[200px] text-center bg-[#2a57fb3f] rounded-xl">
            <p class="text-xl font-semibold">Analyze Requirements</p>
            <p class="mt-3 leading-tight">Get tailored AI solutions</p>
          </div>
          <div class="col-span-2 flex-col px-8 py-5 flex justify-center items-center h-[200px] text-center bg-[#2a57fb3f] rounded-xl">
            <p class="text-xl font-semibold">Implement & Optimize</p>
            <p class="mt-3 leading-tight">Deploy and refine your AI solutions</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-7 flex justify-end">
      <img src="/images/Blogs/blog.png" class="h-[700px]" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
