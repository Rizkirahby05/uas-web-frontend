import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { motion } from "framer-motion";
import BookContext from "../BookContext";

function Book({ book }) {
  
  const { addToFavourites, isFav } = useContext(BookContext);
  console.log(book)
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="book"
    >
      {isFav(book.id) ? (
        <BsHeart color="red" onClick={() => addToFavourites(book)} />
      ) : (
        <BsHeartFill color="red" onClick={() => addToFavourites(book)} />
      )}
      
      <Link to={`/book/${book.id}`} state={book} key={book.id}>
        <div className="shadow"></div>
      </Link>
      {book.image !== null ? (
        <img src={"/images/" + book.image}  alt="buku"/>
      ) : (
        'Buku tidak tersedia'
      )}
      <h2>{book.title}</h2>
    </motion.div>
  );
}

export default Book;
