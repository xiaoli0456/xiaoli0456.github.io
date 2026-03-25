<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  breadcrumb: {
    type: String,
    required: true
  },
  mainImage: {
    type: String,
    default: ''
  },
  tocItems: {
    type: Array,
    default: () => []
  },
  relatedPosts: {
    type: Array,
    default: () => []
  }
});

const isTocOpen = ref(true);
</script>

<template>
  <div class="category-page-wrapper">
    <div class="category-page-layout container">
      <!-- Header Section -->
      <div class="page-header">
        <h1 class="page-title">{{ title }}</h1>
        <div class="breadcrumb">Home » {{ breadcrumb }}</div>
      </div>

      <!-- Table of Contents -->
      <div class="toc-wrapper" v-if="tocItems.length > 0">
        <div class="toc-header" @click="isTocOpen = !isTocOpen">
          <span class="toc-title">Table of Contents</span>
          <span class="toc-toggle">
             <svg v-if="isTocOpen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
             <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
          </span>
        </div>
        <div v-show="isTocOpen" class="toc-body">
          <ul class="toc-list">
            <li v-for="(item, index) in tocItems" :key="index" :class="'level-' + (item.level || 1)">
              <a :href="item.id ? '#' + item.id : '#'">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Main Image -->
      <div class="main-image" v-if="mainImage">
        <img :src="mainImage" :alt="title" />
      </div>

      <!-- Content Slot -->
      <div class="page-content">
        <slot></slot>
      </div>

      <!-- Latest News / Related Section -->
      <div class="latest-news-section" v-if="relatedPosts.length > 0">
        <div class="news-container">
          <!-- Main Content Column (Left) -->
          <div class="main-news-column">
            <div v-for="(post, index) in relatedPosts.slice(0, 2)" :key="index" class="main-post-item">
              <div class="post-category-label">{{ post.category || 'THỂ THAO' }}</div>
              <h3 class="post-title">
                <NuxtLink :to="post.link">{{ post.title }}</NuxtLink>
              </h3>
              <div class="post-meta-center">
                <span class="meta-date">ĐĂNG VÀO <span class="highlight-date">{{ post.date ? post.date.toUpperCase() : '' }}</span></span>
                <span class="meta-author"> BỞI {{ post.author || 'DT68' }}</span>
              </div>
              
              <div class="post-content-row">
                <div class="post-image" v-if="post.image">
                  <NuxtLink :to="post.link">
                    <img :src="post.image" :alt="post.title" />
                  </NuxtLink>
                </div>
                <div class="post-excerpt-col">
                  <p class="post-excerpt">{{ post.excerpt }}</p>
                  <NuxtLink :to="post.link" class="read-more-btn-text">TIẾP TỤC ĐỌC &rarr;</NuxtLink>
                </div>
              </div>

              <div class="post-footer-row">
                <div class="footer-category">Đăng trong <span class="cat-name">{{ post.category || 'Thể Thao' }}</span></div>
                <div class="footer-comments">{{ post.comments || 0 }} Bình luận</div>
              </div>
              
              <div class="post-divider" v-if="index < 1"></div>
            </div>
          </div>

          <!-- Sidebar Column (Right) -->
          <div class="sidebar-column">
            <h3 class="sidebar-heading">TIN HOT</h3>
            <div class="sidebar-list">
              <div v-for="(post, index) in relatedPosts.slice(2)" :key="index" class="sidebar-item">
                <div class="date-box">
                  <span class="date-day">{{ post.day || '21' }}</span>
                  <span class="date-month">{{ post.month || 'Th6' }}</span>
                </div>
                <div class="sidebar-content">
                  <h4 class="sidebar-title">
                    <NuxtLink :to="post.link">{{ post.title }}</NuxtLink>
                  </h4>
                  <div class="sidebar-comments">{{ post.comments || 1 }} bình luận</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-page-wrapper {
  background-color: #f0f9ff; /* Light blue background like screenshot */
  min-height: 100vh;
}

