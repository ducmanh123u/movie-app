import MyNavbar from "../component/MyNavbar";
import Footer from "./../component/Footer.jsx";
import { Container } from "react-bootstrap";
import Backdropmovie from "./../component/Backdropmovie.jsx";
function Rate({ dataRate, checkDataRate }) {
  return (
    <div className="bg-dark ">
      <MyNavbar />
      <Container>
        <div>
          {checkDataRate &&
            dataRate.results.map((val, idx) => {
              return <Backdropmovie dataBackdropMovie={val} first={false} />;
            })}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Rate;
