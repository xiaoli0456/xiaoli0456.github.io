<script setup>
import { ref } from "vue";

import icon1 from "@/assets/images/home/icon1.svg";
import icon2 from "@/assets/images/home/icon2.svg";
import icon3 from "@/assets/images/home/icon3.svg";
import icon4 from "@/assets/images/home/icon4.svg";
import eventDt68Scaled from "@/assets/images/home/event-dt68-scaled.png";
import gDt68 from "@/assets/images/home/dt68.png";
import gameHotDt68 from "@/assets/images/home/game-hot-dt68.webp";
import noHuDt682 from "@/assets/images/home/no-hu-dt68.webp"

const externalLink = "https://336-qo.qash521.com/";

// Images for "Kho game đa dạng" section
const gameCategories = [
  // Row 1 (2 items)
  { name: "GAME HOT", img: gameHotDt68, class: "row-1" },
  { name: "NỔ HŨ", img: noHuDt682, class: "row-1" },
  // Row 2 (3 items)
  { name: "BẮN CÁ", img: gameHotDt68, class: "row-2" },
  { name: "THỂ THAO", img: gameHotDt68, class: "row-2" },
  { name: "CASINO", img: gameHotDt68, class: "row-2" },
  // Row 3 (3 items)
  { name: "GAME VIỆT", img: gameHotDt68, class: "row-3" },
  { name: "XỔ SỐ", img: gameHotDt68, class: "row-3" },
  { name: "ESPORTS", img: gameHotDt68, class: "row-3" },
];

</script>

