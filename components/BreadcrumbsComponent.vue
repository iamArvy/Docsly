<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

// interface BreadcrumbItem {
//   title: string;
//   href?: string;
// }

defineProps<{
  breadcrumbs: string[];
}>();

// const computedBreadcrumbs = computed(() => {
//   if (
//     !props.breadcrumbs ||
//     props.breadcrumbs.length === 0 ||
//     !props.breadcrumbs.every((item) => typeof item === "string")
//   )
//     return null;
//   const parts: string[] = [];
//   return props.breadcrumbs.map((item) => {
//     // Use slugified versions if needed, or lowercase
//     const slug = item.toLowerCase().replace(/\s+/g, "-");
//     parts.push(slug);
//     return {
//       slug,
//       href: parts.join("/"),
//     };
//   });
// });
</script>

<template>
  <Breadcrumb v-if="breadcrumbs">
    <BreadcrumbList>
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <BreadcrumbItem class="capitalize">
          <template v-if="index === breadcrumbs.length - 1">
            <BreadcrumbPage class="font-bold">{{
              item.replace("-", " ")
            }}</BreadcrumbPage>
          </template>
          <template v-else>
            <BreadcrumbLink as-child>
              {{ item.replace("-", " ") }}
            </BreadcrumbLink>
          </template>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
