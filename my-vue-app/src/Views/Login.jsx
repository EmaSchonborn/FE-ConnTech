import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { verifyUser } from "../Redux/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyUser(email, password));
    setEmail("");
    setPassword("");
    history.push("/home");
  };

  return (
    <section className="flex items-center justify-center w-full h-screen bg-slate-100">
      <div className="flex flex-col items-center justify-center w-96 h-96 rounded-md shadow-2xl bg-indigo-700 text-white">
        <div>
          <Link to="/">BACK</Link>
        </div>
        <br></br>
        <div className="md:flex ">
          <form onSubmit={handleSubmit} className="flex flex-col text-white ">
            <label>
              Correo Electrónico:
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="bg-indigo-500 ml-1 rounded-sm"
              />
            </label>
            <br></br>
            <label>
              Contraseña:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="bg-indigo-500 ml-14 rounded-sm"
              />
            </label>
            <br></br>
            <Link to="/home">
              <button onClick={handleSubmit} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Iniciar sesión</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
