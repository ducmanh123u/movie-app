import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MyNavbar from "../component/MyNavbar";
import { Button, Container } from "react-bootstrap";
import Footer from "./../component/Footer.jsx";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./info.module.scss";

function Info() {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState();
  const [dataVideo, setDataVideo] = useState();
  const [takeDataMovie, setTakeDataMovie] = useState(false);
  const [takeDataVideo, setTakeDataVideo] = useState(false);
  const headLink = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const url2 = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQ5MTYyYzRjYjAyNDQyMGQ3Y2FmNDAzYTA5MDYyYyIsInN1YiI6IjY0OWUyODNiODI4OWEwMDExY2MxODhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f_QW-3tObsnDfPdxDErlnSxd-5hG5k06J5N2l9dSqok",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setDataMovie(data);
        setTakeDataMovie(true);
      });

    fetch(url2, options)
      .then((res) => res.json())
      .then((data) => {
        setDataVideo(data);
        setTakeDataVideo(true);
      });
  }, []);

  let trailerVideo = "";
  let haveTrailer = false;

  if (takeDataVideo === true) {
    for (let i = dataVideo.results.length - 1; i >= 0; i--) {
      if (
        dataVideo.results[i].type === "Trailer" ||
        dataVideo.results[i].type === "Teaser"
      ) {
        trailerVideo = dataVideo.results[i];
        haveTrailer = true;
        break;
      }
    }
  }

  return (
    <div className="bg-dark text-light">
      <MyNavbar />
      <Container>
        {takeDataMovie && (
          <div>
            <div
              className={styles.back + " d-flex justify-content-center mx-auto"}
            >
              <img
                src={headLink + dataMovie.backdrop_path}
                className={styles.backdrop + " rounded-3"}
                alt="movie"
              />
              <FontAwesomeIcon
                icon={faPlay}
                size="2xl"
                className={styles.icon}
              />
              <div className={"d-flex gap-4 align-items-end " + styles.front}>
                <img
                  src={headLink + dataMovie.poster_path}
                  alt="movie"
                  className={styles.poster}
                />
                <div>
                  <p
                    className={"fs-4 text-uppercase mb-1 " + styles.tagline}
                    style={{ fontWeight: "500" }}
                  >
                    {dataMovie.tagline}
                  </p>
                  <p className="fs-5" style={{ fontWeight: "500" }}>
                    {dataMovie.title}(
                    {new Date(dataMovie.release_data).getFullYear()})
                  </p>
                  {takeDataVideo === true && trailerVideo !== "" ? (
                    <Button variant="info" style={{ borderRadius: "0" }}>
                      <a
                        href={`https://www.youtube.com/watch?v=${trailerVideo.key}`}
                        target="_blank"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Trailer
                      </a>
                    </Button>
                  ) : (
                    <Button variant="info" style={{ borderRadius: "0" }}>
                      Trailer
                    </Button>
                  )}
                  <Button
                    vvariant="danger"
                    style={{ borderRadius: "0" }}
                    className="mx-2"
                  >
                    Xem phim
                  </Button>
                </div>
              </div>
            </div>
            <div
              className={
                styles.back +
                " d-flex justify-content-center mx-auto mt-4 p-4 rounded-3"
              }
              style={{ backgroundColor: "#252525" }}
            >
              <div>
                <p>
                  <span className="fw-bold">Ngày phát hành:</span>{" "}
                  <span className="text-secondary">
                    {dataMovie.release_date}
                  </span>
                </p>
                <p>
                  <span className="fw-bold">Số lượt xem:</span>{" "}
                  <span className="text-secondary">{dataMovie.popularity}</span>
                </p>
                <p>
                  <span className="fw-bold">Điểm IMDb:</span>
                  <span className={styles.point + " fw-bold ms-2"}>
                    {dataMovie.vote_average}
                  </span>
                </p>
                <hr />
                <p>
                  <span className="fw-bold">Nội dung phim:</span>{" "}
                  <span className="text-secondary">{dataMovie.overview}</span>
                </p>

                <hr />
                <p>
                  <span className="fw-bold">Trailer:</span>
                </p>
                {takeDataVideo && haveTrailer ? (
                  <iframe
                    width="100%"
                    height="550"
                    src={`https://www.youtube.com/embed/${trailerVideo.key}`}
                    frameborder="0"
                    allowFullScreen
                    allow="fullscreen"
                    className={styles.iframe}
                  ></iframe>
                ) : (
                  <p className="text-secondary">Phim không có trailer</p>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
}
export default Info;
