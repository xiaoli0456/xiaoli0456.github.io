<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner2 from '@/assets/images/banners/banner2.jpg'; // Placeholder image

const tocItems = [
  { text: '1. Tại sao nên đăng ký tài khoản DT68?', id: 'section-1', level: 1 },
  { text: '2. Hướng dẫn đăng ký DT68 chi tiết', id: 'section-2', level: 1 },
  { text: '3. Lưu ý quan trọng khi tạo tài khoản', id: 'section-3', level: 1 },
  { text: '4. Khuyến mãi dành cho thành viên mới', id: 'section-4', level: 1 },
];

const relatedPosts = []; // No related posts for utilitarian pages
</script>

<template>
  <CategoryPageLayout
    title="Đăng Ký DT68 – Tạo Tài Khoản Nhanh Chóng Trong 3 Phút"
    breadcrumb="Đăng Ký"
    :mainImage="banner2"
    :tocItems="tocItems"
    :relatedPosts="relatedPosts"
  >
    <p>
      Chào mừng bạn đến với <strong>DT68</strong>. Để tham gia vào thế giới giải trí cá cược đỉnh cao, bạn cần sở hữu một tài khoản thành viên. Quá trình <strong>đăng ký DT68</strong> rất đơn giản, nhanh chóng và hoàn toàn miễn phí.
    </p>

    <h2 id="section-1">Tại sao nên đăng ký tài khoản DT68?</h2>
    <p>
      Trở thành thành viên của DT68, bạn sẽ được trải nghiệm kho game khổng lồ, dịch vụ chăm sóc khách hàng 24/7 và hệ thống bảo mật an toàn tuyệt đối. Đặc biệt, cơ hội nhận hàng ngàn ưu đãi giá trị đang chờ đón bạn.
    </p>

    <h2 id="section-2">Hướng dẫn đăng ký DT68 chi tiết</h2>
    <p>Chỉ với 3 bước đơn giản sau:</p>
    <ul>
      <li><strong>Bước 1:</strong> Truy cập trang chủ DT68 và nhấn nút "Đăng Ký" màu vàng ở góc phải màn hình.</li>
      <li><strong>Bước 2:</strong> Điền đầy đủ thông tin vào biểu mẫu: Tên đăng nhập, Mật khẩu, Số điện thoại, Email.</li>
      <li><strong>Bước 3:</strong> Kiểm tra lại thông tin và nhấn "Xác nhận". Hệ thống sẽ tạo tài khoản cho bạn ngay lập tức.</li>
    </ul>

    <h2 id="section-3">Lưu ý quan trọng khi tạo tài khoản</h2>
    <p>
      Để đảm bảo quyền lợi và an toàn cho giao dịch sau này, vui lòng cung cấp thông tin chính chủ. Mỗi người chơi chỉ được tạo một tài khoản duy nhất. Mật khẩu nên có độ khó cao để bảo vệ tài khoản.
    </p>

    <h2 id="section-4">Khuyến mãi dành cho thành viên mới</h2>
    <p>
      Ngay sau khi đăng ký thành công, bạn sẽ có cơ hội nhận thưởng nạp đầu lên đến 100%, quà tặng tân thủ và nhiều ưu đãi hấp dẫn khác. Đừng bỏ lỡ cơ hội khởi nghiệp thuận lợi cùng DT68!
    </p>
    
    <div style="text-align: center; margin-top: 30px;">
       <a href="https://dtdt68.com" target="_blank" class="btn-action">ĐĂNG KÝ NGAY</a>
    </div>
  </CategoryPageLayout>
</template>

<style scoped>
.btn-action {
  background-color: #facc15;
  color: #000;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  display: inline-block;
}
.btn-action:hover {
  background-color: #fbbf24;
}
</style>
