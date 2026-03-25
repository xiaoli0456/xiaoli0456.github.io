<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner1 from '@/assets/images/home/ban-ca.png'; // Ban Ca image
import banner2 from '@/assets/images/banners/banner2.jpg';

const tocItems = [
  { text: '1. Giới thiệu về Bắn Cá DT68', id: 'section-1', level: 1 },
  { text: '2. Đồ họa 3D sống động và âm thanh chân thực', id: 'section-2', level: 1 },
  { text: '3. Kho vũ khí đa dạng, săn boss cực dễ', id: 'section-3', level: 1 },
  { text: '4. Chế độ chơi phong phú cho mọi cấp độ', id: 'section-4', level: 1 },
  { text: '5. Khuyến mãi đặc biệt cho ngư thủ', id: 'section-5', level: 1 },
  { text: '6. Kết luận', id: 'section-6', level: 1 },
];

const relatedPosts = [
  {
    title: 'Đại Vương Long DT68 – Game Bắn Cá Jackpot Cực Đỉnh',
    link: '/post/dai-vuong-long',
    image: banner1,
    date: '06/11/2025',
    excerpt: 'Đại Vương Long DT68 là game bắn cá nổi bật với boss cá rồng khổng lồ và jackpot siêu khủng. Trò chơi nổi tiếng nhờ tần suất xuất hiện boss cao và cơ hội nhận thưởng lớn. Đồ họa 3D sắc nét...'
  },
  { title: 'Thần Tài Chiêu Tài DT68 – Slot Nổ Hũ May Mắn Đỉnh Cao', link: '/post/than-tai-chieu-tai', date: '06/11/2025' },
  { title: 'Meron Wala DT68 – Trận Đấu Gà Siêu Kịch Tính, Cược Dễ', link: '/post/meron-wala', date: '06/11/2025' },
  { title: 'eSports DT68 – Cá Cược Thể Thao Điện Tử Đỉnh Cao', link: '/post/esports', date: '06/11/2025' },
];
</script>

<template>
  <CategoryPageLayout
    title="Bắn Cá DT68 – Săn Cá Đổi Thưởng, Giải Trí Đỉnh Cao"
    breadcrumb="Bắn Cá DT68"
    :mainImage="banner1"
    :tocItems="tocItems"
    :relatedPosts="relatedPosts"
  >
    <p>
      <strong>Bắn Cá DT68</strong> là thiên đường cho những ai yêu thích khám phá đại dương và săn thưởng. Với giao diện đẹp mắt, lối chơi đơn giản nhưng đầy kịch tính, Bắn Cá DT68 đã trở thành một trong những sảnh game hot nhất hiện nay.
    </p>

    <h2 id="section-1">Giới thiệu về Bắn Cá DT68</h2>
    <p>
      Sảnh game bắn cá tại DT68 được đầu tư kỹ lưỡng về mặt hình ảnh và nội dung. Không chỉ đơn thuần là bắn cá, người chơi còn được tham gia vào các cuộc phiêu lưu săn tìm kho báu dưới đáy biển sâu. Hệ thống cá đa dạng từ cá nhỏ đến các loài Boss khủng mang lại giá trị thưởng cực lớn.
    </p>

    <h2 id="section-2">Đồ họa 3D sống động và âm thanh chân thực</h2>
    <p>
      Điểm mạnh của Bắn Cá DT68 chính là công nghệ đồ họa 3D tiên tiến. Từng chuyển động của đàn cá, hiệu ứng súng đạn, hay sự xuất hiện của Rồng Vàng đều được tái hiện sắc nét. Âm thanh sống động tạo cảm giác như đang thực sự lặn dưới đại dương.
    </p>

    <h2 id="section-3">Kho vũ khí đa dạng, săn boss cực dễ</h2>
    <p>
      Người chơi được trang bị kho vũ khí tối tân với nhiều loại súng có sức công phá khác nhau. Súng lưới, súng điện, bom nổ... giúp việc săn cá trở nên dễ dàng hơn. Đặc biệt khi săn Boss, việc sử dụng đúng loại vũ khí sẽ giúp bạn tiêu diệt mục tiêu nhanh chóng và nhận thưởng gấp bội.
    </p>

    <h2 id="section-4">Chế độ chơi phong phú cho mọi cấp độ</h2>
    <p>
      Bắn Cá DT68 chia phòng chơi theo các cấp độ: Tân Thủ, Đại Gia, và Vip. Dù bạn là người mới chơi hay cao thủ lão luyện, đều có sân chơi phù hợp. Phòng Tân Thủ giúp bạn làm quen và tích lũy vốn, trong khi phòng Vip là nơi tranh tài của những tay săn cá hàng đầu.
    </p>

    <h2 id="section-5">Khuyến mãi đặc biệt cho ngư thủ</h2>
    <p>
      Tham gia Bắn Cá DT68, bạn không chỉ nhận thưởng từ việc săn cá mà còn được hưởng nhiều ưu đãi. Tặng xu mỗi ngày, hoàn trả cược thua, hay đua top săn cá nhận quà khủng là những sự kiện diễn ra thường xuyên.
    </p>

    <h2 id="section-6">Kết luận</h2>
    <p>
      Nếu bạn đang tìm kiếm một trò chơi giải trí nhẹ nhàng nhưng vẫn có cơ hội kiếm tiền, <strong>Bắn Cá DT68</strong> là lựa chọn không thể bỏ qua. Hãy tham gia ngay để trở thành vua biển cả và rinh về những phần thưởng giá trị!
    </p>
  </CategoryPageLayout>
</template>
