import React, { useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CreatePayment } from "../../Redux/actions";

export default function SideBar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const userVerified=useSelector((state)=>state.userVerified.user);
  const dispatch=useDispatch();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className="fixed left-0 transition-all duration-750 flex justify-between"
    >
      {showSidebar && (
        <div className="flex flex-col justify-center w-50 h-screen bg-indigo-600 text-white font-semibold rounded-sm">
          <Link
            to="/home"
            className="flex-1 block p-10 hover:bg-black rounded-sm "
          >
            Home
          </Link>
          <Link
            to={`/mis-vacantes/${userVerified.id}`}
            className="flex-1 block p-10 hover:bg-black rounded-sm "
          >
            Mis Vacantes
          </Link>
          <Link
            to="/notificaciones"
            className="flex-1 block p-10 hover:bg-black rounded-sm "
          >
            Notificaciones
          </Link>
          <Link
            to="/perfil"
            className="flex-1 block p-10 hover:bg-black rounded-sm "
          >
            Perfil
          </Link>
          <Link
            to="/premium"
            className="flex-1 block p-10 hover:bg-black rounded-sm "
          >
            👑 Premium
          </Link>
          <Link
            to="/"
            className="flex-1 block p-10 hover:bg-black rounded-sm"
          >
            Cerrar sesión
          </Link>
        </div>
      )}
      <button className="bg-indigo-600 w-50 h-screen" onClick={toggleSidebar}>
        {!showSidebar ? (
          <BiArrowFromLeft className="text-2xl text-white" />
        ) : (
          <BiArrowFromRight className="text-2xl text-white" />
        )}
      </button>
    </div>
  );
}
