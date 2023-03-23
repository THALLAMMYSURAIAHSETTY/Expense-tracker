import React,{useState,useEffect} from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Year2023 from "./Year2023"
import Year2022 from "./Year2022"
import Year2021 from "./Year2021"



export default function App() {

  let[Year , setYear]=useState(2023)

  function Changeyear()
  {
    let Yeardropdown = document.getElementById('Yeardropdown').value
    setYear(Yeardropdown)
    console.log(Yeardropdown)
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <select name="Year" id="Yeardropdown" onChange={Changeyear}>
        <option value="2023" selected="selected">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
      {/* <Routes>
        <Route path="/" element={<Year2023/>}/>
      </Routes> */}
      {Year=="2023" ? <Year2023/> : Year=="2022" ? <Year2022/> : <Year2021/>}
    </div>
  );
}