<script setup>
import tacCaCuo from "~/assets/images/home/Nha-cung-cap-sodo66.webp";
import bankListDt68 from "~/assets/images/home/tai-xuong-1.png";
import bankListDt682 from "~/assets/images/home/tai_xuong-removebg-preview.png.webp";

import { ref, onMounted, onUnmounted } from "vue";

const showBackToTop = ref(false);

import logoImg from "~/assets/images/common/dt68-logo.png";
const footerLinks = [
  { name: "Về chúng tôi", route: "#" },
  { name: "Chính sách bảo mật", route: "#" },
  { name: "Chơi có trách nhiệm", route: "#" },
  { name: "Điều khoản và điều kiện", route: "#" },
  { name: "Quyền riêng tư", route: "#" },
  { name: "Giấy phép hoạt động", route: "#" },
  { name: "Sơ đồ Website", route: "#" },
];
const handleScroll = () => {
  // Show button when scrolled down 300px
  showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <footer class="app-footer">
    <div class="container footer-container">
      <div class="footer-grid">
        <div class="footer-col about">
          <div class="footer-logo">
            <div class="logo-image">
              <img :src="logoImg" alt="DT68 Logo" class="logo-image" />
            </div>
          </div>
          <p class="footer-desc">
            <strong class="highlight">DT68</strong> được biết đến là một trong
            những nhà cái có độ tin cậy cao, được đông đảo người chơi đánh giá
            "xanh chín". Mỗi ngày, hàng nghìn khách hàng tin tưởng truy cập để
            tham gia giải trí.
          </p>
        </div>

        <div class="footer-col links">
          <ul class="footer-list">
            <li v-for="(item, index) in footerLinks" :key="index">
              <!-- <span class="check-icon">✔</span> -->
              <a :href="item.route" class="footer-link">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-col links">
          <ul class="footer-list">
            <li v-for="(item, index) in footerLinks" :key="index">
              <!-- <span class="check-icon">✔</span> -->
              <a :href="item.route" class="footer-link">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-col links">
          <ul class="footer-list">
            <li v-for="(item, index) in footerLinks" :key="index">
              <!-- <span class="check-icon">✔</span> -->
              <a :href="item.route" class="footer-link">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-partners-section">
        <div class="partners-row">
          <img :src="tacCaCuo" alt="Đối tác cá cược" class="partner-logo" />
        </div>
        <div class="col-inner">
          <div class="inner-row">
            <img
              :src="bankListDt68"
              alt="Đối tác ngân hàng"
              class="partner-logo"
            />
          </div>
          <div class="text-inner">
            <h3>Dai Su Thuong Hieu</h3>
            <span> TEDDY SHERINGHAM </span>
          </div>
          <div class="inner-row">
            <img
              :src="bankListDt682"
              alt="Đối tác ngân hàng"
              class="partner-logo"
            />
          </div>
        </div>

        <!-- Banks Row -->
        <!-- <div class="banks-row">
          <img :src="bankListDt68" alt="Đối tác cá cược" class="partner-logo" />
        </div> -->
      </div>

      <div class="container-bottom">
        <ul class="footer-nav">
          <li><a href="#!" class="footer-link">Giới thiệu</a></li>
          <li><a href="#!" class="footer-link">Trò chơi</a></li>
          <li><a href="#!" class="footer-link">Tuyển dụng</a></li>
          <li><a href="#!" class="footer-link">Liên hệ</a></li>
          <li><a href="#!" class="footer-link">Tuyển dụng</a></li>
          <li><a href="#!" class="footer-link">Liên hệ</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright-bar">
      Copyright ©
      <strong>DT68</strong>
    </div>

    <!-- Back to Top Button -->
    <transition name="fade">
      <button
        v-show="showBackToTop"
        class="back-to-top"
        @click="scrollToTop"
        aria-label="Back to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </button>
    </transition>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  // background-color: var(--color-bg-footer); /* Deep Blue Background */
  background-color: var(--color-bg-main-content);
  padding: 40px 0 20px;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}
.footer-container {
  background-color: #1e2024;
  border-radius: 10px;
}
.footer-partners-section {
  margin-bottom: 40px;
}

.partners-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px 0;
  align-items: center;
}
.col-inner {
  display: flex;
  justify-content: space-evenly;
  height:163px;
  img{
    width: 100%;
    height:100%;
  }
  .text-inner {
    // padding-top: 80px;
  }
}

.partner-item {
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 18px;
  /* Ideally these would be images/logos */
  font-family: "Arial Black", sans-serif;
  opacity: 0.9;

  &:hover {
    color: #fff;
    opacity: 1;
  }
}

.banks-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.bank-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 8px 15px;
  min-width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
}

.bank-name {
  color: #0ea5e9; /* Sky blue text for bank names as placeholder for colored logos */
  font-weight: bold;
  font-size: 14px;
}

.container-bottom {
  background-color: #3449f3;
  height: 50px;
  line-height: 50px;
  .footer-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
}

.copyright-bar {
  text-align: center;
  // padding-top: 20px;
  border-top: none; /* No border in screenshot */
  font-size: 14px;
  color: #1c1d1d;
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0); /* Yellow */
  color: #eee;
  border: 1px solid #eee;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s,
    background-color 0.3s;
  z-index: 99;
}

.back-to-top:hover {
  transform: translateY(-5px);
}

/* Transition for Back to Top */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

/* Left Column */
.footer-col.about {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center logo and text */
  text-align: center;
}
/* Right Column */
.footer-col.links {
  flex: 1;
  display: flex;
  justify-content: flex-start; /* Align list to the left of this column */
  padding-left: 20px;
}

.footer-logo {
  margin-bottom: 20px;
}

.logo-image {
  width: 280px;
  height: auto;
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-text-section {
    text-align: center; /* Center text on mobile */
  }

  .footer-desc {
    text-align: center; /* Center justify looks bad on small screens sometimes */
  }
}
</style>
