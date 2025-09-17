import { useState } from "react";
import  submitForm  from '../../actions/actions'
import { useDispatch } from 'react-redux';


function Basicdetails() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
   const [error, setError] = useState("");

   console.log(form,"form");

  
   const dispatch = useDispatch()

   dispatch(submitForm(form))


   const handleNameChange = (e) => {
    const value = e.target.value;
    
    const nameRegex = /^[A-Za-z0-9]+$/;

    if (!nameRegex.test(value)) {
      setError("Name can only contain letters and numbers (no spaces or special characters).");
    } else {
      setError("");
    }

  };


   function handlePasswordValidation(){
      if(form.password !== form.confirmPassword){
        setError("passwords do not match")
      }else{
        setError("")   //if valid 
      }

   }




  return (
    <div className='flex flex-col'>
    <div className="bg-blue-900 flex justify-center items-center h-screen">
      <form className="bg-white h-190 w-80 flex flex-col justify-center items-center gap-5">

        <div className="flex flex-col w-60">
          <h1 className="text-5xl font-bold mb-4 ml-5"> SIGN UP</h1>
          <label htmlFor="name" className="text-2xl font-bold"> Name </label>
          <input
            type="text"
            id="name"
            value={form.name}
            placeholder="Enter your name"
            onChange={ (e) => { 
                setForm({...form, name : e.target.value}),
                handleNameChange();
            }}
            required
            className="pl-4 h-10 w-50 rounded-3xl bg-gray-300"
          />
        </div>

         <div className="flex flex-col w-60">
          <label htmlFor="email" className="text-2xl font-bold"> Email </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setForm({...form, email : e.target.value})}
            required
            className="pl-4 h-10 w-50 rounded-3xl bg-gray-300"
          />
        </div>



         <div className="flex flex-col w-60">
          <label htmlFor="mobile" className="text-2xl font-bold"> Mobile </label>
          <input
            type="tel"
            id="mobile"
            placeholder="Enter your Mobile"
            onChange={(e) => setForm({...form, mobile : e.target.value})}
            className="pl-4 h-10 w-50 rounded-3xl bg-gray-300"
          />
        </div>


         <div className="flex flex-col w-60">
          <label htmlFor="dob" className="text-2xl font-bold"> DOB </label>
          <input
            type="date"
            id="dob"
            placeholder="Enter your DOB"
            onChange={(e) => setForm({...form, dob : e.target.value})}
            className="pl-4 h-10 w-50 rounded-3xl bg-gray-300 pr-3"
          />
        </div>



         <div className="flex flex-col w-60">
          <label htmlFor="password" className="text-2xl font-bold"> Password </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setForm({...form, password : e.target.value})}
            required
            className="pl-4 h-10 w-50 rounded-3xl bg-gray-300"
          />
        </div>


         <div className="flex flex-col w-60">
          <label htmlFor="confirm-password" className="text-2xl font-bold"> Confirm Password </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            onChange={ (e) => { 
                setForm({...form,  confirmPassword: e.target.value}); 
                handlePasswordValidation();
            }}
            className="pl-4 h-10 w-50 rounded-3xl bg-gray-300"
          />
        </div>


         <div className="flex flex-col w-60">
          <label htmlFor="address" className="text-2xl font-bold"> Address </label>
          <textarea
            id="address"
            placeholder="Enter your address"
            rows="3"
            cols="30"
            onChange={(e) => setForm({...form, address : e.target.value})}
            className="pl-4 bg-gray-300"
          />
        </div>

            
      </form>
    </div>
    </div>
  );
}

export default Basicdetails;
