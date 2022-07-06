import React, { useContext } from "react";
import BookContext from "../BookContext";
import BooksList from "./BooksList";
import Categories from "./Categories";
import HeaderBooks from "./HeaderBooks";
import Search from "./Search";

const Container = () => {
    const { auth } =
    useContext(BookContext);
  return (
    <div className="container">
    
      
    {!auth && (<>
            
            <Search />
            <Categories />
              </>)}
      <HeaderBooks />
      <BooksList />
    </div>
  );
};

export default Container;
