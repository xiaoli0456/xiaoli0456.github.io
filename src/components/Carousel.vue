<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  },
  loop: {
    type: Boolean,
    default: true
  }
});

// Current index logic:
// If looping, we have clones at both ends: [cloneLast, item1, item2, ..., itemN, cloneFirst]
// Real index 0 corresponds to array index 1.
// Real index N-1 corresponds to array index N.
// The array length is N + 2.

const isTransitioning = ref(false);
const currentIndex = ref(props.loop ? 1 : 0);
const isDragging = ref(false);
const startX = ref(0);
const currentTranslate = ref(0);
const prevTranslate = ref(0);
const containerRef = ref(null);
const animationId = ref(null);
let autoPlayTimer = null;

// Prepare display items
const displayItems = computed(() => {
  if (!props.loop || props.items.length <= 1) {
    return props.items;
  }
  const last = props.items[props.items.length - 1];
  const first = props.items[0];
  return [last, ...props.items, first];
});

// Map display index back to original item index for indicators
const activeOriginalIndex = computed(() => {
  if (!props.loop) return currentIndex.value;
  
  if (currentIndex.value === 0) return props.items.length - 1;
  if (currentIndex.value === displayItems.value.length - 1) return 0;
  return currentIndex.value - 1;
});

const getPositionX = (event) => {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
};

const startDrag = (event) => {
  isDragging.value = true;
  startX.value = getPositionX(event);
  isTransitioning.value = false; // Disable transition during drag
  animationId.value = requestAnimationFrame(animation);
  if (containerRef.value) {
    containerRef.value.style.cursor = 'grabbing';
  }
  stopAutoPlay();
  
  // Handle edge cases immediately on drag start to prevent getting stuck at clones
  if (props.loop) {
      if (currentIndex.value === displayItems.value.length - 1) {
          currentIndex.value = 1;
          updatePosition(false);
      } else if (currentIndex.value === 0) {
          currentIndex.value = displayItems.value.length - 2;
          updatePosition(false);
      }
  }
};

const drag = (event) => {
  if (isDragging.value) {
    const currentPosition = getPositionX(event);
    currentTranslate.value = prevTranslate.value + currentPosition - startX.value;
  }
};

const endDrag = () => {
  isDragging.value = false;
  cancelAnimationFrame(animationId.value);
  const movedBy = currentTranslate.value - prevTranslate.value;
  const threshold = 50;

  if (movedBy < -threshold) {
    nextSlide();
  } else if (movedBy > threshold) {
    prevSlide();
  } else {
    // Snap back
    updatePosition(true);
  }

  if (containerRef.value) {
    containerRef.value.style.cursor = 'grab';
  }
  startAutoPlay();
};

const animation = () => {
  if (isDragging.value && containerRef.value) {
    containerRef.value.style.transform = `translateX(${currentTranslate.value}px)`;
    requestAnimationFrame(animation);
  }
};

const updatePosition = (animate = true) => {
  if (!containerRef.value) return;
  
  isTransitioning.value = animate;
  const width = containerRef.value.clientWidth;
  currentTranslate.value = -currentIndex.value * width;
  prevTranslate.value = currentTranslate.value;
  
  containerRef.value.style.transform = `translateX(${currentTranslate.value}px)`;
};

const handleTransitionEnd = () => {
  if (!props.loop) return;

  // If we are at the clone of the first slide (end of array)
  if (currentIndex.value === displayItems.value.length - 1) {
    isTransitioning.value = false;
    currentIndex.value = 1; // Jump to real first slide
    updatePosition(false);
  }
  // If we are at the clone of the last slide (start of array)
  else if (currentIndex.value === 0) {
    isTransitioning.value = false;
    currentIndex.value = displayItems.value.length - 2; // Jump to real last slide
    updatePosition(false);
  }
};

const nextSlide = () => {
  if (!props.loop) {
    if (currentIndex.value < props.items.length - 1) {
      currentIndex.value++;
      updatePosition(true);
    }
  } else {
    // Loop logic
    if (currentIndex.value >= displayItems.value.length - 1) return;
    currentIndex.value++;
    updatePosition(true);
  }
};