.category-page-layout {
  padding: 40px 15px;
  color: #334155; /* Dark text */
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-title {
  color: #3b82f6; /* Blue */
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.breadcrumb {
  color: #64748b;
  font-style: italic;
  font-size: 14px;
}

/* TOC Styles */
.toc-wrapper {
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.toc-header {
  background-color: #f8fafc;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #e2e8f0;
}

.toc-title {
  color: #334155;
  font-weight: bold;
  font-size: 16px;
}

.toc-toggle {
  color: #64748b;
  display: flex;
  align-items: center;
}

.toc-body {
  padding: 15px;
  background-color: #fff;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-list li {
  margin-bottom: 8px;
}

.toc-list li.level-1 { 
  font-weight: bold; 
}
.toc-list li.level-2 { 
  margin-left: 20px; 
  font-weight: normal; 
}
.toc-list li.level-3 { 
  margin-left: 40px; 
  font-size: 0.9em; 
}

.toc-list a {
  color: #334155;
  text-decoration: none;
  transition: color 0.2s;
  &:hover { 
    color: #3b82f6; 
    text-decoration: underline; 
  }
}

/* Main Image */
.main-image {
  margin-bottom: 30px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
}

/* Content Styles */
.page-content {
  line-height: 1.8;
  font-size: 16px;
  margin-bottom: 50px;
  color: #334155;
  
  :deep(h2) {
    color: #3b82f6;
    font-size: 22px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  
  :deep(h3) {
    color: #3b82f6;
    font-size: 18px;
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  
  :deep(p) {
    margin-bottom: 20px;
    text-align: justify;
  }

  :deep(ul) {
    padding-left: 20px;
    margin-bottom: 20px;
    li { margin-bottom: 10px; }
  }
  
  :deep(strong) {
    color: #1e293b;
    font-weight: bold;
  }
  
  :deep(a) {
    color: #3b82f6;
    text-decoration: none;
    font-style: italic;
    &:hover { text-decoration: underline; }
  }
}

/* Latest News Section Layout */
.latest-news-section {
  margin-top: 50px;
}

.news-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

/* Main News Column */
.main-news-column {
  display: flex;
  flex-direction: column;
}

.main-post-item {
  margin-bottom: 40px;
}

.post-category-label {
  color: #f43f5e; /* Pink */
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 10px;
}

.post-title {
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.4;
  
  a {
    color: #3b82f6; /* Blue */
    text-decoration: none;
    font-size: 26px;
    font-weight: bold;
    transition: color 0.2s;
    &:hover { color: #2563eb; }
  }
}

.post-meta-center {
  text-align: center;
  font-size: 11px;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 25px;
  letter-spacing: 0.5px;
  
  .highlight-date {
    color: #f43f5e;
  }
  
  .meta-author {
    color: #f43f5e;
  }
}

.post-content-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.post-image {
  flex: 0 0 50%; /* Take up half width */
  
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
}

.post-excerpt-col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-excerpt {
  color: #475569;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
}

.read-more-btn-text {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: flex-start;
  transition: all 0.2s;
  
  &:hover {
    background: #3b82f6;
    color: white;
  }
}

.post-footer-row {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e2e8f0;
  padding-top: 10px;
  font-size: 13px;
  color: #64748b;
  
  .cat-name {
    color: #f43f5e;
  }
  
  .footer-comments {
    color: #f43f5e;
  }
}

.post-divider {
  height: 1px;
  background-color: #e2e8f0;
  margin-top: 40px;
  margin-bottom: 0;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
}

/* Sidebar Column */
.sidebar-column {
  /* sticky sidebar if needed */
}

.sidebar-heading {
  font-size: 16px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e2e8f0;
  display: inline-block;
  width: 100%;
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
}

.date-box {
  background-color: #3b82f6;
  color: white;
  width: 45px;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  flex-shrink: 0;
  
  .date-day {
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
  }
  
  .date-month {
    font-size: 10px;
    text-transform: uppercase;
  }
}

.sidebar-content {
  flex: 1;
}

.sidebar-title {
  margin: 0 0 5px 0;
  line-height: 1.4;
  
  a {
    color: #f43f5e; /* Pinkish red */
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    transition: color 0.2s;
    
    &:hover { color: #3b82f6; }
  }
}

.sidebar-comments {
  font-size: 12px;
  color: #94a3b8;
  font-style: italic;
}
</style>
