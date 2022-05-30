
<script>
import Directory from "./-components/Directory.vue";

definePageMeta({
  layout: "dashboard",
});
export default {
  components: {
    Directory,
  },
};
</script>
<template>
  <div class="min-w-full max-h-screen flex-1 border-t border-gray-200 xl:flex">
    <Directory />
  </div>
</template>



