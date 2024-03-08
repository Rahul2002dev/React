import React, { useEffect, useState } from "react";
import Cards from "./components/Cards.js"
import Navbar from "./components/Navbar.js"
import {toast} from "react-toastify";
import Filter from "./components/Filter.js"
import {apiUrl,filterData}  from "./data.js";
const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[]);
  return ( 
    <div>
      <Navbar/>
      <Filter filterData = {filterData}/>
      <Cards courses = {courses}/>
    </div>
  )
};

export default App;
