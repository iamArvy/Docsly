---
title: Welcome to Docsly
description: An overview of the Docsly platform.
order: 1.1
group: overview
---

# 📘 Docsly

**Docsly** helps you build modern, structured, and powerful documentation for your app or service.

It is designed for developers who want full control over the presentation of their product documentation. Docsly is built on top of **Nuxt 3**, **Tailwind CSS**, and **Nuxt Content**, and draws inspiration from modern UI systems like `shadcn/ui`, which we've adapted into a reusable system for the Vue ecosystem.

> We are not a component library. Instead, Docsly gives you flexible tools and conventions to build and own your documentation system.

---

## 🌐 Overview

Docsly provides a developer-first experience for building documentation systems without locking you into a rigid theme or predefined structure. It uses **Vue**, **Radix Vue**, and **Tailwind CSS**, and integrates **Nuxt Content** for seamless Markdown/MDX content support.

* You don’t install Docsly like a dependency.
* You **start by creating a new project from the Docsly GitHub template** — no CLI needed.
* The code is yours — adapt and extend it as you see fit.

It encourages ownership and customization, letting you ship documentation that aligns with your brand, structure, and style preferences.

Think of Docsly as a **documentation starter** or **design system for docs**, not a static theme.

You’ll find dedicated guides for:

* **Installation** – how to scaffold and run Docsly locally.
* **Usage** – how to write and structure your markdown content.
* **Configuration** – customizing the Nuxt setup, tailwind tokens, metadata, etc.
* **Customization** – tailoring the components, layouts, and themes to match your brand.
* **Deployment** – recommended practices and hosting options (Vercel, Netlify, GitHub Pages, S3).

Whether you're building internal docs, developer guides, or API references, Docsly equips you with the foundation and flexibility to scale your documentation confidently.

---

## 🧰 Tech Stack

| Tech         | Description                                |
| ------------ | ------------------------------------------ |
| Nuxt 3       | Modern Vue framework with hybrid rendering |
| Nuxt Content | File-based Markdown/MDX content engine     |
| Tailwind CSS | Utility-first CSS framework                |
| shadcn/ui    | Component patterns adapted for Vue         |

## 📁 Project Structure

```
docsly/
├── components/              # UI components
├── content/                 # Markdown/MDX files
│   ├── index.md
│   └── getting-started.md
├── layouts/                 # App layouts
├── pages/                   # Nuxt route pages
├── public/                  # Static assets
├── assets/            
│   └── tailwind.css         # Tailwind & global CSS
├── app.config.ts            # App configuration
├── content.config.ts        # Content configuration
├── nuxt.config.ts           # Nuxt configuration
└── README.md
```

---

## ✨ Features

Docsly is designed to empower developers to build modern, clean, and flexible documentation sites with minimal effort and full control. Below are the core features that make Docsly stand out:

### 📄 Markdown-Driven

Docsly uses **Nuxt Content** to load and render `.md` and `.mdx` files directly as pages. You can structure your documentation with folders and files, making organization and navigation seamless.

* Write with Markdown or MDX
* Support for frontmatter (`title`, `description`, `dir`, etc.)
* Auto-generates routes and slugs
* Syntax highlighting and custom components inside markdown

### 🎨 Tailwind + Shadcn-Styled Components

All UI elements in Docsly are styled with **Tailwind CSS** and built using patterns inspired by **shadcn/ui**. This gives you a set of accessible, beautiful, and ready-to-use base components.

* Responsive, themeable, and accessible
* Dark mode support
* Built using **Radix Vue** primitives
* Easy to customize or replace

### 🧱 Fully Customizable Layout

Docsly ships with a minimal but functional default layout that you can completely override or extend. Want a sidebar, topbar, custom footer? You have full control.

* Customize page layout via `layouts/default.vue`
* Drop in your own components or replace ours
* Add search, analytics, or banners as you like

### 🚦 Zero Lock-In

Docsly is a **template repository**, not a library. You clone or generate your project from the template and own every line of code.

* No npm install required
* No version conflicts or magic APIs
* Build your own documentation system from this starting point

### 🛠 Developer-First Setup

Designed with simplicity and developer happiness in mind:

* Modern Nuxt 3 setup with Vite
* ESLint + Prettier pre-configured
* Project ready for deployment out of the box
* Hot module reload for quick content edits

### 🌙 Built-in Dark Mode

Dark mode is fully integrated using Tailwind’s `dark` class strategy.

* Toggle support out of the box
* Theme persistence using localStorage
* Easy to style and override

### 📦 Static or Hybrid Deployment

Docsly can be deployed statically or run as a hybrid server-rendered app.

* Works great with Vercel, Netlify, GitHub Pages, S3
* Nuxt 3’s Nitro engine ensures flexibility
* Custom domains, SEO meta, and sitemap ready

### 🔌 Extendable

Want to add Algolia search? A commenting system? Analytics? Docsly makes it easy to extend with Nuxt modules or custom Vue plugins.