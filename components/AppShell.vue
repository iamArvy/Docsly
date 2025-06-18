<script setup lang="ts">
import { SidebarProvider } from "~/components/ui/sidebar";

const isOpen = useState("sidebarOpen", () => true);
</script>

<template>
  <SidebarProvider :default-open="isOpen">
    <slot />
  </SidebarProvider>
</template>
