import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { setPremium } from '../../Redux/actions';
import { Link, useHistory } from 'react-router-dom';

export default function Message({message}) {
    const history=useHistory();
    let name=localStorage.getItem('name')

    const handleClick=()=>{
        history.push(`/home?=${name}`);
    }

  return (
    <>
    <div className="flex items-center justify-center h-screen w-full bg-gray-800">
        <div className="container mx-auto p-4">
          <div className="w-6/12 h-96 rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-around">
          {message !== undefined ? (
            <h1>{message}</h1>
            ) : (
              setTimeout(2)
            )}
            <div className="flex justify-center items-center h-24">
                    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Aceptar
                    </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
