import React from "react";

import "./Home.css";
import SearchBar from "./SearchBar";
const Home = () => {
  return (
    <>
      <div className="body">
        <div className="home-container">
          <div className="search-bar-container">
            <div>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
