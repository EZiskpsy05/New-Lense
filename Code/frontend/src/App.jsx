import './App.css';//Below chunck is our images (to be deleated later)
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

// below are our pages for our website (We now have multiple pages)
import { HomeScreen } from './Pages/home_Screen';
import { Page1 } from './Pages/page1';
import { Output } from './Pages/output';

function App() {
  
  return(
    <Router>
      <Routes>
        <Route path = "/" element ={<HomeScreen/>}/>
        <Route path = "/page1" element ={<Page1/>}/>
        <Route path = "/output" element ={<Output/>}/>

      </Routes>
    </Router>
  )
}

// what does this do??
export default App;