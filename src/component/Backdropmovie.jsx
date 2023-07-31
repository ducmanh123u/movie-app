import styles from "./backdropmovie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Backdropmovie({ dataBackdropMovie, first }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/info/${dataBackdropMovie.id}`);
  };
  return (
    <div
      className={
        first === false
          ? "me-3 mb-3 " + styles.backMovie
          : "me-3 mb-5 d-lg-flex"
      }
    >
      {first === true ? (
        <>
          <div className={styles.backMovie2} onClick={handleClick}>
            <img
              src={
                "https://image.tmdb.org/t/p/original" +
                dataBackdropMovie.backdrop_path
              }
              alt="Backdropmovie"
              className={styles.img}
            />
            <FontAwesomeIcon icon={faPlay} className={styles.icon} />
            <p className={styles.title}>{dataBackdropMovie.title}</p>
          </div>
          <div>
            <Link
              className={"fw-bold fs-3 " + styles.head}
              to={`/info/${dataBackdropMovie.id}`}
            >
              {dataBackdropMovie.title}
            </Link>
            <p>
              <span className="fw-bold">Ngày phát hành:</span>{" "}
              <span className="text-secondary">
                {dataBackdropMovie.release_date}
              </span>
            </p>
            <p>
              <span className="fw-bold">Số lượt xem:</span>{" "}
              <span className="text-secondary">
                {dataBackdropMovie.popularity}
              </span>
            </p>
            <p>
              <span className="fw-bold">Điểm IMDb:</span>
              <span className={styles.point + " fw-bold ms-2"}>
                {dataBackdropMovie.vote_average}
              </span>
            </p>
            <hr />
            <p>
              <span className="fw-bold">Nội dung phim:</span>{" "}
              <span className="text-secondary">
                {dataBackdropMovie.overview}
              </span>
            </p>

            <Button
              variant="danger"
              style={{ borderRadius: "0" }}
              onClick={handleClick}
            >
              Xem phim
            </Button>
          </div>
        </>
      ) : (
        <div onClick={handleClick}>
          <img
            src={
              "https://image.tmdb.org/t/p/original" +
              dataBackdropMovie.backdrop_path
            }
            alt="Backdropmovie"
            className={styles.img}
          />
          <FontAwesomeIcon icon={faPlay} className={styles.icon} size="2xl" />
          <p className={styles.title}>{dataBackdropMovie.title}</p>
        </div>
      )}
    </div>
  );
}
export default Backdropmovie;
