import renai_brooklyn from '../assets/Audio/Just Landed in Brooklyn × Renai Circulation.m4a';
import miau_audio from '../assets/Audio/montagem_miau.m4a';
import fahh from '../assets/Audio/fahhh.m4a';

export function PlayRenaiBrooklyn(){
          function play_song() {
            const song = new Audio(renai_brooklyn);
            song.loop = true;
            song.play();
          }
    return(
        <div>
            <button onClick={play_song}>
                play_somg
            </button> 
        </div>
    )
}

export function PlayMontagemMiau(){
          function play_song() {
            const song = new Audio(miau_audio);
            song.loop = true;
            song.play();
          }
    return(
        <div>
            <button onClick={play_song}>
                play_somg
            </button> 
        </div>
    )
}

export function PlayFahh(){
          function play_song() {
            const song = new Audio(fahh);
            song.loop = true;
            song.play();
          }
    return(
        <div>
            <button onClick={play_song}>
                play_somg
            </button> 
        </div>
    )
}