import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createUser, sendEmail } from "../../Redux/actions/";
import style from "./Register.module.css";

export default function CreateUser() {
  let dispatch = useDispatch();
  let history = useHistory();
  const [error, setError] = useState({});
  function validate(input) {
    let errors = {};

    if (!input.name) {
      errors.name =  "You have to select a name!.";
    }
    if (input.name.search("[0-9]") !== -1) {
      errors.name = "The name must not contain numbers.";
    }
    if (!/^[A-Za-z\s]+$/.test(input.name)) {
      errors.name = "The name must only contain letters and spaces.";
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
    return errors;
  }

  const roles = ["normal", "company", "hibrid"];
  const description = [
    "normal user type",
    "company user type",
    "hibrid user type",
  ];

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: { name: "", description: "" },
  });

  const [roleId, setRoleId] = useState({
    name: "",
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
    setRoleId({
      ...roleId,
      name: e.target.value,
    });
    if (e.target.value === "normal") {
      setInput({
        ...input,
        role: { name: e.target.value, description: description[0] },
      });
    }
    if (e.target.value === "company") {
      setInput({
        ...input,
        role: { name: e.target.value, description: description[1] },
      });
    }
    if (e.target.value === "hibrid") {
      setInput({
        ...input,
        role: { name: e.target.value, description: description[2] },
      });
    }

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  // console.log(roleId);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.role.name == "") {
      return alert("You need pick a role");
    }
    const data = { ...input };
    const dataEmail = { email: data.email };
    dispatch(createUser(data));
    dispatch(sendEmail(dataEmail));

    setInput({
      name: "",
      email: "",
      phone: "",
      password: "",
      role: { name: "" },
    });

    if (data.name && data.email && data.phone && data.password && data.role) {
      alert("Register successfull!");
      history.push("/login");
    } else {
      alert("You most to complete the info");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-50 w-full h-screen text-white">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-indigo-600 p-5 rounded-md text-white"
      >
        <div>
          <h1 className="font-bold text-2xl text-white text-center">
            Crear cuenta
          </h1>
          <div className={style.divtextimg}>
            <div className={style.divtext}>
              <div className={style.diverror}>
                <label className={style.label}>Name: </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleInput(e)}
                  className="bg-white text-black ml-10 rounded-md"
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
                  className="bg-white text-black ml-11 rounded-md"
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
                  className="bg-white text-black ml-9 rounded-md"
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
                  className="bg-white text-black ml-1 rounded-md"
                />
                {error.password && (
                  <p className={style.error}>{error.password}</p>
                )}
              </div>
              <br></br>
              <div>
                <label className={style.label}>Roles: </label>
                <select
                  defaultValue={"none"}
                  type="text"
                  name="roleId"
                  onChange={(e) => handleSelect(e)}
                  className="bg-indigo-500 ml-9 p-1"
                >
                  <option value="none">Select role...</option>
                  {roles.map((e) => {
                    return <option value={e}>{e}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className={style.divbutton}>
            <Link to="/login">
              <button className="flex-none rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Ingresar
              </button>
            </Link>

            {!error.name && !error.email && !error.phone && !error.password ? (
              <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Crear Usuario
              </button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
