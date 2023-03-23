import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div class="md:flex bg-slate-100">
        <>
          <h3>Nombre</h3>
          <input></input>
        </>
        <>
          <h3>Apellido</h3>
          <input></input>
        </>
        <>
          <h3>Correo Electronico</h3>
          <input></input>
        </>
        <>
          <h3>Contraseña</h3>
          <input></input>
        </>
      </div>
    </div>
  );
};

export default Login;
