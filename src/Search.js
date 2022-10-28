import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "./reducer";
import "./Search.css";
import { useStateValue } from "./StateProvider";

function Search({ hideButtons = false, term }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();
    // console.log(input);

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
        {!hideButtons ? (
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        ) : (
          <input
            value={input}
            placeholder={term}
            onChange={(e) => setInput(e.target.value)}
          />
        )}
        <img
          className="search__inputMic"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/625px-Google_mic.svg.png?20210606084256"
          alt=""
        />
        <img
          className="search__inputCamera"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IlN0YW5kYXJkX3Byb2R1Y3RfaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKCSB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE5MnB4IiBoZWlnaHQ9IjE5MnB4IiB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTkyIDE5MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxyZWN0IGlkPSJib3VuZGluZ19ib3hfMV8iIGZpbGw9Im5vbmUiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIi8+CjxnIGlkPSJhcnRfbGF5ZXIiPgoJPGNpcmNsZSBpZD0iRG90IiBmaWxsPSIjNDI4NUY0IiBjeD0iOTYiIGN5PSIxMDQuMTUiIHI9IjI4Ii8+Cgk8cGF0aCBpZD0iUmVkIiBmaWxsPSIjRUE0MzM1IiBkPSJNMTYwLDcydjQwLjE1VjEzNmMwLDEuNjktMC4zNCwzLjI5LTAuODIsNC44MnYwdjBjLTEuNTcsNC45Mi01LjQzLDguNzgtMTAuMzUsMTAuMzVoMHYwCgkJYy0xLjUzLDAuNDktMy4xMywwLjgyLTQuODIsMC44Mkg2NmwxNiwxNmg1MGgxMmM0LjQyLDAsOC42My0wLjksMTIuNDYtMi41MWMzLjgzLTEuNjIsNy4yOC0zLjk2LDEwLjE3LTYuODYKCQljMS40NS0xLjQ1LDIuNzYtMy4wMywzLjkxLTQuNzRjMi4zLTMuNCwzLjk2LTcuMjgsNC44MS0xMS40NGMwLjQzLTIuMDgsMC42NS00LjI0LDAuNjUtNi40NXYtMTJWOTYuMTVWODRsLTYtMTlsLTEwLjgyLDIuMTgKCQlDMTU5LjY2LDY4LjcxLDE2MCw3MC4zMSwxNjAsNzJ6Ii8+Cgk8cGF0aCBpZD0iQmx1ZSIgZmlsbD0iIzQyODVGNCIgZD0iTTMyLDcyYzAtMS42OSwwLjM0LTMuMjksMC44Mi00LjgyYzEuNTctNC45Miw1LjQzLTguNzgsMTAuMzUtMTAuMzVDNDQuNzEsNTYuMzQsNDYuMzEsNTYsNDgsNTYKCQloOTZjMS42OSwwLDMuMjksMC4zNCw0LjgyLDAuODJjMCwwLDAsMCwwLDBMMTQ5LDQ1bC0xNy01bC0xNi0xNmgtMTMuNDRIOTZoLTYuNTZINzZMNjAsNDBINDhjLTE3LjY3LDAtMzIsMTQuMzMtMzIsMzJ2MTJ2MjBsMTYsMTYKCQlWNzJ6Ii8+Cgk8cGF0aCBpZD0iR3JlZW4iIGZpbGw9IiMzNEE4NTMiIGQ9Ik0xNDQsNDBoLTEybDE2LjgzLDE2LjgzYzEuMjMsMC4zOSwyLjM5LDAuOTMsMy40NywxLjU5YzIuMTYsMS4zMiwzLjk3LDMuMTMsNS4yOSw1LjI5CgkJYzAuNjYsMS4wOCwxLjIsMi4yNCwxLjU5LDMuNDd2MEwxNzYsODRWNzJDMTc2LDU0LjMzLDE2MS42Nyw0MCwxNDQsNDB6Ii8+Cgk8cGF0aCBpZD0iWWVsbG93IiBmaWxsPSIjRkJCQzA0IiBkPSJNNDgsMTY4aDM5Ljg5bC0xNi0xNkg0OGMtOC44MiwwLTE2LTcuMTgtMTYtMTZ2LTIzLjg5bC0xNi0xNlYxMzZDMTYsMTUzLjY3LDMwLjMzLDE2OCw0OCwxNjh6CgkJIi8+CjwvZz4KPC9zdmc+Cg=="
          alt=""
        />
      </div>
      {!hideButtons ? (
        <div>
          <div className="search__buttons">
            <Button type="submit" onClick={search} variant="outlined">
              Scout Search
            </Button>
            <Button variant="outlined">I'm feeling lucky</Button>
          </div>
          <div className="search__outputPages">
            <p>
              Scout offered in:{" "}
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCA8">
                हिन्दी
              </a>{" "}
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCBA">
                বাংলা
              </a>{" "}
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCBE">
                తెలుగు
              </a>{" "}
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCBI">
                मराठी
              </a>{" "}
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCBM">
                தமிழ்
              </a>{" "}
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCBQ">
                ગુજરાતી
              </a>{" "}
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCBU">
                ಕನ್ನಡ
              </a>
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCBY">
                മലയാളം
              </a>{" "}
              <a href="https://www.google.com/setprefs?sig=0_TJwJdHcbqaYdJDcfKK5DpWBi0jY%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwi05PKvkoP7AhWIRN4KHSpbDiQQ2ZgBCBc">
                ਪੰਜਾਬੀ
              </a>
            </p>
          </div>
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
