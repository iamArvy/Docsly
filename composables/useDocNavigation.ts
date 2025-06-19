import type { DocsCollectionItem } from "@nuxt/content";

export const useDocsNavigation = () => {
  const { data: pages } = useAsyncData("doc-pages", () => {
    return queryCollection("docs").order("order", "ASC").all();
  });

  const currentPath = useRoute().path;

  const currentIndex = computed(
    () => pages.value?.findIndex((p) => p.path === currentPath) ?? 0
  );

  const prevPage = computed(() =>
    currentIndex.value > 0 ? pages.value?.[currentIndex.value - 1] : null
  );

  const nextPage = computed(() =>
    currentIndex.value >= 0 &&
    currentIndex.value < (pages.value?.length ?? 0) - 1
      ? pages.value?.[currentIndex.value + 1]
      : null
  );

  const grouped = computed(() => {
    const groups: Record<string, DocsCollectionItem[]> = {};

    pages.value?.forEach((page) => {
      const group = page.group || "Ungrouped";
      if (!groups[group]) groups[group] = [];
      groups[group].push(page);
    });

    return groups;
  });

  return {
    pages,
    currentIndex,
    prevPage,
    nextPage,
    grouped,
  };
};
