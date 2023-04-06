import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createVacant } from "../../Redux/actions/";
import { useEffect } from "react";

// import style from "./Register.module.css";

export default function CreateVacant() {
  let dispatch = useDispatch();
  let history = useHistory();
  const [error, setError] = useState({});

  function validate(input) {
    let errors = {};

    if (!input.title) {
      errors.title = "You have to select a title!.";
    }
    if (!input.modality) {
      errors.modality = "You have to select a modality!.";
    }
    if (!input.technologies) {
      errors.technologies = "You have to select technologies!.";
    }
    if (!input.description) {
      errors.description = "You have to select a description!.";
    }
    return errors;
  }

  // useEffect(() => {
  //     dispatch(getRoles())
  // },[dispatch])
  const modalitys = ["fulltime", "partime"];

  const [input, setInput] = useState({
    title: "",
    modality: [],
    technologies: "",
    description: "",
  });

  const [modality, setModality] = useState({
    modality: "",
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
    setModality({
      ...modality,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "modality") {
      setInput({
        ...input,
        modality: [e.target.value],
      });
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
    if (input.modality.length === 0) {
      return alert("You need pick a modality");
    }
    const data = { ...input };
    dispatch(createVacant(data));
    setInput({
      title: "",
      modality: {},
      technologies: "",
      description: "",
    });
    alert("Register successfull!");
    history.push("/home");
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-slate-50">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-indigo-700 p-5 rounded-md text-white"
      >
        <div className="">
          <h1 className="text-center">Create Vacant</h1>
          <br></br>
          <div>
            <div>
              <div>
                <label>Title: </label>
                <input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={(e) => handleInput(e)}
                  className="bg-indigo-500 ml-16"
                />
                {error.title && <p>{error.title}</p>}
              </div>
              <br></br>
              <div>
                <label>Technologies: </label>
                <input
                  type="text"
                  name="technologies"
                  value={input.technologies}
                  onChange={(e) => handleInput(e)}
                  className="bg-indigo-500"
                />
                {error.technologies && <p>{error.technologies}</p>}
              </div>
              <br></br>
              <div>
                <label>Description: </label>
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={(e) => handleInput(e)}
                  className="bg-indigo-500 ml-3"
                />
                {error.description && <p>{error.description}</p>}
              </div>
              <br></br>
              <div>
                <label>Modalitys: </label>
                <select
                  defaultValue={"none"}
                  name="modality"
                  onChange={(e) => handleSelect(e)}
                  className="bg-indigo-500 ml-6 p-1"
                >
                  <option value="none">Select modality...</option>
                  {modalitys.map((e) => {
                    return <option value={e}>{e}</option>;
                  })}
                </select>
              </div>
              <br></br>
            </div>
          </div>
          <div className="text-center">
            <Link to="/home">
              <button className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Go Home</button>
            </Link>

            {!error.title && !error.description && !error.technologies ? (
              <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create Vacant</button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
