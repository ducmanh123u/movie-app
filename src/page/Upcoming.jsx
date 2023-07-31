import MyNavbar from "../component/MyNavbar";
import Footer from "./../component/Footer.jsx";
import { Container } from "react-bootstrap";
import Backdropmovie from "./../component/Backdropmovie.jsx";
function Upcoming({ dataUpcoming, checkDataUpcoming }) {
  return (
    <div className="bg-dark">
      <MyNavbar />
      <Container>
        <div>
          {checkDataUpcoming &&
            dataUpcoming.results.map((val, idx) => {
              return <Backdropmovie dataBackdropMovie={val} first={false} />;
            })}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Upcoming;
