import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Sign In", href: "#" },
  { name: "Login", href: "#" },
];

export const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover h-screen">
      <header className="absolute inset-x-0 top-0 z-50 ">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-14 w-auto"
                src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/null/external-usb-photography-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className=" text-lg flex items-center hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to='/register'>
            <button className="font-semibold leading-6 text-white mr-10">
              Crear cuenta <span aria-hidden="true">&rarr;</span>
            </button>
            </Link>

            <Link to='/login'>
            <button
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/null/external-usb-photography-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* HERO */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl  py-32 sm:py-48 lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative  py-1 px-3 text-2xl font-bold leading-6 text-slate-900 hover:ring-gray-900/20">
              Bienvenidos a{" "}
            </div>
          </div>
          <div className="text-start ">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Conectados Tech
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100 font-bold">
              ¿Estás buscando vacantes en el mundo tech pero te es difícil
              conseguir una startup que se adapte a tus necesidades?. ¿O quizás
              estás buscando al profesional que mejor se alinea a tu startup?
            </p>
            <p className="mt-6 text-xl leading-8 text-indigo-100  font-bold">
              En cualquiera de los caso estas en el lugar indicado...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
