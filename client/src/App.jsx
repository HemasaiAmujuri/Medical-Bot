import Login from "./pages/login"
import Statusbar from "./pages/statusBar/statusBar";
import Basicdetails from "./pages/signup/basic";
import Medicaldetails from "./pages/signup/medicalhHistory";


function App(){
    return(
        <div>
       {/* <Statusbar /> */}
       {/* <Login /> */}
       {/* <Basicdetails /> */}
       <Medicaldetails />
    </div>
    )
};


export default App;