---
title: Customization
order: 3.1
group: guides
---

# 🎨 Customization Guide

Docsly is intentionally unopinionated about style and layout, giving you full control over how your documentation looks and behaves. Here's how to customize it to match your brand or structure.

---

## 🧱 Layouts

By default, Docsly uses a single layout file at `layouts/default.vue`. You can modify this or add new ones based on routes or content types.

```vue
<template>
  <div>
    <Header />
    <main class="prose mx-auto px-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>
```

Want a sidebar layout? Add a new one like `layouts/docs.vue` and use it in frontmatter:

```md
---
layout: docs
---
```

---

## 🧩 Components

All reusable UI elements live in the `components/` directory. You’re encouraged to extend, replace, or create your own versions.

Example: customize the `Callout` component or add a new one like `CopyButton.vue`.

You can use these directly inside markdown too:

```md
<Callout type="info">
This is reusable and customizable.
</Callout>
```

---

## 🎨 Styling with Tailwind

Tailwind CSS is already set up. To change the design language:

* Modify `tailwind.config.ts` (e.g., extend colors, fonts, spacing)
* Add global CSS to `styles/main.css`
* Use utility classes across layouts and components

Example:

```ts
extend: {
  colors: {
    brand: '#10B981',
  },
}
```

---

## 🌙 Dark Mode

Dark mode is handled with Tailwind’s `dark` strategy:

```ts
darkMode: 'class'
```

You can toggle themes via a component or plugin:

```ts
const colorMode = useColorMode();
colorMode.preference = 'dark';
```

---

## 🔧 Icons & Fonts

You can add custom icons (e.g., using [Iconify](https://iconify.design/)) or fonts (e.g., Google Fonts) by extending the `app.head` in `nuxt.config.ts`.

```ts
head: {
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap' },
  ]
}
```

---

## 🧩 Custom Markdown Components

To enhance your content, create custom components (e.g. `Hero.vue`, `CodeBlock.vue`) and use them directly in markdown files.
