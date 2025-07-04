<script setup lang="ts">
const route = useRoute();
const subpage = route.params.pages as string[];
const subPages = Array.isArray(subpage) ? subpage.join("/") : "";
const fullPath = `/docs/${subPages}`;
const { data: page } = await useAsyncData(`doc-${fullPath}`, () => {
  return queryCollection("docs").path(fullPath).first();
});
if (!page.value) throw Error;
const contentRef = ref<HTMLElement | null>(null);
const { currentSection } = useSectionObserver(contentRef);
const { prevPage, nextPage } = useDocsNavigation();
useAppTitle(page.value?.title as string);
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [page.value.group, page.value.title];
</script>

<template>
  <div
    class="flex flex-col lg:grid grid-cols-4 gap-4 w-full h-full scroll-smooth"
  >
    <div
      class="col-span-3 max-h-full lg:overflow-x-auto top-0 left-0 flex flex-col"
    >
      <div class="flex-1 h-full flex flex-col gap-4 p-2 w-full">
        <div class="flex-1">
          <div ref="contentRef" class="col-span-2 p-4">
            <ContentRenderer
              v-if="page"
              class="max-w-full prose-w-full prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:text-primary dark:prose-headings:text-white dark:prose-invert prose-a:text-blue-500 prose-a:underline prose-a:decoration-primary-foreground"
              :value="page"
            />
          </div>
        </div>
        <div class="flex justify-between items-center gap-4">
          <div class="flex-1">
            <PaginationButton
              v-if="prevPage"
              :href="prevPage.path"
              :title="prevPage.title"
              :description="prevPage.description ?? ''"
              direction="prev"
            />
          </div>

          <div class="flex-1 text-center" />

          <div class="flex-1 text-right">
            <PaginationButton
              v-if="nextPage"
              :href="nextPage.path"
              :title="nextPage.title"
              :description="nextPage.description ?? ''"
              direction="next"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="max-h-full overflow-x-auto lg:flex flex-col hidden">
      <div class="flex-1 h-full flex flex-col gap-4 p-2 w-full">
        <div class="flex flex-col gap-4">
          <p class="font-bold">On this page</p>
          <ul class="flex flex-col gap-2 p-2 overflow-x-auto flex-1">
            <li v-for="item in page?.body?.toc?.links" :key="item.id">
              <NuxtLink
                :to="`#${item.id}`"
                active-class="text-blue-500 font-bold"
                :class="[
                  'text-sm hover:text-primary transition-all ease-in-out duration-200 overflow-ellipsis',
                  currentSection === item.id ? ' font-bold' : 'text-gray-500',
                  item.depth === 2 ? 'italic' : '',
                ]"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
