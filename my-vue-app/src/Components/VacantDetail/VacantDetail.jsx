import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/";

export default function VacantDetail() {
  let dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [params.id, dispatch]);

  const details = useSelector((state) => state.vacantDetail);
  return (
    <div className="flex items-center justify-center h-screen w-full bg-slate-50">
      {
        details.length === 0 ? (
          setTimeout(2)
        ) : (
          <div className="w-6/12 h-96 rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-around">
            {" "}
            {details.vacant?.title !== undefined ? (
              <h1>
                Title:{" "}
                {details.vacant.title.charAt(0).toUpperCase() +
                  details.vacant.title.slice(1)}
              </h1>
            ) : (
              setTimeout(2)
            )}
            <div>
              <div>
                {details.vacant?.id !== undefined ? (
                  <p>ID: {details.vacant.id}</p>
                ) : (
                  setTimeout(2)
                )}
                {details.vacant?.description !== undefined ? (
                  <p>Description: {details.vacant.description}</p>
                ) : (
                  setTimeout(2)
                )}
                {details.vacant?.requeriments !== undefined ? (
                  <p>Requeriments: {details.vacant.requeriments}</p>
                ) : (
                  setTimeout(2)
                )}
              </div>
              <div>
                {details.vacant?.typeId !== undefined &&
                details.vacant.typeId === 3 ? (
                  <p>Modality: {"Hibrido"} </p>
                ) : null}
                {details.vacant?.typeId !== undefined &&
                details.vacant.typeId === 2 ? (
                  <p>Modality: {"Presencial"}</p>
                ) : null}
                {details.vacant?.typeId !== undefined &&
                details.vacant.typeId === 1 ? (
                  <p>Modality: {"Remoto"}</p>
                ) : null}
              </div>
            </div>
            <Link to="/home">
              <button className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">BACK HOME</button>
            </Link>
          </div>
        )
        //      :  <div>
        //      <img src="https://media.tenor.com/Vl4XwKKMFo4AAAAC/blue-environment.gif" alt="Loading"/>
        //  </div>
      }
    </div>
  );
}
