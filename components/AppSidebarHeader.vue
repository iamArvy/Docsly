<script setup lang="ts">
import Breadcrumbs from "~/components/BreadcrumbsComponent.vue";
import { SidebarTrigger } from "~/components/ui/sidebar";
// import type { BreadcrumbItemType } from "~/types";

defineProps<{
  breadcrumbs?: string[];
}>();
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/70 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4"
  >
    <div class="flex items-center gap-2 w-full">
      <SidebarTrigger class="-ml-1" />
      <template v-if="breadcrumbs && breadcrumbs.length > 0">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </template>
      <div class="ml-auto flex items-center gap-2">
        <AppearanceButton />
      </div>
    </div>
  </header>
</template>
