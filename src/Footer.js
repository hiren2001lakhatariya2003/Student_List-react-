import { Link } from "react-router-dom";
import BackToTop from "react-back-to-top";
import React, { Component } from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Footer() {
  class App extends Component {
    render() {
      return (
        <BackToTop
          showOnScrollUp
          showAt={100}
          speed={1500}
          easing="easeInOutQuint"
        >
          <span>scroll up</span>
        </BackToTop>
      );
    }
  }
  return (
    <>
      <footer>
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item fid">
            <Link to="./" class="nav-link px-2 text-muted">
              Home
            </Link>
          </li>

          <li class="nav-item fid">
            <Link to="./about" class="nav-link px-2 text-muted">
              About
            </Link>
          </li>

          <li class="nav-item fid">
            <Link to="./studentlist" class="nav-link px-2 text-muted">
              All Stundents
            </Link>
          </li>

          <img
            src="https://img.icons8.com/nolan/2x/00C6FF/0072FF/youtube-play.png"
            alt=""
            style={{ width: "40px", marginLeft: "10px" }}
            class="fil"
          />

          <img
            src="https://img.icons8.com/nolan/2x/00C6FF/0072FF/facebook-circled.png"
            alt=""
            style={{ width: "40px", marginLeft: "10px" }}
            class="fil"
          />

          <img
            src="https://img.icons8.com/nolan/2x/00C6FF/0072FF/github.png"
            alt=""
            style={{ width: "40px", marginLeft: "10px" }}
            class="fil"
          />

          <img
            src="https://img.icons8.com/nolan/2x/00C6FF/0072FF/twitter-circled.png"
            alt=""
            style={{ width: "40px", marginLeft: "10px" }}
            class="fil"
          />

          <img
            src="https://img.icons8.com/nolan/2x/00C6FF/0072FF/instagram-new.png"
            alt=""
            style={{ width: "40px", marginLeft: "10px" }}
            class="fil"
          />
        </ul>

        <p class="text-center text-muted">
          © 2022{" "}
          <a
            href="https://www.darshan.ac.in"
            style={{ textDecoration: "none", color: "gray" }}
          >
            Darshan
          </a>
          , India
        </p>
      </footer>
    </>
  );
}

export default Footer;
