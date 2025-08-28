import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Login from "./pages/login"
import SignUp from "./pages/signup"

function App(){
    return(
    <div>
        <Router>
            <Routes>
                <Route path="/login" element = {<Login />}/>
                <Route path="/signUp" element = {<SignUp />}/>
            </Routes>
        </Router>
       <h1> Lets Start </h1>
       <Login />
    </div>
    )
};


export default App;