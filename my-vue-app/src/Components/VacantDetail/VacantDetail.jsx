import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams} from "react-router-dom";
import { getDetail} from "../../redux/actions/";


export default function VacantDetail(){
    let dispatch = useDispatch()
    let params = useParams()
    
    useEffect(() => {
        dispatch(getDetail(params.id))
    },[params.id, dispatch])
    
    const details = useSelector((state) => state.vacantDetail)
    return(
        <div>
        {
           details.length === 0 ?  setTimeout(2) :
      
            <div> { details.vacant?.title !== undefined ?
                <h1>Title: {details.vacant.title.charAt(0).toUpperCase() + details.vacant.title.slice(1)}</h1>
            : setTimeout(2)}
                <div>
                <div>{ details.vacant?.id !== undefined ?
                <p>ID: {details.vacant.id}</p>
            : setTimeout(2)}
            { details.vacant?.description !== undefined ?
                <p>Description: {details.vacant.description}</p>
            : setTimeout(2)}
             { details.vacant?.requeriments !== undefined ?
                <p>Requeriments: {details.vacant.requeriments}</p>
            : setTimeout(2)}
                </div>
                <div>
                {details.vacant?.typeId !== undefined && details.vacant.typeId === 3 ?<p>Modality: {"Hibrido"} </p>: null}
                {details.vacant?.typeId !== undefined && details.vacant.typeId === 2 ?<p>Modality: {"Presencial"}</p>: null}
                {details.vacant?.typeId !== undefined && details.vacant.typeId === 1 ?<p>Modality: {"Remoto"}</p>: null}
                </div>
                </div>
                <Link to="/home"><button>BACK HOME</button></Link>
            </div>
        //      :  <div>
        //      <img src="https://media.tenor.com/Vl4XwKKMFo4AAAAC/blue-environment.gif" alt="Loading"/>   
        //  </div>  
        
        }
        </div>
    )};

    