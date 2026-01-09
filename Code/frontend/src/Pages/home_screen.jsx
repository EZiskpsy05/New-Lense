import styles from './home_screen.module.css';
import { Link } from 'react-router-dom'; // will allow for links to other pages


import shockedbaby from '../assets/Images/shockedbaby.png';
import monopoly_money from '../assets/Images/monopoly.png';

import {PlayRenaiBrooklyn, PlayMontagemMiau, PlayFahh} from '../Componets/Songs';

//Below is our videos
import backgroundVid from '../assets/Videos/sakura_garden_background.mp4';

export function HomeScreen(){

  return (
    // first page content's
    <div className={styles.Content}>
      <video className = {styles["background-video"]} src = {backgroundVid} type = "video/mp4" autoPlay loop muted/>
      <div className = {styles.Page1}>
        {/* these below are our texts*/}
        <h1 className = {styles.title}> Lenses!</h1>

        {/* these below are our images*/}
        <img src = {monopoly_money} alt = ""/>
        <img src = {shockedbaby} 
          alt = "" 
          style = {{width:'400px', height: 'auto'}}/>
        
        <Link className = {styles.link_page_2} to = "/page2">
          <button className>
            Click me to proceed to page 2
          </button>
        </Link>


        {/* these below are our buttons*/}
        <PlayRenaiBrooklyn />
        <PlayMontagemMiau />
        <PlayFahh />

      </div>



      <div className = {styles.Page2}> 

      </div>

      <div className = {styles.Page3}>

      </div>

      <div className = {styles.Page4}>

      </div>

    </div>


  );

}