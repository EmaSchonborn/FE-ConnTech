import React, { useState } from "react";
import {BiArrowFromLeft} from "react-icons/bi"
import { Link } from "react-router-dom";

export default function SideBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`fixed left-0 transition-all duration-750 ${
        showSidebar ? " bg-white w-50 h-screen" : ""
      }`}
    >
      <button className="text-xl" onClick={toggleSidebar}><BiArrowFromLeft/></button>
      {showSidebar && (
        <div className="">
          <Link
            to="/home"
            className="block p-10 hover:bg-gray-200 "
          >
            Home
          </Link>
          <Link
            to="/mis-vacantes"
            className="block p-10 hover:bg-gray-200 "
          >
            Mis Vacantes
          </Link>
          <Link
            to="/notificaciones"
            className="block p-10 hover:bg-gray-200 "
          >
            Notificaciones
          </Link>
          <Link
            to="/perfil"
            className="block p-10 hover:bg-gray-200"
          >
            Perfil
          </Link>
          <Link
            to="/premium"
            className="block p-10 hover:bg-gray-200 "
          >
            👑 Premium
          </Link>
          <Link
            to="/logout"
            className="block p-10 hover:bg-gray-200 "
          >
            Cerrar sesión
          </Link>
        </div>
      )}
    </div>
  );
}