const prevSlide = () => {
  if (!props.loop) {
    if (currentIndex.value > 0) {
      currentIndex.value--;
      updatePosition(true);
    }
  } else {
    // Loop logic
    if (currentIndex.value <= 0) return;
    currentIndex.value--;
    updatePosition(true);
  }
};

const goToSlide = (originalIndex) => {
  if (props.loop) {
    currentIndex.value = originalIndex + 1;
  } else {
    currentIndex.value = originalIndex;
  }
  updatePosition(true);
};

const startAutoPlay = () => {
  if (props.autoPlay && props.items.length > 1) {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, props.interval);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
  }
};

const handleResize = () => {
  // Disable animation on resize to prevent weird jumping
  updatePosition(false);
};

onMounted(() => {
  // Initialize position
  // Use nextTick to ensure container width is available
  nextTick(() => {
      updatePosition(false);
      startAutoPlay();
      window.addEventListener('resize', handleResize);
  });
});

onUnmounted(() => {
  stopAutoPlay();
  window.removeEventListener('resize', handleResize);
  cancelAnimationFrame(animationId.value);
});
</script>

<template>
  <div 
    class="carousel-wrapper"
    @mousedown="startDrag"
    @touchstart="startDrag"
    @mousemove="drag"
    @touchmove="drag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @touchend="endDrag"
  >
    <div 
      class="carousel-track" 
      ref="containerRef"
      :class="{ 'is-transitioning': isTransitioning }"
      @transitionend="handleTransitionEnd"
    >
      <!-- We render displayItems which includes clones if loop is true -->
      <div 
        class="carousel-slide" 
        v-for="(item, index) in displayItems" 
        :key="`${index}-${item.id || index}`"
      >
        <!-- Pass the original item to the slot. 
             If it's a clone, it's just the same item data.
             IsActive needs to check against the mapped index. 
        -->
        <slot :item="item" :isActive="activeOriginalIndex === (loop ? (index === 0 ? props.items.length - 1 : (index === displayItems.length - 1 ? 0 : index - 1)) : index)"></slot>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button 
      class="nav-btn prev" 
      @click.stop="prevSlide" 
      aria-label="Previous Slide"
      :disabled="!loop && currentIndex === 0"
      :class="{ disabled: !loop && currentIndex === 0 }"
    >
      <span class="arrow-icon">‹</span>
    </button>
    <button 
      class="nav-btn next" 
      @click.stop="nextSlide" 
      aria-label="Next Slide"
      :disabled="!loop && currentIndex === (loop ? displayItems.length - 1 : items.length - 1)"
      :class="{ disabled: !loop && currentIndex === (loop ? displayItems.length - 1 : items.length - 1) }"
    >
      <span class="arrow-icon">›</span>
    </button>

    <!-- Indicators -->
    <div class="carousel-indicators">
      <span 
        v-for="(item, index) in items" 
        :key="index" 
        class="dot" 
        :class="{ active: index === activeOriginalIndex }"
        @click.stop="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: grab;
  user-select: none;
}

.carousel-wrapper:active {
  cursor: grabbing;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  /* No default transition here, handled by class */
}

.carousel-track.is-transitioning {
  transition: transform 0.5s ease-out;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Arrows */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  outline: none;
}

.nav-btn:hover:not(.disabled) {
  background-color: rgba(255, 255, 255, 0.4);
}

.nav-btn.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-btn.prev {
  left: 20px;
}

.nav-btn.next {
  right: 20px;
}

.arrow-icon {
  font-size: 24px;
  line-height: 1;
  padding-bottom: 4px; 
}

/* Indicators */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: white;
}

@media (max-width: 768px) {
  .nav-btn {
    width: 30px;
    height: 30px;
  }
  
  .nav-btn.prev {
    left: 10px;
  }
  
  .nav-btn.next {
    right: 10px;
  }
}
</style>
