<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

const { isCurrentRoute } = useNav();

const { pages } = useDocsNavigation();
// if (isProjectIndex) {

// }
</script>

<template>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in pages" :key="item.id">
        <SidebarMenuButton
          as-child
          :tooltip="item.path"
          :is-active="isCurrentRoute(item.path)"
        >
          <NuxtLink :href="item.path">
            <span>{{ item.title }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
  <!-- <SidebarGroup class="px-2 py-0 mb-2"> -->
  <!-- <SidebarGroupLabel>Contact</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in contacts" :key="item.text">
        <SidebarMenuButton as-child :tooltip="item.text">
          <NuxtLink :href="item.url" target="_blank">
            <Icon v-if="item.icon" :name="item.icon" width="50" />
            <span>{{ item.text }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup> -->
  <!-- <SidebarGroup class="px-2 py-0">
    <SidebarGroupLabel>Socials</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in socials" :key="item.platform">
        <SidebarMenuButton as-child :tooltip="item.platform">
          <NuxtLink :href="item.url" target="_blank">
            <Icon v-if="item.icon" :name="item.icon" width="50" />
            <span>{{ item.platform }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup> -->
</template>
