import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams} from "react-router-dom";
import { getDetail} from "../../redux/actions";


export default function VacantDetail(){
    let dispatch = useDispatch()
    let params = useParams()
    
    useEffect(() => {
        dispatch(getDetail(params.id))
    },[params.id, dispatch])
    
    const details = useSelector((state) => state.vacantDetail)
    console.log(details)
    return(
        <div>
        {
            details.length > 0 ?

            <div>
                <h1>{details[0].title.charAt(0).toUpperCase() + details[0].title.slice(1)}</h1>
                <div>
                <div>
                <p>ID: {details[0].id}</p>
                <p>Description: {details[0].requeriments}</p>
                </div>
                <div>
                <p>Modality: {details[0].type.map((e) => {
                    return e + " "
                })}</p>
                </div>
                </div>
                <Link to="/home"><button>BACK HOME</button></Link>
            </div>
        :
        <div>
            <img src="https://media.tenor.com/Vl4XwKKMFo4AAAAC/blue-environment.gif" alt="Loading"/>   
        </div>
        }
        </div>
    )};