<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner6 from '@/assets/images/banners/banner6.webp'; // Game bai image

const tocItems = [
  { text: '1. Game Bài DT68 – Đỉnh Cao Game Bài Đổi Thưởng', id: 'section-1', level: 1 },
  { text: '2. Kho game bài dân gian và hiện đại', id: 'section-2', level: 1 },
  { text: '3. Giao diện đẹp mắt, trải nghiệm mượt mà', id: 'section-3', level: 1 },
  { text: '4. Hệ thống chống gian lận, công bằng tuyệt đối', id: 'section-4', level: 1 },
  { text: '5. Cộng đồng game thủ đông đảo', id: 'section-5', level: 1 },
  { text: '6. Kết luận', id: 'section-6', level: 1 },
];

const relatedPosts = [
  {
    title: 'Mậu Binh DT68 – Game Bài Trí Tuệ Đỉnh Cao, Thưởng Cực Lớn',
    link: '/post/mau-binh',
    image: banner6,
    date: '06/11/2025',
    excerpt: 'Mậu Binh (Binh Xập Xám) là game bài đòi hỏi tư duy chiến thuật cao. Tại DT68, Mậu Binh được tái hiện với giao diện đẳng cấp, nơi các bài thủ so tài...'
  },
  { title: 'Tiến Lên Miền Nam – Game Bài Quốc Dân Tại DT68', link: '/post/tien-len-mien-nam', date: '06/11/2025' },
  { title: 'Phỏm (Tá Lả) – Thử Thách Bản Lĩnh Bài Thủ', link: '/post/phom', date: '06/11/2025' },
];
</script>

<template>
  <CategoryPageLayout
    title="Game Bài DT68 – Sân Chơi Đổi Thưởng Uy Tín, Xanh Chín"
    breadcrumb="Game Bài"
    :mainImage="banner6"
    :tocItems="tocItems"
    :relatedPosts="relatedPosts"
  >
    <p>
      <strong>Game Bài DT68</strong> quy tụ những tựa game bài đổi thưởng hot nhất hiện nay, từ truyền thống đến hiện đại. Đây là nơi các bài thủ thể hiện kỹ năng, đấu trí và rinh về những phần thưởng giá trị.
    </p>

    <h2 id="section-1">Game Bài DT68 – Đỉnh Cao Game Bài Đổi Thưởng</h2>
    <p>
      Sảnh game bài tại DT68 được thiết kế để mang lại trải nghiệm chân thực nhất, mô phỏng các sòng bài đẳng cấp. Với luật chơi rõ ràng, minh bạch, DT68 thu hút hàng ngàn người chơi tham gia mỗi ngày.
    </p>

    <h2 id="section-2">Kho game bài dân gian và hiện đại</h2>
    <p>
      Tại DT68, bạn sẽ tìm thấy đầy đủ các thể loại game bài quen thuộc với người Việt:
    </p>
    <ul>
      <li><strong>Tiến Lên Miền Nam:</strong> Trò chơi quốc dân, dễ chơi dễ trúng.</li>
      <li><strong>Phỏm (Tá Lả):</strong> Game bài trí tuệ, kịch tính từng ván đấu.</li>
      <li><strong>Mậu Binh:</strong> So tài sắp xếp bài, đòi hỏi tư duy chiến thuật.</li>
      <li><strong>Liêng, Ba Cây:</strong> Nhanh gọn, gay cấn, dựa nhiều vào may mắn và bản lĩnh.</li>
      <li><strong>Poker:</strong> Game bài đẳng cấp quốc tế, nơi thể hiện trình độ đỉnh cao.</li>
    </ul>

    <h2 id="section-3">Giao diện đẹp mắt, trải nghiệm mượt mà</h2>
    <p>
      Giao diện game bài được chăm chút tỉ mỉ, hình ảnh sắc nét, hiệu ứng chia bài mượt mà. Hệ thống server ổn định giúp quá trình chơi không bị gián đoạn, mang lại cảm giác thoải mái nhất cho người chơi.
    </p>

    <h2 id="section-4">Hệ thống chống gian lận, công bằng tuyệt đối</h2>
    <p>
      DT68 áp dụng công nghệ chống gian lận tiên tiến, đảm bảo không có bot hay tool hack can thiệp vào kết quả. Mọi ván bài đều diễn ra công bằng, xanh chín giữa người chơi với nhau.
    </p>

    <h2 id="section-5">Cộng đồng game thủ đông đảo</h2>
    <p>
      Tham gia Game Bài DT68, bạn có cơ hội giao lưu, kết bạn với cộng đồng bài thủ rộng lớn từ khắp mọi miền. Các tính năng chat trong bàn chơi, tặng quà giúp tăng tính tương tác và thú vị.
    </p>

    <h2 id="section-6">Kết luận</h2>
    <p>
      Nếu bạn là người yêu thích các trò chơi đánh bài, <strong>Game Bài DT68</strong> chính là sân chơi lý tưởng dành cho bạn. Uy tín, xanh chín và bảo mật – hãy tham gia ngay để khẳng định đẳng cấp bài thủ!
    </p>
  </CategoryPageLayout>
</template>
