# Nuxt 3 静态打包图片不显示问题排查与解决记录

本文档记录了 `pnpm run generate` 打包后，直接打开 `dist/index.html` (file:// 协议) 图片无法显示的问题原因及完整解决方案。

## 1. 问题现象
执行 `pnpm run generate` 生成静态文件后，双击打开 `.output/public/index.html`，发现页面中的图片（如 Logo、Banner）无法加载，控制台报错显示找不到文件（404）。

## 2. 原因分析

### 2.1 绝对路径问题 (核心原因)
Nuxt 3 默认配置下，生成的资源引用使用的是 **绝对路径**（例如 `/assets/image.png`）。
- **Web 服务器环境**：如果部署在服务器根目录（如 `https://example.com/`），`/assets` 正确指向网站根目录，一切正常。
- **本地文件环境 (file://)**：直接打开 HTML 文件时，绝对路径 `/assets` 会被浏览器解析为电脑磁盘的根目录（例如 `D:/assets`），而不是项目所在的文件夹。因此浏览器无法找到资源。

### 2.2 默认目录名兼容性
Nuxt 默认将资源放在 `_nuxt` 目录下。在某些静态托管服务或特定文件系统环境下，以 `_` 开头的文件夹可能被视为隐藏文件或受限访问，导致加载失败。

### 2.3 Vue 组件内的资源引用方式
在 Vue 组件中直接使用字符串路径（如 `<img src="@/assets/img/logo.png">`）在某些配置下可能不会被 Vite 正确处理为最终的构建路径，导致生成的 HTML 中仍然保留了原始路径或错误的引用。

## 3. 解决方案

为了支持 `file://` 协议访问（即“双击打开”），必须将应用配置为纯静态 SPA 模式，并强制使用相对路径。

### 步骤一：修改 `nuxt.config.ts`

在配置文件中添加以下关键配置：

```typescript
export default defineNuxtConfig({
  // 1. 关闭 SSR：file:// 协议不支持服务端渲染的 hydration 过程
  ssr: false,

  app: {
    // 2. 将 baseURL 设为空字符串，配合 vite.base 使用
    baseURL: '',
    // 3. 重命名资源目录，避免 _nuxt 下划线开头的问题
    buildAssetsDir: 'assets',
  },

  router: {
    options: {
      // 4. 开启 Hash 模式：file:// 环境下没有服务器处理路由，必须用 hash (#/page) 导航
      hashMode: true
    }
  },

  experimental: {
    // 5. 禁用 Payload 提取：file:// 不支持 fetch 本地 JSON 文件
    payloadExtraction: false
  },

  nitro: {
    preset: 'static'
  },

  // 6. 核心修复：强制 Vite 构建使用相对路径 ('./')
  vite: {
    base: './'
  }
})
```

### 步骤二：规范化图片引用 (以 AppHeader.vue 为例)

将 HTML 模板中的硬编码路径改为 `import` 引入，确保 Vite 能正确处理资源指纹和路径。

**修改前：**
```html
<img src="../assets/img/dt68-logo.png" ...>
```

**修改后：**
```vue
<script setup>
// 显式导入图片资源
import logoImg from '@/assets/img/dt68-logo.png';
</script>

<template>
  <!-- 绑定导入的变量 -->
  <img :src="logoImg" ...>
</template>
```

## 4. 结果验证
执行 `pnpm run generate` 后，查看生成的 `index.html` 源码，可以看到资源引用已变为相对路径：

```html
<!-- 以前是 /_nuxt/style.css -->
<link rel="stylesheet" href="assets/entry.css"> 
<!-- 以前是 /_nuxt/logo.png -->
<img src="assets/dt68-logo.123456.png">
```

现在直接双击 `.output/public/index.html`，图片和样式均能正常加载。
