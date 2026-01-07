import '../App.css';//Below chunck is our images (to be deleated later)

import shockedbaby from '../assets/Images/shockedbaby.png';
import monopoly_money from '../assets/Images/monopoly.png';

import {PlayRenaiBrooklyn, PlayMontagemMiau, PlayFahh} from '../Componets/Songs';

//Below is our videos
import backgroundVid from '../assets/Videos/sakura_garden_background.mp4';

export function HomeScreen(){

  return (
    // first page content's
    <div className="Content">
      <video className = "background-video" src = {backgroundVid} type = "video/mp4" autoPlay loop muted/>
      <div className = "Page1">
        {/* these below are our texts*/}
        <h1 className = "title"> Lenses!</h1>

        {/* these below are our images*/}
        <img src = {monopoly_money} alt = ""/>
        <img src = {shockedbaby} 
          alt = "" 
          style = {{width:'400px', height: 'auto'}}/>
        
        {/* these below are our buttons*/}
        <PlayRenaiBrooklyn />
        <PlayMontagemMiau />
        <PlayFahh />

      </div>



      <div className = "Page2"> 

      </div>

      <div className = "Page3">

      </div>

      <div className = "Page4">

      </div>

    </div>


  );

}