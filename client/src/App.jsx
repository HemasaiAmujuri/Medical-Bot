import Login from "./pages/login"
import Statusbar from "./pages/statusBar/statusBar";
import Basicdetails from "./pages/signup/basic";
import Medicaldetails from "./pages/signup/medicalhHistory";
import Lifestyle from "./pages/signup/lifestyle"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
    return(
        <div>
       <Router>
          <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Basicdetails />} />
        <Route path="/medical" element={<Medicaldetails />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
          </Routes>
       </Router>
    </div>
    )
};


export default App;