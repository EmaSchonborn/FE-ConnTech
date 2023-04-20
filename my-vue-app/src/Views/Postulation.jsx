
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiHome2Fill, RiMenu3Fill, RiSettings4Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { GetPostulationsByUserId, getDetail } from "../Redux/actions";

const Postulation = () => {
  const [postulations,setPostulations]=useState();
  const dispatch=useDispatch();
  const userId=useSelector((state)=>state.userVerified.user)
  useEffect(() => {
    dispatch(GetPostulationsByUserId(userId.id))
  }, [])

  const postulationsByUserId=useSelector((state)=>state.postulationsByUserId);
  if (postulationsByUserId !== null) {
    postulationsByUserId.map(e=>setPostulations(dispatch(getDetail(e.vacantId))));
  }
  

  return (

    <div className="flex items-center justify-center h-screen w-full bg-gray-800">
      {
        postulations.length === 0 ? (
          setTimeout(2)
        ) : (postulations.map(e=>
          <div className="w-6/12 h-96 rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-around">
            {" "}
            {e.vacant?.title !== undefined ? (
              <h1>
                Title:{" "}
                {e.vacant.title.charAt(0).toUpperCase() +
                  e.vacant.title.slice(1)}
              </h1>
            ) : (
              setTimeout(2)
            )}
            <div>
              <div>
                {e.vacant?.id !== undefined ? (
                  <p>ID: {e.vacant.id}</p>
                ) : (
                  setTimeout(2)
                )}
                {e.vacant?.description !== undefined ? (
                  <p>Description: {e.vacant.description}</p>
                ) : (
                  setTimeout(2)
                )}
                {e.vacant?.requeriments !== undefined ? (
                  <p>Requeriments: {e.vacant.requeriments}</p>
                ) : (
                  setTimeout(2)
                )}
              </div>
              <div>
                {e.vacant?.typeId !== undefined &&
                e.vacant.typeId === 3 ? (
                  <p>Modality: {"Hibrido"} </p>
                ) : null}
                {e.vacant?.typeId !== undefined &&
                e.vacant.typeId === 2 ? (
                  <p>Modality: {"Presencial"}</p>
                ) : null}
                {e.vacant?.typeId !== undefined &&
                e.vacant.typeId === 1 ? (
                  <p>Modality: {"Remoto"}</p>
                ) : null}
              </div>
            </div>
            <Link to="/home">
              <button className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">BACK HOME</button>
            </Link>
          </div>
        ))
        //      :  <div>
        //      <img src="https://media.tenor.com/Vl4XwKKMFo4AAAAC/blue-environment.gif" alt="Loading"/>
        //  </div>
      }
    </div>

  );
};

export default Postulation;
