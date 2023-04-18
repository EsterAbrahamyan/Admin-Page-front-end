import React, { useState } from 'react'


export default function Addcategory() {

    const [category, setCategory] = useState({
        name: ""
    })

    const handelAddcategory = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found in local storage');
            return;
        }
        try {
            const response = await fetch("http://localhost:5001/cat/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(category),
            })

            const data = await response.json()
            // const token = data.jwt 
            // localStorage.setItem('token', token);


            console.log(token);
            if (data.err) {
                alert(data.err)
            }
            console.log(data);

        }

        catch (err) {
            // console.log(err);

        }
        setCategory({ name: "" })
    }
    return (
        <>
            <form onSubmit={handelAddcategory}>

                <label htmlFor='name'>
                    name
                    <input value={category.name} onChange={(e) => setCategory({ name: e.target.value })} id="name" /><br />

                    <button>Add</button>
                </label>
            </form>
        </>
    )
}



