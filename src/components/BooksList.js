import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import Book from "./Book";
import BookContext from "../BookContext";
import Login from "./Login";
import Register from "./Register";


const BooksList = () => {

  const { filtered, fetchBooks, header, auth, setActiveCategory } =
    useContext(BookContext);

  useEffect(() => {
    if (header === "Beranda") {
      fetchBooks();
    }
  }, [header]);

  return (
    <>
      {auth ? ( header === 'Masuk' ? <Login/> : 
        <Register />
      ) : (<>
        <motion.div layout className="popular-books">
        {filtered.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </motion.div>
      {filtered.length === 0 && <p className="info">Tidak ada buku yang ditampilkan</p>}</>)}
    </>
  );
};

export default BooksList;
