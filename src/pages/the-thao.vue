<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner4 from '@/assets/images/banners/banner4.webp'; // Sports image
import banner6 from '@/assets/images/banners/banner6.webp'; 

const tocItems = [
  { text: '1. Thể Thao DT68 – Sân Chơi Cá Cược Đỉnh Cao', id: 'section-1', level: 1 },
  { text: '2. Đa dạng bộ môn và giải đấu', id: 'section-2', level: 1 },
  { text: '3. Tỷ lệ kèo cược hấp dẫn nhất thị trường', id: 'section-3', level: 1 },
  { text: '4. Tính năng xem trực tiếp và cược trong trận', id: 'section-4', level: 1 },
  { text: '5. Cá cược Thể Thao Điện Tử (Esports)', id: 'section-5', level: 1 },
  { text: '6. Kết luận', id: 'section-6', level: 1 },
];

const relatedPosts = [
  {
    title: 'eSports DT68 – Cá Cược Thể Thao Điện Tử Đỉnh Cao',
    link: '/post/esports',
    image: banner4,
    date: '06/11/2025',
    excerpt: 'eSports DT68 là sân chơi cá cược thể thao điện tử hot nhất hiện nay. Người chơi có thể cược các tựa game đình đám như Liên Minh Huyền Thoại (LOL), Liên Quân Mobile, PUBG...'
  },
  { title: 'Soi Kèo Bóng Đá Ngoại Hạng Anh – Chính Xác Nhất', link: '/post/soi-keo-bong-da', date: '06/11/2025' },
  { title: 'Cá Cược Bóng Rổ NBA – Kịch Tính Từng Giây', link: '/post/ca-cuoc-bong-ro', date: '06/11/2025' },
];
</script>

<template>
  <CategoryPageLayout
    title="Thể Thao DT68 – Cá Cược Bóng Đá, Thể Thao Uy Tín"
    breadcrumb="Thể Thao"
    :mainImage="banner4"
    :tocItems="tocItems"
    :relatedPosts="relatedPosts"
  >
    <p>
      <strong>Thể Thao DT68</strong> là điểm đến lý tưởng cho những người hâm mộ thể thao và đam mê cá cược. Với hàng ngàn sự kiện thể thao diễn ra mỗi tháng, DT68 mang đến cơ hội chiến thắng cùng niềm đam mê cháy bỏng.
    </p>

    <h2 id="section-1">Thể Thao DT68 – Sân Chơi Cá Cược Đỉnh Cao</h2>
    <p>
      Sảnh thể thao tại DT68 được thiết kế chuyên nghiệp, cập nhật liên tục các trận đấu từ khắp nơi trên thế giới. Giao diện bảng kèo trực quan, dễ nhìn giúp người chơi dễ dàng theo dõi biến động tỷ lệ và đặt cược nhanh chóng.
    </p>

    <h2 id="section-2">Đa dạng bộ môn và giải đấu</h2>
    <p>
      Không chỉ có Bóng Đá – môn thể thao vua, DT68 còn cung cấp kèo cược cho nhiều bộ môn khác như Bóng Rổ, Quần Vợt, Cầu Lông, Bóng Chày, Đua Xe F1... Các giải đấu lớn nhỏ từ World Cup, Euro, Ngoại Hạng Anh, NBA đến các giải cỏ đều có mặt đầy đủ.
    </p>

    <h2 id="section-3">Tỷ lệ kèo cược hấp dẫn nhất thị trường</h2>
    <p>
      DT68 tự hào cung cấp tỷ lệ kèo (Odds) cạnh tranh nhất, đảm bảo lợi nhuận tối đa cho người chơi. Đa dạng các loại kèo như Kèo Châu Á (Handicap), Kèo Châu Âu (1x2), Kèo Tài Xỉu (O/U), Kèo Phạt Góc, Kèo Thẻ Phạt... đáp ứng mọi chiến thuật cá cược.
    </p>

    <h2 id="section-4">Tính năng xem trực tiếp và cược trong trận</h2>
    <p>
      Tính năng Live Betting (Cược trong trận) cho phép người chơi đặt cược ngay khi trận đấu đang diễn ra. Kết hợp với hệ thống phát trực tiếp (Live Streaming) chất lượng cao, bạn có thể vừa xem bóng đá vừa soi kèo và đưa ra quyết định chính xác nhất.
    </p>

    <h2 id="section-5">Cá cược Thể Thao Điện Tử (Esports)</h2>
    <p>
      Bắt kịp xu hướng hiện đại, DT68 mở rộng sang lĩnh vực Esports. Người chơi có thể đặt cược cho các đội tuyển yêu thích trong các tựa game như LOL, Dota 2, CS:GO, PUBG Mobile. Các giải đấu Esports lớn luôn được cập nhật kèo sớm và chi tiết.
    </p>

    <h2 id="section-6">Kết luận</h2>
    <p>
      Với sự đa dạng về kèo cược, tỷ lệ thưởng cao và thanh toán nhanh chóng, <strong>Thể Thao DT68</strong> khẳng định vị thế là nhà cái cá cược thể thao hàng đầu. Hãy tham gia ngay để hòa mình vào không khí sôi động của các trận cầu đỉnh cao!
    </p>
  </CategoryPageLayout>
</template>
