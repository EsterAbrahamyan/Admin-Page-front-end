import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function () {
    return (
        <div>
            <Link to='register'>
                <h4>Register</h4></Link>
            <Link to='login'>
                <h4>Login</h4></Link>
            <Link to='addcategory'>
                <h4>Addcategory</h4></Link>
                <Outlet/>
        </div>
    
    )
}
