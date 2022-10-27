import { Mic } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "./reducer";
import "./Search.css";
import { useStateValue } from "./StateProvider";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search__buttons ">
          <Button
            type="submit"
            className="search__buttonsHidden"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
