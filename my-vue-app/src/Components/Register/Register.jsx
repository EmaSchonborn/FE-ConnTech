import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useHistory } from "react-router-dom";
import {createUser } from "../../redux/actions";
import { useEffect } from "react";



export default function CreateUser(){
    let dispatch = useDispatch()
    let history = useHistory()
    // const users = useSelector((state) => state.filteredUsers)
    const [error, setError] = useState({})
    
    function validate(input){
        let errors = {}
        
        if(!input.name){
            errors.name = "You have to select a name!."
        }
        if(input.name.search("[0-9]") !== -1) {
            errors.name = "The name must not contain numbers."
        }
        if(input.name.search("[^A-Za-z0-9]") !== -1) {
            errors.name = "The name must not contain symbols or spaces."
        }
        if(!input.password){
            errors.password = "You have to select a password!."
        }
        if(!input.email){
            errors.email = "You have to select a email!."
        }
        if(!input.phone){
            errors.phone = "You have to select a phone number!."
        }
        // if(users.find(p => p.name.toLowerCase() === input.name.toLowerCase())){
            //     errors.name = "There is already a user with that name, try to create it with another"
            // }
            return errors
        };
        
        // useEffect(() => {
            //     dispatch(getRoles())
            // },[dispatch])
    const roles = ["user", "company", "hibrid"]

    const [input, setInput] = useState({
    name : "",
    email: "",
    phone: "",
    password: "",
    roles: []
    })

    const [role, setRole] = useState({
        role1: "",
       
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
        
    }

    const handleSelect = (e) => {
      
        setRole({
            ...role,
            [e.target.name] : e.target.value
        })
        if(e.target.name === "role1"){
            setInput({
                ...input,
                roles: [e.target.value]
            })
        }
    
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.roles.length === 0){
            return alert("You need pick a role")
         }
         const data = {...input}
        dispatch(createUser(data))
        setInput({
            name : "",
            email: "",
            phone: "",
            password: "",
            roles: []
        })
        alert("Register successfull!")
        history.push("/home")
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h1>Create User</h1>
                <div>
                <div>

                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={input.name} onChange={(e) => handleInput(e)}/>
                    {error.name && (
                        <p>{error.name}</p>
                        )}
                </div>

                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={input.email} onChange={(e) => handleInput(e)}/>
                    {error.email && (
                        <p>{error.email}</p>
                        )}
                </div>
                
                <div>
                    <label>Phone: </label>
                    <input type="number" name="phone" value={input.phone} onChange={(e) => handleInput(e)}/>
                    {error.phone && (
                        <p>{error.phone}</p>
                        )}
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={input.password} onChange={(e) => handleInput(e)}/>
                    {error.password && (
                        <p>{error.password}</p>
                        )}
                </div>

                <div>
                    <label>Roles: </label>
                    <select defaultValue={"none"} name="role1" onChange={(e) => handleSelect(e)}>
                    <option value="none">Select role...</option>
                        {roles.map((e) => {
                            return(
                                <option value={e}>{e}</option>
                                )
                            })}
                    </select>
                    
                </div>
                    </div>

                </div>
                <div>
                <Link to="/home"><button>
                    Go Home
                </button></Link>

                {
                    !error.name && !error.email && !error.phone && !error.password ?  
                    <button type="submit">
                            Create User
                         </button> : null
                }
                </div>

                </div>
            </form>
        </div>
    )
};