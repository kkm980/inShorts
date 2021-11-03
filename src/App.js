import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import axios from "axios";
import {key} from "./Apikey";
import Navbar from './components/Navbar';
import NewsBox from './newsSee/NewsBox';


function App() {
  const [catg,setCatg] = useState("general");

  const ourNews=async()=>{
    try{
      const newsDetails=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`);
       console.log(newsDetails);
       console.log("hi");
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="App">
        <Navbar setCatg={setCatg}/>
        <NewsBox catg={catg}/>
    </div>
  );
}

export default App;
