import { createRoot } from 'react-dom/client'
import shockedbaby from './assets/Images/shockedbaby.png';
import monopoly_money from './assets/Images/monopoly.png';
import miau_audio from './assets/Audio/montagem_miau.m4a';

function play_montagem_miau()
{
  new Audio(miau_audio).play()
}

createRoot(document.getElementById('root')).render(
  <div>
    <h1>Hello React!</h1>
    <h0> I am wsmall </h0>
    <img src = {monopoly_money} alt = ""/>
    <img src = {shockedbaby} 
        alt = "" 
        style = {{width:'400px', height: 'auto'}}/>
    
    <button onClick = {play_montagem_miau}>
      Press to play montagem miau
    </button>
  </div>


)  
/*

div is our closer
using <img src... allows us to add photos to our page


<img src = {shockedbaby} alt = "" style = {{width:'400px', height: '400px'}}/>

to create comments in div -- will need  multiline comments + curly brackets around it
*/