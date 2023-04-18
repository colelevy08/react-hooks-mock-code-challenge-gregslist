import React from "react";
import Search from "./Search";

function Header({ setSearchTerm }) {
  return (
    <header>
      <h1>FreeBay</h1>
      <Search setSearchTerm={setSearchTerm} />
    </header>
  );
}

export default Header;