<template>
  <section class="main-section">
    <div class="container">
      <!-- Section 1: Introduction -->
      <div class="content-block text-center">
        <h1 class="section-title">
          DT68 ® Cổng Game Bảo Mật Mới Nhà Cái 8Day Tại DT68.com
        </h1>

        <div class="content-image">
          <figure>
            <img
              :src="eventDt68Scaled"
              alt="Kho trò chơi đa dạng và hấp dẫn tại Game bài DT68"
            />
            <figcaption class="caption">
              <div class="scrolling-text">
                <span
                  >Deal hời cuối tuần tặng 28% đơn nạp từ 388+, đăng ký nhận
                  ngay!!!</span
                >
                <span class="spacer"></span>
                <span
                  >Điểm thưởng Lương tháng VIP lên tới 58.888 phát ngày 05 hàng
                  tháng.</span
                >
                <span class="spacer"></span>
                <span
                  >Thưởng nạp mỗi ngày từ T2 – T6, deal hời T7-CN tặng 28% đơn
                  nạp.</span
                >
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- Section 2: Interface -->
      <div class="content-block text-center">
        <hr class="banner-hr" />
        <div class="banner">
          <div class="banner-item">
            <div class="banner-icon">
              <img :src="icon1" alt="" />
            </div>
            <p>
              Uy tin hàng đầu 8Day uy tín nhất trên thị trường các hàng đầu cuộc
              thi với hàng trăm khoản thưởng giá trị mỗi ngày.
            </p>
          </div>
          <div class="banner-item">
            <div class="banner-icon">
              <img :src="icon2" alt="" />
            </div>
            <p>
              Sản phẩm vượt trội 8Day sử dụng nền tảng công nghệ tiên tiến hàng
              đầu, giao diện dễ sử dụng, dễ nạp – dễ thắng tiền.
            </p>
          </div>
          <div class="banner-item">
            <div class="banner-icon">
              <img :src="icon3" alt="" />
            </div>
            <p>
              An toàn tuyệt đối Mọi giao dịch đều được bảo mật 100%, thông tin
              của Quý hội viên được bảo vệ an toàn tuyệt đối.
            </p>
          </div>
          <div class="banner-item">
            <div class="banner-icon">
              <img :src="icon4" alt="" />
            </div>
            <p>
              Giao dịch thanh toán Nạp tiền nhanh chóng trong vòng 3-5 phút, rút
              tiền nhanh chóng chi trong vòng 3-5 phút.
            </p>
          </div>
        </div>
      </div>
      <!-- Section 3: Interface -->
      <div class="content-block text-center game-category-container">
        <!-- Row 1: 2 items -->
        <div class="game-grid-row justify-center">
          <div
            class="game-item"
            v-for="(item, index) in gameCategories.slice(0, 2)"
            :key="index"
            :class="item.class"
          >
            <a :href="externalLink" target="_blank" rel="noopener" class="game-item-link" :aria-label="item.name">
              <div class="game-icon-wrapper">
                <img :src="item.img" :alt="item.name" />
              </div>
            </a>
           
          </div>
        </div>

        <!-- Row 2: 3 items -->
        <div class="game-grid-row justify-center">
          <div
            class="game-item"
            v-for="(item, index) in gameCategories.slice(2, 5)"
            :key="index + 2"
            :class="item.class"
          >
            <a :href="externalLink" target="_blank" rel="noopener" class="game-item-link" :aria-label="item.name">
              <div class="game-icon-wrapper">
                <img :src="item.img" :alt="item.name" />
              </div>
            </a>
           
          </div>
        </div>

        <!-- Row 3: 3 items -->
        <div class="game-grid-row justify-center">
          <div
            class="game-item"
            v-for="(item, index) in gameCategories.slice(5, 8)"
            :key="index + 5"
            :class="item.class"
          >
            <a :href="externalLink" target="_blank" rel="noopener" class="game-item-link" :aria-label="item.name">
              <div class="game-icon-wrapper">
                <img :src="item.img" :alt="item.name" />
              </div>
            </a>
          
          </div>
        </div>

        <div class="footer-text-block">
          <p class="footer-note">
            <span class="highlight-pink">DT68</span> © Cổng game Đầu Tư Lộc
            Phát kính chúc Quý Khách thật nhiều may mắn. Đổi tên từ nhà cái
            8Day, DT68.com sẽ mang tới nhiều lộc phát !
          </p>
        </div>

        <div class="footer-brand-image">
          <div class="brand-logo">
            <a :href="externalLink" target="_blank" rel="noopener" aria-label="DT68">
              <img :src="gDt68" alt="DT68 Logo" />
            </a>
          </div>
          <!-- Placeholder for character image if available -->
        </div>
      </div>

      <!-- Section 4: Info/SEO Text -->
      <div class="content-block seo-text-section text-left">
        <h2 class="seo-main-title">
          DT68 – Đầu Tư Lộc Phát: Hành Trình Lột Xác Từ 8Day Thành Thiên Đường
          Giải Trí
        </h2>
        <p>
          Chào bạn đến với một cuộc phiêu lưu đầy cảm hứng trong thế giới cá
          cược trực tuyến, nơi <strong>DT68</strong> – biểu tượng mới của “Đầu
          Tư Lộc Phát” – đang vươn mình như phượng hoàng tái sinh từ tro tàn của
          8Day, thương hiệu từng làm say lòng người chơi Việt. Không chỉ là một
          nhà cái, DT68 là một bản giao hưởng của cơ hội, may mắn và thịnh
          vượng, nơi mỗi ván cược là một câu chuyện kịch tính. Với kinh nghiệm
          dày dặn trong ngành giải trí trực tuyến, chúng tôi sẽ dẫn bạn qua hành
          trình khám phá DT68, từ ý nghĩa cái tên, sảnh game đa dạng, đến những
          giá trị cốt lõi: <strong>uy tín hàng đầu</strong>,
          <strong>sản phẩm vượt trội</strong>,
          <strong>an toàn tuyệt đối</strong>, và
          <strong>giao dịch thần tốc</strong>. Sẵn sàng bước vào thế giới tài
          lộc chưa?
        </p>

        <h3 class="seo-subtitle">
          Ý Nghĩa DT68: Đầu Tư Lộc Phát – Biểu Tượng Thịnh Vượng
        </h3>

        <h3 class="seo-subtitle-small">
          Hành Trình Lột Xác Từ 8Day: Cuộc Cách Mạng Thương Hiệu
        </h3>
        <p>
          Hãy tưởng tượng 8Day như một cuốn sách cổ, từng ghi dấu ấn sâu đậm
          trong lòng người chơi Việt Nam với những năm tháng huy hoàng. Nhưng để
          chinh phục đỉnh cao mới, DT68 ra đời, không chỉ kế thừa di sản mà còn
          mang đến một cuộc lột xác ngoạn mục. Đây là bước chuyển mình táo bạo,
          từ một thương hiệu quen thuộc thành biểu tượng hiện đại, đầy tham
          vọng, sẵn sàng vươn ra thế giới. DT68 không xóa đi quá khứ mà viết
          tiếp một chương mới, đậm chất Việt Nam nhưng mang tầm quốc tế.
        </p>

        <h3 class="seo-subtitle-small">
          Giải Mã “Đầu Tư Lộc Phát”: Câu Chuyện Cơ Hội Và May Mắn
        </h3>
        <p>
          Cái tên <strong>DT68</strong> là một kiệt tác ngôn từ, hòa quyện ba ý
          nghĩa sâu sắc, như một bài thơ về tài lộc:
        </p>
        <ul class="seo-list">
          <li>
            <strong>Đầu Tư:</strong> Không chỉ là lời mời đặt cược, mà là cam
            kết về một sân chơi an toàn, nơi mỗi đồng vốn bạn bỏ ra đều có cơ
            hội sinh lời. DT68 như một người bạn đồng hành, giúp bạn "gieo hạt"
            và gặt hái thành công.
          </li>
          <li>
            <strong>Lộc:</strong> Gợi lên hình ảnh may mắn bất ngờ, như lộc xuân
            tràn đầy hay bao lì xì đỏ rực ngày Tết. DT68 biến “lộc” thành hiện
            thực qua những phần thưởng hấp dẫn, khiến bạn hồi hộp từng giây.
          </li>
          <li>
            <strong>Phát:</strong> Tượng trưng cho sự phát triển không ngừng,
            như ánh bình minh rực rỡ. DT68 cam kết luôn đổi mới, mang đến trải
            nghiệm giải trí ngày càng hoàn hảo.
          </li>
        </ul>
        <p>
          Cái tên này không chỉ dễ nhớ mà còn đậm chất văn hóa Việt, đồng thời
          mang hơi thở toàn cầu. Nó như một lời hứa: mỗi bước đi cùng DT68 là
          một cơ hội để bạn chạm đến thịnh vượng.
        </p>

        <h3 class="seo-subtitle">
          Sảnh Game DT68: Vũ Trụ Giải Trí Không Giới Hạn
        </h3>
        <p>
          DT68 là một thiên đường giải trí, nơi mỗi sảnh game đánh thức mọi giác
          quan. Hãy cùng khám phá những điểm nhấn làm nên sức hút của DT68!
        </p>

        <h3 class="seo-subtitle-small">
          Sảnh Live Casino: Sòng Bạc Macau Trong Tầm Tay
        </h3>
        <p>
          Bước vào sảnh Live Casino, bạn như lạc vào một sòng bạc Macau lộng
          lẫy. Công nghệ livestream sắc nét, âm thanh sống động, cùng các dealer
          xinh đẹp, chuyên nghiệp dẫn dắt bạn qua từng ván bài.
          <strong>Baccarat</strong> với những lá bài lật mở đầy kịch tính,
          <strong>Roulette</strong> với bánh xe quay mê hoặc,
          <strong>Blackjack</strong> thử thách trí tuệ, hay
          <strong>Poker</strong> dành cho các chiến lược gia – tất cả đều sống
          động như thật. Tương tác trực tiếp qua chat, đặt cược theo từng giây,
          đây là nơi bạn không chỉ chơi mà còn tận hưởng từng khoảnh khắc!
        </p>

        <h3 class="seo-subtitle-small">Sảnh Nổ Hũ: Vòng Quay Triệu Đô</h3>
        <p>
          Sảnh Nổ Hũ là nơi giấc mơ được thắp sáng qua từng vòng quay. Với các
          tựa game như <strong>Sơn Tinh Thủy Tinh</strong> đậm chất Việt,
          <strong>Tây Du Ký</strong> đầy sắc màu, hay
          <strong>The Witcher</strong> hiện đại, mỗi slot game là một thế giới
          riêng. Đồ họa 3D sống động, âm thanh rộn ràng, và jackpot “khủng” đang
          chờ bạn chinh phục. Chỉ một cú nhấp chuột, bạn có thể trở thành triệu
          phú – dám thử không?
        </p>

        <h3 class="seo-subtitle-small">Sảnh Bắn Cá: Săn Quà Dưới Đại Dương</h3>
        <p>
          Sảnh Bắn Cá mang đến trải nghiệm giải trí 3D đỉnh cao, nơi bạn hóa
          thân thành những tay săn cá cừ khôi dưới lòng đại dương bao la. Hệ
          thống vũ khí đa dạng, các loài sinh vật biển rực rỡ sắc màu, cùng
          những Boss "khủng" mang lại phần thưởng giá trị. Đồ họa mượt mà, hiệu
          ứng bắt mắt sẽ khiến bạn không thể rời mắt khỏi màn hình. Hãy nạp đạn
          và sẵn sàng cho chuyến đi săn đầy thú vị!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-section {
  padding: 40px 0;
  background-color: var(--color-bg-main-content); /* 使用变量 */
  color: #e2e8f0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.content-block {
  margin-bottom: 50px;
  line-height: 1.6;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.section-title {
  color:var(--color-primary-blue);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.content-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
}
p {
  font-size: 15px;
  margin-bottom: 15px;
  color: #e2e8f0;
}

.highlight-gold {
  color: var(--color-primary-blue);
  font-weight: bold;
}

.highlight-link {
  color: var(--color-primary-blue);
  text-decoration: underline;
  font-style: italic;
  font-weight: bold;
}
.banner-hr {
  margin: 15px 0;
   @media screen and (max-width:776px) {
    display: none;
  }
}
.banner {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #e6f0fa, #ffffff);
  padding: 10px 20px;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .banner-item {
    display: flex;
    align-items: center;
    justify-content: center;

    .banner-icon {
      width: 40px !important;
      min-width: 40px; /* 确保最小宽度 */
      flex-shrink: 0; /* 防止在 flex 布局中被压缩 */
      height: 40px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    p {
      color: #0a0a0a;
    }
  }
  @media screen and (max-width:776px) {
    display: none;
  }
}

/* Game Warehouse Grid */
.game-warehouse-section {
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column-reverse; /* Images stack below text on mobile if desired, or use column */
    flex-direction: column;
  }
}

.game-images-grid {
  flex: 0 0 40%; /* 40% width for images */
  display: flex;
  gap: 15px;
  justify-content: center;

  .game-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      object-fit: cover;
      aspect-ratio: 3/4; /* Portrait ratio */
      margin-bottom: 10px;
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}

.game-text {
  flex: 1;
}

.caption {
  font-size: 13px;
  color: #3b82f6; /* Blue text */
  margin-top: 5px;
  background-color: #e0f2fe; /* Light blue background */
  padding: 8px 15px;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 500;
}

@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.scrolling-text {
  display: inline-block;
  animation: scroll-left 25s linear infinite;
  padding-left: 100%;
  will-change: transform;
}

.spacer {
  display: inline-block;
  width: 50px;
}
.news-thumb {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
  aspect-ratio: 16/9;
  border: 1px solid #1e3a8a;
  position: relative; /* Added relative positioning */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.date-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #001529; /* Dark blue background */
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.news-excerpt {
  font-size: 14px;
  color: #e2e8f0;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more-btn {
  display: inline-block;
  padding: 8px 20px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  color: #e2e8f0;
  text-decoration: none;
  font-size: 13px;
  margin: 0 auto; /* Center button */
  transition: all 0.3s;

  &:hover {
    background: #facc15;
    color: #010a40;
    border-color: #facc15;
  }
}

/* New Styles for Game Category Grid */
.game-category-container {
  margin-top: 40px;
}

.game-grid-row {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
}

.game-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 210px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%; /* 2 items per row on mobile */
  }
}

