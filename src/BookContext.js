import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

import dataBook from "./dataBook";
import dataNewBook from "./dataNewBook";
import dataTrendingBook from "./dataTrendingBook";
import dataTopRatedBook from "./dataTopRatedBook";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [auth, setAuth] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [header, setHeader] = useState("Beranda");

  // localstorage state
  const [favourites, setFavourites] = useLocalStorage("fav", []);

  const login = async () => {
    setAuth(true);
    setHeader("Masuk");
    setActiveCategory(0);
  };

  const register = async () => {
    setAuth(true);
    setHeader("Daftar");
    setActiveCategory(0);
  };

  const fetchBooks = async () => {
    setAuth(false);
    setBooks(dataBook);
    setFiltered(dataBook);
    setHeader("Beranda");
    setActiveCategory(0);
  };

  const fetchSearch = async (search) => {
    setAuth(false);
    setBooks(dataBook.filter(dataBook => dataBook.title.toLowerCase().includes(search.toLowerCase())).map((book) => book));
    setFiltered(dataBook.filter(dataBook => dataBook.title.toLowerCase().includes(search.toLowerCase())).map((book) => book));
    
    setHeader(`Cari Buku: "${search}"`);
    setActiveCategory(0);
  };

  const fetchTrendingBook = async () => {
    setAuth(false);
    setBooks(dataTrendingBook);
    setFiltered(dataTrendingBook);
    setHeader("Tren");
    setActiveCategory(0);
  };

  const fetchNewBook = async () => {
    setAuth(false);
    setBooks(dataNewBook);
    setFiltered(dataNewBook);
    setHeader("Buku Baru");
    setActiveCategory(0);
  };

  const fetchTopRated = async () => {
    setAuth(false);
    setBooks(dataTopRatedBook);
    setFiltered(dataTopRatedBook);
    setHeader("Peringkat Teratas");
    setActiveCategory(0);
  };

  const addToFavourites = (book) => {
    let isOnArray = false;
    favourites.map((fav) => {
      if (fav.id === book.id) {
        isOnArray = true;
      }
    });

    if (isOnArray) {
      setFavourites(favourites.filter((fav) => fav.id !== book.id));
    } else {
      setFavourites((prevState) => [...prevState, book]);
    }
  };

  const getFavourites = () => {
    setAuth(false);
    setBooks(favourites);
    setFiltered(favourites);
    setHeader("Favorit Kamu");
    setActiveCategory(0);
  };

  const isFav = (id) => {
    let fav = favourites.filter((fav) => fav.id === id);
    return fav.length === 0 ? true : false;
  };

  return (
    <BookContext.Provider
      value={{
        auth,
        login,
        register,
        header,
        setHeader,
        addToFavourites,
        filtered,
        setFiltered,
        fetchBooks,
        books,
        setBooks,
        activeCategory,
        setActiveCategory,
        fetchSearch,
        getFavourites,
        isFav,
        fetchNewBook,
        fetchTopRated,
        fetchTrendingBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookContext;
