import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useHistory } from "react-router-dom";
import {createVacant } from "../../Redux/actions/";
import { useEffect } from "react";

// import style from "./Register.module.css";



export default function CreateVacant(){
    let dispatch = useDispatch()
    let history = useHistory()
    const [error, setError] = useState({})
    
    function validate(input){
        let errors = {}
        
        if(!input.title){
            errors.title = "You have to select a title!."
        }
        if(!input.modality){
            errors.modality = "You have to select a modality!."
        }
        if(!input.technologies){
            errors.technologies = "You have to select technologies!."
        }
        if(!input.description){
            errors.description = "You have to select a description!."
        }
            return errors
        };
        
        // useEffect(() => {
            //     dispatch(getRoles())
            // },[dispatch])
    const modalitys = ["fulltime", "partime"]

    const [input, setInput] = useState({
    title : "",
    modality: [],
    technologies: "",
    description: "",
    })

    const [modality, setModality] = useState({
        modality: "",
       
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
      
        setModality({
            ...modality,
            [e.target.name] : e.target.value
        })
        if(e.target.name === "modality"){
            setInput({
                ...input,
                modality: [e.target.value]
            })
        }
    
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.modality.length === 0){
            return alert("You need pick a modality")
         }
         const data = {...input}
        dispatch(createVacant(data))
        setInput({
            title : "",
            modality: {},
            technologies: "",
            description: "",
        })
        alert("Register successfull!")
        history.push("/home")
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h1>Create Vacant</h1>
                    <div>
                <div>

                <div>
                    <label>Title: </label>
                    <input type="text" name="title" value={input.title} onChange={(e) => handleInput(e)}/>
                    {error.title && (
                        <p>{error.title}</p>
                        )}
                </div>

                <div>
                    <label>Technologies: </label>
                    <input type="text" name="technologies" value={input.technologies} onChange={(e) => handleInput(e)}/>
                    {error.technologies && (
                        <p>{error.technologies}</p>
                        )}
                </div>
                
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" value={input.description} onChange={(e) => handleInput(e)}/>
                    {error.description && (
                        <p>{error.description}</p>
                        )}
                </div>

                <div>
                    <label>Modalitys: </label>
                    <select defaultValue={"none"} name="modality" onChange={(e) => handleSelect(e)}>
                    <option value="none">Select modality...</option>
                        {modalitys.map((e) => {
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
                    !error.title && !error.description && !error.technologies ?  
                    <button type="submit">
                            Create Vacant
                         </button> : null
                }
                </div>

                </div>
            </form>
        </div>
    )
};