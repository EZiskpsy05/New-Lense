import styles from './home_screen.module.css';
import { Link } from 'react-router-dom'; // will allow for links to other pages


import shockedbaby from '../assets/Images/shockedbaby.png';
import monopoly_money from '../assets/Images/monopoly.png';
import {PlayRenaiBrooklyn, PlayMontagemMiau, PlayFahh} from '../Componets/Songs';
import backgroundVid from '../assets/Videos/sakura_garden_background.mp4';


export function HomeScreen(){

  return (
    // first page content's
    <div className={styles.Content}>

      {/*below are is the navbar*/}
      <ul> 
        <li><a href="#page1">Page1_temp</a></li>
        <li><a href="#page2">Page2_temp</a></li>
        <li><a href="#page3">Page3_temp</a></li>
        <li><a href="#page4">Page4_temp</a></li>
      </ul>

      {/*<video className = {styles["background-video"]} src = {backgroundVid} type = "video/mp4" autoPlay loop muted/>*/}
      <div className = {styles.Page1}>
        {/* these below are our texts*/}
        <h1 className = {styles.title}> Lenses!</h1>
        
        <Link className = {styles.link_page_2} to = "/output">
          <button>
            Click me to proceed to Result Page
          </button>
        </Link>


      </div>
    </div>


  );

}


/*
<PlayRenaiBrooklyn />
<PlayMontagemMiau />
<PlayFahh />


<img src = {monopoly_money} alt = ""/>
<img src = {shockedbaby} alt = "" style = {{width:'400px', height: 'auto'}}/>
*/

/* these 3 below are extra pages
      <div className = {styles.Page2}> </div>
      <div className = {styles.Page3}></div>
      <div className = {styles.Page4}></div>
*/