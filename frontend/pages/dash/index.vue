<template>
  <div></div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});

navigateTo('/dash/galleries');
</script>
