import { useState } from "react";


function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEvent = (e) => {
    e.preventDefault();
    storeData()
  };


  function  storeData(){
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Data Saved successfully");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="bg-blue-900 flex justify-center items-center h-screen">
      <form onSubmit={handleEvent} className="bg-white h-100 w-80 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-4" > LOGIN </h1>
          <label htmlFor = "email" className="text-2xl font-bold"> Email </label>
          <input
            type="email"
            id = "email"
            placeholder="Enter your name"
            onChange={(e) => setEmail(e.target.value)}
            className="pl-4 h-10 w-50 rounded-3xl bg-gray-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor = "password" className="text-2xl font-bold ">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="pl-4 h-10 w-50 rounded-3xl bg-gray-300"
          />
        </div>

        <div className="bg-gray-300 rounded-3xl h-10 w-20 flex justify-center items-center">
          <input type="submit" />
        </div>

        <p className="font-bold"> Don't have an account?signUp </p>
      </form>
    </div>
  );
}

export default Loginpage;
