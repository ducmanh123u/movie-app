import { useNavigate } from "react-router-dom";
import styles from "./footer.module.scss";
import Container from "react-bootstrap/Container";

function Footer() {
  const navigte = useNavigate();
  return (
    <div className="bg-dark text-light">
      <Container
        className="d-flex justify-content-around"
        style={{
          borderTop: "1px rgba(192, 183, 183, 0.288) solid",
        }}
      >
        <p
          onClick={() => {
            navigte(`/`);
          }}
          className={styles.logo + " fs-3 m-4"}
        >
          Movie
        </p>
        <div>
          <p
            style={{ color: "#83bd47" }}
            className={"fs-5 mt-4 " + styles.footerLink}
          >
            Thể loại
          </p>
          <p
            onClick={() => {
              navigte(`/now`);
            }}
            className={"fs-6 " + styles.footerLink}
          >
            Phim đề cử
          </p>
          <p
            onClick={() => {
              navigte(`/popular`);
            }}
            className={"fs-6 " + styles.footerLink}
          >
            Phim phổ biến
          </p>
          <p
            onClick={() => {
              navigte(`/rate`);
            }}
            className={"fs-6 " + styles.footerLink}
          >
            Phim theo đánh giá
          </p>
          <p
            onClick={() => {
              navigte(`/upcoming`);
            }}
            className={"fs-6 " + styles.footerLink}
          >
            Phim sắp chiếu
          </p>
        </div>
        <div>
          <p
            style={{ color: "#83bd47" }}
            className={"fs-5 mt-4 " + styles.footerLink}
          >
            Trợ giúp
          </p>
          <p className={"fs-6 " + styles.footerLink}>Hỏi đáp</p>
          <p className={"fs-6 " + styles.footerLink}>Liên hệ</p>
          <p className={"fs-6 " + styles.footerLink}>Tin tức</p>
        </div>
        <div>
          <p
            style={{ color: "#83bd47" }}
            className={"fs-5 mt-4 " + styles.footerLink}
          >
            Thông tin
          </p>
          <p className={"fs-6 " + styles.footerLink}>Điều khoản sử dụng</p>
          <p className={"fs-6 " + styles.footerLink}>Chính sách riêng tư</p>
          <p className={"fs-6 " + styles.footerLink}>Chính sách riêng tư</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
