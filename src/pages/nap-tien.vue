<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner2 from '@/assets/images/banners/banner2.jpg'; 

const tocItems = [
  { text: '1. Các phương thức nạp tiền tại DT68', id: 'section-1', level: 1 },
  { text: '2. Hướng dẫn nạp tiền qua Ngân hàng', id: 'section-2', level: 1 },
  { text: '3. Hướng dẫn nạp tiền qua Ví điện tử', id: 'section-3', level: 1 },
  { text: '4. Hướng dẫn nạp tiền qua Thẻ cào', id: 'section-4', level: 1 },
  { text: '5. Lưu ý khi nạp tiền', id: 'section-5', level: 1 },
];
</script>

<template>
  <CategoryPageLayout
    title="Nạp Tiền DT68 – Đa Dạng Phương Thức, Xử Lý Tức Thì"
    breadcrumb="Nạp Tiền"
    :mainImage="banner2"
    :tocItems="tocItems"
  >
    <p>
      Hệ thống <strong>nạp tiền DT68</strong> được tối ưu hóa để mang lại sự tiện lợi và tốc độ nhanh nhất cho người chơi. Chúng tôi hỗ trợ đa dạng các kênh thanh toán phổ biến tại Việt Nam.
    </p>

    <h2 id="section-1">Các phương thức nạp tiền tại DT68</h2>
    <p>
      Người chơi có thể lựa chọn nạp tiền qua: Chuyển khoản ngân hàng (Internet Banking), Ví điện tử (Momo, ZaloPay, ViettelPay), Thẻ cào điện thoại, hoặc Quét mã QR. Mọi giao dịch đều được mã hóa an toàn.
    </p>

    <h2 id="section-2">Hướng dẫn nạp tiền qua Ngân hàng</h2>
    <p>
      Chọn phương thức Ngân hàng, lấy thông tin tài khoản đại diện của DT68. Thực hiện chuyển khoản với nội dung ghi chú là Tên đăng nhập hoặc Mã giao dịch được cung cấp. Sau đó điền lệnh nạp trên web để hệ thống cập nhật điểm.
    </p>

    <h2 id="section-3">Hướng dẫn nạp tiền qua Ví điện tử</h2>
    <p>
      Tương tự như ngân hàng, bạn chọn loại ví muốn sử dụng, quét mã QR hoặc chuyển tiền đến số điện thoại hiển thị. Lưu ý điền đúng nội dung chuyển tiền để được cộng điểm tự động nhanh chóng.
    </p>

    <h2 id="section-4">Hướng dẫn nạp tiền qua Thẻ cào</h2>
    <p>
      DT68 hỗ trợ thẻ cào của các nhà mạng lớn như Viettel, Vinaphone, Mobifone. Chọn nhà mạng, mệnh giá, nhập số seri và mã thẻ. Phí gạch thẻ sẽ được áp dụng theo quy định của nhà mạng.
    </p>

    <h2 id="section-5">Lưu ý khi nạp tiền</h2>
    <p>
      Số tiền nạp tối thiểu và tối đa phụ thuộc vào từng phương thức. Vui lòng kiểm tra kỹ thông tin trước khi chuyển tiền. Nếu sau 10 phút chưa nhận được điểm, hãy liên hệ CSKH để được hỗ trợ ngay lập tức.
    </p>
  </CategoryPageLayout>
</template>
