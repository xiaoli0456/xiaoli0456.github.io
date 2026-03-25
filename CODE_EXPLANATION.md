# 代码逻辑详解：Composable 与 动态路由

这份文档详细解释了 `src/composables/usePosts.ts` 和 `src/pages/post/[slug].vue` 这两个文件是如何协同工作，来实现一个简单的博客文章系统的。

## 1. 核心架构概览

这种写法采用的是 **"数据逻辑与视图分离"** 的模式，这是 Vue 3 和 Nuxt 3 中推荐的开发方式。

*   **数据层 (`usePosts.ts`)**: 负责存储数据（文章内容）和提供获取数据的方法。相当于一个简单的本地数据库。
*   **视图层 (`[slug].vue`)**: 负责根据网址（URL）动态显示对应的内容。

---

## 2. 深入解析 `usePosts.ts` (数据层)

这个文件是一个 Vue **Composable**（组合式函数）。它的作用是封装与 "文章 (Posts)" 相关的状态和逻辑。

### 代码拆解

```typescript
// 1. 导出数据和方法
export const usePosts = () => {
  // 2. 数据源：一个包含所有文章对象的数组
  const posts = [
    {
      slug: "nam-mo-thay-chay-nha", // 唯一标识符，用于 URL
      title: "Năm Mơ Thấy Cháy Nhà...", // 文章标题
      content: `<p>...</p>`, // 文章内容 (HTML 格式)
      // ... 其他字段
    },
    // ... 更多文章
  ];

  // 3. 辅助函数：根据 slug 查找特定文章
  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug);
  };

  // 4. 返回给组件使用的接口
  return {
    posts,          // 让组件可以获取所有文章（例如用于列表页）
    recentPosts,    // 最近文章（代码中定义的另一个数组）
    getPostBySlug   // 让组件可以查找单篇文章
  };
};
```

### 为什么这么写？
*   **复用性**: 任何页面只要调用 `usePosts()`，都能获取到文章数据，不需要在每个页面重复写数据。
*   **维护性**: 如果要修改文章内容，只需要改这一个文件，不需要去改页面代码。

---

## 3. 深入解析 `[slug].vue` (视图层)

这个文件是 Nuxt 的 **动态路由页面**。文件名中的方括号 `[slug]` 具有特殊含义。

### 3.1 文件名 `[slug].vue` 的含义
在 Nuxt 中，`[slug]` 表示一个**动态参数**。
*   访问 `/post/nam-mo-thay-chay-nha` 时，`slug` 参数的值就是 `"nam-mo-thay-chay-nha"`。
*   访问 `/post/shanghai-beauty-no-hu` 时，`slug` 参数的值就是 `"shanghai-beauty-no-hu"`。

### 3.2 代码逻辑拆解

```vue
<script setup>
import { useRoute } from 'vue-router';
import { usePosts } from '@/composables/usePosts';
import { computed } from 'vue';

// 1. 获取当前路由信息
const route = useRoute();

// 2. 从 Composable 中获取查找函数
const { getPostBySlug } = usePosts();

// 3. 计算属性：根据当前 URL 的 slug 查找对应的文章
// route.params.slug 对应 URL 中的动态部分
const post = computed(() => getPostBySlug(route.params.slug));

// 4. (可选) 错误处理：如果没找到文章
if (!post.value) {
  // 处理 404
}
</script>
```

### 3.3 模板渲染

```vue
<template>
  <div v-if="post">
    <!-- 显示标题 -->
    <h1>{{ post.title }}</h1>
    
    <!-- 显示内容 -->
    <!-- v-html 指令用于渲染存储在 post.content 中的 HTML 字符串 -->
    <div class="article-content" v-html="post.content"></div>
  </div>
</template>
```

---

## 4. 完整工作流程

当你在这个网站中点击一个链接，例如 `/post/nam-mo-thay-chay-nha` 时，发生了什么？

1.  **路由匹配**: Nuxt 检测到 URL 匹配 `src/pages/post/[slug].vue` 这个页面组件。
2.  **参数提取**: Nuxt 提取出 URL 中的 `nam-mo-thay-chay-nha` 并赋值给 `route.params.slug`。
3.  **组件初始化**: `[slug].vue` 组件开始运行。
4.  **数据查找**: 
    *   代码执行 `getPostBySlug("nam-mo-thay-chay-nha")`。
    *   `usePosts` 在 `posts` 数组中查找 `slug` 匹配的对象。
5.  **渲染**: 
    *   找到的文章对象被赋值给 `post` 变量。
    *   模板通过 `{{ post.title }}` 和 `v-html="post.content"` 将数据显示在浏览器上。

---

## 5. 优缺点分析

### 优点
*   **简单**: 不需要后端服务器或数据库，纯前端即可实现。
*   **快速**: 数据打包在 JS 中，加载速度极快。
*   **清晰**: 数据和界面分离，代码结构整洁。

### 缺点
*   **内容管理不便**: 文章内容是硬编码在 `usePosts.ts` 的字符串里的，编写长篇文章（尤其是包含复杂 HTML 标签时）非常麻烦且容易出错。
*   **包体积**: 如果文章非常多，JS 文件会变得很大，影响首屏加载速度。

## 6. 进阶建议 (更好的学习方向)

目前的写法适合小型演示项目。如果你想构建一个真正的博客，建议学习 **Nuxt Content** 模块。

**Nuxt Content 的做法**:
1.  你只需要在 `content/` 目录下创建 `.md` (Markdown) 文件来写文章。
2.  不需要在 JS 里写 HTML 字符串。
3.  Nuxt 会自动把这些 `.md` 文件转换成 API 供页面调用。

这将大大提升写作体验和代码的可维护性。
