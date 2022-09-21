import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { Form } from "react-form";
import Scroll from "./Scroll";
import FadeLoader from "react-spinners/FadeLoader";

import "./styles.css";
export default function StudentAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [studata, setstudata] = useState({});

  const [loading, setloding] = useState(false);

  useEffect(() => {
    setloding(true);
    setTimeout(() => {
      setloding(false);
    }, 3000);
  }, []);

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  </head>;
  useEffect(() => {
    if (params.id > 0) {
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
          setstudata(res);
        });
    }
  }, []);
  return (
    <>
      <Scroll showBelow={80} />

      <div class="edit">
        {/* <span class="title-word title-word-1">This</span>
    <span class="title-word title-word-2">is</span> */}
        <br />
        <br />
        <br />
        <div class="edit_Or_Add">
          <h2 class="title">
            <span class="title-word title-word-1">
              {" "}
              {params.id > 0 && "Edit "}
              {!(params.id > 0) && "Add "}
            </span>
            <span class="title-word title-word-2">Student </span>{" "}
            <span class="title-word title-word-3">Details</span>
          </h2>
        </div>
        <br />
        <table
          class="table"
          class="personaldetails table table-hover"
          align="center"
          border="2"
        >
          <tbody class="rows">
            <tr>
              <td class="left">Student Name</td>
              <td>:</td>
              <td class="right">
                <input
                  class="form-control col-lg-1"
                  value={studata.StudentName}
                  onChange={(e) => {
                    setstudata({ ...studata, StudentName: e.target.value });
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td class="left">studnet Email</td>
              <td>:</td>
              <td class="right">
                <MDBInput
                  value={studata.StudentEmailAddress}
                  onChange={(e) => {
                    setstudata({
                      ...studata,
                      StudentEmailAddress: e.target.value
                    });
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td class="left">student mobile</td>
              <td>:</td>
              <td class="right">
                <MDBInput
                  value={studata.StudentMobileNo}
                  onChange={(e) => {
                    setstudata({ ...studata, StudentMobileNo: e.target.value });
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td class="left">student parent mobile</td>
              <td>:</td>
              <td class="right">
                <MDBInput
                  value={studata.StudentParentMobileNo}
                  onChange={(e) => {
                    setstudata({
                      ...studata,
                      StudentParentMobileNo: e.target.value
                    });
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td class="left">student department</td>
              <td>:</td>
              <td class="right">
                <MDBInput
                  value={studata.StudentDepartment}
                  onChange={(e) => {
                    setstudata({
                      ...studata,
                      StudentDepartment: e.target.value
                    });
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td class="left">Stundet image</td>
              <td>:</td>
              <td class="right">
                <MDBInput
                  value={studata.StudentImage}
                  onChange={(e) => {
                    setstudata({ ...studata, StudentImage: e.target.value });
                  }}
                  type="text"
                  id="typeText"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center">
          <tr>
            <td colSpan="3" align="center">
              <button
                onClick={() => {
                  if (params.id > 0) {
                    fetch(
                      "https://630b7d12f280658a59dc50a4.mockapi.io/Studentdata/" +
                        params.id,
                      {
                        method: "PUT",
                        body: JSON.stringify(studata),
                        headers: {
                          "Content-Type": "application/json"
                        }
                      }
                    ).then(() => {
                      navigate("/Studentlist");
                    });
                  } else {
                    fetch(
                      "https://630b7d12f280658a59dc50a4.mockapi.io/Studentdata/",
                      {
                        method: "POST",
                        body: JSON.stringify(studata),
                        headers: {
                          "Content-Type": "application/json"
                        }
                      }
                    ).then(() => {
                      navigate("/Studentlist");
                    });
                  }
                }}
                class="button"
                class="btn btn-outline-"
                style={{
                  textAlign: "center",
                  width: "200px",
                  padding: "10px"
                }}
              >
                Conform
              </button>
            </td>
          </tr>
        </table>
        <br />
        <br />
      </div>
    </>
  );
}
