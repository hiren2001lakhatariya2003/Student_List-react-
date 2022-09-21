import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import "./styles.css";
function StudentList() {
  const [students, setstudents] = useState([]);
  useEffect(() => {
    fetch("https://630b7d12f280658a59dc50a4.mockapi.io/Studentdata")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setstudents(res);
      });
  }, []);

  const formatedstudent = students.map((stu) => {
    return (
      <>
        <Scroll showBelow={250} />
        <table
          class="studentlist"
          style={{ align: "center", fontFamily: "serif" }}
          border="1"
        >
          <tr>
            <td style={{ width: "25%" }}>
              <h2>{stu.StudentID}</h2>
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px"
              }}
            >
              <img
                class="card-img-top center"
                src={stu.StudentImage}
                alt="Card image cap"
                align="center"
                style={{
                  align: "center",
                  margin: 5,
                  borderRadius: "50px",
                  width: "80px"
                }}
              />
            </td>
            <td
              style={{
                width: "25%",
                padding: "10px",

                fontFamily: "Georgia",
                fontSize: "20px"
              }}
            >
              {stu.StudentName}
            </td>
            <td
              style={{
                width: "25%",
                padding: "10px"
              }}
            >
              <Link
                to={"/student/" + stu.id}
                style={{
                  textDecoration: "none",
                  fontSize: 17,
                  fontStyle: "italic"
                }}
                class="hover-underline-animation nav-item effect-four"
                id="viewprofile"
                align="center"
              >
                view profile&nbsp;&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Link>
            </td>
          </tr>
        </table>
      </>
    );
  });
  return (
    <>
      <div class="listTitleBlack">
        <div align="center" class="listTitleback">
          Student List
        </div>
      </div>
      <table
        width="100%"
        align="center"
        style={{ fontFamily: "Lucida-Sans-Unicode" }}
      >
        <tr style={{ border: "1.5px solid black" }} align="center">
          <td
            style={{ width: "24%", backgroundColor: "#badbdb" }}
            align="center"
          >
            <h1>Student ID</h1>
          </td>
          <td
            style={{
              width: "25%",
              padding: "10px",
              backgroundColor: "#badbdb"
            }}
          >
            <h1>Image</h1>
          </td>
          <td
            style={{
              width: "25%",
              padding: "10px",
              backgroundColor: "#badbdb"
            }}
          >
            {" "}
            <h1>Name</h1>
          </td>
          <td
            style={{
              width: "25%",
              padding: "10px",
              backgroundColor: "#badbdb"
            }}
          >
            {" "}
            <h2>View Profile</h2>
          </td>
        </tr>
      </table>
      <h1 align="center">
        <div class="row">{formatedstudent}</div>
      </h1>
    </>
  );
}
export default StudentList;
