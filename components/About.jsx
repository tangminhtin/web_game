import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="d-flex justify-content-center">
        <h1 className={styles.title}>Giới thiệu</h1>
      </div>
      <section className="mt-5">
        <h4>Lời nói đầu</h4>
        <p>
          Cách đây 10 năm, khi còn là một cậu bé trung học, tôi được sắm sửa
          chiếc điện thoại đầu tiên để liên lạc, một chiếc Nokia chạy Java mà
          hiện tại tôi không còn nhớ rõ mã máy. Tôi đã có những trải nghiệm
          tuyệt vời với hàng chục tựa game nhập vai, chiến thuật, giải đố… trên
          chiếc “dế yêu” của mình, hầu hết là game ngoại Việt hóa. Khi đó, tôi
          đã mơ về một viễn cảnh xa xôi được chơi những tựa game do người Việt
          làm, câu chuyện của người Việt viết, sử dụng tiếng Việt, nhạc của
          người Việt,...
        </p>
        <p>
          Tuy nhiên, việc làm game offline bán bản quyền ở Việt Nam không phải
          chuyện đơn giản. Văn hóa crack, hack, cheat khiến các nhà làm game e
          dè. Kết quả hàng chục triệu đô doanh thu từ công nghiệp game chảy từ
          túi người Việt ra nước ngoài.
        </p>
        <p>
          Tôi đã nung nấu ý định thực hiện 1 tựa game nhập vai thế giới mở từ
          mấy năm trước, khi mới bước chân vào ngành IT. Tất nhiên tôi không
          định và cũng không có khả năng làm người hùng cho cách mạng văn hóa
          mua game ở Việt Nam, chỉ là 1 chút sở thích cá nhân và 1 cánh én cho
          mùa xuân mà tôi đã đề cập.
        </p>
        <p>
          Giờ đây, khi đã trang bị cho mình đủ kiến thức và kỹ năng, tôi đã bắt
          tay vào thực hiện nó. Ngoài tôi, còn có 1 vài bạn đồng sáng lập khác.
          Chúng tôi gọi mình là Viet Game Makers.
        </p>
      </section>
      <section className="mt-5">
        <h4>Vậy chúng tôi làm game gì?</h4>
        <p>
          Lillusion, sự kết hợp của lucid dream và illusion. Ý tưởng ban đầu
          xuất phát từ tôi, người thường xuyên gặp Lucid dream. Bên cạnh đó, là
          người làm khoa học, tôi luôn đề cao tính logic, vì thế tôi kết hợp
          nhiều yếu tố khoa học giả tưởng về cơ thể con người để xây dựng nên
          một câu chuyện có tính giải thích chặt chẽ mà vẫn đủ yếu tố kỳ ảo thú
          vị.
        </p>
        <p>
          Tóm lại Lillusion sẽ là một tựa game nhập vai, phiêu lưu với cốt
          truyện phi tuyến. Hệ thống chiến đấu được xây dựng trên 2 loại: chặt,
          đỡ, né và phản đòn ở hệ vật lý, kết ấn chú ở hệ phép. Ở hệ phép chúng
          tôi cũng xây dựng nhiều tương tác thú vị từ hệ thống ngũ hành Á Đông.{" "}
        </p>
        <p>
          Chúng tôi kỳ vọng sẽ mang tới trải nghiệm ở mức tốt ở cốt truyện và
          gameplay. Đồ họa được sử dụng là 2D và âm thanh sẽ làm tốt nhất có thể
          trong khả năng của chúng tôi.
        </p>
      </section>
      <section className="mt-5">
        <h4>Chúng tôi cần gì từ cộng đồng</h4>
        <p>
          Sự ủng hộ, nói chung. Mọi ủng hộ về mặt tinh thần đều được hoan
          nghênh.
        </p>
        <p>
          Về vật chất, chúng tôi đưa các lựa chọn và phần tri ân tương ứng cho
          người ủng hộ.
        </p>
        <p>
          Tất nhiên, dự án này không sống nhờ donate, tôi đã dự toán kinh phí
          vừa đủ với hầu bao của mình. Mọi đóng góp thêm sẽ mở rộng quy mô của
          game hơn.
        </p>
      </section>
    </div>
  );
};

export default About;
