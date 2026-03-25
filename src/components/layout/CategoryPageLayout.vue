<script setup>
import { usePosts } from "@/composables/usePosts";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const { posts, recentPosts } = usePosts();
const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  breadcrumbName: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    default: "NỔ HŨ DT68",
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const categories = [
  { name: "Nổ Hũ", value: "no-hu" },
  { name: "Bắn Cá", value: "ban-ca" },
  { name: "Casino", value: "casino" },
  { name: "Thể Thao", value: "the-thao" },
  { name: "Game Bài", value: "game-bai" },
  { name: "Xổ Số", value: "xo-so" },
  { name: "Khuyến Mãi", value: "khuyen-mai" },
];

// Find current category value based on prop or route
const currentCategory = ref(
  categories.find((c) => props.breadcrumbName.toLowerCase().includes(c.name.toLowerCase()))?.value || ""
);

const handleCategoryChange = (event) => {
  const routeName = event.target.value;
  if (routeName) {
    router.push({ name: routeName });
  }
};

// Pagination Logic
const itemsPerPage = 9;
const currentPage = ref(1);

const displayItems = computed(() => {
  if (props.items && props.items.length > 0) {
    return props.items;
  }
  return posts.value;
});

const totalPages = computed(() => Math.ceil(displayItems.value.length / itemsPerPage));

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return displayItems.value.slice(start, end);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Scroll to top of list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="page-container">
    <div class="container">
      <!-- Main Content -->
      <div class="content-wrapper">
        <div class="main-column">
          <!-- Main Title (Hidden visually but kept for SEO) -->
          <h1 class="main-title visually-hidden">{{ title }}</h1>

          <!-- Blog List (Grid Layout) -->
          <div class="blog-list" v-if="paginatedItems && paginatedItems.length > 0">
            <article
              v-for="(item, index) in paginatedItems"
              :key="index"
              class="blog-post-card"
            >
              <div class="post-thumbnail">
                <NuxtLink :to="item.link || (item.slug ? '/post/' + item.slug : '#')">
                  <img :src="item.image" :alt="item.title" loading="lazy" />
                  <!-- Overlay Logo/Badge if needed -->
                  <!-- <div class="logo-overlay">
                    <img src="~/assets/images/common/dt68-logo.png" alt="DT68" />
                  </div> -->
                </NuxtLink>
              </div>
              <div class="post-info">
                <h2 class="post-title">
                  <NuxtLink :to="item.link || (item.slug ? '/post/' + item.slug : '#')">{{ item.title }}</NuxtLink>
                </h2>
                <p class="post-excerpt">{{ item.description || item.excerpt }}</p>
              </div>
            </article>
          </div>
          
          <div class="blog-list-empty" v-else>
            <p>Đang cập nhật nội dung...</p>
          </div>

          <!-- Pagination -->
          <div class="pagination" v-if="totalPages > 1">
            <button 
              class="page-btn prev" 
              :disabled="currentPage === 1"
              @click="changePage(currentPage - 1)"
            >
              &lt;
            </button>
            
            <button 
              v-for="page in totalPages" 
              :key="page"
              class="page-btn"
              :class="{ active: currentPage === page }"
              @click="changePage(page)"
            >
              {{ page }}
            </button>
            
            <button 
              class="page-btn next" 
              :disabled="currentPage === totalPages"
              @click="changePage(currentPage + 1)"
            >
              &gt;
            </button>
          </div>

          <!-- Specific Page Content Slot (SEO Text) - Only if needed -->
          <!-- <div class="seo-content" v-if="$slots.default">
             <slot />
          </div> -->
        </div>

        <!-- Sidebar -->
        <aside class="sidebar">
          <!-- Categories -->
          <div class="sidebar-widget">
            <h3 class="sidebar-title">DANH MỤC</h3>
            <div class="select-wrapper">
              <select class="category-select" v-model="currentCategory" @change="handleCategoryChange">
                <option value="" disabled>Chọn danh mục</option>
                <option v-for="cat in categories" :key="cat.value" :value="cat.value">
                  {{ cat.name }}
                </option>
              </select>
            </div>
          <!-- </div> -->

          <!-- Recent Posts -->
          <!-- <div class="sidebar-widget"> -->
            <h3 class="sidebar-title">BÀI VIẾT GẦN ĐÂY</h3>
            <ul class="recent-posts">
              <li
                v-for="(item, index) in recentPosts"
                :key="index"
                class="recent-item"
              >
                <div class="recent-thumb">
                  <img :src="item.image || 'https://placehold.co/150x150'" :alt="item.title" />
                  <div class="date-overlay-small">
                    <span class="day">26</span>
                    <span class="month">Th10</span>
                  </div>
                </div>
                <div class="recent-info">
                  <NuxtLink
                    :to="item.slug ? '/post/' + item.slug : '#'"
                    class="recent-title"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 40px 0;
  background-color: #010a40; /* Dark Blue Background */
  font-family: Arial, sans-serif;
  color: #e2e8f0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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

