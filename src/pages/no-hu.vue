<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner2 from '@/assets/images/banners/banner2.jpg'; // Slot/Nohu image
import banner1 from '@/assets/images/home/ban-ca.png'; // Example for related
import homeImg from '@/assets/images/home/ca-cuoc-bong-ro-dt68.jpg';

const tocItems = [
  { text: '1. Kho slot game đa dạng và phong phú', id: 'section-1', level: 1 },
  { text: '2. Hệ thống jackpot hấp dẫn, nổ bất kỳ lúc nào', id: 'section-2', level: 1 },
  { text: '3. Cách chơi đơn giản, tỷ lệ thắng cao', id: 'section-3', level: 1 },
  { text: '4. Khuyến mãi siêu hấp dẫn khi chơi nổ hũ', id: 'section-4', level: 1 },
  { text: '5. Giao diện mượt mà, hỗ trợ mọi nền tảng', id: 'section-5', level: 1 },
  { text: '6. Kết luận', id: 'section-6', level: 1 },
];

const relatedPosts = [
  {
    title: 'Web nào cập nhật tỷ lệ kèo bóng đá live nhanh và chuẩn nhất?',
    link: '/post/ty-le-keo-bong-da',
    image: homeImg,
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    author: 'DT68',
    category: 'Thể Thao',
    comments: 1,
    excerpt: 'Tỷ lệ kèo bóng đá live là yếu tố quan trọng giúp người chơi đưa ra quyết định cá cược chính xác trong mỗi trận đấu. Việc cập nhật tỷ lệ kèo bóng đá trực tiếp nhanh chóng và chính xác là một trong những yêu cầu cần thiết đối với các cược thủ, đặc [...]'
  },
  {
    title: '3 bước nhận định kèo bóng đá Ý dễ thấy kèo thơm nhất',
    link: '/post/nhan-dinh-keo-y',
    image: banner1,
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    author: 'DT68',
    category: 'Thể Thao',
    comments: 0,
    excerpt: 'Giải bóng đá Ý Serie A luôn hấp dẫn với những trận cầu kịch tính. Để nhận định kèo bóng đá Ý chuẩn xác, bạn cần nắm vững thông tin đội bóng, phong độ cầu thủ và lịch sử đối đầu...'
  },
  {
    title: 'Nổ hũ CQ9 và những tựa game nhiều người thích chơi nhất',
    link: '/post/no-hu-cq9',
    image: banner2,
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    author: 'DT68',
    category: 'Nổ Hũ',
    comments: 1,
    excerpt: ''
  },
  {
    title: 'Code game nổ hũ Choáng Club và cách dùng đúng nhất',
    link: '/post/code-no-hu-choang',
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    comments: 1
  },
  {
    title: 'Cách săn nổ hũ vàng Kho Báu Ai Cập cực đã tay',
    link: '/post/san-no-hu-vang',
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    comments: 1
  },
  {
    title: 'Khám phá nổ hũ Sấm Truyền tựa game săn Jackpot cực đã',
    link: '/post/no-hu-sam-truyen',
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    comments: 1
  },
  {
    title: 'Nổ hũ online Sun52 cỗ máy săn hũ đổi thưởng mới nổi',
    link: '/post/no-hu-sun52',
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    comments: 1
  },
  {
    title: 'Top cách nuôi dàn đề 60 số bất bại từ dân chơi',
    link: '/post/dan-de-60-so',
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    comments: 1
  },
  {
    title: 'Bạc nhớ lô đề miền Trung và cách vận dụng dễ ăn trong ngày',
    link: '/post/bac-nho-lo-de',
    date: 'Tháng 6 21, 2025',
    day: '21',
    month: 'Th6',
    comments: 1
  }
];
</script>

