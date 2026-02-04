<script setup>
import { ref } from "vue";
import logoImg from "../assets/img/dt68-logo.png";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menuItems = [
  { name: "DT68", route: "index" },
  { name: "NỔ HŨ", route: "no-hu" },
  { name: "BẮN CÁ", route: "ban-ca" },
  { name: "CASINO", route: "casino" },
  { name: "THỂ THAO", route: "the-thao" },
  { name: "GAME BÀI", route: "game-bai" },
  { name: "XỔ SỐ", route: "xo-so" },
  { name: "KHUYẾN MÃI", route: "khuyen-mai" },
];
</script>

<template>
  <header>
    <div class="top-bar">
      <div class="container">
        <span>KHÁM PHÁ DT68 | TRẢI NGHIỆM CÁ CƯỢC TRỰC TUYẾN TIN CẬY</span>
      </div>
    </div>
    <div class="main-header">
      <div class="container">
        <!-- Top Section: Buttons | Logo | Socials -->
        <div class="header-controls">
          <!-- Left Actions: Buttons -->
          <div class="actions-left desktop-only">
            <button class="btn btn-primary">+ĐĂNG KÝ</button>
            <button class="btn btn-secondary">ĐĂNG NHẬP</button>
          </div>

          <!-- Center: Logo -->
          <div class="logo-area">
            <!-- <div class="logo-placeholder">
                <div class="logo-icon">DT</div>
                <div class="logo-text">
                  <span class="main-text">DT68</span>
                  <span class="sub-text">Đầu Tư Lộc Phát</span>
                </div>
             </div> -->
            <div class="logo-image">
              <img :src="logoImg" alt="DT68 Logo" class="logo-image" />
            </div>
          </div>

          <!-- Right Actions: Socials -->
          <div class="actions-right desktop-only">
            <div class="social-icons">
              <a href="#" class="icon x-icon">X</a>
              <a href="#" class="icon pin-icon">P</a>
              <a href="#" class="icon yt-icon">Y</a>
              <a href="#" class="icon twitch-icon">T</a>
            </div>
          </div>

          <!-- Mobile Toggle -->
          <button
            class="mobile-toggle"
            @click="toggleMenu"
            aria-label="Toggle Menu"
          >
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>
          </button>
        </div>

        <!-- Bottom Section: Navigation -->
        <div class="header-nav desktop-only">
          <nav>
            <ul class="nav-list">
              <li v-for="item in menuItems" :key="item.name">
                <NuxtLink :to="{ name: item.route }" class="nav-link">
                  <span v-if="item.name === 'DT68'" class="hot-badge icon-hot"
                    >HOT</span
                  >
                  <span
                    v-if="['NỔ HŨ', 'KHUYẾN MÃI'].includes(item.name)"
                    class="hot-badge"
                    >HOT</span
                  >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Mobile Menu Wrapper -->
        <div class="mobile-menu-wrapper" :class="{ 'is-open': isMenuOpen }">
          <div class="mobile-actions">
            <button class="btn btn-primary">+ĐĂNG KÝ</button>
            <button class="btn btn-secondary">ĐĂNG NHẬP</button>
          </div>
          <div class="mobile-socials">
            <a href="#" class="icon x-icon">X</a>
            <a href="#" class="icon pin-icon">P</a>
            <a href="#" class="icon yt-icon">Y</a>
            <a href="#" class="icon twitch-icon">T</a>
          </div>
          <nav>
            <ul class="mobile-nav-list">
              <li v-for="item in menuItems" :key="item.name">
                <NuxtLink :to="{ name: item.route }" class="nav-link">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  font-family: Arial, sans-serif;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-bar {
  background: linear-gradient(to right, #2563eb, #3b82f6);
  color: white;
  text-align: center;
  padding: 8px 0;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.main-header {
  padding: 10px 0;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Header Controls Layout */
.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.actions-left {
  display: flex;
  gap: 10px;
  flex: 1;
}

.actions-right {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}

.logo-area {
  flex: 0 0 auto;
  margin: 0 20px;
}
.logo-image {
  width: 160px;
  height: auto;
}

/* Logo Styles */
.logo-placeholder {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0ea5e9;
}

.logo-icon {
  font-size: 30px;
  font-weight: bold;
  border: 2px solid #0ea5e9;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-text .main-text {
  font-size: 24px;
  font-weight: 900;
  line-height: 1;
}

.logo-text .sub-text {
  font-size: 10px;
  letter-spacing: 1px;
}

/* Header Nav Layout */
.header-nav {
  border-top: 1px solid #f1f5f9;
  padding-top: 15px;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #0ea5e9;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-link:hover {
  color: #0284c7;
}

.hot-badge {
  background-color: #facc15; /* Yellow */
  color: #b91c1c; /* Red text */
  font-size: 9px;
  padding: 2px 4px;
  border-radius: 3px;
  font-weight: 900;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Buttons */
.btn {
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  background-image: linear-gradient(to bottom, #dc2626, #991b1b);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  transition: transform 0.1s;
}

.btn:active {
  transform: translateY(1px);
}

.btn-secondary {
  background-image: linear-gradient(to bottom, #b91c1c, #7f1d1d);
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 8px;
}

.icon {
  width: 28px;
  height: 28px;
  background-color: #333;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
  transition: transform 0.2s;
}

.icon:hover {
  transform: translateY(-2px);
}

.icon.x-icon {
  background-color: black;
}
.icon.pin-icon {
  background-color: #bd081c;
}
.icon.yt-icon {
  background-color: #cd201f;
}
.icon.twitch-icon {
  background-color: #6441a5;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger {
  width: 25px;
  height: 3px;
  background-color: #0ea5e9;
}

/* Mobile Menu Styles */
.mobile-menu-wrapper {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

.mobile-menu-wrapper.is-open {
  display: flex;
}

.mobile-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.mobile-socials {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  gap: 15px;
}

/* Responsive Breakpoints */
@media (max-width: 992px) {
  .desktop-only {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .header-controls {
    justify-content: space-between;
  }

  .logo-area {
    margin: 0;
  }
}
</style>
