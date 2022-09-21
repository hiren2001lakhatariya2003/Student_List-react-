import { Link } from "react-router-dom";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import "./styles.css";
import Typed from "react-typed";
import Typing from "react-typing-animation";
import Scroll from "./Scroll";
import { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";

function Home() {
  const [loading, setloding] = useState(false);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide me-2 mx-2"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner containers">
          <div class="carousel-item active mainimage">
            <img
              src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              class="d-block w-100"
              id="Image"
              alt="..."
              style={{ position: "relative" }}
            />
            <div class="centered">
              <Typing>
                <span class="dars">Darshan university</span>
                <br />
                <br />
              </Typing>
              <span class="lorem">
                <LoremIpsum p={1} />
              </span>
            </div>
            <Scroll showBelow={250} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
