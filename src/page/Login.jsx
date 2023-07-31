import Button from "react-bootstrap/Button";
import styles from "./login.module.scss";
import MyNavbar from "../component/MyNavbar";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Footer from "../component/Footer";

function Login() {
  return (
    <div className={"bg-dark "}>
      <MyNavbar />
      <Container>
        <h3
          className={"text-center mt-5 pt-5 " + styles.logo}
          style={{ color: "#83bd47" }}
        >
          Đăng nhập
        </h3>
        <div className="d-lg-flex text-light justify-content-center">
          <Form className={styles.login + " mt-5"}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control type="email" placeholder="Tên đăng nhập" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Mật khẩu" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Tôi đồng ý với điều khoản sử dụng
"
              />
            </Form.Group>
            <Button
              class="btn btn-outline-success"
              variant="outline-success"
              type="submit"
            >
              Đăng nhập
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
