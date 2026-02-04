<script setup>
import { useRoute } from 'vue-router';
import { usePosts } from '@/composables/usePosts';
import { computed } from 'vue';

const route = useRoute();
const { getPostBySlug, recentPosts } = usePosts();

const post = computed(() => getPostBySlug(route.params.slug));

if (!post.value) {
  // Handle 404 - Ideally use createError
  // console.error("Post not found");
}
</script>

<template>
  <div class="page-container">
    <div class="container">
      <div v-if="post">
        <!-- Breadcrumb -->
        <div class="breadcrumb">
          <NuxtLink to="/" class="home-link">DT68</NuxtLink> 
          <span class="separator">»</span> 
          <NuxtLink to="/no-hu" class="category-link">Nổ Hũ dt68</NuxtLink> 
          <span class="separator">»</span> 
          <span class="current">{{ post.title }}</span>
        </div>

        <div class="content-wrapper">
          <div class="main-column">
            <h1 class="main-title">{{ post.title }}</h1>
            
            <div class="post-meta-header">
              POSTED ON {{ post.date }} BY {{ post.author }}
            </div>

            <div class="featured-image">
              <img :src="post.image" :alt="post.title">
            </div>

            <div class="article-content" v-html="post.content"></div>
          </div>

          <!-- Sidebar -->
          <aside class="sidebar">
            <h3 class="sidebar-title">TIN MỚI</h3>
            <ul class="recent-posts">
              <li v-for="(item, index) in recentPosts" :key="index" class="recent-item">
                <div class="recent-thumb">
                  <img :src="item.image" :alt="item.title">
                  <div class="recent-date-badge">31 Mar</div>
                </div>
                <div class="recent-info">
                  <NuxtLink :to="item.slug ? '/post/' + item.slug : '#'" class="recent-title">{{ item.title }}</NuxtLink>
                  <span class="recent-comments">Comments Off</span>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <div v-else class="not-found">
        <h1>Bài viết không tồn tại</h1>
        <NuxtLink to="/no-hu">Quay lại danh sách</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 20px 0 40px;
  background-color: #f0f9ff;
  font-family: Arial, sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Breadcrumb */
.breadcrumb {
  font-size: 13px;
  margin-bottom: 20px;
  color: #666;
}
.home-link, .category-link {
  color: #dc2626; /* Red */
  text-decoration: none;
}
.separator {
  margin: 0 5px;
}

/* Main Title */
.main-title {
  color: #0369a1; /* Blue */
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.post-meta-header {
  font-size: 11px;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 20px;
}

/* Layout */
.content-wrapper {
  display: flex;
  gap: 30px;
}

.main-column {
  flex: 3;
}

.sidebar {
  flex: 1;
}

/* Images */
.featured-image {
  margin-bottom: 30px;
}

.featured-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Article Content */
.article-content {
  line-height: 1.8;
  font-size: 16px;
}

:deep(.article-content p) {
  margin-bottom: 20px;
  text-align: justify;
}

:deep(.article-content h3) {
  color: #0369a1;
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0 15px;
}

:deep(.article-content ul), :deep(.article-content ol) {
  margin-bottom: 20px;
  padding-left: 20px;
}

:deep(.article-content li) {
  margin-bottom: 10px;
}

/* Sidebar (Reused) */
.sidebar-title {
  color: #0369a1;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid #0369a1;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.recent-posts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.recent-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.recent-thumb {
  flex: 0 0 80px;
  position: relative;
}

.recent-thumb img {
  width: 100%;
  height: 60px;
  object-fit: cover;
}

.recent-date-badge {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  color: white;
  font-size: 9px;
  padding: 2px 4px;
}

.recent-info {
  flex: 1;
}

.recent-title {
  display: block;
  font-size: 13px;
  color: #dc2626;
  text-decoration: none;
  line-height: 1.4;
  margin-bottom: 5px;
  font-weight: bold;
}

.recent-title:hover {
  text-decoration: underline;
}

.recent-comments {
  display: block;
  font-size: 11px;
  color: #9ca3af;
}

.not-found {
  text-align: center;
  padding: 50px 0;
}

/* Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
}
</style>
