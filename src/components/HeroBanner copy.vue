<script setup>
import Carousel from './Carousel.vue';

const banners = [
  {
    id: 1,
    title: 'HOÀN TRẢ TỨC THÌ',
    highlight: '1.6%',
    sub: 'RÚT TIỀN NGAY - KHÔNG CẦN CƯỢC',
    gradient: 'linear-gradient(135deg, #a5f3fc 0%, #38bdf8 100%)'
  },
  {
    id: 2,
    title: 'THƯỞNG NẠP ĐẦU',
    highlight: '100%',
    sub: 'LÊN ĐẾN 8.888K',
    gradient: 'linear-gradient(135deg, #fbcfe8 0%, #f472b6 100%)'
  },
  {
    id: 3,
    title: 'CODE CUỐI TUẦN',
    highlight: '38K',
    sub: 'PHÁT THƯỞNG CHỦ NHẬT HÀNG TUẦN',
    gradient: 'linear-gradient(135deg, #bbf7d0 0%, #4ade80 100%)'
  }
];
</script>

<template>
  <section class="hero-banner">
    <Carousel :items="banners" :auto-play="true" :interval="4000">
      <template #default="{ item, isActive }">
        <div class="banner-slide" :style="{ background: item.gradient }">
           <!-- Background Pattern -->
           <div class="bg-pattern"></div>
           
           <div class="banner-content" v-if="isActive">
             <h2 class="animate-fade-in-up">{{ item.title }}</h2>
             <h1 class="animate-zoom-in">{{ item.highlight }}</h1>
             <p class="animate-fade-in-up delay-1">{{ item.sub }}</p>
           </div>
        </div>
      </template>
    </Carousel>
  </section>
</template>

<style scoped>
.hero-banner {
  width: 100%;
  height: 300px; /* Fixed height for the banner area */
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
}

.bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" stroke-width="2" fill="none"/></svg>');
    background-size: 200px 200px;
    opacity: 0.5;
    pointer-events: none;
}

.banner-content {
  text-align: center;
  color: #1e40af;
  text-shadow: 0 0 10px rgba(255,255,255,0.8);
  z-index: 10;
  padding: 0 20px;
}

h1 {
  font-size: 60px;
  font-weight: 900;
  margin: 0;
  color: #0284c7;
  -webkit-text-stroke: 2px white;
}

h2 {
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
  color: #1d4ed8;
}

p {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #1e3a8a;
}

/* Animations */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.animate-zoom-in {
  animation: zoomIn 0.8s ease-out forwards;
  opacity: 0;
  transform: scale(0.5);
}

.delay-1 {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .hero-banner {
    height: 200px;
  }
  
  h1 {
    font-size: 40px;
  }
  
  h2 {
    font-size: 24px;
  }
  
  p {
    font-size: 14px;
  }
}
</style>
