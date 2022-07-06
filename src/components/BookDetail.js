
import { MdArrowBack } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { BsStarHalf } from "react-icons/bs";

import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import books from "../dataBook";
import { useEffect, useState } from "react";

const BookDetail = (props) => {
  let params = useParams();
  let navigate = useNavigate();

  const location = useLocation();
  const dataBook = location.state;

  return (
    <div>
      <div className="back">
        <MdArrowBack onClick={() => navigate(-1)} />
      </div>
      {dataBook && (
        <div className="container details">
          <h1 className="section-title">{dataBook.title}</h1>
          {dataBook.image !== null ? (
            <img
              className="img-bg"
              src={"/images/" + dataBook.image}
              alt="buku"
            />
          ) : (
            'Tidak ada buku'
          )}
          <div>
            <h4>Deskripsi</h4>
            <p>{dataBook.description}</p>
          </div>
          <div>
            <h4>Peringkat</h4>
            <p id="rate">
              <BsStarHalf />
              {dataBook.rate}
            </p>
          </div>
          <div>
            <h4>Genre</h4>
            <ul>
              {dataBook.genres.map((value, key) => (
                <li key={key}>{value.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Penulis</h4>
            <p>{dataBook.author}</p>
          </div>
          <div>
            <h4>Penerbit</h4> 
            <p>{dataBook.publisher}</p>
          </div>
          <div>
            <h4>Release</h4>
            <p>{dataBook.release_date}</p>
          </div>
          <div>
            <a href={dataBook.url}>
              <span> Download </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
