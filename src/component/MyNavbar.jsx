import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./myNavbar.module.scss";

function MyNavbar() {
  const navigate = useNavigate();
  const inputSearchEle = useRef(null);

  const handleClick = () => {
    navigate("/movie-app");
  };

  const handleSearch = () => {
    navigate(`/movie-app/search?q=${inputSearchEle.current.value}`);
  };
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container className={styles.boder}>
        <Navbar.Brand className={styles.logo + " fs-3"} onClick={handleClick}>
          <p>Movie</p>
          <FontAwesomeIcon icon={faStar} color="#ff8a00" size="xs" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className={"nav-link fs-6 " + styles.navlink} to="/movie-app">
              Trang Chủ
            </Link>
            <Link
              className={"nav-link fs-6 " + styles.navlink}
              to="/movie-app/login"
            >
              Đăng Nhập
            </Link>
            <Link
              className={"nav-link fs-6 " + styles.navlink}
              to="/movie-app/now"
            >
              Phim Đề Cử
            </Link>
            <Link
              className={"nav-link fs-6  " + styles.navlink}
              to="/movie-app/popular"
            >
              Phim Phổ Biến
            </Link>
            <Link
              className={"nav-link fs-6 " + styles.navlink}
              to="/movie-app/rate"
            >
              Phim Theo Đánh Giá
            </Link>
            <Link
              className={"nav-link fs-6 " + styles.navlink}
              to="/movie-app/upcoming"
            >
              Phim Sắp Chiếu
            </Link>
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="Tìm Kiếm"
              placeholder="Điền thông tin"
              className={"me-3 " + styles.form}
              aria-label="Tìm Kiếm"
              ref={inputSearchEle}
            />
            <Button
              className={styles.button}
              class="btn btn-outline-success"
              variant="outline-success"
              onClick={handleSearch}
            >
              Tìm Kiếm
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
