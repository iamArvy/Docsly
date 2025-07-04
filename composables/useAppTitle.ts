export const useAppTitle = (pageTitle?: string) => {
  const config = useAppConfig();
  const appName = config.name;
  useHead({
    title: pageTitle ? `${pageTitle} - ${appName}` : (appName as string),
  });
};
