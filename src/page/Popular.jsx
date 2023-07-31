import MyNavbar from "../component/MyNavbar";
import Footer from "./../component/Footer.jsx";
import { Container } from "react-bootstrap";
import Backdropmovie from "./../component/Backdropmovie.jsx";
function Popular({ dataPopular, checkDataPopular }) {
  return (
    <div className="bg-dark">
      <MyNavbar />
      <Container>
        <div>
          {checkDataPopular &&
            dataPopular.results.map((val, idx) => {
              return <Backdropmovie dataBackdropMovie={val} first={false} />;
            })}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Popular;
