import React, { useState } from 'react'


export default function Login() {

    const[login,setLogin]=useState({
        email:"",
        password:""
    })

    const handelLogin = async (e) =>{
        e.preventDefault()
        try{
         const response = await fetch ("http://localhost:5001/user/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
    })

    const data = await response.json()
    const token = data.jwt 
    localStorage.setItem('token', token);
    // localStorage.getItem('token');

    console.log(token); 
    if (data.err){
        alert(data.err)
    }
    console.log(data);
    
}
    
catch(err){
    console.log(err);
    
}
setLogin({email:"",password:""})
}
  return (
    <>
        <form onSubmit={handelLogin}>
      
            <label htmlFor='name'>
            name
                <input value ={login.email} onChange={(e) => setLogin ({...login,email:e.target.value})}id="name" /><br/>
                <label htmlFor='password'></label>
                password
                <input value={login.password} onChange={(e) => setLogin({...login,password:e.target.value})}id="password" /><br/>
                <button>login</button>
            </label>
        </form>
    </>
  )
}