<template>
  <CategoryPageLayout
    title="Nổ Hũ DT68 – Slot Đổi Thưởng Jackpot Cực Khủng"
    breadcrumb="Nổ Hũ DT68 - Slot Đổi Thưởng Jackpot Cực Khủng"
    :mainImage="banner2"
    :tocItems="tocItems"
    :relatedPosts="relatedPosts"
  >
    <p>
      <strong>Nổ hũ DT68</strong> mang đến cơ hội săn jackpot khổng lồ mỗi ngày. Kho game slot tại DT68 sở hữu hàng trăm tựa game với nhiều chủ đề hấp dẫn. Người chơi dễ dàng chọn lựa từ slot cổ điển, thần thoại, Ai Cập, tới game nổ hũ hiện đại. Tỷ lệ nổ hũ cao, quay trúng thưởng cực dễ. Jackpot cộng dồn liên tục, giá trị có thể lên tới hàng trăm triệu. <a href="#">Đăng ký</a> DT68 ngay hôm nay để bắt đầu hành trình săn nổ hũ đổi đời.
    </p>

    <h2 id="section-1">Kho slot game đa dạng và phong phú</h2>
    <p>
      <strong>Nổ hũ DT68</strong> cung cấp hàng trăm slot game đến từ các nhà phát hành nổi tiếng. Mỗi trò chơi đều có giao diện đẹp, hiệu ứng sắc nét và âm thanh sống động. Người chơi có thể lựa chọn các slot hot như Thành Phố Mayan, Thần Tài Gõ Cửa, Kho Báu Ai Cập, và nhiều trò khác. Hệ thống liên tục cập nhật slot mới để đảm bảo người chơi không bao giờ nhàm chán. Tỷ lệ trả thưởng cao và cơ hội trúng jackpot cực lớn.
    </p>

    <h2 id="section-2">Hệ thống jackpot hấp dẫn, nổ bất kỳ lúc nào</h2>
    <p>
      <strong>Nổ hũ DT68</strong> nổi bật với hệ thống jackpot cộng dồn. Mỗi lượt quay sẽ tăng giá trị jackpot lên cao hơn. Người may mắn có thể nổ hũ bất kỳ lúc nào, không phụ thuộc mức cược. Jackpot chia làm nhiều cấp độ: Mini, Minor, Major và Grand. Dù là người mới hay cao thủ, ai cũng có cơ hội đổi đời chỉ sau một cú click. Đây là lý do game nổ hũ tại DT68 luôn thu hút đông đảo người chơi.
    </p>

    <h2 id="section-3">Cách chơi đơn giản, tỷ lệ thắng cao</h2>
    <p>
      Chơi <strong>nổ hũ DT68</strong> cực kỳ đơn giản. Người chơi chỉ cần chọn game yêu thích, đặt mức cược phù hợp và nhấn quay. Hệ thống tự động tính toán và hiển thị kết quả trong vài giây. Các biểu tượng trùng nhau theo hàng ngang, dọc hoặc chéo sẽ giúp bạn nhận thưởng. Càng trùng nhiều biểu tượng đặc biệt, phần thưởng càng cao. Đây là trò chơi vừa dễ chơi vừa dễ trúng dành cho mọi đối tượng.
    </p>

    <h2 id="section-4">Khuyến mãi siêu hấp dẫn khi chơi nổ hũ</h2>
    <p>
      <strong>Nổ hũ DT68</strong> luôn đi kèm với nhiều ưu đãi đặc biệt. Người chơi nhận ngay vòng quay miễn phí, tặng xu hoặc hoàn trả khi tham gia slot game. Sự kiện nổ hũ vàng, săn jackpot giờ vàng diễn ra hàng ngày. Đặc biệt, thành viên VIP sẽ nhận thêm ưu đãi quay miễn phí hoặc thưởng nổ hũ cao hơn. Bạn có thể <a href="#">tải app</a> DT68 để nhận thông báo khuyến mãi sớm nhất.
    </p>

    <h2 id="section-5">Giao diện mượt mà, hỗ trợ mọi nền tảng</h2>
    <p>
      Game <strong>nổ hũ DT68</strong> hỗ trợ chơi trực tuyến trên cả PC và điện thoại. Giao diện tối ưu giúp người chơi trải nghiệm mượt mà, tốc độ tải nhanh, không lag. Hệ thống tương thích hoàn hảo với iOS, Android và mọi thiết bị. Người chơi có thể dễ dàng chuyển đổi giữa các trò chơi trong cùng nền tảng. Việc nạp rút tiền cũng diễn ra cực kỳ thuận tiện và an toàn trên app.
    </p>

    <h2 id="section-6">Kết luận</h2>
    <p>
      <strong>Nổ hũ DT68</strong> là lựa chọn lý tưởng cho game thủ yêu thích sự may rủi và cơ hội trúng jackpot lớn. Với giao diện đẹp, game đa dạng, tỷ lệ nổ hũ cao và hệ thống bảo mật an toàn, DT68 mang đến sân chơi giải trí cực kỳ uy tín. Đăng ký ngay để nhận khuyến mãi và bắt đầu hành trình săn jackpot đổi đời cùng <strong>DT68</strong>!
    </p>

    <div class="cta-section">
      <h2 class="cta-title">Sẵn Sàng Bắt Đầu Chưa?</h2>
      <p class="cta-text">
        Đừng để những khoảnh khắc kịch tính trôi qua trong lặng lẽ! Hãy truy cập ngay <strong>sảnh cá cược thể thao DT68</strong>, chọn nhà cung cấp yêu thích – CMD368 cho bóng đá, SABA Sports cho kèo đa dạng, hay IM Sports cho esports – và bắt đầu hành trình chinh phục mọi kèo cược. Bạn đã sẵn sàng để dự đoán, đặt cược, và ăn mừng chiến thắng chưa? Với DT68, mỗi kèo là một câu chuyện, và bạn chính là người viết nên cái kết!
      </p>
    </div>
  </CategoryPageLayout>
</template>

<style scoped>
.cta-section {
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.05); /* Subtle background */
  border-radius: 8px;
}

.cta-title {
  color: #3b82f6; /* Blue-500 */
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.cta-text {
  color: #e2e8f0;
  font-size: 16px;
  line-height: 1.6;
}
</style>
