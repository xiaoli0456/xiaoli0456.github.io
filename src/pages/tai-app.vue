<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner2 from '@/assets/images/banners/banner2.jpg'; 

const tocItems = [
  { text: '1. Lợi ích khi tải App DT68', id: 'section-1', level: 1 },
  { text: '2. Hướng dẫn tải App cho Android', id: 'section-2', level: 1 },
  { text: '3. Hướng dẫn tải App cho iOS', id: 'section-3', level: 1 },
  { text: '4. Lưu ý khi cài đặt', id: 'section-4', level: 1 },
];
</script>

<template>
  <CategoryPageLayout
    title="Tải App DT68 – Trải Nghiệm Cá Cược Mượt Mà Trên Di Động"
    breadcrumb="Tải App"
    :mainImage="banner2"
    :tocItems="tocItems"
  >
    <p>
      <strong>Tải App DT68</strong> về điện thoại giúp bạn tham gia cá cược mọi lúc mọi nơi, không lo bị chặn link, và trải nghiệm tốc độ game mượt mà hơn so với bản web.
    </p>

    <h2 id="section-1">Lợi ích khi tải App DT68</h2>
    <ul>
      <li>Truy cập nhanh chóng, không cần tìm link vào.</li>
      <li>Nhận thông báo khuyến mãi, biến động số dư ngay lập tức.</li>
      <li>Giao diện tối ưu cho màn hình cảm ứng, thao tác dễ dàng.</li>
      <li>Bảo mật cao hơn với tính năng đăng nhập vân tay/FaceID.</li>
    </ul>

    <h2 id="section-2">Hướng dẫn tải App cho Android</h2>
    <p>
      Truy cập trang chủ DT68, chọn mục "Tải App". Quét mã QR dành cho Android hoặc tải file APK về máy. Vào Cài đặt > Bảo mật > Cho phép cài đặt ứng dụng từ nguồn không xác định. Mở file APK và tiến hành cài đặt.
    </p>

    <h2 id="section-3">Hướng dẫn tải App cho iOS</h2>
    <p>
      Quét mã QR dành cho iOS. Nhấn "Cài đặt". Sau khi tải xong, vào Cài đặt > Cài đặt chung > Quản lý thiết bị > Chọn nhà phát triển ứng dụng DT68 > Nhấn "Tin cậy". Giờ bạn có thể mở app và đăng nhập.
    </p>

    <h2 id="section-4">Lưu ý khi cài đặt</h2>
    <p>
      Đảm bảo kết nối internet ổn định trong quá trình tải. Nếu gặp lỗi, hãy xóa bản cũ và tải lại bản mới nhất từ trang chủ. App DT68 hoàn toàn miễn phí, không thu phí tải về.
    </p>
    
    <div style="text-align: center; margin-top: 30px;">
       <a href="#" class="btn-download">TẢI APP NGAY</a>
    </div>
  </CategoryPageLayout>
</template>

<style scoped>
.btn-download {
  background-color: #facc15;
  color: #000!important;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  display: inline-block;
}
.btn-download:hover {
  background-color: #fbbf24;
}
</style>
