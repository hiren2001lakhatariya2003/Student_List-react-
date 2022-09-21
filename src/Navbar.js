import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap-dropdown-menu";
import "./navbar.css";
import Typed from "react-typed";
import Typing from "react-typing-animation";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top nsvj ">
        <div class="container-fluid">
          <img
            src="https://i.gifer.com/RrVB.gif"
            width="90vh="
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginRight: "20px"
            }}
          />

          <div class="webname">studentlist.com</div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nv navbar-nav justify-content-center">
              <li class="lnv nav-item">
                <Link
                  to="./"
                  className="lnv"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px"
                  }}
                >
                  Home
                </Link>{" "}
              </li>

              <li class="lnv nav-item">
                <Link
                  className="lnv"
                  to="./studentlist"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px"
                  }}
                >
                  All Students
                </Link>{" "}
              </li>
              <li class="lnv nav-item">
                <Link
                  to="./student/add"
                  className="lnv"
                  style={{
                    textDecoration: "none",

                    fontSize: "20px"
                  }}
                >
                  Add Student
                </Link>{" "}
              </li>
              <li class="lnv nav-item">
                <Link
                  to="./about"
                  className="lnv"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px"
                  }}
                >
                  About
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
