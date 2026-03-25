<script setup>
import Carousel from "./Carousel.vue";
import banner1 from "~/assets/images/home/promotion-4.webp";
import banner2 from "~/assets/images/banners/banner2.webp";
import banner3 from "~/assets/images/banners/banner3.webp";

// Using a placeholder image service for demonstration since no local images are provided.
// In a real project, these would be imports like: import img1 from '@/assets/banner1.jpg'
const banners = [
  {
    id: 1,
    image: banner1,
    alt: "Banner 1",
  },
  {
    id: 2,
    image: banner2,
    alt: "Banner 2",
  },
  {
    id: 3,
    image: banner3,
    alt: "Banner 3",
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
  height: auto;
  /* height: 300px; */
  position: relative;
  background-color: var(--color-primary-blue-darker);
}

.banner-slide {
  width: 100%;
  /* Use aspect-ratio to force consistent height for all slides */
  aspect-ratio: 1920 / 600;
  /* height: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.banner-slide img {
  display: inline-block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
}
.banner-image {
  width: 100%;
  height: 100%; /* Fill the container height */
  object-fit: cover; /* Crop to fit without distortion */
  pointer-events: none; /* Prevent default drag behavior of images */
}

@media (max-width: 768px) {
  .hero-banner {
    height: auto;
  }
  /* 不要轮播左右按钮 */
}
@media (max-width: 576px) {
  :deep(.nav-btn) {
    display: none;
  }
}
</style>