/* Blog List Grid */
.blog-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.blog-post-card {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .post-thumbnail {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
    aspect-ratio: 16/9;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .logo-overlay {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 50%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .post-info {
    .post-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      line-height: 1.4;

      a {
        color: #38bdf8; /* Light Blue */
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: #60a5fa;
        }
      }
    }

    .post-excerpt {
      font-size: 14px;
      color: #cbd5e1; /* Slate 300 */
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

/* Sidebar Widgets */
.sidebar-widget {
  margin-bottom: 40px;
  // &:first-child {
  //   margin-bottom: 0;
  //   position: sticky;
  //   top: 120px;
  // }
    & {
    margin-bottom: 0;
    position: sticky;
    top: 150px;
  }
}

.sidebar-title {
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 4px solid #ffffff;
}

/* Category Select */
.select-wrapper {
  position: relative;
  
  &::after {
    content: "▼";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: #333;
    pointer-events: none;
    font-size: 12px;
  }
}

.category-select {
  width: 100%;
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  background-color: #f1f5f9;
  color: #333;
  font-size: 14px;
  appearance: none; /* Remove default arrow */
  cursor: pointer;
  
  &:focus {
    outline: 2px solid #38bdf8;
  }
}

/* Recent Posts Sidebar */
.recent-posts {
  list-style: none;
  padding: 0;
  margin: 0;

  .recent-item {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }

    .recent-thumb {
      flex: 0 0 80px;
      height: 80px;
      position: relative;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .date-overlay-small {
        position: absolute;
        top: 5px;
        left: 5px;
        background: rgba(255, 255, 255, 0.9);
        color: #333;
        padding: 2px 5px;
        border-radius: 2px;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        line-height: 1.1;
        
        span {
          display: block;
        }
        
        .day {
          font-size: 12px;
          color: #dc2626;
        }
      }
    }

    .recent-info {
      flex: 1;

      .recent-title {
        font-size: 14px;
        color: #38bdf8;
        text-decoration: none;
        line-height: 1.4;
        display: block;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}

.page-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: #e2e8f0;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #38bdf8;
    color: #fff;
    border-color: #38bdf8;
  }

  &.active {
    background-color: #0ea5e9;
    color: #fff;
    border-color: #0ea5e9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev, &.next {
    font-size: 18px;
  }
}

/* Content Slot Styles (SEO Content) */
.seo-content {
  margin-top: 40px;
  color: #e2e8f0;
  
  :deep(h1), :deep(h2), :deep(h3) {
    color: #38bdf8;
    margin: 20px 0 10px;
  }
  
  :deep(p) {
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  :deep(a) {
    color: #facc15;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  :deep(.featured-image), :deep(.content-image) {
    margin: 20px 0;
    text-align: center;
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
    
    .caption {
      margin-top: 5px;
      font-size: 13px;
      color: #94a3b8;
      font-style: italic;
    }
  }
  
  :deep(.highlight-red) {
    color: #f87171;
  }
}
</style>
