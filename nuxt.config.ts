// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/style.css'],
  
  // 开启 SSR 以支持 SEO (静态生成需要 SSR)
  ssr: true,

  // modules: ['@nuxtjs/seo'],

  site: {
    url: 'https://dt68.co',
    name: 'DT68',
    description: 'DT68 – Dt68.com – Đăng Ký Tài Khoản Tặng 68k',// 描述
    defaultLocale: 'vi',
  },

  app: {
    //  // 开发环境使用默认 '/'，生产环境(generate)使用相对路径 '' 以支持本地预览
    // baseURL: process.env.NODE_ENV === 'production' ? '' : '/',
   
    // 开发环境使用默认 '/'，生产环境(generate)使用默认 '/' 以支持 GitHub Pages
    baseURL: '/',
    // 仅在生产环境修改构建资源目录名称，开发环境使用默认 _nuxt 以避免路径冲突
    buildAssetsDir: process.env.NODE_ENV === 'production' ? 'assets' : '_nuxt',
    head: {
       title: 'DT68',//默认备用标题
      htmlAttrs: {
        lang: 'vi'
      },
  
      link: [
        // 标准 favicon - 开发环境使用绝对路径，生产环境(generate)使用相对路径
        // { rel: 'icon', type: 'image/x-icon', href: process.env.NODE_ENV === 'production' ? 'favicon.ico' : 'favicon.ico' },
         { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      ] // PNG 格式（推荐现代浏览器）
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        // // Apple Touch Icon（用于 iOS 主屏添加）
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
    }
  },

  // 移除 Hash 模式以优化 SEO
  // router: { options: { hashMode: true } },
  experimental: {
    // 禁用 payload 提取，避免生成 _payload.json 请求，提高本地兼容性
    payloadExtraction: false
  },

  nitro: {
    preset: 'static'// 启用静态站点生成
  },

  // 强制 Vite 使用相对路径，确保静态资源引用正确 (仅生产环境)
  vite: {
    //  base: process.env.NODE_ENV === 'production' ? './' : '/'
    base: '/'
  }
})
