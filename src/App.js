import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import NewsBox from './newsSee/NewsBox';
import Footer from "./components/Footer/Footer";

import { useState, useEffect } from 'react';
import axios from "axios";
import {key} from "./Apikey";



function App() {
  const [catg,setCatg] = useState("general");
  const [newsArr,setNewsArr] = useState([]);
  const [newsNumb,setNewsNumb] = useState(0);

  const ourNews=async()=>{
    try{
      const newsDetails=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}&category=${catg}`);
       console.log(newsDetails.data);
       console.log(newsDetails.data.articles);
       setNewsArr([newsDetails.data.articles]);
       setNewsNumb([newsDetails.data.totalResults]);
       console.log("h");
      //  console.log(newsNumb);
    }
    catch(err){
      console.log(err)
    }
  }

  // useEffect(() => {
  //   ourNews();
  // }, [catg])

  return (
    <div className="App">
        <Navbar setCatg={setCatg}/>
        <NewsBox catg={catg}/>
        <Footer/>
    </div>
  );
}

export default App;
