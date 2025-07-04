---
title: Installation
order: 2.1
group: getting-started
---

# ⚙️ Installation Guide

Setting up Docsly is quick and straightforward. Since it's a **template repo**, you don't install it via npm. Instead, you create a new project from the GitHub template and start customizing immediately.

---

## 🧱 Requirements

Before you begin, make sure you have the following installed on your system:

* **Node.js** (v18 or later)
* **pnpm** (preferred) or npm/yarn
* **Git**

---

## 🚀 Create Your Project

1. Visit the [Docsly GitHub Template](https://github.com/yourusername/docsly-template)
2. Click **"Use this template"** → **"Create a new repository"**
3. Clone your new repository:

```bash
git clone https://github.com/yourusername/my-docsly-app.git
cd my-docsly-app
```

4. Install dependencies:

```bash
pnpm install  # or npm install
```

5. Start the development server:

```bash
pnpm dev
```

Open your browser and navigate to `http://localhost:3000` — your Docsly instance should be running.