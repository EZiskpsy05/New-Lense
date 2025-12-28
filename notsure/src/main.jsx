import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react'


// we pull information form app.jsx and put it into here where it is renderd
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* strict mode makes it repeat 2 times, helping with debugging */}
    <App />
  </StrictMode>


)  
