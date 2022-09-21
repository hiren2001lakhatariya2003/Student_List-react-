import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import StudentAdd from "./StudentAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/studentlist" element={<StudentList />}></Route>
          <Route path="/student/:id" element={<StudentDetail />}></Route>
          <Route path="/student/add" element={<StudentAdd />}></Route>
          <Route path="/student/edit/:id" element={<StudentAdd />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
