<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

const { isCurrentRoute } = useNav();

const { grouped } = useDocsNavigation();
</script>

<template>
  <SidebarGroup
    v-for="(pages, group) in grouped"
    :key="group"
    class="px-2 py-0 mb-2"
  >
    <SidebarGroupLabel class="capitalize">{{
      group.replace("-", " ")
    }}</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in pages" :key="item.id">
        <SidebarMenuButton
          as-child
          :tooltip="item.path"
          :is-active="isCurrentRoute(item.path)"
        >
          <NuxtLink :href="item.path">
            <Icon name="lucide:link" width="50" />
            <span>{{ item.title.replace("-", " ") }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
