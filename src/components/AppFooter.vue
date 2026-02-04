<script setup>
import logoImg from '@/assets/img/dt68-logo.png';
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col about">
          <h3 class="footer-title">Về Chúng Tôi</h3>
          <div class="footer-logo">
             <div class="logo-image">
               <img :src="logoImg" alt="DT68 Logo" class="logo-image">
             </div>
          </div>
          <p class="footer-desc"><strong style="color: red;">DT68</strong> chuyên cung cấp cá cược thể thao, casino trực tuyến, bắn cá, nổ hũ, tài xỉu, xổ số với hệ thống bảo mật tiên tiến, giao dịch siêu tốc, hỗ trợ tận tâm.Tham gia ngay DT68 để trải nghiệm nền tảng cá cược hiện đại, tỷ lệ thưởng hấp dẫn, hỗ trợ 24/7.</p>
        </div>
        
        <div class="footer-col categories">
          <h3 class="footer-title">Danh Mục</h3>
          <ul class="footer-list">
             <li><span class="arrow">></span> <a href="#">BẮN CÁ</a></li>
             <li><span class="arrow">></span> <a href="#">NỔ HŨ</a></li>
             <li><span class="arrow">></span> <a href="#">THỂ THAO</a></li>
             <li><span class="arrow">></span> <a href="#">GAME BÀI</a></li>
             <li><span class="arrow">></span> <a href="#">XỔ SỐ</a></li>
             <li><span class="arrow">></span> <a href="#">Casino</a></li>
          </ul>
        </div>
        
        <div class="footer-col links">
          <h3 class="footer-title">Liên Kết</h3>
          <ul class="footer-list">
             <li><span class="arrow">></span> <a href="#">LIÊN HỆ dt68</a></li>
             <li><span class="arrow">></span> <a href="#">ĐĂNG KÝ dt68</a></li>
             <li><span class="arrow">></span> <a href="#">KHUYẾN MÃI dt68</a></li>
             <li><span class="arrow">></span> <a href="#">ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</a></li>
             <li><span class="arrow">></span> <a href="#">CHÍNH SÁCH BẢO MẬT</a></li>
             <li><span class="arrow">></span> <a href="#">CHƠI CÓ TRÁCH NHIỆM</a></li>
          </ul>
        </div>
        
        <div class="footer-col contact">
          <h3 class="footer-title">Liên Hệ</h3>
          <ul class="contact-list">
            <li><span class="arrow">></span> Phone: 0886 050 785</li>
            <li><span class="arrow">></span> 
              <span>Địa Chỉ: 332/137G Hẻm 114 D. Quảng Hàm, Phường 5, Gò Vấp, Hồ Chí Minh, Việt Nam</span>
            </li>
            <li><span class="arrow">></span> Email: dt68.co@gmail.com</li>
            <li><span class="arrow">></span> Zipcode: 700000</li>
            <li><span class="arrow">></span> Website: https://dt68.co/</li>
            <li><span class="bullet">•</span> Hatag: #DT68 #NhàCáiDT68 #dautulocphat #dautu68</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="copyright-bar">
      <div class="container">
        Copyright 2026 © <strong>Bản Quyền Thương Hiệu dt68</strong>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: linear-gradient(to bottom, #dbeafe, #eff6ff);
  background-color: #dbeafe; /* Fallback */
  padding-top: 50px;
  color: #334155;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 30px;
  margin-bottom: 40px;
}

.footer-title {
  font-size: 18px;
  color: #334155;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; /* Center alignment for all titles */
}

/* About Column Specifics */
.footer-col.about {
  padding-right: 20px;
}

.footer-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.logo-image img {
  width: 250px; /* Adjusted width */
  height: auto;
  display: block;
}

.footer-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #475569;
  text-align: justify;
}

/* Lists Styles */
.footer-list, .contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li, .contact-list li {
  margin-bottom: 10px;
  font-size: 13px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #475569;
}

/* Specific styling for categories and links columns to align content */
.footer-col.categories .footer-list,
.footer-col.links .footer-list,
.footer-col.contact .contact-list {
  padding-left: 20px; /* Indent lists slightly */
}

.footer-list a {
  text-decoration: none;
  color: #b91c1c; /* Red links */
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;
}

.footer-list a:hover {
  color: #991b1b;
}

.arrow {
  color: #94a3b8;
  font-size: 10px;
  margin-top: 4px;
}

.bullet {
  color: #475569;
  font-size: 14px;
  line-height: 1;
  margin-top: 2px;
}

.copyright-bar {
  background-color: #64748b; /* Darker gray/blue */
  color: #e2e8f0;
  text-align: center;
  padding: 15px 0;
  font-size: 13px;
}

/* Responsive */
@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer-col {
    margin-bottom: 30px;
  }
  
  .footer-col.about {
    padding-right: 0;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-col.categories .footer-list,
  .footer-col.links .footer-list,
  .footer-col.contact .contact-list {
    padding-left: 0;
  }
}
</style>
