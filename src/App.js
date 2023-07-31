import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home.jsx";
import Now from "./page/Now.jsx";
import Popular from "./page/Popular.jsx";
import Rate from "./page/Rate";
import Upcoming from "./page/Upcoming";
import Search from "./page/Search";
import Login from "./page/Login";
import Info from "./page/Info";

import { useState, useEffect } from "react";

function App() {
  const [dataNow, setDataNow] = useState();
  const [checkDataNow, setCheckDataNow] = useState(false);
  const [dataPopular, setDataPopular] = useState();
  const [checkDataPopular, setCheckDataPopular] = useState(false);
  const [dataRate, setDataRate] = useState();
  const [checkDataRate, setCheckDataRate] = useState(false);
  const [dataUpcoming, setDataUpcoming] = useState();
  const [checkDataUpcoming, setCheckDataUpcoming] = useState(false);

  // useEffect được bỏ qua, sau đó nó được chạy cuối cùng
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

    const url2 =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    const url3 =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

    const url4 =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

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
        setDataNow(data);
        setCheckDataNow(true);
      });

    fetch(url2, options)
      .then((res) => res.json())
      .then((data) => {
        setDataPopular(data);
        setCheckDataPopular(true);
      });
    fetch(url3, options)
      .then((res) => res.json())
      .then((data) => {
        setDataRate(data);
        setCheckDataRate(true);
      });
    fetch(url4, options)
      .then((res) => res.json())
      .then((data) => {
        setDataUpcoming(data);
        setCheckDataUpcoming(true);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              data={{
                dataNow,
                checkDataNow,
                dataPopular,
                checkDataPopular,
                dataRate,
                checkDataRate,
                dataUpcoming,
                checkDataUpcoming,
              }}
            />
          }
        />
        <Route
          path="/now"
          element={<Now dataNow={dataNow} checkDataNow={checkDataNow} />}
        />
        <Route
          path="/popular"
          element={
            <Popular
              dataPopular={dataPopular}
              checkDataPopular={checkDataPopular}
            />
          }
        />
        <Route
          path="/rate"
          element={<Rate dataRate={dataRate} checkDataRate={checkDataRate} />}
        />
        <Route
          path="/upcoming"
          element={
            <Upcoming
              dataUpcoming={dataUpcoming}
              checkDataUpcoming={checkDataUpcoming}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
