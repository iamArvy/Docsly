<script setup lang="ts">
defineProps<{
  href: string;
  title: string;
  direction: "prev" | "next";
}>();
</script>
<template>
  <NuxtLink :href>
    <Button variant="secondary" class="cursor-pointer group" size="lg">
      <Icon
        v-if="direction === 'prev'"
        name="mingcute:arrow-left-fill"
        class="group-hover:rotate-10 transition-transform duration-300"
      />
      {{ title }}
      <Icon
        v-if="direction === 'next'"
        name="mingcute:arrow-right-fill"
        class="group-hover:-rotate-10 transition-transform duration-300"
      />
    </Button>
  </NuxtLink>
</template>
