import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatePayment } from "../../Redux/actions";

export default function ProductDisplay() {
  let name = localStorage.getItem("name");
  console.log(name);
  return (
    <div className="flex items-center justify-center w-full h-screen  bg-white">
      <div className="w-full h-auto flex items-center justify-center">
        <div className="w-auto h-96 rounded-md shadow-2xl bg-indigo-600 text-white p-5 flex flex-col items-center justify-center">
          <h3 className="font-semibold text-2xl">Usuario Premium</h3>
          <br/>
          <h5 className="font-semibold text-xl">U$D 10.00</h5>
          <div className="flex justify-center items-center h-24">
            <form
              action={`https://api-conntech.onrender.com/create-checkout-session/${name}`}
              method="POST"
            >
              <button
                className="bg-black text-white font-bold text-base rounded-md"
                type="submit"
              >
                Pagar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
