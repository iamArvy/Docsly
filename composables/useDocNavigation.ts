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

  return {
    pages,
    currentIndex,
    prevPage,
    nextPage,
  };
};
