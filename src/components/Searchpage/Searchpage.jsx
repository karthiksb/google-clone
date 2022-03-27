import React from "react";
import "./searchpage.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";

function searchpage() {
  return (
    <div className="searchpage">
      <div className="header">
        <div className="links">
          <ul>
            <p>Gmail</p>
            <p>Images</p>
            <p>All</p>

            <p>Account</p>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="google-search">
          <h1>Google</h1>
          <div className="searchdiv">
            <div className="searchbox">
              <SearchRoundedIcon />
              <input type="text" className="searchinput"></input>
              <MicRoundedIcon />
            </div>
          </div>

          <div className="buttons">
            <button>Google Search</button>
            <button>I'm Feeling Lucky</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default searchpage;
