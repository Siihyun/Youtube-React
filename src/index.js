import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtubeAPI";

const youtube = new Youtube("AIzaSyBz0OPKsnb9XzSoJ0HJXrotlHndFYydGXo");

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
