<script setup>
import logo from "~/assets/images/common/dt68-logo.png";

// Nuxt auto-imports components from components/ directory

// SEO Optimization
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} -DT68`
      : "DT68 - Đăng Ký Tài Khoản Tặng 68k";
  },
  htmlAttrs: {
    lang: "vi",
  },
});

useSeoMeta({
  title: "DT68",
  ogTitle: "DT68 - Nhà Cái Trực Tuyến Uy Tín",
  description:
    "DT68 (dt68.co) khẳng định vị thế uy tín trong lĩnh vực nhà cái trực tuyến. Đăng ký tài khoản ngay hôm nay để nhận thưởng 68k và trải nghiệm cá cược đỉnh cao.",
  ogDescription:
    "DT68 (dt68.co) khẳng định vị thế uy tín trong lĩnh vực nhà cái trực tuyến. Đăng ký tài khoản ngay hôm nay để nhận thưởng 68k.",
  ogImage: logo,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
