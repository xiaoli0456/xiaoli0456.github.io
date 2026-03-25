<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner3 from '@/assets/images/banners/banner3.webp'; // Casino image

const tocItems = [
  { text: '1. Sòng Bài DT68 – Đẳng Cấp Casino Quốc Tế', id: 'section-1', level: 1 },
  { text: '2. Live Casino với Dealer người thật xinh đẹp', id: 'section-2', level: 1 },
  { text: '3. Các trò chơi casino hot nhất tại DT68', id: 'section-3', level: 1 },
  { text: '4. Tỷ lệ cược hấp dẫn, minh bạch tuyệt đối', id: 'section-4', level: 1 },
  { text: '5. Trải nghiệm mượt mà trên mọi thiết bị', id: 'section-5', level: 1 },
  { text: '6. Kết luận', id: 'section-6', level: 1 },
];

const relatedPosts = [
  {
    title: 'Roulette DT68 – Quay Số May Mắn, Thắng Lớn Cực Dễ',
    link: '/post/roulette',
    image: banner3,
    date: '06/11/2025',
    excerpt: 'Roulette DT68 là trò chơi kinh điển tại các sòng bài, thu hút người chơi bởi luật chơi đơn giản và tỷ lệ trả thưởng cao. Chỉ cần dự đoán viên bi sẽ rơi vào ô số nào...'
  },
  { title: 'Baccarat DT68 – Game Bài Quý Tộc Đẳng Cấp', link: '/post/baccarat', date: '06/11/2025' },
  { title: 'Tài Xỉu Livestream – Xanh Chín, Minh Bạch', link: '/post/tai-xiu', date: '06/11/2025' },
];
</script>

<template>
  <CategoryPageLayout
    title="Sòng Bài DT68 – Live Casino Đẳng Cấp 5 Sao"
    breadcrumb="Sòng Bài"
    :mainImage="banner3"
    :tocItems="tocItems"
    :relatedPosts="relatedPosts"
  >
    <p>
      <strong>Sòng Bài DT68</strong> mang đến không gian cá cược sang trọng và đẳng cấp như tại Las Vegas. Với công nghệ livestream hiện đại, người chơi có thể tham gia các bàn cược trực tiếp cùng Dealer người thật, đảm bảo tính công bằng và hấp dẫn.
    </p>

    <h2 id="section-1">Sòng Bài DT68 – Đẳng Cấp Casino Quốc Tế</h2>
    <p>
      DT68 hợp tác với các nhà cung cấp casino hàng đầu thế giới như Evolution, AE Sexy, Dream Gaming... để mang đến sảnh chơi chất lượng nhất. Giao diện sang trọng, âm thanh sống động giúp người chơi cảm nhận được không khí sôi động của một sòng bài thực thụ.
    </p>

    <h2 id="section-2">Live Casino với Dealer người thật xinh đẹp</h2>
    <p>
      Điểm nhấn của Casino DT68 là đội ngũ Dealer xinh đẹp, chuyên nghiệp. Họ không chỉ chia bài mà còn tương tác trực tiếp với người chơi, tạo cảm giác thân thiện và thoải mái. Mọi thao tác chia bài đều được quay cận cảnh, đảm bảo minh bạch tuyệt đối.
    </p>

    <h2 id="section-3">Các trò chơi casino hot nhất tại DT68</h2>
    <p>
      Tại đây, bạn có thể tìm thấy đầy đủ các trò chơi casino kinh điển:
    </p>
    <ul>
      <li><strong>Baccarat:</strong> Game bài so điểm kịch tính, được yêu thích nhất.</li>
      <li><strong>Roulette:</strong> Vòng quay may mắn với tỷ lệ trả thưởng lên đến 1 ăn 35.</li>
      <li><strong>Blackjack:</strong> Thử thách trí tuệ với game bài 21 điểm.</li>
      <li><strong>Sicbo (Tài Xỉu):</strong> Trò chơi xúc xắc truyền thống với giao diện hiện đại.</li>
      <li><strong>Dragon Tiger (Rồng Hổ):</strong> Game bài đơn giản, kết quả nhanh chóng.</li>
    </ul>

    <h2 id="section-4">Tỷ lệ cược hấp dẫn, minh bạch tuyệt đối</h2>
    <p>
      DT68 cam kết cung cấp tỷ lệ cược cạnh tranh nhất thị trường. Kết quả ván cược hoàn toàn ngẫu nhiên và được giám sát chặt chẽ. Lịch sử cược và kết quả đều được lưu lại để người chơi dễ dàng tra cứu.
    </p>

    <h2 id="section-5">Trải nghiệm mượt mà trên mọi thiết bị</h2>
    <p>
      Dù bạn chơi trên máy tính hay điện thoại, Casino DT68 đều hoạt động mượt mà, không giật lag. Ứng dụng di động được tối ưu hóa giúp bạn có thể tham gia đặt cược mọi lúc mọi nơi chỉ với một chiếc smartphone kết nối internet.
    </p>

    <h2 id="section-6">Kết luận</h2>
    <p>
      Với sự uy tín, chuyên nghiệp và đa dạng trò chơi, <strong>Sòng Bài DT68</strong> xứng đáng là điểm đến hàng đầu cho những ai đam mê casino trực tuyến. Đăng ký ngay để trải nghiệm và nhận những ưu đãi hấp dẫn dành cho thành viên mới!
    </p>
  </CategoryPageLayout>
</template>
