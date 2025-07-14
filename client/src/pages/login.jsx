import React from "react";
import ReactDom from "react-dom";
import { useState } from "react";
import './index.css'

function Login() {
  const [inputs, setInputs] = useState("");

  return (
    <div>
      <form className="flex justify-center">
        <div class="Email">
          <label> Email</label>
          <br></br>
          <input
            type="text"
            name="Email"
            placeholder="Enter Your Email"
            value={inputs.email}
            required
          />
        </div>

        <div class="password">
          <label> Password </label>
          <br></br>
          <input
            type="password"
            name="Password"
            placeholder="Enter Your Password"
            value={inputs.password}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
