<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner5 from '@/assets/images/banners/banner5.webp'; // Chicken/Da Ga image

const tocItems = [
  { text: '1. Đá Gà DT68 – Trường Gà Trực Tuyến Sôi Động', id: 'section-1', level: 1 },
  { text: '2. Trực tiếp đá gà Thomo, Philippines', id: 'section-2', level: 1 },
  { text: '3. Các hình thức đá gà phổ biến', id: 'section-3', level: 1 },
  { text: '4. Ưu điểm khi chơi đá gà tại DT68', id: 'section-4', level: 1 },
  { text: '5. Hướng dẫn đặt cược đá gà đơn giản', id: 'section-5', level: 1 },
  { text: '6. Kết luận', id: 'section-6', level: 1 },
];

const relatedPosts = [
  {
    title: 'Meron Wala DT68 – Trận Đấu Gà Siêu Kịch Tính, Cược Dễ',
    link: '/post/meron-wala',
    image: banner5,
    date: '06/11/2025',
    excerpt: 'Meron Wala DT68 là hình thức cá cược đá gà trực tuyến cực kỳ phổ biến. Trận đấu đơn giản nhưng đầy kịch tính, chỉ cần chọn cược vào Meron (Gà Nhà) hoặc Wala (Gà Khách)...'
  },
  { title: 'Kinh Nghiệm Soi Kèo Đá Gà Bất Bại', link: '/post/kinh-nghiem-da-ga', date: '06/11/2025' },
  { title: 'Lịch Thi Đấu Đá Gà Thomo Mới Nhất', link: '/post/lich-thi-dau-da-ga', date: '06/11/2025' },
];
</script>

<template>
  <CategoryPageLayout
    title="Đá Gà DT68 – Trực Tiếp Đá Gà Thomo, Cựa Sắt Đỉnh Cao"
    breadcrumb="Đá Gà"
    :mainImage="banner5"
    :tocItems="tocItems"
    :relatedPosts="relatedPosts"
  >
    <p>
      <strong>Đá Gà DT68</strong> mang đến không khí sôi động của những trường gà nổi tiếng nhất khu vực ngay trên màn hình của bạn. Với chất lượng video Full HD và kèo cược đa dạng, đây là điểm đến không thể bỏ qua cho các kê thủ.
    </p>

    <h2 id="section-1">Đá Gà DT68 – Trường Gà Trực Tuyến Sôi Động</h2>
    <p>
      Không cần phải đi xa, bạn có thể theo dõi và đặt cược cho những chiến kê mình yêu thích tại DT68. Chúng tôi hợp tác với các trường gà uy tín như SV388, S128 để cung cấp hàng trăm trận đấu mỗi ngày.
    </p>

    <h2 id="section-2">Trực tiếp đá gà Thomo, Philippines</h2>
    <p>
      DT68 phát sóng trực tiếp các giải đá gà lớn từ Thomo (Campuchia) và Philippines. Hình ảnh sắc nét, đường truyền ổn định giúp bạn không bỏ lỡ bất kỳ khoảnh khắc kịch tính nào của trận đấu, từ những cú ra đòn hiểm hóc đến kết quả chung cuộc.
    </p>

    <h2 id="section-3">Các hình thức đá gà phổ biến</h2>
    <p>
      Tại DT68, người chơi có thể tham gia nhiều hình thức đá gà hấp dẫn:
    </p>
    <ul>
      <li><strong>Đá gà cựa sắt:</strong> Kịch tính, kết thúc nhanh, tính sát thương cao.</li>
      <li><strong>Đá gà cựa dao:</strong> Những đòn đánh mãn nhãn, đầy bất ngờ.</li>
      <li><strong>Đá gà nòi, gà tre:</strong> Mang đậm nét truyền thống và kỹ thuật.</li>
    </ul>

    <h2 id="section-4">Ưu điểm khi chơi đá gà tại DT68</h2>
    <p>
      Tham gia đá gà tại DT68, bạn được đảm bảo an toàn, bảo mật thông tin tuyệt đối. Tỷ lệ cược Meron (Nhà cái), Wala (Nhà con) và BDD (Hòa) luôn được cập nhật minh bạch, trả thưởng cao hơn so với chơi truyền thống.
    </p>

    <h2 id="section-5">Hướng dẫn đặt cược đá gà đơn giản</h2>
    <p>
      Cách chơi rất đơn giản: Đăng nhập tài khoản DT68, chọn sảnh Đá Gà, chọn trận đấu đang diễn ra và đặt cược vào cửa bạn dự đoán sẽ thắng. Hệ thống sẽ tự động trả thưởng ngay khi trọng tài công bố kết quả.
    </p>

    <h2 id="section-6">Kết luận</h2>
    <p>
      <strong>Đá Gà DT68</strong> là sự kết hợp hoàn hảo giữa đam mê truyền thống và công nghệ hiện đại. Hãy tham gia ngay để thỏa mãn niềm đam mê với những trận gà kinh điển và cơ hội thắng lớn!
    </p>
  </CategoryPageLayout>
</template>
