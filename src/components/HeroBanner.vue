<script setup>
import Carousel from "./Carousel.vue";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.webp";

// Using a placeholder image service for demonstration since no local images are provided.
// In a real project, these would be imports like: import img1 from '@/assets/banner1.jpg'
const banners = [
  {
    id: 1,
    image: banner1,
    alt: "Banner 1",
    // gradient: 'linear-gradient(135deg, #a5f3fc 0%, #38bdf8 100%)' // Fallback
  },
  {
    id: 2,
    image: banner2,
    alt: "Banner 2",
    // gradient: 'linear-gradient(135deg, #fbcfe8 0%, #f472b6 100%)' // Fallback
  },
  {
    id: 3,
    image: banner3,
    alt: "Banner 3",
    // gradient: 'linear-gradient(135deg, #bbf7d0 0%, #4ade80 100%)' // Fallback
  },
];
</script>

<template>
  <section class="hero-banner">
    <!-- 
      loop: Controls whether the carousel loops back to the start/end
      auto-play: Enables automatic sliding
      interval: 4000  interval是自动切换的时间间隔，单位是毫秒
    -->
    <Carousel :items="banners" :auto-play="true" :interval="4000" :loop="true">
      <template #default="{ item }">
        <div class="banner-slide" :style="{ background: item.gradient }">
          <!-- Render Image if available -->
          <img
            loading="lazy"
            v-if="item.image"
            :src="item.image"
            :alt="item.alt"
            class="banner-image"
            draggable="false"
          />
        </div>
      </template>
    </Carousel>
  </section>
</template>

<style scoped>
.hero-banner {
  width: 100%;
  height: 300px;
  position: relative;
  background-color: #f0f9ff;
}

.banner-slide {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none; /* Prevent default drag behavior of images */
}

@media (max-width: 768px) {
  .hero-banner {
    height: 200px;
  }
}
</style>
