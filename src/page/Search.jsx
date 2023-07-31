import MyNavbar from "../component/MyNavbar";
import Footer from "../component/Footer";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Backdropmovie from "../component/Backdropmovie";

function Search() {
  const [dataSearch, setDataSearch] = useState();
  const [takeApi, setTakeApi] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${queryValue}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQ5MTYyYzRjYjAyNDQyMGQ3Y2FmNDAzYTA5MDYyYyIsInN1YiI6IjY0OWUyODNiODI4OWEwMDExY2MxODhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f_QW-3tObsnDfPdxDErlnSxd-5hG5k06J5N2l9dSqok",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataSearch(data.results);
        setTakeApi(true);
      });
  }, [queryValue]);

  return (
    <div className="bg-dark">
      <MyNavbar />
      <Container className="text-light">
        <h4 className="myText-yellow m-5 ms-0" style={{ color: "#83bd47" }}>
          Kết quả tìm kiếm cho: {queryValue}
        </h4>
        <div>
          {takeApi &&
            dataSearch.map((val, idx) => {
              return <Backdropmovie dataBackdropMovie={val} first={false} />;
            })}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
export default Search;
