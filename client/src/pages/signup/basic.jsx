import React from 'react'
import { useState } from "react";


function Basicdetails(){
    const [form, setForm] = useState({
         name : "",
         email : "",
         mobile : "",
         DOB : "",
         gender : "",
         password : "",
         confirmPassword : ""
    })

}


export default Basicdetails;