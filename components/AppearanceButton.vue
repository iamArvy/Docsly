<script setup lang="ts">
const { currentTheme, updateAppearance } = useAppearance();
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    @click="updateAppearance(currentTheme === 'light' ? 'dark' : 'light')"
  >
    <Icon :name="currentTheme === 'light' ? 'lucide:moon' : 'lucide:sun'" />
  </Button>
</template>
