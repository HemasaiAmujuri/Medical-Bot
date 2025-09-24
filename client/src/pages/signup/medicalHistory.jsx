import React from "react";
import { medicalHistoryForm } from "../../actions/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Medicaldetails() {

  const [chronic,setChronic] = useState("")
  const [medications,setMedications] = useState("")
  const [allergies,setAllergies] = useState("")
  const [surgeries,setSurgeries] = useState("")
  const [health,setHealth] = useState("")


  const dispatch = useDispatch();
  dispatch(medicalHistoryForm({
    chronic : chronic,
    medications : medications,
    allergies: allergies,
    surgeries: surgeries,
    health : health
  }));


   
  return (
    <div className="bg-blue-900 flex justify-center items-center h-screenover overflow-y-auto">
      <form className="bg-white h-180 w-130 flex flex-col gap-5">

        <div className="flex flex-col w-100">
          <h1 className="text-5xl font-bold mb-4 ml-5 mt-10 bg-black- w-150"> MEDICAL HISTORY </h1>
          <label className="text-2xl w-150 font-bold pl-5"> Do you have any chronic illnesses? </label>
          <textarea
            rows="3"
            cols="30"         
            required
            onChange={(e) => setChronic(e.target.value)}
            className="ml-5 pl-4  bg-gray-300 "
          />
        </div>

         <div className="flex flex-col w-100">
          <label className="text-2xl w-150 font-bold pl-5"> Are you currently taking any medications? </label>
          <textarea
            rows="3"
            cols="30"         
            required
             onChange={(e) => setMedications(e.target.value)}
            className="ml-5 pl-4  bg-gray-300 "
          />
        </div>

        <div className="flex flex-col w-100">
          <label className="text-2xl w-150 font-bold pl-5"> Do you have any allergies?</label>
          <textarea
            rows="3"
            cols="30"         
            required
            onChange={(e) => setAllergies(e.target.value)}
            className="ml-5 pl-4  bg-gray-300 "
          />
        </div>


        <div className="flex flex-col w-100">
          <label className="text-2xl w-150 font-bold pl-5"> Have you had any surgeries in the past? </label>
          <textarea
            rows="3"
            cols="30"         
            required
             onChange={(e) => setSurgeries(e.target.value)}
            className="ml-5 pl-4  bg-gray-300 "
          />
        </div>


           <div className="flex flex-col w-100">
          <label className="text-2xl w-150 font-bold pl-5"> Any recent symptoms or health concerns? </label>
          <textarea
            rows="3"
            cols="30"         
            required
             onChange={(e) => setHealth(e.target.value)}
            className="ml-5 pl-4  bg-gray-300 "
          />
        </div>

      </form>
    </div>
  );
}

export default Medicaldetails;
