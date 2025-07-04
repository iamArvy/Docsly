---
title: Usage
order: 2.2
group: getting-started
---

# 🧾 Usage Guide

Docsly uses [Nuxt Content](https://content.nuxt.com/) to allow you to write documentation in Markdown or MDX. This guide shows how to organize your content, use frontmatter, and extend markdown with components.

---

## 📂 Content Folder Structure

All your documentation content lives inside the `content/` folder.
You can organize it in any way that fits your documentation flow:

```
content/
├── index.md
├── getting-started.md
└── guides/
    ├── overview.md
    └── advanced-usage.md
```

Each file will be mapped to a route automatically:

* `index.md` → `/`
* `getting-started.md` → `/getting-started`
* `guides/overview.md` → `/guides/overview`

---

## 📝 Writing Markdown with Frontmatter

You can use frontmatter to add metadata to your markdown pages:

```md
---
title: Getting Started
description: Learn how to install and set up Docsly
layout: default
---

# Getting Started

Welcome to Docsly! Let’s get you up and running.
```

Available frontmatter fields:

* `title` – Used in the page `<head>` and layout
* `description` – Meta description for SEO
* `layout` – Optional, sets a custom layout if defined

---

## 🔁 Navigation Order

To control the order of pages in your sidebar or navigation, you can use the `dir` field or manually sort pages when rendering navigation from Nuxt Content.

```md
---
title: Usage
dir: 2
---
```

---

## 🧩 Using Vue Components in Markdown

Docsly supports using Vue components directly inside `.md` or `.mdx` files:

```md
<Callout type="warning">
This is a custom component inside markdown!
</Callout>
```

Make sure the component is registered globally or locally in the `components/` directory.