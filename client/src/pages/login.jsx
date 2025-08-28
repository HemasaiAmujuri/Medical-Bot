import { useState } from "react";
import { Link } from 'react-router-dom'

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
    <div className="login">
      <form onSubmit={handleEvent}>
        <div className="info">
          <h1> Login </h1>
          <label htmlFor = "email"> Email </label>
          <input
            type="email"
            id = "email"
            placeholder="Enter your name"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="info">
          <label htmlFor = "password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button">
          <input type="submit" />
        </div>

        <p> Don't have an account?<Link to="/signUp"> signUp </Link> </p>
      </form>
    </div>
  );
}

export default Loginpage;
