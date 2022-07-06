import React from "react";
import { useContext } from "react";
import BookContext from "../BookContext";

const HeaderBooks = () => {
  const { header } = useContext(BookContext);

  return <h1 className="section-title">{header}</h1>;
};

export default HeaderBooks;
