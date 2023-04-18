import React, { useState } from 'react'


export default function Register() {

    const[register,setRegister]=useState({
        email:"",
        password:""
    })

    const handelRegister = async (e) =>{
        e.preventDefault()
        try{
         const response = await fetch ("http://localhost:5001/user/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
    })

    const data = await response.json()
    if (data.err){
        alert(data.err)
    }
    console.log(data);
    
}
        
catch(err){
    console.log(err);
    
}
setRegister({email:"",password:""})
}
  return (
    <>
        <form onSubmit={handelRegister}>
      
            <label htmlFor='name'>
            name
                <input value ={register.email} onChange={(e) => setRegister ({...register,email:e.target.value})}id="name" /><br/>
                <label htmlFor='password'></label>
                password
                <input value={register.password} onChange={(e) => setRegister({...register,password:e.target.value})}id="password" /><br/>
                <button>register</button>
            </label>
        </form>
    </>
  )
}
