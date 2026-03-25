<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import logoImg from "~/assets/images/common/dt68-logo.png";

const isMenuOpen = ref(false);
const isSticky = ref(false);
const headerRef = ref(null);

const currentDateTime = ref(new Date());

const formattedDate = computed(() => {
  const date = currentDateTime.value;
  const dayOfWeekMap = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  const dayOfWeek = dayOfWeekMap[date.getDay()];
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${dayOfWeek} - ${day}/${month}/${year}`;
});

const toggleMenu = (event) => {
  event.stopPropagation();
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

const handleScroll = () => {
  if (headerRef.value) {
    isSticky.value = window.scrollY > 0;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", closeMenu);
});

const menuItems = [
  { name: "DT68", route: "index" },
  { name: "Nổ Hũ", route: "no-hu" },
  { name: "Bắn Cá", route: "ban-ca" },
  { name: "Sòng Bài", route: "casino" },
  { name: "Thể Thao", route: "the-thao" },
  { name: "Game Bài", route: "game-bai" },
  { name: "Đá Gà", route: "da-ga" },
  { name: "Đăng Ký", route: "dang-ky" },
  { name: "Nạp Tiền", route: "nap-tien" },
  { name: "Rút Tiền", route: "rut-tien" },
  { name: "Tải App", route: "tai-app" },
  { name: "Khuyến Mãi", route: "khuyen-mai" },
];
</script>

<template>
  <header ref="headerRef" :class="{ 'sticky-header': isSticky }">
    <div class="header-top">
      <div class="container">
        <div class="header-top-content">
          <!-- Logo -->
          <div class="logo-area">
            <NuxtLink to="/">
              <img :src="logoImg" alt="DT68 Logo" class="logo-image" />
            </NuxtLink>
          </div>
          


          <!-- Auth Buttons -->
          <div class="auth-buttons">

                      <!-- Date Time -->
          <div class=" date-time-area">
            {{ formattedDate }} <span>⏰</span>
          </div>
            <a
              href="https://336-qo.qash521.com/"
              target="_blank"
              class="btn btn-login"
            >
              ĐĂNG NHẬP
            </a>
            <a
              href="https://336-qo.qash521.com/"
              target="_blank"
              class="btn btn-register"
            >
              ĐĂNG KÝ
            </a>
          </div>

          <!-- Mobile Toggle -->
          <button
            class="mobile-toggle"
            @click="toggleMenu"
            @click.stop
            :class="{ 'is-active': isMenuOpen }"
          >
            <span v-if="!isMenuOpen" class="hamburger-icon">
              <span class="hamburger"></span>
              <span class="hamburger"></span>
              <span class="hamburger"></span>
            </span>
            <span v-else class="close-icon">✕</span>
          </button>
        </div>
      </div>
    </div>

  <div class="mobile-auth-bar">
    <div class="container">
      <div class="auth-buttons auth-buttons-mobile">
        <a
          href="https://336-qo.qash521.com/"
          target="_blank"
          class="btn btn-login"
        >
          ĐĂNG NHẬP
        </a>
        <a
          href="https://336-qo.qash521.com/"
          target="_blank"
          class="btn btn-register"
        >
          ĐĂNG KÝ
        </a>
      </div>
    </div>
  </div>

    <div class="header-bottom desktop-only">
      <div class="container">
        <!-- Navigation -->
        <nav class="main-nav">
          <ul class="nav-list">
            <li v-for="item in menuItems" :key="item.name">
              <NuxtLink :to="{ name: item.route }" class="nav-link">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu-wrapper" :class="{ 'is-open': isMenuOpen }" @click.stop>
      <nav>
        <ul class="mobile-nav-list">
          <li v-for="item in menuItems" :key="item.name">
            <NuxtLink :to="{ name: item.route }" class="nav-link" @click="isMenuOpen = false">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #333;
  transition: all 0.3s ease;
  z-index: 1000;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-top {
  background-color: #d8edf8;
  border-bottom: 1px solid #eee;
}

.header-top-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  gap: 20px;
}

.logo-image {
  height: 50px;
  width: auto;
  display: block;
}

.date-time-area {
  // color: #ff6347; // Tomato color for the date
  font-weight: bold;
  font-size: 12px;
  white-space: nowrap;  
  line-height: 40px;

  span {
    font-size: 20px;
    vertical-align: middle;
  }
}

.header-bottom {
    background-color: var(--color-bg-main-content); /* 使用变量 */
 
}

.mobile-auth-bar {
  display: none;
  // background-color: #33ccff;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
}

.main-nav {
  display: flex;
  justify-content: flex-start;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 5px;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
}

.nav-link {
  display: block;
  padding: 12px 18px;
  text-decoration: none;
  // color: white;
   color: #000;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  transition: background-color 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.router-link-exact-active {
    background-color: #3c8cf5; // Darker blue for active
  }
}

.auth-buttons {
  display: flex;
  gap: 10px;
  margin-left: auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 25px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  border: none;
  cursor: pointer;
}

.btn-login {
  background-color: #ef4444; // Blue
  color: #ffffff;
  border: 1px solid #fff;
  box-shadow: 0 0 14px #ef4444;
  &:hover {
    background-color: #dc2626;
  }
}

.btn-register {
  background-color: #ef4444; // Red
  color: #ffffff;
    border: 1px solid #fff;
     box-shadow: 0 0 15px #ef4444;
  &:hover {
    background-color: #dc2626;
  }
}

/* Mobile Styles */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hamburger {
  width: 25px;
  height: 3px;
  background-color: #333;
}

.close-icon {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.mobile-menu-wrapper {
  display: none;
  position: absolute;
  top: 80px; /* Match header-top height */
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.mobile-menu-wrapper.is-open {
  display: block;
}

.mobile-nav-list {
  list-style: none;
  padding: 10px 0;
  margin: 0;
}

.mobile-nav-list .nav-link {
  display: block;
  padding: 15px 20px;
  font-size: 16px;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;

  &:hover,
  &.router-link-exact-active {
    background-color: #f0f0f0;
    color: #005f99;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .desktop-only,
  .date-time-area {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .header-top-content {
    justify-content: space-between;
  }
  
  .auth-buttons {
    display: none;
  }

  .mobile-auth-bar {
    display: block;
  }
  .auth-buttons-mobile {
    display: flex;
    justify-content: center;
  }
  .auth-buttons-mobile .btn {
    height: 44px;
    padding: 0 24px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    font-weight: 700;
  }
  .mobile-menu-wrapper {
    top: 126px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  .logo-image {
    height: 40px;
  }
  .header-top-content {
    height: 70px;
  }
  .mobile-menu-wrapper {
    top: 120px;
  }
}
</style>
