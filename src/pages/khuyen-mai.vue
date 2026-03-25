<script setup>
import CategoryPageLayout from '@/components/shared/CategoryPageLayout.vue';
import banner2 from '@/assets/images/banners/banner2.jpg'; 

const tocItems = [
  { text: '1. Khuyến mãi chào mừng thành viên mới', id: 'section-1', level: 1 },
  { text: '2. Khuyến mãi hoàn trả không giới hạn', id: 'section-2', level: 1 },
  { text: '3. Thưởng nạp lại hàng ngày, hàng tuần', id: 'section-3', level: 1 },
  { text: '4. Sự kiện đặc biệt và quà tặng VIP', id: 'section-4', level: 1 },
  { text: '5. Điều khoản nhận khuyến mãi chung', id: 'section-5', level: 1 },
];
</script>

<template>
  <CategoryPageLayout
    title="Khuyến Mãi DT68 – Bùng Nổ Ưu Đãi, Quà Tặng Ngập Tràn"
    breadcrumb="Khuyến Mãi"
    :mainImage="banner2"
    :tocItems="tocItems"
  >
    <p>
      <strong>Khuyến mãi DT68</strong> luôn là tâm điểm thu hút người chơi. Chúng tôi liên tục tung ra các chương trình ưu đãi giá trị để tri ân khách hàng và tiếp sức cho các game thủ.
    </p>

    <h2 id="section-1">Khuyến mãi chào mừng thành viên mới</h2>
    <p>
      Đăng ký tài khoản và nạp tiền lần đầu, bạn sẽ nhận ngay thưởng chào mừng lên đến 100% giá trị nạp. Đây là vốn khởi nghiệp tuyệt vời để bạn khám phá các trò chơi tại DT68.
    </p>

    <h2 id="section-2">Khuyến mãi hoàn trả không giới hạn</h2>
    <p>
      Dù thắng hay thua, bạn đều nhận được tiền hoàn trả hàng ngày lên đến 1.5%. Hoàn trả được áp dụng cho tất cả các sảnh game: Thể thao, Casino, Nổ hũ, Bắn cá... Tiền hoàn trả được cộng tự động vào tài khoản mỗi ngày.
    </p>

    <h2 id="section-3">Thưởng nạp lại hàng ngày, hàng tuần</h2>
    <p>
      Mỗi lần nạp tiền, bạn đều có cơ hội nhận thêm tiền thưởng. Các gói thưởng nạp lại 10%, 20% giúp bạn gia tăng số dư tài khoản đáng kể để tiếp tục cuộc chơi.
    </p>

    <h2 id="section-4">Sự kiện đặc biệt và quà tặng VIP</h2>
    <p>
      Vào các dịp lễ, tết, sinh nhật, DT68 luôn có quà tặng bất ngờ cho thành viên. Đặc biệt, hệ thống VIP với nhiều đặc quyền riêng biệt như quà thăng hạng, thưởng sinh nhật, hỗ trợ ưu tiên... dành cho những khách hàng thân thiết.
    </p>

    <h2 id="section-5">Điều khoản nhận khuyến mãi chung</h2>
    <p>
      Mỗi khuyến mãi sẽ có quy định về vòng cược và doanh thu cược riêng. Người chơi cần đọc kỹ thể lệ trước khi tham gia. Nghiêm cấm các hành vi gian lận, bào khuyến mãi để đảm bảo sân chơi công bằng.
    </p>
  </CategoryPageLayout>
</template>
