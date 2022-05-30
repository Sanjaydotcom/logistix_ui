
<script setup lang="ts">
import Directory from "./-components/Directory.vue";
import EmployeesMasterTopbar from "./-components/EmployeesMasterTopbar.vue";
</script>
<template>
  <NuxtLayout name="dashboard">
    <EmployeesMasterTopbar />

    <div
      class="min-w-full max-h-screen flex-1 border-t border-gray-200 xl:flex"
    >
      <Directory />
    </div>
  </NuxtLayout>
</template>



