import { createRoot } from 'react-dom/client'
import shockedbaby from './Images/shockedbaby.png';
import monopoly_money from './Images/monopoly.png';

createRoot(document.getElementById('root')).render(
  <div>
    <h1>Hello React!</h1>
    <h0> I am small </h0>
    <img src = {monopoly_money} alt = ""/>
    <img src = {shockedbaby} 
        alt = "" 
        style = {{width:'400px', height: 'auto'}}/>

  </div>
)  
/*
<img src = {shockedbaby} alt = "" style = {{width:'400px', height: '400px'}}/>

to create comments in div -- will need  multiline comments + curly brackets around it
*/