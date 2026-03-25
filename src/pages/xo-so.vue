<script setup>
import { ref } from "vue";
import banner5 from "../assets/images/banners/banner5.webp";

const items = ref([
  {
    title: "Xổ Số Miền Bắc - Soi Cầu Lô Đề Chuẩn Xác",
    image: banner5,
    description: "Cập nhật kết quả Xổ Số Miền Bắc nhanh nhất. Chia sẻ kinh nghiệm soi cầu, dự đoán lô đề với tỷ lệ trúng cao từ các chuyên gia.",
    link: "/post/xo-so-mien-bac"
  }
]);
</script>

<template>
  <CategoryPageLayout
    title="Xổ Số DT68 – Sảnh Chơi Lô Đề Linh Hoạt, Tiện Lợi Nhất"
    breadcrumb-name="Xổ Số"
    category-name="XỔ SỐ"
    :items="items"
  />
</template>
