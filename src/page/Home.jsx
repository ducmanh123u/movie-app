import MyNavbar from "./../component/MyNavbar.jsx";
import Footer from "./../component/Footer.jsx";
import Postermovie from "./../component/Postermovie.jsx";
import Backdropmovie from "./../component/Backdropmovie.jsx";
import { Container } from "react-bootstrap";
import styles from "./home.module.scss";

function Home({ data }) {
  return (
    <div className="bg-dark text-light">
      <MyNavbar />

      <Container>
        <h4
          style={{
            color: "#83bd47",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          PHIM ĐỀ CỬ
        </h4>
        <div className={styles.posterMovie + " bg-dark"}>
          {data.checkDataNow &&
            data.dataNow.results.map((val, idx) => {
              return <Postermovie dataPosterMovie={val} />;
            })}
        </div>
        <h4
          style={{
            color: "#83bd47",
            cursor: "pointer",
            marginBottom: "20px",
            marginTop: " 40px",
            borderBottom: "1px rgba(192, 183, 183, 0.288) solid",
          }}
        >
          PHIM PHỔ BIẾN
        </h4>
        {data.checkDataPopular &&
          data.dataPopular.results.map((val, idx) => {
            return (
              <Backdropmovie
                dataBackdropMovie={val}
                key={idx}
                first={idx === 0 ? true : false}
              />
            );
          })}
        <h4
          style={{
            color: "#83bd47",
            cursor: "pointer",
            marginBottom: "20px",
            marginTop: " 40px",
            borderBottom: "1px rgba(192, 183, 183, 0.288) solid",
          }}
        >
          PHIM THEO ĐÁNH GIÁ
        </h4>
        {data.checkDataRate &&
          data.dataRate.results.map((val, idx) => {
            return (
              <Backdropmovie
                dataBackdropMovie={val}
                key={idx}
                first={idx === 0 ? true : false}
              />
            );
          })}
        <h4
          style={{
            color: "#83bd47",
            cursor: "pointer",
            marginBottom: "20px",
            marginTop: " 40px",
            borderBottom: "1px rgba(192, 183, 183, 0.288) solid",
          }}
        >
          PHIM SẮP CHIẾU
        </h4>
        <div>
          {data.checkDataUpcoming &&
            data.dataUpcoming.results.map((val, idx) => {
              return (
                <Backdropmovie
                  dataBackdropMovie={val}
                  key={idx}
                  first={false}
                />
              );
            })}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
