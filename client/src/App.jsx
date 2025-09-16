import Login from "./pages/login"
import Multistepform from './pages/signup/multiStepForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
    return(
        <div>
       <Router>
          <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Multistepform />} />

          </Routes>
       </Router>
    </div>
    )
};


export default App;