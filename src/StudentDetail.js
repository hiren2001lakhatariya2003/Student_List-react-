import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Scroll from "./Scroll";

import Typed from "react-typed";
import "./styles.css";
function StudentDetial() {
  let params = useParams();
  const navigate = useNavigate();
  const [student, setstudent] = useState({});
  useEffect(() => {
    fetch(
      "https://630b7d12f280658a59dc50a4.mockapi.io/Studentdata/" + params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setstudent(res);
      });
  }, []);
  return (
    <>
      <div class="details" style={{ border: "1" }}>
        <br />
        <Scroll showBelow={200} />
        <h1 style={{ marginLeft: "40px", width: "100%", textAlign: "center" }}>
          <Typed
            style={{ fontFamily: "serif", marginTop: "10px" }}
            strings={["Student Detail  "]}
            typeSpeed={30}
          />
        </h1>

        <br />
        <table border="0" width="65%" align="center">
          <tr>
            <td width="15%">
              <img
                class="card-img-top center"
                src={student.StudentImage}
                alt="Student Image"
                align="center"
                style={{
                  align: "center",
                  marginRight: 10,
                  borderRadius: "10px",
                  width: "150px",
                  border: "1px ",
                  boxShadow: "0px 0px 20px"
                }}
              />
            </td>
            <td
              style={{ border: "", verticalAlign: "top", paddingLeft: "20px" }}
            >
              <span
                class="main"
                style={{ fontSize: "30px", fontStyle: "bold" }}
              >
                {student.StudentName}
              </span>
              <br />
              <span
                class="temp"
                style={{ fontStyle: "italic", fontSize: "15px" }}
              >
                {student.StudentID}
                <br />
                Computer
                <br />
              </span>
            </td>
            <td
              style={{
                border: "",
                verticalAlign: "top",
                textAlign: "right",
                marginRight: "100px",
                marginTop: "50px"
              }}
            >
              <span
                class="temp"
                style={{ fontSize: "25px", fontStyle: "bold" }}
              >
                School Of Engineering
              </span>
              <span
                class="temp"
                style={{ fontStyle: "italic", fontSize: "15px" }}
              >
                <br />
                Semester - 5
                <br />
                CGPA : 9.5
                <br />
                SPI : 9.3
              </span>
            </td>
          </tr>
          <br />
          <tr>
            <td colSpan="3" align="center">
              <button class="buttons">
                <BsFillPersonFill /> Academics
              </button>
              <button class="Personalbuttons">
                <HiAcademicCap /> Personal
              </button>
              <button class="buttons">
                <RiPagesLine /> Exam
              </button>
              <button class="buttons">
                <FcMoneyTransfer /> Fees
              </button>
              <button class="buttons">
                <FaChartLine /> Mentoring
              </button>
              <hr
                style={{ marginTop: "-5.5px", color: "gray", width: "90%" }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="4" align="center">
              <div class="personal" align="center">
                Personal Details
              </div>
              <br />
              <table
                border="2"
                class="personaldetails table table-hover"
                width="100%"
              >
                <tbody class="rows">
                  <tr>
                    <td class="left">Department</td>
                    <td>:</td>
                    <td class="right">{student.StudentDepartment}</td>
                  </tr>

                  <tr>
                    <td class="left">Roll No</td>
                    <td>:</td>
                    <td class="right">{student.StudentID}</td>
                  </tr>
                  <tr>
                    <td class="left">Mobile No</td>
                    <td>:</td>
                    <td class="right">{student.StudentParentMobileNo}</td>
                  </tr>
                  <tr>
                    <td class="left">Parents Mobile No</td>
                    <td>:</td>
                    <td class="right">{student.StudentParentMobileNo}</td>
                  </tr>
                  <tr>
                    <td class="left">Email</td>
                    <td>:</td>
                    <td class="right">{student.StudentEmailAddress}</td>
                  </tr>
                  <tr>
                    <td class="left">Address</td>
                    <td>:</td>
                    <td class="right">
                      Darshan University,Rajkot-Morbi
                      <br />
                      Highway,Gujarat-363650
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
        <br />

        <div align="center">
          <Link
            to="../studentlist"
            class="button"
            class="btn btn-outline-"
            style={{
              textAlign: "center",
              width: "103px",
              padding: "10px",
              marginRight: "30px"
            }}
          >
            <BsArrowLeft /> Go back
          </Link>

          <button
            onClick={() => {
              fetch(
                "https://630b7d12f280658a59dc50a4.mockapi.io/Studentdata/" +
                  params.id,
                {
                  method: "DELETE"
                }
              ).then((res) => {
                navigate("/Studentlist");
              });
            }}
            class="button"
            class="btn btn-outline-"
            style={{ textAlign: "center", width: "103px", padding: "10px" }}
          >
            Delete
          </button>

          <button
            onClick={() => {
              navigate("/student/edit/" + params.id);
            }}
            class="button"
            class="btn btn-outline-"
            style={{
              textAlign: "center",
              width: "103px",
              padding: "10px",
              marginLeft: "20px"
            }}
          >
            Edit
          </button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
export default StudentDetial;
