import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImage from "./imagen/imgPerfil.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RiHome2Fill } from "react-icons/ri";

function validate(input) {
  let errors = [];

  if (!input.description) {
    errors.description = "Agrega una descripción";
  }

  if (!input.educacion) {
    errors.educacion = "Agrega tu descripción";
  }
}

const ProfileUser = () => {
  const [educacion, setEducacion] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "educacion") {
      setEducacion(value);
    } else {
      setExperiencia(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_EDUCACION_EXPERIENCIA",
      payload: { educacion, experiencia },
    });
  };

  const userVerified = useSelector((state) => state.userVerified);

  return (
    <div className="min-h-screen bg-gray-100">
      {console.log(userVerified)}
      <nav className="bg-white shadow">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <Link to="/home">
                  <RiHome2Fill className="text-2xl mr-2" />
                  Home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center mt-4">
        <div className="w-40 h-50">
          <div className="w-full mb-8">
            <img
              className="object-cover w-50 h-full rounded-lg shadow-lg max-w-full"
              src={userImage}
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-experiencia"
          >
            Informacion:
          </label>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Experiencia
              </h2>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 mt-2">
            <div className="md:w-full px-3">
              <textarea
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-experiencia"
                type="text"
                name="description"
                placeholder="Experiencia laboral"
                rows="5"
              />
            </div>
          </div>

          <div className="flex justify-end h-15 p-4">
            <div className="flex">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                <Link to="/home">Home</Link>
              </button>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Educacion
              </h2>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 mt-2">
            <div className="md:w-full px-3">
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-experiencia"
                type="text"
              />
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Informacion de Contacto
              </h2>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 mt-2">
            <div className="md:w-full px-3">
              <ul className="p-7 rounded-md list-disc bg-red-100">
                <li className="mb-2 text-slate-950">
                  {userVerified.user.name}
                </li>
                <li className="mb-2 text-slate-950">
                  {userVerified.user.phone}
                </li>
                <li className="mb-2 text-slate-950">
                  {userVerified.user.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
