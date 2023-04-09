import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createUser } from "../../Redux/actions/";
import { useEffect } from "react";

import style from "./Register.module.css";

export default function CreateUser() {
  let dispatch = useDispatch();
  let history = useHistory();
  // const users = useSelector((state) => state.filteredUsers)
  const [error, setError] = useState({});
/*  comentario de prueba */
  function validate(input) {
    let errors = {};

    if (!input.name) {
      errors.name = "You have to select a name!.";
    }
    if (input.name.search("[0-9]") !== -1) {
      errors.name = "The name must not contain numbers.";
    }
    if (input.name.search("[^A-Za-z0-9]") !== -1) {
      errors.name = "The name must not contain symbols or spaces.";
    }
    if (!input.password) {
      errors.password = "You have to select a password!.";
    }
    if (!input.email) {
      errors.email = "You have to select a email!.";
    }
    if (!input.phone) {
      errors.phone = "You have to select a phone number!.";
    }
    // if(users.find(p => p.name.toLowerCase() === input.name.toLowerCase())){
    //     errors.name = "There is already a user with that name, try to create it with another"
    // }
    return errors;
  }

  // useEffect(() => {
  //     dispatch(getrole())
  // },[dispatch])
  const role1 = ["user", "company", "hibrid"];

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: { name: "" },
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    if (e.target.name === "role1") {
      input.role.name = e.target.value;
    }

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.role.length === 0) {
      return alert("You need pick a role");
    }
    console.log(input);
    const data = { ...input };
    dispatch(createUser(data));
    setInput({
      name: "",
      email: "",
      phone: "",
      password: "",
      role: {},
    });
    alert("Register successfull!");
    history.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-50 w-full h-screen text-white">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-indigo-700 p-5 rounded-md text-white"
      >
        <div>
          <h1 className="text-white text-center">Create User</h1>
          <div className={style.divtextimg}>
            <div className={style.divtext}>
              <div className={style.diverror}>
                <label className={style.label}>Name: </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleInput(e)}
                  className="bg-indigo-500 ml-10"
                />
                {error.name && <p className={style.error}>{error.name}</p>}
              </div>
              <br></br>
              <div className={style.diverror}>
                <label className={style.label}>Email: </label>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={(e) => handleInput(e)}
                  className="bg-indigo-500 ml-11"
                />
                {error.email && <p className={style.error}>{error.email}</p>}
              </div>
              <br></br>
              <div className={style.diverror}>
                <label className={style.label}>Phone: </label>
                <input
                  type="number"
                  name="phone"
                  value={input.phone}
                  onChange={(e) => handleInput(e)}
                  className="bg-indigo-500 ml-9"
                />
                {error.phone && <p className={style.error}>{error.phone}</p>}
              </div>
              <br></br>
              <div className={style.diverror}>
                <label className={style.label}>Password: </label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) => handleInput(e)}
                  className="bg-indigo-500 ml-1"
                />
                {error.password && (
                  <p className={style.error}>{error.password}</p>
                )}
              </div>
              <br></br>
              <div>
                <label className={style.label}>role: </label>
                <select
                  defaultValue={"none"}
                  name="role1"
                  onChange={(e) => handleSelect(e)}
                  className="bg-indigo-500 ml-9 p-1"
                >
                  <option value="none">Select role...</option>
                  {role1.map((e) => {
                    return <option value={e}>{e}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className={style.divbutton}>
            <Link to="/home">
              <button className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Go Home
              </button>
            </Link>

            {!error.name && !error.email && !error.phone && !error.password ? (
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Create User
              </button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
