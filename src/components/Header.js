import React, { useContext } from "react";
import BookContext from "../BookContext";

const Header = () => {
  
  const {
    login, register
  } = useContext(BookContext);

  return (
        <div className="header-auth">
          <div className="login-register" style={{cursor: 'pointer'}} onClick={() => login()}>Masuk</div>
          <div className="login-register" style={{cursor: 'pointer'}} onClick={() => register()}>Daftar</div>
        </div>
  );
};

export default Header;
