import { createRoot } from 'react-dom/client'
import shockedbaby from './assets/Images/shockedbaby.png';
import monopoly_money from './assets/Images/monopoly.png';

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

div is our closer
using <img src... allows us to add photos to our page


<img src = {shockedbaby} alt = "" style = {{width:'400px', height: '400px'}}/>

to create comments in div -- will need  multiline comments + curly brackets around it
*/