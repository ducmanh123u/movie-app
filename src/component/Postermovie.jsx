import styles from "./postermovie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Postermovie({ dataPosterMovie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie-app/info/${dataPosterMovie.id}`);
  };

  return (
    <div className={styles.posterMovie + " me-3"} onClick={handleClick}>
      <img
        src={
          "https://image.tmdb.org/t/p/original" + dataPosterMovie.poster_path
        }
        alt="Postermovie"
        className={styles.img}
      />
      <FontAwesomeIcon icon={faPlay} className={styles.icon} size="2xl" />
      <p className={styles.title}>{dataPosterMovie.title}</p>
    </div>
  );
}
export default Postermovie;
