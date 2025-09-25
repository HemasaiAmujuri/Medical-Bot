
import axios from 'axios';
import { useSelector } from "react-redux";


function SubmitButton(){

    // const {submittedBasicform, submittedLifestyleForm, submittedMedicalhistoryForm } = useSelector((state) => state.dataSlice );
     const submittedBasicform = useSelector((state) => state.basicForm.submittedBasicform);
      const submittedLifestyleForm = useSelector((state) => state.basicForm.submittedLifestyleForm);
       const submittedMedicalhistoryForm = useSelector((state) => state.basicForm.submittedMedicalhistoryForm);

    const latestFromsubmittedBasicform = submittedBasicform.length ? submittedBasicform[submittedBasicform.length - 1] : null;
  const latestFromsubmittedLifestyleForm = submittedLifestyleForm.length ? submittedLifestyleForm[submittedLifestyleForm.length - 1] : null;
  const latestFromsubmittedMedicalhistoryForm = submittedMedicalhistoryForm.length ? submittedMedicalhistoryForm[submittedMedicalhistoryForm.length - 1] : null;

    const payload = {
        basicDetails : latestFromsubmittedBasicform,
        lifeStyle : latestFromsubmittedLifestyleForm,
        medicalHistory : latestFromsubmittedMedicalhistoryForm
    }

    const fetch = async () => {
        try{
      const response = await axios.post('http://localhost:3000/api/user/create', payload)
      console.log(response.data,"response")
        }catch(err){
            console.log(err)
        }
  }
    
    return(
        <div className='bg-blue-900'>
            <input type="button" className='h-10 w-20 bg-blue-500 ml-190 rounded-4xl mt-0' value = 'Submit' onClick={fetch}/>
        </div>
    )

}


export default SubmitButton;