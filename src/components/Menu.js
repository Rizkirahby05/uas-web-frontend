import { useContext } from "react";

import { BsFillLayersFill } from "react-icons/bs";
import { FaBookMedical } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import BookContext from "../BookContext";

const Menu = () => {
  const {
    header,
    fetchBooks,
    fetchTrendingBook,
    fetchNewBook,
    fetchTopRated,
    getFavourites,
  } = useContext(BookContext);

  return (
      <div className="menu">
        <div className="menu-aside">
          <div className="menu-top">
            <div className="menu-item" onClick={() => fetchBooks()}>
              <BsFillLayersFill
                className={header === "Beranda" ? "active" : null}
              />
              <span> Beranda </span> </div>
            <div className="menu-item" onClick={() => fetchNewBook()}>
              <FaBookMedical
                className={header === "Buku Baru" ? "active" : null}
              />
              <span> Buku Baru </span> </div>
            <div className="menu-item" onClick={() => fetchTrendingBook()}>
              <FaBook
                className={header === "Tren" ? "active" : null}
              />
              <span> Tren </span> </div>
            <div className="menu-item" onClick={() => fetchTopRated()}>
              <FaStar
                className={header === "Peringkat Teratas" ? "active" : null}
              />
              <span> Peringkat Teratas </span> </div>
          </div>
          <div className="menu-bottom">
            <div className="menu-item" onClick={() => getFavourites()}>
              <FaHeart
                className={header === "Favorit Kamu" ? "active" : null}
              />
              <span> Favorit </span> </div>
            <div className="menu-item">
              <BsFillGearFill />
              <span> Pengaturan </span> </div>
          </div>
        </div>
      </div>
  );
};

export default Menu;
