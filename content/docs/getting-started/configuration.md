---
title: Configuration
order: 2.3
group: getting-started
---

# ⚙️ Configuration

Docsly is powered by Nuxt 3 and Tailwind CSS, giving you full control over configuration. This guide walks you through the most relevant parts to configure your Docsly project.

---

## 🧩 `nuxt.config.ts`

This is where you manage your Nuxt setup, including modules, meta tags, runtime settings, and custom aliases.

```ts
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Docsly',
      meta: [
        { name: 'description', content: 'Modern documentation template for Vue apps.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark',
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
});
```

---

## 🎨 Tailwind Config (`tailwind.config.ts`)

Customize your design system with Tailwind.

```ts
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
}
```

---

## 🧾 Markdown Options

Docsly uses Nuxt Content to power your Markdown engine. You can configure:

* Syntax highlighting themes
* Custom components in markdown
* Document-driven mode
* Content navigation & routing behavior

For example, in `nuxt.config.ts`:

```ts
content: {
  documentDriven: true,
  highlight: {
    theme: 'dracula',
    preload: ['ts', 'js', 'vue']
  },
}
```

---

## 📄 SEO & Meta

All meta tags live under `app.head` in `nuxt.config.ts`. You can also extend SEO with modules like `@nuxtjs/robots` or `nuxt-simple-sitemap`.

---

## 🌍 Environment Variables

Define values in `.env` and access via `runtimeConfig`:

```env
NUXT_PUBLIC_SITE_URL=https://docs.example.com
```

```ts
const config = useRuntimeConfig();
console.log(config.public.siteUrl);
```

---

## ✅ What’s Next?

* Learn how to [customize the layout and styles](./customization.md)
* Ready to launch? See [Deployment](./deployment.md)
