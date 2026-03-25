import banner1 from "../assets/images/banners/banner1.webp";
import banner2 from "../assets/images/banners/banner2.jpg";
import banner3 from "../assets/images/banners/banner3.webp";
import banner4 from "../assets/images/common/dt1.jpg";
import banner5 from "../assets/images/common/keo-chau-au-cach-choi-soi-chuan-tranh-lo-cung-dt68.jpg";
import bannerBanca from "../assets/images/home/ban-ca.png";
import CucDinh from "../assets/images/home/CucDinh.webp";
import CuocDe from "../assets/images/home/CuocDe.webp";
import DinhCao from "../assets/images/home/DinhCao.webp";

import bannerChicken from "../assets/images/banners/banner5.webp";
import bannerEsports from "../assets/images/home/ca-cuoc-bong-ro-dt68.jpg";

export const usePosts = () => {
  const posts = [
    {
      slug: "dai-vuong-long",
      title: "Đại Vương Long DT68 – Game Bắn Cá Jackpot Cực Đỉnh",
      date: "June 11, 2025",
      author: "vnadmin@dt68-vn.com",
      excerpt: "Đại Vương Long DT68 là game bắn cá nổi bật với boss cá rồng khổng lồ và jackpot siêu khủng. Trò chơi nổi tiếng nhờ tần suất xuất hiện boss cao và cơ hội nhận thưởng lớn. Đồ họa 3D sắc nét, hiệu ứng bắn mãn nhãn, âm thanh sống động.",
      content: `
        <p><strong>Đại Vương Long DT68</strong> gây ấn tượng với boss cá rồng vàng khổng lồ. Khi boss xuất hiện, tất cả người chơi trong phòng đều có cơ hội săn thưởng. Tiêu diệt boss thành công, bạn nhận jackpot lên tới x200 lần.</p>
        <h3>Hệ thống vũ khí đa dạng</h3>
        <p>Người chơi có thể sử dụng nhiều loại vũ khí như súng laze, bom nổ toàn bản đồ, súng xuyên thấu. Kết hợp vũ khí giúp tăng sát thương và dễ dàng tiêu diệt boss hoặc cá vàng.</p>
        <h3>Combo cá vàng, cá bonus x10 xuất hiện liên tục</h3>
        <p>Không chỉ boss Đại Vương Long, game còn có cá vàng bonus và cá kho báu. Khi bắn trúng, người chơi nhận thưởng nhân x2, x5, x10 lần.</p>
      `,
      image: CucDinh,
    },
    {
      slug: "meron-wala",
      title: "Meron Wala DT68 – Trận Đấu Gà Siêu Kịch Tính, Cược Dễ",
      date: "June 11, 2025",
      author: "vnadmin@dt68-vn.com",
      excerpt: "Meron Wala DT68 là hình thức cá cược đá gà trực tuyến cực kỳ phổ biến tại Philippines và được yêu thích tại Việt Nam. Trận đấu đơn giản nhưng đầy kịch tính, chỉ cần chọn cược vào Meron (Gà Nhà) hoặc Wala (Gà Khách).",
      content: `
        <p><strong>Meron Wala</strong> là hình thức đá gà trực tuyến phổ biến nhất hiện nay. Người chơi chỉ cần lựa chọn một trong hai cửa cược chính: Meron (Gà của nhà cái/trường gà, thường được đánh giá cao hơn) hoặc Wala (Gà của người chơi/khách).</p>
        <h3>Tại sao nên chơi Đá Gà tại DT68?</h3>
        <ul>
          <li><strong>Livestream Full HD:</strong> Xem trực tiếp các trận đấu từ trường gà Thomo, Philippines với chất lượng hình ảnh sắc nét.</li>
          <li><strong>Tỷ lệ cược hấp dẫn:</strong> Cập nhật liên tục, đảm bảo tính công bằng và minh bạch.</li>
          <li><strong>Thanh toán nhanh:</strong> Tiền thắng cược được cộng ngay lập tức sau khi trọng tài tuyên bố kết quả.</li>
        </ul>
      `,
      image: CuocDe,
    },
    {
      slug: "esports",
      title: "eSports DT68 – Cá Cược Thể Thao Điện Tử Đỉnh Cao",
      date: "June 11, 2025",
      author: "vnadmin@dt68-vn.com",
      excerpt: "eSports DT68 là sân chơi cá cược thể thao điện tử hot nhất hiện nay. Người chơi có thể cược các tựa game đình đám như Liên Minh Huyền Thoại (LOL), Liên Quân Mobile, PUBG, CS:GO, Dota 2 và Valorant.",
      content: `
        <p>Thể thao điện tử (eSports) đang trở thành xu hướng cá cược mới và <strong>DT68</strong> là địa chỉ uy tín hàng đầu. Chúng tôi cung cấp kèo cược cho tất cả các giải đấu lớn nhỏ trên thế giới.</p>
        <h3>Các tựa game hot nhất:</h3>
        <ul>
          <li><strong>League of Legends (LOL):</strong> Cược đội vô địch, cược chấp mạng hạ gục, tài xỉu thời gian trận đấu.</li>
          <li><strong>CS:GO 2:</strong> Cược đội thắng round pistol, cược tổng số round.</li>
          <li><strong>Dota 2:</strong> Cược đội diệt Roshan đầu tiên, cược phá trụ đầu.</li>
        </ul>
        <p>Hệ thống cập nhật tỷ lệ kèo liên tục, hỗ trợ cược trong trận (Live Betting) cực kỳ kịch tính.</p>
      `,
      image: DinhCao,
    },
    {
      slug: "than-tai-chieu-tai",
      title: "Thần Tài Chiêu Tài DT68 – Slot Nổ Hũ May Mắn Đỉnh Cao",
      date: "June 11, 2025",
      author: "vnadmin@dt68-vn.com",
      excerpt: "Thần Tài Chiêu Tài DT68 là tựa game slot nổ hũ hấp dẫn nhất hiện nay. Lấy cảm hứng từ vị thần tài lộc trong văn hóa Á Đông, game mang đến không gian chơi tràn ngập sự may mắn và cơ hội trúng jackpot cực lớn.",
      content: `
        <p><strong>Thần Tài Chiêu Tài DT68</strong> mang đậm màu sắc văn hóa Á Đông với hình ảnh Thần Tài, thỏi vàng, bao lì xì... mang lại may mắn cho người chơi.</p>
        <h3>Điểm nổi bật của game</h3>
        <ul>
          <li><strong>Hệ thống Jackpot đa cấp độ:</strong> Cơ hội trúng thưởng từ vài triệu đến hàng trăm triệu đồng.</li>
          <li><strong>Vòng quay miễn phí:</strong> Quay trúng biểu tượng Scatter để nhận thêm lượt quay miễn phí.</li>
          <li><strong>Đồ họa đẹp mắt:</strong> Hiệu ứng nổ hũ hoành tráng, âm thanh vui nhộn.</li>
        </ul>
      `,
      image: banner2,
    },
    {
      slug: "mau-binh",
      title: "Mậu Binh DT68 – Game Bài Trí Tuệ Đỉnh Cao, Thưởng Cực Lớn",
      date: "June 11, 2025",
      author: "vnadmin@dt68-vn.com",
      excerpt: "Mậu Binh (Binh Xập Xám) là game bài đòi hỏi tư duy chiến thuật cao. Tại DT68, Mậu Binh được tái hiện với giao diện đẳng cấp, nơi các bài thủ so tài sắp xếp bài để giành chiến thắng.",
      content: `
        <p><strong>Mậu Binh</strong> là trò chơi bài tây 52 lá, mỗi người chơi được chia 13 lá bài và phải sắp xếp thành 3 chi sao cho chi trước mạnh hơn chi sau.</p>
        <h3>Luật chơi cơ bản</h3>
        <p>Người chơi cần nắm rõ các liên kết bài như: Thùng phá sảnh, Tứ quý, Cù lũ, Thùng, Sảnh, Sám cô, Thú, Đôi, Mậu thầu. Sắp xếp bài hợp lý là chìa khóa để chiến thắng.</p>
      `,
      image: banner3,
    },
    {
      slug: "nhan-dinh-keo-y",
      title: "3 bước nhận định kèo bóng đá Ý dễ thấy kèo thơm nhất",
      date: "Tháng 6 21, 2025",
      author: "DT68",
      category: "THỂ THAO",
      excerpt: "Nhận định kèo bóng đá Ý không chỉ đơn giản là một trò chơi may rủi mà là sự kết hợp giữa kinh nghiệm, kiến thức bóng đá và các kỹ thuật phân tích chính xác.",
      content: `
        <p>Nhận định kèo bóng đá Ý không chỉ đơn giản là một trò chơi may rủi mà là sự kết hợp giữa kinh nghiệm, kiến thức bóng đá và các kỹ thuật phân tích chính xác. Mỗi trận đấu tại Serie A đều có những yếu tố riêng biệt, đòi hỏi người chơi phải thực hiện một quá trình phân tích cẩn thận để có thể đưa ra quyết định đúng đắn và nâng cao cơ hội thắng.</p>
        <p>Một trong những phương pháp hiệu quả nhất là nhận định kèo bóng đá Ý từ các tip kèo uy tín và chuyên nghiệp. Với sự hỗ trợ từ các chuyên gia, người chơi có thể dễ dàng nhận ra các kèo thơm và tăng cơ hội thành công trong cá cược.</p>
        <h2>3 bước nhận định kèo bóng đá Ý dễ thấy kèo thơm nhất</h2>
        <p>Nhận định kèo bóng đá Ý cung cấp cái nhìn chuyên sâu về các trận đấu tại Serie A, với phân tích phong độ đội bóng, lối chơi và các yếu tố tác động khác. Dựa trên thông tin từ các chuyên gia soi kèo tại <strong>nhà cái DT68</strong>, người chơi có thể đưa ra quyết định cá cược chính xác.</p>
        <p><img src="${banner1}" alt="3 bước nhận định kèo bóng đá Ý" style="width:100%; border-radius: 8px; margin: 20px 0;" /></p>
        <p>Bước đầu tiên trong quá trình nhận định kèo bóng đá Ý là phân tích đội hình và phong độ của hai đội bóng tham gia. Điều này có thể giúp bạn nhận ra các yếu tố quyết định về khả năng thắng, hòa hoặc thua của một đội bóng trong trận đấu.</p>
        <h3>Đội hình hiện tại</h3>
        <p>Việc theo dõi đội hình của mỗi đội bóng là cực kỳ quan trọng. Chấn thương hay sự thiếu vắng của các cầu thủ chủ chốt có thể làm giảm hiệu quả của đội bóng, đồng thời ảnh hưởng đến tỷ lệ thắng của đội đó. Do đó, trước khi soi kèo bóng đá Ý, bạn cần phải xem xét các thông tin về đội hình ra sân của cả hai đội, đặc biệt là các cầu thủ quan trọng và những thay đổi trong đội hình.</p>
        <h3>Phong độ các trận gần nhất</h3>
        <p>Phong độ là yếu tố quan trọng để đánh giá một đội bóng. Các đội có phong độ ổn định và thành tích tốt sẽ có khả năng chiến thắng cao hơn so với các đội đang trong tình trạng sa sút. Phong độ có thể được đo bằng cách xem xét các trận đấu gần đây, đặc biệt là các kết quả đối đầu trực tiếp giữa hai đội. Phân tích này có thể giúp bạn nhận biết được xu hướng thắng thua của từng đội và đưa ra những dự đoán chính xác hơn về kết quả trận đấu.</p>
        <h3>Đánh giá chiến thuật và lối chơi của đội bóng</h3>
        <p>Bước thứ hai là đánh giá chiến thuật và lối chơi của các đội bóng. Serie A nổi tiếng với những đội bóng có chiến thuật rõ ràng, và mỗi đội lại có một lối chơi riêng biệt, ảnh hưởng trực tiếp đến tỷ lệ cược của họ trong mỗi trận đấu.</p>
        <h3>Lối chơi tấn công hay phòng ngự</h3>
        <p>Các đội bóng có xu hướng chơi tấn công mạnh mẽ thường tạo ra nhiều cơ hội ghi bàn, điều này có thể dẫn đến những trận đấu có nhiều bàn thắng và kèo tài cao. Trong khi đó, những đội bóng phòng ngự chắc chắn lại có thể kiểm soát trận đấu tốt hơn, dẫn đến các trận đấu có ít bàn thắng và kèo xỉu có thể là lựa chọn hợp lý.</p>
        <h3>Phong cách chơi và các chỉ số thống kê</h3>
        <p>Để nhận định kèo bóng đá Ý chính xác, bạn cần chú ý đến các chỉ số thống kê như số bàn thắng trung bình mỗi trận, số lần phạm lỗi, tỷ lệ kiểm soát bóng, số pha dứt điểm của mỗi đội, và đặc biệt là các trận đấu đối đầu giữa hai đội. Các đội bóng có phong cách tấn công mạnh mẽ thường tạo ra nhiều cơ hội ghi bàn, trong khi các đội bóng chơi phòng ngự tốt sẽ làm giảm khả năng ghi bàn của đối phương. Việc phân tích các chỉ số này sẽ giúp bạn đưa ra kèo chính xác hơn.</p>
        <p><img src="${banner2}" alt="Cầu thủ bóng đá" style="width:100%; border-radius: 8px; margin: 20px 0;" /></p>
      `,
      image: banner1,
    },
    {
      slug: "roulette",
      title: "Roulette DT68 – Quay Số May Mắn, Thắng Lớn Cực Dễ",
      date: "June 11, 2025",
      author: "vnadmin@dt68-vn.com",
      excerpt: "Roulette DT68 là trò chơi kinh điển tại các sòng bài, thu hút người chơi bởi luật chơi đơn giản và tỷ lệ trả thưởng cao. Chỉ cần dự đoán viên bi sẽ rơi vào ô số nào để nhận thưởng.",
      content: `
        <p><strong>Roulette</strong> (Cò quay) là biểu tượng của các sòng bài casino. Tại DT68, bạn có thể trải nghiệm Roulette với giao diện 3D chân thực hoặc chơi trực tiếp với Dealer người thật.</p>
        <h3>Các loại cược phổ biến</h3>
        <ul>
          <li><strong>Cược đơn:</strong> Đặt cược vào một số cụ thể (tỷ lệ 1 ăn 35).</li>
          <li><strong>Cược màu:</strong> Đỏ hoặc Đen (1 ăn 1).</li>
          <li><strong>Cược Chẵn/Lẻ:</strong> (1 ăn 1).</li>
        </ul>
      `,
      image: banner4,
    },
    {
      slug: "slot-ai-cap",
      title: "Slot Game Ai Cập – Khám Phá Kho Báu Pharaoh",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Hành trình khám phá kim tự tháp và săn tìm kho báu bí ẩn cùng Slot Game Ai Cập. Tỷ lệ thắng cực cao, đồ họa bí ẩn lôi cuốn người chơi từ cái nhìn đầu tiên.",
      content: `
        <p>Bước vào thế giới Ai Cập cổ đại, nơi các Pharaoh cất giấu những kho báu vô giá. Slot Game Ai Cập tại DT68 tái hiện chân thực không gian huyền bí này.</p>
        <h3>Tính năng đặc biệt:</h3>
        <ul>
          <li><strong>Biểu tượng Wild & Scatter:</strong> Giúp tăng cơ hội chiến thắng gấp nhiều lần.</li>
          <li><strong>Vòng quay miễn phí:</strong> Săn tìm biểu tượng đặc biệt để nhận loạt free spins.</li>
          <li><strong>Mini game:</strong> Tham gia các trò chơi phụ để nhận thêm tiền thưởng nóng.</li>
        </ul>
      `,
      image: banner2,
    },
    {
      slug: "vong-quay-may-man",
      title: "Vòng Quay May Mắn – Nổ Hũ Siêu Tốc",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Thử vận may với Vòng Quay May Mắn, tỷ lệ nổ hũ cao nhất thị trường hiện nay. Chơi ngay để nhận thưởng liền tay, tiền về tài khoản trong tích tắc.",
      content: `
        <p>Vòng Quay May Mắn là tựa game dành cho những ai thích sự nhanh gọn. Không cần tính toán quá nhiều, chỉ cần quay là có thưởng.</p>
        <p>Hệ thống quay thưởng công bằng, minh bạch, đảm bảo quyền lợi tối đa cho người chơi. Hàng ngàn phần quà giá trị đang chờ chủ nhân.</p>
      `,
      image: banner3,
    },
    {
      slug: "sieu-no-hu-vip",
      title: "Siêu Nổ Hũ Vip – Đẳng Cấp Đại Gia",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Phiên bản VIP dành cho các cao thủ với mức cược đa dạng và phần thưởng xứng tầm. Tham gia ngay cộng đồng VIP để hưởng những đặc quyền riêng biệt.",
      content: `
        <p>Siêu Nổ Hũ Vip không chỉ là game, mà là nơi khẳng định đẳng cấp. Với mức cược giới hạn cao (High Roller), đây là sân chơi của những đại gia thực thụ.</p>
        <h3>Đặc quyền VIP:</h3>
        <ul>
          <li>Hoàn trả cược thua không giới hạn.</li>
          <li>Hỗ trợ 24/7 từ nhân viên chăm sóc riêng (VIP Manager).</li>
          <li>Quà tặng sinh nhật và các dịp lễ tết giá trị khủng.</li>
        </ul>
      `,
      image: banner4,
    },
    {
      slug: "cuoi-tuan-k",
      title: "Cuối Tuần K - 8.888K Bật Thưởng Phát Hàng Tuần",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Chương trình khuyến mãi đặc biệt dịp cuối tuần với tổng giá trị giải thưởng lên đến 8.888K. Tham gia ngay để nhận thưởng nóng về tài khoản.",
      content: `
        <p>Cuối tuần này DT68 mang đến cơn mưa quà tặng cho toàn thể hội viên. Chỉ cần đăng nhập và tham gia cược, bạn sẽ có cơ hội nhận lì xì may mắn.</p>
        <h3>Chi tiết chương trình:</h3>
        <ul>
          <li><strong>Đối tượng:</strong> Tất cả thành viên DT68.</li>
          <li><strong>Thời gian:</strong> Thứ 7 và Chủ Nhật hàng tuần.</li>
          <li><strong>Phần thưởng:</strong> Ngẫu nhiên lên đến 8.888K.</li>
        </ul>
      `,
      image: banner1,
    },
    {
      slug: "code-trai-nghiem",
      title: "Code Trải Nghiệm 68K Free - Đăng Ký Nhận Ngay",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Tặng ngay Code 68K trải nghiệm miễn phí cho tân thủ khi đăng ký tài khoản thành công. Không cần nạp tiền, chơi thắng rút tiền thật.",
      content: `
        <p>DT68 chào đón thành viên mới với món quà khởi nghiệp 68K. Đây là cơ hội tuyệt vời để bạn trải nghiệm các dịch vụ đẳng cấp mà không lo về vốn.</p>
        <h3>Cách nhận thưởng:</h3>
        <ol>
          <li>Đăng ký tài khoản tại DT68.</li>
          <li>Xác minh số điện thoại chính chủ.</li>
          <li>Liên hệ CSKH để nhận Code.</li>
        </ol>
      `,
      image: banner2,
    },
    {
      slug: "hoan-tra-tuc-thi",
      title: "Hoàn Trả Tức Thì 1.6% - Không Cần Cược",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Chương trình hoàn trả siêu tốc lên đến 1.6% mỗi ngày. Tiền về tài khoản ngay lập tức, không yêu cầu vòng cược lại.",
      content: `
        <p>Chơi càng nhiều, hoàn trả càng lớn. DT68 cam kết mức hoàn trả cạnh tranh nhất thị trường, áp dụng cho mọi sảnh cược từ Thể Thao, Casino đến Nổ Hũ.</p>
        <p>Hệ thống tự động cộng tiền hoàn trả vào tài khoản của bạn vào 12h00 hàng ngày.</p>
      `,
      image: banner3,
    },
    {
      slug: "keo-chap-la-gi",
      title: "Kèo Chấp Là Gì? Tìm Hiểu Chi Tiết Từ A Đến Z Cùng DT68",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Kèo chấp (Handicap) là loại kèo phổ biến nhất trong cá độ bóng đá. Bài viết này sẽ giải thích chi tiết cách đọc kèo, kinh nghiệm soi kèo chấp hiệu quả.",
      content: `
        <p>Kèo chấp là hình thức cá cược mà nhà cái đưa ra tỷ lệ chấp giữa đội mạnh (cửa trên) và đội yếu (cửa dưới) để tạo sự cân bằng.</p>
        <h3>Các loại kèo chấp phổ biến:</h3>
        <ul>
          <li>Kèo đồng banh (0)</li>
          <li>Kèo chấp nửa trái (0.5)</li>
          <li>Kèo chấp 1 trái</li>
        </ul>
        <p>Hiểu rõ về kèo chấp sẽ giúp bạn đưa ra những quyết định đặt cược chính xác hơn.</p>
      `,
      image: banner4,
    },
    {
      slug: "keo-chau-au",
      title: "Kèo Châu Âu Cách Chơi Và Soi Chuẩn Tránh Lỗ Cùng DT68",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Kèo Châu Âu (1X2) là gì? Làm sao để soi kèo Châu Âu chuẩn xác? Hướng dẫn chi tiết cách chơi và mẹo tránh bẫy nhà cái.",
      content: `
        <p>Kèo Châu Âu là loại kèo đơn giản, người chơi chỉ cần dự đoán kết quả trận đấu: Thắng, Hòa hoặc Thua.</p>
        <h3>Ký hiệu 1X2:</h3>
        <ul>
          <li><strong>1:</strong> Đội chủ nhà thắng.</li>
          <li><strong>X:</strong> Hai đội hòa nhau.</li>
          <li><strong>2:</strong> Đội khách thắng.</li>
        </ul>
      `,
      image: banner5,
    },
    {
      slug: "ban-ca-than-tai",
      title: "Bắn Cá Thần Tài - Săn Boss Nhận Thưởng Cực Đã",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Bắn Cá Thần Tài là tựa game bắn cá đổi thưởng hot nhất hiện nay. Với đồ họa 3D sắc nét, hệ thống súng đạn đa dạng và tỷ lệ ăn thưởng cao.",
      content: `
        <p>Bắn Cá Thần Tài mang đến trải nghiệm đại dương sống động ngay trên màn hình điện thoại của bạn. Hàng trăm loài cá và sinh vật biển kỳ thú đang chờ bạn khám phá.</p>
        <h3>Điểm hấp dẫn của game:</h3>
        <ul>
          <li>Hệ thống boss khủng: Rồng Vàng, Bạch Tuộc Khổng Lồ, Nàng Tiên Cá...</li>
          <li>Kho vũ khí đa dạng: Súng laser, bom, lưới điện...</li>
          <li>Sự kiện đua top nhận quà hàng tuần.</li>
        </ul>
      `,
      image: banner1,
    },
    {
      slug: "ban-ca-doi-thuong",
      title: "Bắn Cá Đổi Thưởng Uy Tín - Nạp Rút Nhanh Chóng",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Top game bắn cá đổi thưởng uy tín nhất 2025. Hỗ trợ nạp rút qua ngân hàng, ví điện tử, thẻ cào với tốc độ xử lý siêu tốc.",
      content: `
        <p>Tham gia bắn cá đổi thưởng tại DT68, bạn hoàn toàn yên tâm về độ uy tín và minh bạch. Chúng tôi cam kết tỷ lệ quy đổi 1:1, không mất phí trung gian.</p>
        <p>Hệ thống bảo mật thông tin tuyệt đối, đảm bảo an toàn cho tài khoản của người chơi.</p>
      `,
      image: banner2,
    },
    {
      slug: "ca-cuoc-bong-da",
      title: "Cá Cược Bóng Đá Đỉnh Cao - Tỷ Lệ Kèo Hấp Dẫn",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Tham gia cá cược bóng đá tại DT68 với hàng ngàn trận đấu mỗi ngày. Tỷ lệ kèo cạnh tranh, đa dạng loại kèo từ Á, Âu đến Tài Xỉu.",
      content: `
        <p>DT68 là thiên đường cho những tín đồ túc cầu giáo. Chúng tôi cung cấp kèo cược cho tất cả các giải đấu lớn nhỏ trên thế giới: Ngoại hạng Anh, La Liga, Champions League, World Cup...</p>
        <h3>Ưu điểm khi cá cược tại DT68:</h3>
        <ul>
          <li>Cập nhật kèo nhanh chóng, chính xác.</li>
          <li>Nhiều chương trình khuyến mãi hoàn trả thể thao.</li>
          <li>Xem trực tiếp bóng đá chất lượng HD miễn phí.</li>
        </ul>
      `,
      image: banner3,
    },
    {
      slug: "tien-len-mien-nam",
      title: "Tiến Lên Miền Nam - Game Bài Dân Gian Được Yêu Thích Nhất",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Tiến Lên Miền Nam online tại DT68 thu hút đông đảo người chơi nhờ luật chơi đơn giản, dễ hiểu nhưng đầy kịch tính.",
      content: `
        <p>Tiến Lên Miền Nam là trò chơi không thể thiếu trong các dịp tụ tập bạn bè. Giờ đây, bạn có thể thỏa sức đam mê mọi lúc mọi nơi với phiên bản online tại DT68.</p>
        <p>Giao diện game thân thiện, hệ thống chia bài ngẫu nhiên đảm bảo công bằng tuyệt đối.</p>
      `,
      image: banner4,
    },
    {
      slug: "xo-so-mien-bac",
      title: "Xổ Số Miền Bắc - Soi Cầu Lô Đề Chuẩn Xác",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Cập nhật kết quả Xổ Số Miền Bắc nhanh nhất. Chia sẻ kinh nghiệm soi cầu, dự đoán lô đề với tỷ lệ trúng cao từ các chuyên gia.",
      content: `
        <p>Xổ Số Miền Bắc tại DT68 cung cấp tỷ lệ ăn thưởng cao nhất thị trường (1 ăn 99). Bạn có thể tham gia ghi lô, đề, 3 càng, 4 càng... một cách dễ dàng và tiện lợi.</p>
        <p>Tham khảo chuyên mục soi cầu hàng ngày để nhận những con số may mắn miễn phí.</p>
      `,
      image: banner5,
    },
    {
      slug: "khuyen-mai-nap-dau",
      title: "Khuyến Mãi Nạp Đầu 100% - Thưởng Lên Đến 10 Triệu",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Chương trình khuyến mãi chào mừng thành viên mới. Nạp tiền lần đầu tặng ngay 100% giá trị, tối đa lên đến 10.000.000 VNĐ.",
      content: `
        <p>Để chào đón các tân thủ, DT68 tung ra gói khuyến mãi nạp đầu siêu khủng. Đây là cơ hội tuyệt vời để bạn gia tăng vốn cược và trải nghiệm nhiều trò chơi hơn.</p>
        <h3>Điều kiện nhận thưởng:</h3>
        <ul>
          <li>Là thành viên mới đăng ký và chưa từng nạp tiền.</li>
          <li>Nạp tối thiểu 100.000 VNĐ.</li>
          <li>Hoàn thành doanh thu cược theo quy định để rút tiền.</li>
        </ul>
      `,
      image: banner1,
    },
    {
      slug: "nam-mo-thay-chay-nha",
      title: "Năm Mơ Thấy Cháy Nhà Đánh Đề Con Gì? Gợi Ý Số Đẹp Từ Giấc Mộng Lạ",
      date: "March 31, 2025",
      author: "CAP",
      excerpt: "Nằm mơ thấy cháy nhà là điềm báo gì? Đánh con gì để trúng lớn? Bài viết này sẽ giải mã ý nghĩa giấc mơ cháy nhà và gợi ý những con số may mắn giúp bạn đổi đời. Đừng bỏ lỡ cơ hội làm giàu từ giấc mộng lạ này! [...]",
      content: `
        <p>Nằm mơ thấy cháy nhà thường mang đến cảm giác lo lắng, sợ hãi. Tuy nhiên, trong thế giới tâm linh và lô đề, giấc mơ này lại ẩn chứa nhiều điềm báo thú vị, thậm chí là cơ hội phát tài.</p>
        <h3>Giải mã giấc mơ thấy cháy nhà</h3>
        <p>Theo quan niệm dân gian, lửa tượng trưng cho sự may mắn, thịnh vượng. Mơ thấy cháy nhà có thể là điềm báo gia đình bạn sắp đón nhận tin vui về tài lộc, công danh.</p>
        <ul>
          <li><strong>Mơ thấy cháy nhà mình:</strong> Điềm báo may mắn, tài lộc sắp gõ cửa.</li>
          <li><strong>Mơ thấy cháy nhà hàng xóm:</strong> Cẩn thận lời ăn tiếng nói, tránh thị phi.</li>
          <li><strong>Mơ thấy mình dập lửa:</strong> Bạn sẽ vượt qua được khó khăn hiện tại.</li>
        </ul>
        <h3>Nằm mơ thấy cháy nhà đánh đề con gì?</h3>
        <p>Dựa trên sổ mơ, dưới đây là những con số may mắn liên quan đến giấc mơ cháy nhà:</p>
        <ul>
          <li>Mơ thấy cháy nhà: <strong>05, 43, 67</strong></li>
          <li>Mơ thấy cháy nhà lá: <strong>12, 19</strong></li>
          <li>Mơ thấy cháy nhà cấp 4: <strong>09</strong></li>
        </ul>
        <p>Hãy thử vận may với những con số này tại DT68 ngay hôm nay!</p>
      `,
      image: banner4,
    },
    {
      slug: "shanghai-beauty-no-hu",
      title: "Shanghai Beauty Nổ Hũ – Tựa Game Slot Gây Sốt Cho Game Thủ",
      date: "March 31, 2025",
      author: "CAP",
      excerpt: "Shanghai Beauty Nổ hũ DT68 đang trở thành cơn sốt trong làng game cá cược online nhờ lối chơi độc đáo và giao diện hấp dẫn. Lấy cảm hứng từ vẻ đẹp kiểu Trung Hoa, game mang đến không gian hoa lệ đậm chất mê hoặc, từ âm thanh cho đến ánh sáng. Điểm nhấn [...]",
      content: `
        <p>Shanghai Beauty Nổ hũ DT68 đang trở thành cơn sốt trong làng game cá cược online nhờ lối chơi độc đáo và giao diện hấp dẫn. Lấy cảm hứng từ vẻ đẹp kiểu Trung Hoa, game mang đến không gian hoa lệ đậm chất mê hoặc, từ âm thanh cho đến ánh sáng.</p>
        <p>Điểm nhấn của trò chơi này chính là hệ thống trả thưởng cực cao và các vòng quay miễn phí (Free Spins) dễ dàng kích hoạt. Người chơi không chỉ được giải trí mà còn có cơ hội nhận về những phần thưởng giá trị.</p>
        <h3>Đặc điểm nổi bật:</h3>
        <ul>
          <li>Đồ họa sắc nét, âm thanh sống động.</li>
          <li>Tỷ lệ nổ hũ cao, dễ trúng thưởng.</li>
          <li>Hỗ trợ đa nền tảng, chơi mượt mà trên điện thoại.</li>
        </ul>
        <p>Hãy tham gia ngay hôm nay để trải nghiệm sự hấp dẫn của Shanghai Beauty!</p>
      `,
      image: banner5,
    },
    {
      slug: "no-hu-super-ace",
      title: "gggghhh",
      date: "March 31, 2015",
      author: "CAP",
      excerpt: "89789788888tuyệt vời. [...]",
      content: `
        <p>6547474ội trúng thưởng cực lớn, trò chơi này hứa hẹn mang đến những giây phút giải trí tuyệt vời.</p>
       <h3>Mẹo quay hũ hiệu quả:</h3>
        <p>31234412!</p>
        <p>测试文案</p>
      `,
      image: banner4,
    },
    {
      slug: "cac-cach-quay-hu-de-no",
      title: "Các Cách Quay Hũ Dễ Nổ Dễ Trúng Hiệu Quả Nhất",
      date: "March 31, 2025",
      author: "CAP",
      excerpt: "Quay hũ không chỉ dựa vào may mắn mà còn cần có chiến thuật hợp lý. Các cao thủ tại DT68 đã chia sẻ những bí quyết quay hũ dễ nổ, giúp người chơi mới tăng cơ hội chiến thắng. Hãy cùng tìm hiểu những mẹo hay này để áp dụng ngay vào ván chơi của bạn. [...]",
      content: `
        <p>Quay hũ không chỉ dựa vào may mắn mà còn cần có chiến thuật hợp lý. Các cao thủ tại DT68 đã chia sẻ những bí quyết quay hũ dễ nổ, giúp người chơi mới tăng cơ hội chiến thắng.</p>
        <h3>Mẹo quay hũ hiệu quả:</h3>
        <ol>
          <li><strong>Chọn thời điểm vàng:</strong> Chơi vào khung giờ ít người (đêm khuya hoặc sáng sớm) thường có tỷ lệ nổ hũ cao hơn.</li>
          <li><strong>Quản lý vốn:</strong> Chia nhỏ số tiền cược và tăng dần khi thấy cầu đỏ. Đừng tất tay vào một ván.</li>
          <li><strong>Tận dụng tính năng Auto/Fast:</strong> Biết cách sử dụng linh hoạt các chế độ quay để thay đổi nhịp độ game.</li>
        </ol>
        <p>Hãy áp dụng ngay những mẹo này để thấy sự khác biệt trong kết quả chơi của bạn!</p>
      `,
      image: banner5,
    },
    {
      slug: "huong-dan-no-hu-ngoai-binh",
      title: "Hướng Dẫn Cách Nổ Hũ Ngoại Binh Hiệu Quả Từng Vòng Quay",
      date: "March 31, 2025",
      author: "CAP",
      excerpt: "Cách nổ hũ ngoại binh hiệu quả không đòi hỏi bạn là cao thủ, chỉ cần áp dụng đúng mẹo. Game thủ tại DT68 chia sẻ nhiều kinh nghiệm chọn giờ vàng, chế độ quay, cách đọc nhịp slot giúp tăng tỷ lệ trúng jackpot chỉ sau vài chục vòng. Chơi có chiến lược, thắng [...]",
      content: `
        <p>Cách nổ hũ ngoại binh hiệu quả không đòi hỏi bạn là cao thủ, chỉ cần áp dụng đúng mẹo. Game thủ tại DT68 chia sẻ nhiều kinh nghiệm chọn giờ vàng, chế độ quay, cách đọc nhịp slot giúp tăng tỷ lệ trúng jackpot chỉ sau vài chục vòng.</p>
        <p>Chơi có chiến lược, thắng lớn trong tầm tay. Đừng quên tham khảo các bài hướng dẫn chi tiết trên trang chủ DT68 để cập nhật những thuật toán mới nhất của game.</p>
        <p>Chúc các bạn may mắn và nổ hũ lớn!</p>
      `,
      image: banner4,
    },
    {
      slug: "ca-cuoc-bong-ro",
      title: "Cá Cược Bóng Rổ DT68 – Tỷ Lệ Cược Hấp Dẫn Nhất Châu Á",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Cá cược bóng rổ DT68 đã trở thành lựa chọn hàng đầu cho những người yêu thích môn thể thao này. Với tỷ lệ cược hấp dẫn, đa dạng các giải đấu từ NBA đến các giải vô địch quốc gia...",
      content: `
        <p>Cá cược bóng rổ đang ngày càng phổ biến và DT68 tự hào là nhà cái cung cấp tỷ lệ cược tốt nhất Châu Á. Chúng tôi cập nhật liên tục các trận đấu bóng rổ hấp dẫn trên toàn cầu.</p>
        <h3>Tại sao chọn cá cược bóng rổ tại DT68?</h3>
        <ul>
          <li>Tỷ lệ kèo đa dạng: Cược chấp, Tài Xỉu, Cược đội vô địch...</li>
          <li>Thanh toán nhanh chóng: Tiền thắng cược được cộng ngay sau khi trận đấu kết thúc.</li>
          <li>Trực tiếp các trận đấu đỉnh cao với chất lượng HD.</li>
        </ul>
      `,
      image: banner1,
    },
    {
      slug: "ca-cuoc-bong-chay",
      title: "Cá Cược Bóng Chày DT68 – Tỷ Lệ Thắng Cao Và Chiến Lược Thắng Lớn",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Cá cược bóng chày DT68 là hoạt động giải trí thú vị, mang lại cơ hội kiếm tiền cực lớn. Tìm hiểu ngay các chiến lược đặt cược thông minh để tối ưu hóa lợi nhuận...",
      content: `
        <p>Bóng chày là môn thể thao đầy kịch tính và cá cược bóng chày tại DT68 cũng vậy. Chúng tôi cung cấp đầy đủ các kèo cược cho MLB, NPB, KBO...</p>
        <p>Để chiến thắng, người chơi cần nắm vững luật chơi và phân tích phong độ của các đội bóng. DT68 luôn đồng hành cùng bạn với những bài nhận định chuyên sâu từ các chuyên gia.</p>
      `,
      image: banner2,
    },
    {
      slug: "xo-so-phat-tai-nhanh",
      title: "Xổ Số Phát Tài Nhanh DT68 – Quay Số Mỗi Phút, Trúng Lớn Mỗi Ngày",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Xổ số phát tài nhanh DT68 là dạng xổ số đặc biệt, mang lại cảm giác hồi hộp từng phút giây. Không cần chờ đợi đến cuối ngày, bạn có thể biết kết quả và nhận thưởng ngay lập tức...",
      toc: [
        { id: "1", text: "1. Tổng quan về game xổ số phát tài nhanh DT68", level: 1 },
        { id: "2", text: "2. Các hình thức xổ số phát tài phổ biến hiện nay", level: 1 },
        { id: "2.1", text: "2.1. Xổ số quay số mỗi phút", level: 2 },
        { id: "2.2", text: "2.2. Xổ số quay 3 phút một lần", level: 2 },
        { id: "2.3", text: "2.3. Xổ số chu kỳ 5 phút", level: 2 },
        { id: "2.4", text: "2.4. Phiên đặc biệt – Tỷ lệ trúng cao, thưởng lớn", level: 2 },
        { id: "3", text: "3. Bí quyết chơi xổ số phát tài nhanh hiệu quả tại DT68", level: 1 },
        { id: "3.1", text: "3.1. Dựa vào kết quả trước đó để chọn số thông minh", level: 2 },
        { id: "3.2", text: "3.2. Phân bổ số tiền cược theo chiến lược rõ ràng", level: 2 },
        { id: "3.3", text: "3.3. Luân phiên thử nghiệm nhiều hình thức chơi", level: 2 },
        { id: "3.4", text: "3.4. Canh đúng khung giờ vàng để tối ưu xác suất thắng", level: 2 },
        { id: "4", text: "4. Kết luận", level: 1 },
      ],
      content: `
        <h2 id="1">1. Tổng quan về game xổ số phát tài nhanh DT68</h2>
        <p>Điểm nổi bật của xổ số phát tài nhanh DT68 chính là sự đa dạng về hình thức chơi, phù hợp với đủ mọi đối tượng, từ người mới bắt đầu đến các cao thủ dày dạn kinh nghiệm. Công nghệ tiên tiến giúp đảm bảo tính công bằng, minh bạch trong từng phiên quay số, đồng thời cung cấp các dữ liệu phản hồi rõ ràng để người chơi dễ dàng phân tích và đưa ra quyết định đúng đắn. Ngoài ra, các nền tảng còn thường xuyên cập nhật các chương trình khuyến mãi, thưởng lớn nhằm thúc đẩy tinh thần cạnh tranh của cộng đồng người chơi.</p>
        
        <h2 id="2">2. Các hình thức xổ số phát tài phổ biến hiện nay</h2>
        <p>Tại DT68, người chơi có thể lựa chọn nhiều khung giờ quay thưởng khác nhau tùy thuộc vào sở thích và quỹ thời gian của mình.</p>
        
        <h3 id="2.1">2.1. Xổ số quay số mỗi phút</h3>
        <p>Đây là hình thức dành cho những ai yêu thích sự nhanh gọn. Chỉ trong vòng 60 giây, một vòng quay sẽ hoàn tất và bạn sẽ biết ngay kết quả.</p>
        
        <h3 id="2.2">2.2. Xổ số quay 3 phút một lần</h3>
        <p>Nếu bạn cần thêm chút thời gian để tính toán và soi cầu, phiên bản 3 phút là sự lựa chọn lý tưởng. Nó cân bằng giữa tốc độ và chiến thuật.</p>
        
        <h3 id="2.3">2.3. Xổ số chu kỳ 5 phút</h3>
        <p>Dành cho những người chơi muốn phân tích kỹ lưỡng hơn. Chu kỳ 5 phút cho phép bạn xem xét lại lịch sử các con số đã về để đưa ra quyết định chính xác nhất.</p>
        
        <h3 id="2.4">2.4. Phiên đặc biệt – Tỷ lệ trúng cao, thưởng lớn</h3>
        <p>Vào các khung giờ vàng trong ngày, DT68 sẽ mở các phiên xổ số đặc biệt với tỷ lệ trả thưởng được nâng cao, mang lại cơ hội trúng lớn cho người tham gia.</p>

        <h2 id="3">3. Bí quyết chơi xổ số phát tài nhanh hiệu quả tại DT68</h2>
        <p>Để chiến thắng trong trò chơi này, may mắn thôi là chưa đủ. Bạn cần trang bị cho mình những chiến thuật hợp lý.</p>

        <h3 id="3.1">3.1. Dựa vào kết quả trước đó để chọn số thông minh</h3>
        <p>Theo dõi bảng kết quả (thống kê lô tô) là bước quan trọng. Hãy tìm ra quy luật của các con số hay về (lô gan, lô rơi) để chọn số cho ván tiếp theo.</p>

        <h3 id="3.2">3.2. Phân bổ số tiền cược theo chiến lược rõ ràng</h3>
        <p>Đừng bao giờ đặt tất cả trứng vào một giỏ. Hãy chia nhỏ số vốn của bạn và đặt cược theo tỷ lệ hợp lý (ví dụ: gấp thếp hoặc đều tay) để bảo toàn vốn.</p>

        <h3 id="3.3">3.3. Luân phiên thử nghiệm nhiều hình thức chơi</h3>
        <p>Đừng chỉ chơi mãi một kiểu. Hãy thử sức với bao lô, lô xiên, đề đầu đuôi... để tìm ra phương pháp phù hợp nhất với vận may của bạn.</p>

        <h3 id="3.4">3.4. Canh đúng khung giờ vàng để tối ưu xác suất thắng</h3>
        <p>Kinh nghiệm từ các cao thủ cho thấy, vào một số khung giờ nhất định trong ngày, tỷ lệ nổ số đẹp thường cao hơn. Hãy quan sát và ghi chép lại để tận dụng.</p>

        <h2 id="4">4. Kết luận</h2>
        <p>Xổ số phát tài nhanh DT68 là sân chơi hấp dẫn, công bằng và đầy tiềm năng cho những ai đam mê những con số. Hãy áp dụng những bí quyết trên và tham gia ngay để trải nghiệm cảm giác chiến thắng!</p>
      `,
      image: banner3,
    },
    {
      slug: "dau-truong-ban-ca",
      title: "Đấu Trường Bắn Cá DT68 – Săn Boss Nhận Thưởng Cực Đã",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Đấu trường bắn cá DT68 nổi bật như một sân chơi sôi động, nơi người chơi thể hiện kỹ năng săn cá đỉnh cao. Boss khủng, quà to đang chờ đón các tay súng cừ khôi...",
      content: `
        <p>Hòa mình vào đại dương bao la với Đấu Trường Bắn Cá DT68. Nơi đây quy tụ những loài sinh vật biển kỳ bí và những con Boss mang trong mình kho báu khổng lồ.</p>
        <p>Hãy nâng cấp súng, sử dụng kỹ năng điêu luyện để hạ gục Boss và nhận về hàng triệu xu thưởng. Đừng quên tham gia các sự kiện đua top để nhận thêm quà tặng giá trị.</p>
      `,
      image: banner4,
    },
    {
      slug: "bai-cao-ba-la",
      title: "Học Nhanh Cách Chơi Bài Cào Ba Lá Với Mẹo Từ Cao Thủ",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Bài cào ba lá DT68 là một trong những game bài hấp dẫn và phổ biến nhất. Luật chơi đơn giản nhưng để thắng lớn cần có bí quyết. Khám phá ngay mẹo chơi từ cao thủ...",
      content: `
        <p>Bài cào ba lá (hay còn gọi là bài 3 cây) là trò chơi dựa nhiều vào may mắn nhưng cũng không thiếu phần chiến thuật. Tại DT68, bài cào luôn thu hút lượng lớn người chơi tham gia.</p>
        <h3>Mẹo chơi bài cào bất bại:</h3>
        <ul>
          <li>Giữ tâm lý vững vàng, không cay cú khi thua.</li>
          <li>Biết điểm dừng đúng lúc, bảo toàn vốn.</li>
          <li>Quan sát cách đặt cược của đối thủ để phán đoán bài.</li>
        </ul>
      `,
      image: banner5,
    },
    {
      slug: "khuyen-mai-sinh-nhat",
      title: "Khuyến Mãi Sinh Nhật Hội Viên DT68 Nhận Quà Siêu Hot",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Chương trình Khuyến mãi sinh nhật hội viên của DT68 là một trong những hoạt động tri ân ý nghĩa. Nhận ngay quà tặng tiền mặt và vật phẩm giá trị trong ngày sinh nhật của bạn...",
      content: `
        <p>DT68 luôn trân trọng từng thành viên và sinh nhật của bạn là dịp đặc biệt để chúng tôi gửi lời tri ân. Tham gia chương trình khuyến mãi sinh nhật để nhận ngay những phần quà bất ngờ.</p>
        <p>Chỉ cần xác minh thông tin ngày sinh, hệ thống sẽ tự động gửi quà vào hộp thư của bạn. Chúc bạn có một ngày sinh nhật vui vẻ và may mắn cùng DT68!</p>
      `,
      image: banner1,
    },
    {
      slug: "rong-ho-online",
      title: "Rồng Hổ Online DT68 – Cược Nhanh, Thắng Lớn Mỗi Ván",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Rồng Hổ online DT68 là trò chơi casino trực tuyến nổi tiếng, thu hút người chơi bởi luật chơi siêu đơn giản: chỉ cần cược Rồng hoặc Hổ. Tốc độ ván chơi nhanh, tiền về túi lẹ...",
      content: `
        <p>Rồng Hổ (Dragon Tiger) là game bài có nguồn gốc từ Campuchia và hiện đang rất hot tại các casino trực tuyến. Tại DT68, bàn chơi Rồng Hổ luôn sôi động với sự tham gia của hàng ngàn người.</p>
        <p>Luật chơi đơn giản: Dealer chia 2 lá bài vào 2 cửa Rồng và Hổ. Bên nào có điểm cao hơn thì thắng. Bạn chỉ cần đặt cược và chờ kết quả.</p>
      `,
      image: banner2,
    },
    {
      slug: "su-kien-hong-bao",
      title: "Hướng Dẫn Tham Gia Sự Kiện Hồng Bao Lộc Phát Tại DT68",
      date: "March 31, 2025",
      author: "Admin DT68",
      excerpt: "Trong thế giới đầu tư tài chính hiện nay, các sự kiện khuyến mãi và hồng bao luôn được săn đón. DT68 tung ra sự kiện Hồng Bao Lộc Phát với tổng giá trị giải thưởng cực khủng...",
      content: `
        <p>Sự kiện Hồng Bao Lộc Phát là cơ hội để tất cả thành viên DT68 nhận thêm tài lộc. Vào các khung giờ vàng, hệ thống sẽ phát hồng bao ngẫu nhiên trên màn hình.</p>
        <h3>Cách tham gia:</h3>
        <ol>
          <li>Đăng nhập tài khoản DT68 vào khung giờ sự kiện.</li>
          <li>Nhanh tay bấm vào các bao lì xì rơi xuống.</li>
          <li>Mở bao và nhận tiền thưởng ngẫu nhiên.</li>
        </ol>
        <p>Nhanh tay tham gia để không bỏ lỡ vận may!</p>
      `,
      image: banner3,
    }
  ];

  const recentPosts = [
    {
      slug: "nam-mo-thay-chay-nha",
      title: "Năm Mơ Thấy Cháy Nhà Đánh Đề Con Gì? Gợi Ý Số Đẹp Từ Giấc Mộng Lạ",
      date: "31 Mar",
      image: banner2
    },
    {
      slug: "shanghai-beauty-no-hu",
      title: "Shanghai Beauty Nổ Hũ – Tựa Game Slot Gây Sốt Cho Game Thủ",
      date: "31 Mar",
      image: banner1
    },
    {
      slug: "no-hu-super-ace",
      title: "Nổ Hũ Super Ace, Slot Game Hot Trên DT68 Không Thể Bỏ Lỡ",
      date: "31 Mar",
      image: banner2
    },
    {
      slug: "cac-cach-quay-hu-de-no",
      title: "Các Cách Quay Hũ Dễ Nổ Để Trúng Hiệu Quả Nhất",
      date: "31 Mar",
      image: banner3
    },
    {
      slug: "huong-dan-no-hu-ngoai-binh",
      title: "Hướng Dẫn Cách Nổ Hũ Ngoại Binh Hiệu Quả Trúng Vòng Quay",
      date: "31 Mar",
      image: banner1
    }
  ];

  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug);
  };

  return {
    posts,
    recentPosts,
    getPostBySlug
  };
};
