import React from "react";
import { Link } from "react-router-dom";

const Preguntas = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 font-D-DIN">
      <div className="absolute top-0 left-10 top-10 h-16 w-16">
        <Link
          className="rounded-md bg-black px-3.5 py-2.5 text-xl font-size: 1.25rem; font-semibold text-white shadow-sm hover:bg-slate-50 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to="/"
        >
          Home
        </Link>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
        <h1>Preguntas Frecuentes</h1>
        <figure className="mt-10">
          <blockquote className="text-justify text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <li>
              ¿Cómo puedo enviar mi solicitud para un trabajo en particular?
            </li>
            <p>
              Generalmente, puedes enviar tu solicitud a través del sitio web de
              la empresa o utilizando la información de contacto proporcionada
              en la descripción del trabajo. Si tienes alguna duda, comunícate
              con el departamento de recursos humanos de la empresa.
            </p>
            <br />
            <li>¿Qué documentos necesito para solicitar un trabajo?</li>
            <p>
              Los documentos que necesites pueden variar según la empresa y el
              trabajo. Por lo general, necesitarás una copia actualizada de tu
              currículum y una carta de presentación. Si se requieren otros
              documentos, la empresa los especificará en la descripción del
              trabajo.
            </p>
            <br />
            <li>¿Cómo puedo saber si mi solicitud fue recibida?</li>
            <p>
              Si la empresa tiene un sistema de seguimiento de candidatos,
              deberías recibir una confirmación de que se recibió tu solicitud.
              De lo contrario, puedes contactar al departamento de recursos
              humanos de la empresa para confirmar que recibieron tu solicitud.
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

export default Preguntas;