.game-item-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.game-icon-wrapper {
  width: 100%;
  height: auto; /* Fixed height for consistency */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s;
  }
  
  &:hover img {
     transform: scale(1.05);
  }
}

.game-item.row-1 .game-icon-wrapper { width: 360px; }
.game-item.row-2 .game-icon-wrapper { width: 300px; }
.game-item.row-3 .game-icon-wrapper { width: 300px; }

.game-title {
  font-family: 'Arial', sans-serif;
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  
  /* Text Style mimicking the 3D/Ice effect */
  color: #fff;
  -webkit-text-stroke: 1.5px #1e40af; /* Blue stroke */
  text-shadow: 
    0 0 0 #1e40af,
    0 4px 6px rgba(0,0,0,0.3);
  
  /* Gradient text fill if supported */
  background: linear-gradient(to bottom, #ffffff 30%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Fallback */
  @supports not (-webkit-background-clip: text) {
    -webkit-text-fill-color: #fff;
    color: #fff;
  }
}

.footer-text-block {
  margin-top: 60px;
  margin-bottom: 30px;
  padding: 0 20px;
}

.footer-note {
  color: #475569; /* Slate 600 - assuming light background, otherwise use light color */
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
}

.highlight-pink {
  color: #ec4899; /* Pink/Magenta */
  font-weight: bold;
}

.footer-brand-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;

  .brand-logo {
    min-width: 300px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: auto;
    }
  }
}

.seo-text-section {
  background-color: #fff;
  border-radius: 8px;
  max-height: 600px;
  overflow: auto;
  padding: 30px;
  color: #333;
  margin-top: 10px;
  text-align: left;
}

.seo-main-title {
  color: #2563eb; /* Blue 600 */
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 0;
}

.seo-subtitle {
  color: #2563eb;
  font-size: 18px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 10px;
}

.seo-subtitle-small {
  color: #3b82f6; /* Lighter blue */
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
}

.seo-text-section p {
  color: #334155; /* Slate 700 */
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
}

.seo-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 15px;
  
  li {
    color: #334155;
    font-size: 14px;
    margin-bottom: 8px;
    line-height: 1.6;
  }
}

strong {
  font-weight: bold;
}
</style>
