import React, { useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const userVerified=useSelector((state)=>state.userVerified.user);
  console.log(userVerified.id);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`fixed left-0 transition-all duration-750 flex justify-between `}
    >
      {showSidebar && (
        <div className="flex flex-col justify-center h-full w-50 h-screen bg-indigo-700 text-white font-semibold rounded-sm">
          <Link
            to="/home"
            className="flex-1 block p-10 hover:bg-indigo-500 rounded-sm "
          >
            Home
          </Link>
          <Link
            to={`/mis-vacantes/${userVerified.id}`}
            className="flex-1 block p-10 hover:bg-indigo-500 rounded-sm "
          >
            Mis Vacantes
          </Link>
          <Link
            to="/notificaciones"
            className="flex-1 block p-10 hover:bg-indigo-500 rounded-sm "
          >
            Notificaciones
          </Link>
          <Link
            to="/perfil"
            className="flex-1 block p-10 hover:bg-indigo-500 rounded-sm "
          >
            Perfil
          </Link>
          <Link
            to="/premium"
            className="flex-1 block p-10 hover:bg-indigo-500 rounded-sm "
          >
            👑 Premium
          </Link>
          <Link
            to="/logout"
            className="flex-1 block p-10 hover:bg-indigo-500 rounded-sm"
          >
            Cerrar sesión
          </Link>
        </div>
      )}
      <button className="bg-indigo-700 w-50 h-screen" onClick={toggleSidebar}>
        {!showSidebar ? (
          <BiArrowFromLeft className="text-2xl text-white" />
        ) : (
          <BiArrowFromRight className="text-2xl text-white" />
        )}
      </button>
    </div>
  );
}
