import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CreatePayment } from '../../Redux/actions';

export default function ProductDisplay() {
    let name = localStorage.getItem('name');
    console.log(name);
  return (
    <>
    <div className="flex items-center justify-center h-screen w-full bg-gray-800">
        <div className="container mx-auto p-4">
          <div className="w-6/12 h-96 rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-around">
            {/* <img
              src="https://www.pngmart.com/es/image/203128"
              alt="Usuario Premium"
            /> */}
            <h3>Usuario Premium</h3>
            <h5>U$D 1</h5>
            <div className="flex justify-center items-center h-24">
              <form action={`https://api-conntech.onrender.com/create-checkout-session/${name}`} method="POST">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                  Pagar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
