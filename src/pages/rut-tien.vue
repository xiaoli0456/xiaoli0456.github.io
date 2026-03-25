<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner2 from '@/assets/images/banners/banner2.jpg'; 

const tocItems = [
  { text: '1. Điều kiện rút tiền tại DT68', id: 'section-1', level: 1 },
  { text: '2. Hướng dẫn quy trình rút tiền', id: 'section-2', level: 1 },
  { text: '3. Thời gian xử lý giao dịch', id: 'section-3', level: 1 },
  { text: '4. Câu hỏi thường gặp khi rút tiền', id: 'section-4', level: 1 },
];
</script>

<template>
  <CategoryPageLayout
    title="Rút Tiền DT68 – An Toàn, Nhanh Chóng, Bảo Mật"
    breadcrumb="Rút Tiền"
    :mainImage="banner2"
    :tocItems="tocItems"
  >
    <p>
      Thắng cược và <strong>rút tiền DT68</strong> về tài khoản là niềm vui của mọi game thủ. DT68 cam kết quy trình rút tiền đơn giản, minh bạch và không giam tiền của người chơi.
    </p>

    <h2 id="section-1">Điều kiện rút tiền tại DT68</h2>
    <p>
      Để rút tiền thành công, tài khoản của bạn cần được xác minh số điện thoại chính chủ. Tên chủ tài khoản ngân hàng phải trùng khớp với tên đăng ký tại DT68. Ngoài ra, nếu tham gia khuyến mãi, bạn cần hoàn thành doanh thu cược yêu cầu.
    </p>

    <h2 id="section-2">Hướng dẫn quy trình rút tiền</h2>
    <p>
      Đăng nhập tài khoản, chọn mục "Rút Tiền". Thêm tài khoản ngân hàng của bạn (nếu là lần đầu). Nhập số tiền muốn rút và mật khẩu rút tiền. Nhấn xác nhận và chờ hệ thống xử lý.
    </p>

    <h2 id="section-3">Thời gian xử lý giao dịch</h2>
    <p>
      DT68 tự hào với tốc độ xử lý giao dịch siêu tốc. Thông thường, tiền sẽ về tài khoản ngân hàng của bạn chỉ sau 5-15 phút kể từ khi lệnh rút được duyệt. Hệ thống hoạt động 24/7 kể cả ngày lễ tết.
    </p>

    <h2 id="section-4">Câu hỏi thường gặp khi rút tiền</h2>
    <p>
      <strong>Tôi có mất phí khi rút tiền không?</strong><br>
      Không, DT68 hỗ trợ phí giao dịch cho người chơi.<br><br>
      <strong>Tại sao lệnh rút tiền bị từ chối?</strong><br>
      Nguyên nhân thường gặp là do thông tin ngân hàng sai, chưa đủ doanh thu cược, hoặc phát hiện gian lận. Liên hệ CSKH để biết chi tiết.
    </p>
  </CategoryPageLayout>
</template>
