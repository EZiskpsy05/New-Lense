import React, {useRef} from 'react'; // for activating gif sound


import shockedDude from '../assets/Images/shocked-shocked-face.gif';
import backgroundVid from '../assets/Videos/dark_men.mp4';
import styles from './page2.module.css';

export function Page2(){

    //below creates a button that 
    const videoRef = useRef(null);

    const turnOnSound = () => {
        if(videoRef.current)
            videoRef.current.muted = false;
    };


    return(
        <div className = {styles.WebPage}>
          <div className = {styles.Page_1}>
            <video ref = {videoRef} className = {styles["background-video"]} src = {backgroundVid} type = "video/mp4" autoPlay loop muted/>
            <button className = {styles.background_button_vid} onClick={turnOnSound} style={{ position: 'absolute', zIndex: 1, top: '20px', left: '20px' }}>
                Click for sound                
            </button>
            </div>

          <div className = {styles.Page_2}>
            {/* add for loop of pictures */}
            {Array.from({ length: 2134 }).map((_, i) => (
            <img key={i} src={shockedDude} alt="" />
            ))}
            
          </div>


        </div>


    )

}