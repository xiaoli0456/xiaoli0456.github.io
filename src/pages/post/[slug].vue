<script setup>
import { useRoute, useRouter } from 'vue-router';
import { usePosts } from '@/composables/usePosts';
import { computed, ref } from 'vue';

const route = useRoute();
const router = useRouter();
const { getPostBySlug, recentPosts } = usePosts();

const post = computed(() => getPostBySlug(route.params.slug));

// Mock Next/Prev posts for navigation
const prevPost = computed(() => {
  // In a real app, logic to find prev post
  return { title: "Mẹo soi kèo tài xỉu trực tiếp lời to cho tân thủ mới vào nghề", slug: "meo-soi-keo" };
});

const nextPost = computed(() => {
  // In a real app, logic to find next post
  return { title: "Web nào cập nhật tỷ lệ kèo bóng đá live nhanh và chuẩn nhất?", slug: "ty-le-keo-bong-da" };
});

// Sidebar data with parsed dates
const sidebarPosts = computed(() => {
  return recentPosts.slice(0, 8).map(p => ({
    ...p,
    day: p.date ? p.date.split(' ')[1].replace(',', '') : '21',
    month: 'Th6', // Hardcoded or mapped
    comments: 1
  }));
});

// SEO Optimization
useSeoMeta({
  title: () => post.value?.title,
  ogTitle: () => post.value?.title,
  description: () => post.value?.excerpt,
  ogDescription: () => post.value?.excerpt,
  ogImage: () => post.value?.image,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="page-container">
    <div class="container">
      <div v-if="post" class="content-wrapper">
        <!-- Main Column -->
        <div class="main-column">
          
          <!-- Article Header (Centered) -->
          <div class="article-header">
            <div class="post-category">{{ post.category || 'THỂ THAO' }}</div>
            <h1 class="main-title">{{ post.title }}</h1>
            <div class="post-meta-header">
              <span class="meta-text">ĐĂNG VÀO <span class="highlight">{{ post.date ? post.date.toUpperCase() : 'THÁNG 6 21, 2025' }}</span> BỞI <span class="highlight">{{ post.author || 'DT68' }}</span></span>
            </div>
          </div>

          <!-- Featured Image (Optional, if needed, but screenshot shows content directly) -->
          <!-- <div class="featured-image" v-if="post.image">
            <img :src="post.image" :alt="post.title">
          </div> -->

          <!-- Article Content -->
          <div class="article-content" v-html="post.content"></div>
          
          <!-- Social Share -->
          <div class="social-share">
            <a href="#" class="share-icon facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
            </a>
            <a href="#" class="share-icon twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
            </a>
            <a href="#" class="share-icon email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
            </a>
            <a href="#" class="share-icon pinterest">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.437-3.254-2.5 0-3.968 1.875-3.968 3.814 0 .756.291 1.568.653 2.01.072.088.082.165.06.298-.065.268-.213.865-.242.984-.037.158-.125.191-.288.115-1.072-.5-1.74-2.046-1.74-3.295 0-2.68 1.95-5.143 5.626-5.143 2.954 0 5.249 2.11 5.249 4.93 0 2.943-1.844 5.312-4.405 5.312-1.733 0-3.045-.9-3.55-1.966l-.971 3.699c-.354 1.348-1.332 3.033-1.986 4.025A7.986 7.986 0 0 0 8 16a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"/></svg>
            </a>
            <a href="#" class="share-icon linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
            </a>
          </div>

          <!-- Post Footer Meta -->
          <div class="post-footer-meta">
            Bài viết này được đăng trong <span class="highlight-cat">{{ post.category || 'Thể Thao' }}</span>. Đánh dấu <span class="highlight-cat">liên kết thường trực</span>.
          </div>

          <!-- Author Box -->
          <div class="author-box">
             <div class="author-avatar">
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#e2e8f0" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
             </div>
             <div class="author-info">
               <div class="author-name">{{ post.author || 'DT68' }}</div>
               <div class="author-bio">
                 DT68 - Sảnh game casino uy tín bậc nhất Việt Nam, được đổi tên từ nhà cái 8day, chuyên gia bảo mật cá cược hàng đầu. Chúc anh em luôn thắng lớn tại mỗi kèo cược của mình tại DT68.com
               </div>
             </div>
          </div>

          <!-- Post Navigation -->
          <div class="post-navigation">
            <div class="nav-item prev">
              <span class="nav-arrow">&lt;</span>
              <NuxtLink :to="'/post/' + prevPost.slug">{{ prevPost.title }}</NuxtLink>
            </div>
            <div class="nav-item next">
              <NuxtLink :to="'/post/' + nextPost.slug">{{ nextPost.title }}</NuxtLink>
              <span class="nav-arrow">&gt;</span>
            </div>
          </div>

          <!-- Comments Section -->
          <div class="comments-section">
            <h3 class="comments-title">1 BÌNH LUẬN VỀ “{{ post.title.toUpperCase() }}”</h3>
            
            <div class="pingback">
              <span class="pingback-label">Pingback:</span>
              <NuxtLink :to="'/post/' + nextPost.slug" class="pingback-link">{{ nextPost.title }} - DT68</NuxtLink>
            </div>
            
            <div class="comments-closed">
              Bình luận đã đóng.
            </div>
          </div>

        </div>

        <!-- Sidebar -->
        <aside class="sidebar">
          <h3 class="sidebar-heading">TIN HOT</h3>
          <div class="sidebar-list">
            <div v-for="(item, index) in sidebarPosts" :key="index" class="sidebar-item">
              <div class="date-box">
                <span class="date-day">{{ item.day }}</span>
                <span class="date-month">{{ item.month }}</span>
              </div>
              <div class="sidebar-content">
                <h4 class="sidebar-title">
                  <NuxtLink :to="item.slug ? '/post/' + item.slug : '#'">{{ item.title }}</NuxtLink>
                </h4>
                <div class="sidebar-comments">{{ item.comments || 1 }} bình luận</div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div v-else class="not-found">
        <h1>Bài viết không tồn tại</h1>
        <NuxtLink to="/no-hu" class="back-link">Quay lại danh sách</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 40px 0;
  background-color: #f0f9ff; /* Light Blue Background */
  font-family: 'Arial', sans-serif;
  color: #334155;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Layout */
.content-wrapper {
  display: flex;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
}

.main-column {
  flex: 3;
}

.sidebar {
  flex: 1;
  min-width: 300px;
}

/* Article Header */
.article-header {
  text-align: center;
  margin-bottom: 30px;
}

.post-category {
  color: #f43f5e;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.main-title {
  color: #3b82f6; /* Blue Title */
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
  line-height: 1.3;
}

.post-meta-header {
  font-size: 11px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  .highlight {
    color: #f43f5e;
  }
}

/* Article Content */
.article-content {
  line-height: 1.8;
  font-size: 16px;
  color: #334155;
  margin-bottom: 40px;

  :deep(h2) {
    color: #3b82f6;
    font-size: 24px;
    font-weight: bold;
    margin: 30px 0 15px;
  }

  :deep(h3) {
    color: #3b82f6;
    font-size: 18px;
    font-weight: bold;
    margin: 25px 0 15px;
  }

  :deep(p) {
    margin-bottom: 20px;
    text-align: justify;
  }

  :deep(strong) {
    color: #1e293b;
    font-weight: bold;
  }
  
  :deep(a) {
    color: #f43f5e;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  :deep(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
  }
}

/* Social Share */
.social-share {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;

  .share-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #cbd5e1;
    color: #cbd5e1;
    transition: all 0.2s;

    &:hover {
      border-color: #3b82f6;
      color: #3b82f6;
    }
  }
}

/* Post Footer Meta */
.post-footer-meta {
  background-color: #f8fafc;
  padding: 15px;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 30px;
  text-align: center;

  .highlight-cat {
    color: #f43f5e;
  }
}

/* Author Box */
.author-box {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  background-color: #fff; /* Could be transparent as per screenshot, but distinct area */
  padding: 20px 0;
}

.author-avatar {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e2e8f0; /* Placeholder gray */
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg { width: 100%; height: 100%; color: #fff; background: #cbd5e1; }
}

.author-info {
  flex: 1;
}

.author-name {
  color: #3b82f6;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.author-bio {
  font-size: 14px;
  line-height: 1.6;
  color: #475569;
}

/* Post Navigation */
.post-navigation {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 15px 0;
  margin-bottom: 40px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  
  a {
    color: #f43f5e;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
  
  .nav-arrow {
    color: #f43f5e;
    font-weight: bold;
  }
}

/* Comments Section */
.comments-section {
  margin-top: 40px;
}

.comments-title {
  color: #3b82f6;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.pingback {
  font-size: 14px;
  margin-bottom: 20px;
  
  .pingback-label {
    color: #64748b;
    margin-right: 5px;
  }
  
  .pingback-link {
    color: #f43f5e;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
}

.comments-closed {
  font-size: 14px;
  color: #334155;
}

/* Sidebar Styles (Matching CategoryPageLayout) */
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

.not-found {
  text-align: center;
  padding: 100px 0;
  
  h1 { color: #334155; margin-bottom: 20px; }
  .back-link { color: #3b82f6; text-decoration: underline; }
}
</style>
