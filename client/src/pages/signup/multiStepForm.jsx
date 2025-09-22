import { useState } from "react";
import Statusbar from '../../components/statusBar'
import NextButton from '../../components/button'
import Basicdetails from './basic'
import Medicaldetails from './medicalHistory'
import LifeStyle from './lifestyle'




function Multistepform(){
    const[step,setStep] = useState(1);


    const handleNext = () => {
    if (step < 3) {
      setStep(prevStep => prevStep + 1);  
    } else {
      setStep(1);
    }
  };

 
 

    return(
        <div className="bg-blue-900">

            <Statusbar />

            <div className="mt-20 mb-10">
               {step === 1 && <Basicdetails />}
               {step === 2 && <LifeStyle /> }
               {step === 3 &&  <Medicaldetails />}
            </div>


            <div className="button-container">
                 <NextButton onClick= {handleNext} />
            </div>

        </div>
    )


}




export default Multistepform;