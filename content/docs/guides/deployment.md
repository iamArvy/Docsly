---
title: Deployment
order: 3.2
group: guides
---

# 🚀 Deployment Guide

Docsly supports both **static** and **server-rendered (SSR)** deployment thanks to Nuxt 3 and Nitro. This guide covers deployment on popular platforms.

---

## 🔨 Static vs SSR

* **Static (recommended)**: Pre-renders HTML. Fast and CDN-friendly.
* **SSR (optional)**: Renders on the server at request time.

Use static export unless you need runtime data or dynamic routes.

---

## 📦 Static Deployment

To generate static files:

```bash
pnpm build
pnpm generate
```

This will output your site into the `.output/public` or `dist/` directory depending on your setup.

### ✅ Platforms

#### Vercel

1. Connect your GitHub repo
2. Set framework as **Nuxt 3**
3. Vercel detects `nuxt generate`

#### Netlify

1. Connect Git repo
2. Set build command: `pnpm generate`
3. Set publish directory: `.output/public`

#### GitHub Pages

```bash
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages
```

> You may need to configure routing with `router.base` in `nuxt.config.ts`.

#### Cloudflare Pages

1. Framework: **Nuxt 3**
2. Build command: `pnpm generate`
3. Output folder: `.output/public`

---

## 🌍 Custom Domains

All platforms above support adding a custom domain and configuring HTTPS automatically.

For example, on Netlify:

* Add your domain in Site Settings
* Update DNS to point to Netlify nameservers

---

## ⚙️ Environment Variables

For example, define your base URL:

```env
NUXT_PUBLIC_SITE_URL=https://docs.example.com
```

This gets injected via Nuxt’s runtime config.

---

## 🔐 Preview Builds

Both Netlify and Vercel support preview deployments on pull requests by default. This helps you test changes in staging before merging to `main`.

---

## ✅ You're Live!

Congrats! Your Docsly documentation site is now live.
