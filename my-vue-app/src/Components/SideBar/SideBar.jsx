import React, { useState } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`fixed left-0 transition-all duration-750 flex justify-between `}
    >
      {showSidebar && (
        <div className="flex flex-col justify-center h-full bg-white w-50 h-screen">
          <Link
            to="/home"
            className="flex-1 block p-10 hover:bg-gray-200 border border-slate-500"
          >
            Home
          </Link>
          <Link
            to="/mis-vacantes"
            className="flex-1 block p-10 hover:bg-gray-200 border border-slate-500"
          >
            Mis Vacantes
          </Link>
          <Link
            to="/notificaciones"
            className="flex-1 block p-10 hover:bg-gray-200 border border-slate-500"
          >
            Notificaciones
          </Link>
          <Link
            to="/perfil"
            className="flex-1 block p-10 hover:bg-gray-200 border border-slate-500"
          >
            Perfil
          </Link>
          <Link
            to="/premium"
            className="flex-1 block p-10 hover:bg-gray-200 border border-slate-500"
          >
            👑 Premium
          </Link>
          <Link
            to="/logout"
            className="flex-1 block p-10 hover:bg-gray-200 border border-slate-500"
          >
            Cerrar sesión
          </Link>
        </div>
      )}
      <button className="bg-slate-500 w-50 h-screen" onClick={toggleSidebar}>
        {!showSidebar ? (
          <BiArrowFromLeft className="text-2xl" />
        ) : (
          <BiArrowFromRight className="text-2xl" />
        )}
      </button>
    </div>
  );
}
